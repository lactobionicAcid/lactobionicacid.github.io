const CryptoJS = require("crypto-js");

hexo.extend.tag.register('encrypt', (args, content) => {
  const password = args[0];

  // 添加验证前缀，确保解密结果正确
  const prefix = "HEXO_ENCRYPT_PREFIX|";
  const suffix = "|HEXO_ENCRYPT_SUFFIX";
  const contentWithPrefix = prefix + content + suffix;
  const encrypted = CryptoJS.AES.encrypt(contentWithPrefix, password).toString();
  
  return `
  <div class="encrypted-block" 
       data-encrypted="${encodeURIComponent(encrypted)}">
    <div class="storage-indicator"></div>
    <div class="encrypt-input-group">
        <p style="width: 100%; margin-bottom: 0;"><i class="fa-solid fa-lock"></i>&ensp;以下内容受密码保护。</p>
        <input type="password" placeholder="输入密码……" class="encrypt-input">
        <button type="button" class="decrypt-btn">🔑 查看内容</button>
    </div>
    <div class="decrypt-result">
      <div class="decrypted-content"></div>
    </div>
  </div>
  `;
}, { ends: true });