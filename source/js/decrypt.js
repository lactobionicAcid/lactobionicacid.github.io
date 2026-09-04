document.addEventListener('DOMContentLoaded', function() {
  // 移除已过期的密码
  const keys = Object.keys(localStorage);
  keys.forEach(key => {
    if (key.startsWith('hexo-encrypt')) {
      const data = localStorage.getItem(key);
      const { hash, expire_at } = JSON.parse(data);
      if (!expire_at || expire_at < Date.now()) { localStorage.removeItem(key); }
    }
  });

  // 注册事件/解密按钮
  document.body.addEventListener('click', function(e) {
    const btn = e.target.closest('.decrypt-btn');
    if (btn) {
      const block = btn.closest('.encrypted-block');
      if (block.classList.contains('decrypted')) return;
      if (block) handleDecrypt(block);
    }
  });

  // 注册事件/回车解密
  document.body.addEventListener('keydown', function(e) {
    if (e.target && e.target.classList && e.target.classList.contains('encrypt-input') && e.key === 'Enter') {
      e.preventDefault();
      const block = e.target.closest('.encrypted-block');
      if (block.classList.contains('decrypted')) return;
      if (block) handleDecrypt(block);
    }
  });

  // 注册事件/恢复加密
  document.body.addEventListener('click', function(e) {
    const clearBtn = e.target.closest('.clear');
    if (clearBtn) {
      const block = clearBtn.closest('.encrypted-block');
      if (!block) return;
      block.querySelector('.encrypt-input').removeAttribute(`disabled`)
      block.querySelector('.decrypt-btn').removeAttribute(`disabled`)
      try {
        const encrypted_hash = CryptoJS.MD5(block.dataset.encrypted).toString();
        localStorage.removeItem(`hexo-encrypt-${encrypted_hash}`);
      } catch (err) {
        console.error('Failed to clear stored password', err);
      }

      // 清理已解密内容
      block.classList.remove('decrypted');
      block.querySelector('.decrypted-content').innerHTML = '';
      block.querySelector('.encrypt-input').value = '';

      // 更改左上角锁的图标
      const lockStatus = block.querySelector('.lock-status');
      lockStatus.classList.add('fa-lock');
      lockStatus.classList.remove('fa-unlock');

      showHint(block, '已恢复加密状态。', 'fa-solid fa-circle-info');
    }
  });
});

// 自动解密
if (window.location.pathname.search(/\/(\d+){6}\/.{4}/) == 0) {
  const encryptedBlocks = document.querySelectorAll('.encrypted-block');
  
  encryptedBlocks.forEach(block => {
    const encrypted_hash = CryptoJS.MD5(block.dataset.encrypted).toString();
    const storageKey = `hexo-encrypt-${encrypted_hash}`;
    const savedData = localStorage.getItem(storageKey);
    
    if (savedData) {
      try {
        const { hash, expire_at } = JSON.parse(savedData);
        setTimeout(() => handleDecrypt(block, true, hash), 300);
      } catch (err) {
        console.error('Failed to parse saved data', err);
        localStorage.removeItem(storageKey);
      }
    }
  });
}

// 在指定位置显示提示
function showHint(block, message, icon, type = 'info') {
  // ...之前先清除已有的提示
  const hints = block.querySelectorAll('.auto-decrypt-hint');
  hints.forEach(hint => hint.remove());

  const inputGroup = block && block.querySelector && block.querySelector('.encrypt-input-group');
  if (!inputGroup) return;

  const wrapper = document.createElement('div');
  wrapper.className = 'auto-decrypt-hint';
  wrapper.style = `width: 100%;`
  wrapper.innerHTML = `<div class="callout callout--simple ${type} mb-4 rounded-small shadow-redefine-flat bg-(--callout-bg-color) p-3 pl-1 relative flex flex-row gap-2 items-center" style="margin-bottom:0;"><div role="none" class="rounded-full self-stretch w-0.5 bg-(--callout-primary-color) shrink-0 opacity-60"></div><i class="callout__icon ${icon} leading-none text-(--callout-primary-color) text-sm shrink-0"></i><div class="callout__content markdown-body flex-1 min-w-0"><p>${message}</p></div></div>`;

  inputGroup.appendChild(wrapper);
}

