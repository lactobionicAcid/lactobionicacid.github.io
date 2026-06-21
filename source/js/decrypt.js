document.addEventListener('DOMContentLoaded', function() {
    // 自动解密：检查本地存储的密码
    const encryptedBlocks = document.querySelectorAll('.encrypted-block');
    
    encryptedBlocks.forEach(block => {
      const storageKey = `hexo-encrypt-${block.dataset.encrypted}`;
      const savedData = localStorage.getItem(storageKey);
      
      if (savedData) {
        try {
          const { password, expire } = JSON.parse(savedData);
          
          // 检查是否过期
          if (expire > Date.now()) {
            setTimeout(() => handleDecrypt(block, true, password), 300);
          } else {
            // 过期则清除
            localStorage.removeItem(storageKey);
          }
        } catch (e) {
          console.error('Failed to parse saved data', e);
          localStorage.removeItem(storageKey);
        }
      }
    });
  
    // 事件委托处理解密按钮点击
    document.body.addEventListener('click', function(e) {
      const btn = e.target.closest('.decrypt-btn');
      if (btn) {
        const block = btn.closest('.encrypted-block');
        if (block) handleDecrypt(block);
      }
    });

    // 添加回车键支持（使用 keydown 并阻止默认行为，避免表单提交导致刷新）
    document.body.addEventListener('keydown', function(e) {
      if (e.target && e.target.classList && e.target.classList.contains('encrypt-input') && e.key === 'Enter') {
        e.preventDefault();
        const block = e.target.closest('.encrypted-block');
        if (block) handleDecrypt(block);
      }
    });

    // 全局处理恢复加密（clear）点击 — 只绑定一次，避免重复绑定
    document.body.addEventListener('click', function(e) {
      const clearBtn = e.target.closest('.clear');
      if (clearBtn) {
        const block = clearBtn.closest('.encrypted-block');
        if (!block) return;
        try {
          localStorage.removeItem(`hexo-encrypt-${block.dataset.encrypted}`);
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

        clearDecryptHints(block);
        showHint(block, '已恢复加密状态。', 'fa-solid fa-circle-info');
      }
    });

    // 在指定位置显示提示
    function showHint(block, message, icon, type = 'info') {
      const inputGroup = block && block.querySelector && block.querySelector('.encrypt-input-group');
      if (!inputGroup) return;

      const wrapper = document.createElement('div');
      wrapper.className = 'auto-decrypt-hint';
      wrapper.style = `width: 100%;`
      wrapper.innerHTML = `
        <div class="callout callout--simple ${type} mb-4 rounded-small shadow-redefine-flat bg-(--callout-bg-color) p-3 pl-1 relative flex flex-row gap-2 items-center" style="margin-bottom:0;">
          <div role="none" class="rounded-full self-stretch w-0.5 bg-(--callout-primary-color) shrink-0 opacity-60"></div>
          <i class="callout__icon ${icon} leading-none text-(--callout-primary-color) text-sm shrink-0"></i>
          <div class="callout__content markdown-body flex-1 min-w-0"><p>${message}</p></div>
        </div>`;

      inputGroup.appendChild(wrapper);
    }

    // 清除提示
    function clearDecryptHints(block) {
      const hints = block.querySelectorAll('.auto-decrypt-hint');
      hints.forEach(hint => hint.remove());
    }

    // 解密部分
    function handleDecrypt(block, isAutoDecrypt = false, password = null) {
      if (!block) return;
      
      const encrypted = decodeURIComponent(block.dataset.encrypted || '');
      const input = isAutoDecrypt ? password : (block.querySelector('.encrypt-input') && block.querySelector('.encrypt-input').value) || '';
      const resultArea = block.querySelector('.decrypted-content');
      const decryptResult = block.querySelector('.decrypt-result');
      
      // 确保结果区域可见
      if (decryptResult) decryptResult.style.display = 'block';
      // 清除所有提示信息
      clearDecryptHints(block);
      
      if (!input && !isAutoDecrypt) {
        showHint(block, '请输入密码！', 'fa-solid fa-triangle-exclamation', 'warning');
        return;
      }
      
      try {
        const bytes = CryptoJS.AES.decrypt(encrypted, input);
        const text = bytes.toString(CryptoJS.enc.Utf8);
        
        // 使用统一标识符验证
        const prefix = "HEXO_ENCRYPT_PREFIX|";
        const suffix = "|HEXO_ENCRYPT_SUFFIX";
        
        if (!text || text.indexOf(prefix) === -1 || text.indexOf(suffix) === -1) {
          throw new Error('解密失败');
        }
        
        // 提取实际内容
        const startIndex = text.indexOf(prefix) + prefix.length;
        const endIndex = text.indexOf(suffix);
        const actualContent = text.substring(startIndex, endIndex);
        
        // 使用 marked.parse() 渲染 Markdown
        resultArea.innerHTML = DOMPurify.sanitize(marked.parse(actualContent));
        block.classList.add('decrypted');
        
        // 存储密码到本地（仅在手动输入时）
        if (!isAutoDecrypt) {
          try {
            const storageKey = `hexo-encrypt-${block.dataset.encrypted}`;
            const expireTime = Date.now() + 3 * 86400000;
            localStorage.setItem(storageKey, JSON.stringify({ password: input, expire: expireTime }));
          } catch (err) {
            console.error('Failed to save password to localStorage', err);
          }
        }

        // 解密完成后清空输入框
        block.querySelector('.encrypt-input').value = '';

        // 更改左上角锁的图标
        const lockStatus = block.querySelector('.lock-status');
        lockStatus.classList.remove('fa-lock');
        lockStatus.classList.add('fa-unlock');

        // 添加自动解密提示
        if (isAutoDecrypt) {
          showHint(block, '以下内容将在 3 天内保持解密状态。<a class="clear" href="javascript:void(0);">恢复加密状态</a>', 'fa-solid fa-circle-info');
        } else {
          showHint(block, '密码正确，以下内容将在 3 天内保持解密状态。<a class="clear" href="javascript:void(0);">恢复加密状态</a>', 'fa-solid fa-circle-check', 'success');
        }
      } catch (err) {
        showHint(block, '密码错误！请重试。', 'fa-solid fa-circle-xmark', 'danger');
      }
    }
});