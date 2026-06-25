(function() {
  function escapeHtml(text) {
    return String(text)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  function buildFootnoteLink(text) {
    const a = document.createElement('a');
    a.rel = 'noopener noreferrer';
    a.target = '_blank';
    a.textContent = text;
    a.href = text;
    return a;
  }

  function isLink(text) {
    return /^(https?:\/\/|mailto:|ftp:\/\/)/i.test(text.trim());
  }

  function sanitizeId(id) {
    return String(id).trim().replace(/[^A-Za-z0-9_-]/g, '-');
  }

  function findReferencePlaceholder() {
    return document.querySelector('.footnotes-placeholder');
  }

  function collectFootnotes() {
    const nodes = Array.from(document.querySelectorAll('.footnote-ref'));
    const footnotes = [];
    const seen = new Set();

    nodes.forEach(function(node) {
      const rawId = node.dataset.footnoteId || node.textContent.replace(/^[\[\]]+|[\[\]]+$/g, '').trim();
      const rawContent = node.dataset.footnoteContent || '';
      const id = sanitizeId(rawId);
      if (!id || seen.has(id)) return;
      seen.add(id);
      footnotes.push({
        id: id,
        label: rawId,
        content: rawContent.trim()
      });
    });

    return footnotes;
  }

  function renderFootnotes() {
    const placeholder = findReferencePlaceholder();
    if (!placeholder) return;

    const footnotes = collectFootnotes();
    if (!footnotes.length) return;

    const section = document.createElement('section');
    section.className = 'footnotes';

    const divider = document.createElement('hr');
    section.appendChild(divider);

    const list = document.createElement('ol');
    list.className = 'footnotes-list';

    footnotes.forEach(function(item) {
      const li = document.createElement('li');
      li.id = 'footnote-item-' + item.id;
      li.className = 'footnote-item';

      const backLink = document.createElement('a');
      backLink.className = 'footnote-backref';
      backLink.href = '#footnote-ref-' + item.id;
      backLink.textContent = '↑ ';
      backLink.setAttribute('aria-label', 'Return to content');
      li.appendChild(backLink);

      const paragraph = document.createElement('p');
      paragraph.className = 'footnote-item-content';
      paragraph.style.display = 'inline-block';
      
      if (item.content) {
        if (isLink(item.content)) {
          paragraph.appendChild(buildFootnoteLink(item.content));
        } else {
          paragraph.innerHTML = DOMPurify.sanitize(marked.parse(item.content));
        }
      }

      li.appendChild(paragraph);
      list.appendChild(li);
    });

    section.appendChild(list);
    placeholder.appendChild(section);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderFootnotes);
  } else {
    renderFootnotes();
  }

  // Scroll target into the vertical center of the viewport
  function scrollToCenter(target, smooth = true) {
    if (!target) return;
    const rect = target.getBoundingClientRect();
    const targetMiddle = window.scrollY + rect.top + rect.height / 2;
    const scrollTo = Math.max(0, Math.round(targetMiddle - window.innerHeight / 2));
    try {
      window.scrollTo({ top: scrollTo, behavior: smooth ? 'smooth' : 'auto' });
    } catch (e) {
      window.scrollTo(0, scrollTo);
    }
  }

  // Intercept internal anchor clicks for smoother, centered jumps
  document.addEventListener('click', function (e) {
    const a = e.target.closest && e.target.closest('a.footnote-ref, a.footnote-backref');
    if (!a) return;
    const href = a.getAttribute('href') || '';
    if (!href.startsWith('#')) return;
    const id = href.slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      // push the hash without jumping instantly
      if (history && history.replaceState) history.replaceState(null, '', href);
      scrollToCenter(target, true);
      // For accessibility, move focus after scrolling (non-destructive)
      setTimeout(function() {
        try { target.setAttribute('tabindex', '-1'); target.focus({ preventScroll: true }); } catch (err) {}
      }, 500);
    }
  }, false);
})();
