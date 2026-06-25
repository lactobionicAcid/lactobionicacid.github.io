function escapeHtml(text) {
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalizeArg(arg) {
  if (arg == null) return '';
  let text = String(arg).trim();
  if ((text.startsWith('"') && text.endsWith('"')) || (text.startsWith("'") && text.endsWith("'"))) {
    text = text.slice(1, -1).trim();
  }
  return text;
}

function normalizeId(id) {
  const text = String(id).trim();
  if (!text) return '';
  return encodeURIComponent(text)
    .replace(/%/g, '-')
    .replace(/[^A-Za-z0-9_-]/g, '-')
    .replace(/-+/g, '-');
}

hexo.extend.tag.register('ref', function(args) {
  const rawId = normalizeArg(args[0]);
  const rawContent = normalizeArg(args[1]);
  if (!rawId) return '';

  const id = normalizeId(rawId);
  const label = escapeHtml(rawId);
  const content = escapeHtml(rawContent);

  return `
  <sup class="footnote-ref-wrapper">
    <a class="footnote-ref" id="footnote-ref-${id}" href="#footnote-item-${id}" data-footnote-id="${id}" data-footnote-content="${content}">
      [${label}]
    </a>
  </sup>`;
});

hexo.extend.tag.register('references', function() {
  return '<div class="footnotes-placeholder"></div>';
});
