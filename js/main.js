document.documentElement.classList.add('js');

(function () {
  var toggle = document.getElementById('navToggle');
  var menu = document.getElementById('menu');
  var scrim = document.getElementById('scrim');

  function setMenu(open) {
    if (!toggle || !menu || !scrim) return;
    menu.classList.toggle('open', open);
    scrim.classList.toggle('show', open);
    scrim.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }

  if (toggle && menu && scrim) {
    toggle.addEventListener('click', function () { setMenu(!menu.classList.contains('open')); });
    scrim.addEventListener('click', function () { setMenu(false); });
    menu.addEventListener('click', function (event) {
      if (event.target && event.target.tagName === 'A') setMenu(false);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') setMenu(false);
    });
  }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var revealItems = document.querySelectorAll('.reveal');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealItems.forEach(function (el) { el.classList.add('in'); });
  } else {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
    revealItems.forEach(function (el) { observer.observe(el); });
  }

  var quoteForm = document.getElementById('quoteForm');
  if (!quoteForm) return;

  quoteForm.addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var email = document.getElementById('email').value.trim();
    var message = document.getElementById('msg').value.trim();
    var status = document.getElementById('formStatus');

    if (!name || !message || (!phone && !email)) {
      if (status) status.textContent = 'Please add your name, project details, and either a phone number or email.';
      return;
    }

    var body = [
      'Name: ' + name,
      'Phone: ' + (phone || 'Not provided'),
      'Email: ' + (email || 'Not provided'),
      '',
      'Project details:',
      message
    ].join('\r\n');

    window.location.href = 'mailto:guzgardening@gmail.com?subject=' +
      encodeURIComponent('Quote request from Guzgardening.com') +
      '&body=' + encodeURIComponent(body);
  });
})();