// 解密部分
function handleDecrypt(block, isAutoDecrypt = false, hash = null) {
  if (!block) return;
  
  const encrypted = decodeURIComponent(block.dataset.encrypted || '');
  const input = block.querySelector('.encrypt-input') && block.querySelector('.encrypt-input').value || '';
  const resultArea = block.querySelector('.decrypted-content');
  const decryptResult = block.querySelector('.decrypt-result');
  
  if (!input && !isAutoDecrypt) {
    showHint(block, '请输入密码！', 'fa-solid fa-triangle-exclamation', 'warning');
    return;
  }
  
  try {
    // 主要解密部分
    const iv_base64_length = parseInt(encrypted.slice(0, 2), 16);
    const iv = CryptoJS.enc.Base64.parse(encrypted.slice(2, 2 + iv_base64_length));

    const pwdsalt_base64_length = parseInt(encrypted.slice(2 + iv_base64_length, 4 + iv_base64_length), 16);
    if (!isAutoDecrypt) {
      const pwdsalt = CryptoJS.enc.Base64.parse(encrypted.slice(4+iv_base64_length, 4+iv_base64_length+pwdsalt_base64_length));
      hash = CryptoJS.PBKDF2(input, pwdsalt, {
        keySize: 8,
        iterations: 7314,
        hasher: CryptoJS.algo.SHA256
      });
    } else {
      hash = CryptoJS.enc.Hex.parse(hash);
    }

    const actualEncrypted = encrypted.slice(4+iv_base64_length+pwdsalt_base64_length);
    
    const text = CryptoJS.AES.decrypt(actualEncrypted, hash, {
      iv: iv, 
      mode: CryptoJS.mode.CBC, 
      padding: CryptoJS.pad.Pkcs7
    }).toString(CryptoJS.enc.Utf8);
    
    // 标识符验证
    const prefix = "HEXO_ENCRYPT_PREFIX|";
    const suffix = "|HEXO_ENCRYPT_SUFFIX";
    
    if (!text || text.indexOf(prefix) === -1 || text.indexOf(suffix) === -1) {
      throw new Error('解密失败，数据不正确');
    }
    
    // 提取实际内容
    const startIndex = text.indexOf(prefix) + prefix.length;
    const endIndex = text.indexOf(suffix);
    const actualContent = text.substring(startIndex, endIndex);
    
    // 渲染 Markdown
    resultArea.innerHTML = DOMPurify.sanitize(marked.parse(actualContent));
    block.classList.add('decrypted');

  } catch (err) {
    if (!isAutoDecrypt) {
      showHint(block, '密码错误！请重试。', 'fa-solid fa-circle-xmark', 'danger');
    } else {
      console.warn('Auto decryption failed', err);
    }
    return;
  };

  // 存储密码到本地（仅在手动输入时）
  if (!isAutoDecrypt) {
    try {
      const encrypted_hash = CryptoJS.MD5(block.dataset.encrypted).toString();
      const storageKey = `hexo-encrypt-${encrypted_hash}`;
      const expireTime = Date.now() + 7 * 86400000; // 7 天内保持解密状态
      localStorage.setItem(storageKey, JSON.stringify({ hash: hash.toString(), expire_at: expireTime }));
    } catch (err) {
      console.error('Failed to save password to localStorage', err);
    }
  }

  // 解密完成后，清空输入框并锁定
  block.querySelector('.encrypt-input').value = '';
  block.querySelector('.encrypt-input').setAttribute(`disabled`, ``)
  block.querySelector('.decrypt-btn').setAttribute(`disabled`, ``)

  // 更改左上角锁的图标
  const lockStatus = block.querySelector('.lock-status');
  lockStatus.classList.remove('fa-lock');
  lockStatus.classList.add('fa-unlock');

  // 添加解密提示
  if (isAutoDecrypt) {
    showHint(block, '以下内容将在 7 天内保持解密状态。<a class="clear" href="javascript:void(0);">恢复加密状态</a>', 'fa-solid fa-circle-info');
  } else {
    showHint(block, '密码正确，以下内容将在 7 天内保持解密状态。<a class="clear" href="javascript:void(0);">恢复加密状态</a>', 'fa-solid fa-circle-check', 'success');
  }
}