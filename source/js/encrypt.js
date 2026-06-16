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
            // 自动解密
            // block.querySelector('.encrypt-input').value = password;
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
  
    // 事件委托处理解密
    document.body.addEventListener('click', function(e) {
      if (e.target.classList.contains('decrypt-btn')) {
        handleDecrypt(e.target.closest('.encrypted-block'));
      }
    });
    
    // 添加回车键支持
    document.body.addEventListener('keypress', function(e) {
      if (e.target.classList.contains('encrypt-input') && e.key === 'Enter') {
        handleDecrypt(e.target.closest('.encrypted-block'));
      }
    });

    // 在指定位置显示提示
    /*function showHint(block, message, type = 'info') {
      const hint = document.createElement('div');
      hint.className = `auto-decrypt-hint ${type}-hint`;
      hint.innerHTML = message;
      const inputGroup = block.querySelector('.encrypt-input-group');
      inputGroup.appendChild(hint);
    }*/

    function showHint(block, message, icon, type = 'info') {
      const cover = document.createElement('span');
      cover.className = `auto-decrypt-hint`
      cover.style = `width: 100%; `;

      const hint = document.createElement('div');
      hint.className = `callout callout--simple ${type} mb-4 rounded-small shadow-redefine-flat bg-(--callout-bg-color) p-3 pl-1 relative flex flex-row gap-2 items-center`;
      hint.style = `margin-bottom: 0;`

      const content1 = document.createElement('div');
      content1.role = `none`;
      content1.className = `rounded-full self-stretch w-0.5 bg-(--callout-primary-color) shrink-0 opacity-60`;
      hint.appendChild(content1);
      const content2 = document.createElement('i');
      content2.className = `callout__icon ${icon} leading-none text-(--callout-primary-color) text-sm shrink-0`;
      hint.appendChild(content2);
      const content3 = document.createElement('div');
      content3.className = `callout__content markdown-body flex-1 min-w-0`
      content3.innerHTML = `<p>${message}</p>`;
      hint.appendChild(content3);
      cover.appendChild(hint)
      const inputGroup = block.querySelector('.encrypt-input-group');
      inputGroup.appendChild(cover);
    }

    // 清除提示
    function clearDecryptHints(block) {
      const hints = block.querySelectorAll('.auto-decrypt-hint');
      hints.forEach(hint => hint.remove());
    }

    function handleDecrypt(block, isAutoDecrypt = false, password = null) {
      if (!block) return;
      
      const encrypted = decodeURIComponent(block.dataset.encrypted);
      const input = isAutoDecrypt? password : block.querySelector('.encrypt-input').value;
      const resultArea = block.querySelector('.decrypted-content');
      const decryptResult = block.querySelector('.decrypt-result');
      
      // 确保结果区域可见
      decryptResult.style.display = 'block';
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
        
        // 存储密码到本地
        if (!isAutoDecrypt) {
          const storageKey = `hexo-encrypt-${block.dataset.encrypted}`;
          const expireTime = Date.now() + 3 * 86400000;

          localStorage.setItem(storageKey, JSON.stringify({
            password: input,
            expire: expireTime
          }));
        }

        // 添加自动解密提示
        if (isAutoDecrypt) {
          showHint(block, '以下内容将在 3 天内保持解密状态。', 'fa-solid fa-unlock');
        } else {
          showHint(block, '密码正确，以下内容将在 3 天内保持解密状态。', 'fa-solid fa-unlock', 'success');
        }

      } catch (error) {
        showHint(block, '密码错误！请重试。', 'fa-solid fa-circle-xmark', 'danger');
      }
    }
});