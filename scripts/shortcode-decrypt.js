hexo.extend.tag.register('decrypt', (args, content) => {

  return `
  <div class="encrypted-block" data-encrypted="${content}">
    <div class="storage-indicator"></div>
    <div class="encrypt-input-group">
      <p style="width: 100%; margin-bottom: 0;"><i class="lock-status fa-solid fa-lock"></i>&ensp;以下内容受密码保护。</p>
      <form style="display: contents;"><input type="password" placeholder="输入密码……" class="encrypt-input" autocomplete="current-password"></form>
      <button type="button" class="decrypt-btn"><i class="fa-solid fa-key"></i>&ensp;查看内容</button>
    </div>
    <div class="decrypt-result">
      <div class="decrypted-content"></div>
    </div>
  </div>
  `;
}, { ends: true });