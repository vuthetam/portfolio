/* ── Template: skill card ─────────────────────────────── */
function renderSkillCard(skill) {
  const tags = skill.items.map(item =>
    `<span class="px-3 py-1 bg-surface-container-lowest text-[10px] sm:text-[11px] font-medium rounded-full border border-outline-variant/10 text-on-surface-variant uppercase tracking-wider">${item}</span>`
  ).join('');

  return `
    <div class="bg-surface-container-high p-6 rounded-xl flex flex-col justify-between group hover:bg-surface-container-highest transition-all duration-300 border border-outline-variant/5">
      <div class="space-y-2">
        <div class="flex items-center gap-3">
          <span class="material-symbols-outlined text-3xl text-primary" style="font-variation-settings:'FILL' 1">${skill.icon}</span>
          <h3 class="text-lg font-bold font-headline">${skill.title}</h3>
        </div>
      </div>
      <div class="flex flex-wrap gap-2 mt-4">${tags}</div>
    </div>`;
}

/* ── Template: project card ───────────────────────────── */
function renderProject(project) {
  const contributions = project.contributions.map(c =>
    `<li><b>${c.label}:</b> ${c.detail}</li>`
  ).join('');

  const stack = project.techStack.map(t =>
    `<span class="flex-none px-2 py-0.5 bg-surface-container-lowest text-[10px] font-medium rounded-full border border-outline-variant/10 text-on-surface-variant uppercase tracking-wider">${t}</span>`
  ).join('');

  const githubLink = project.link && project.link !== '#'
    ? `<a href="${project.link}" target="_blank" rel="noopener noreferrer" aria-label="Source code for ${project.title}" title="View Source Code"
        class="w-10 h-10 rounded-full border border-outline-variant/20 flex items-center justify-center hover:bg-surface-container-highest transition-all duration-300">
        <span class="material-symbols-outlined text-xl">code</span>
      </a>`
    : '';

  const liveLink = project.live && project.live !== '#'
    ? `<a href="${project.live}" target="_blank" rel="noopener noreferrer" aria-label="Live demo of ${project.title}" title="View Live Demo"
        class="w-10 h-10 rounded-full bg-tertiary text-on-tertiary shadow-md flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300">
        <span class="material-symbols-outlined text-xl">open_in_new</span>
      </a>`
    : '';

  const actions = (githubLink || liveLink) 
    ? `<div class="flex items-center gap-2">${githubLink}${liveLink}</div>` 
    : '';

  return `
    <article class="group relative bg-surface-container-high rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col h-full">
      <div class="h-48 sm:h-64 overflow-hidden shrink-0">
        <img src="${project.image}" alt="${project.imageAlt}"
          class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          loading="lazy" />
      </div>
      <div class="p-6 sm:p-8 space-y-4 flex flex-col flex-grow">
        <div class="flex justify-between items-center w-full shrink-0 gap-4">
          <h3 class="text-xl sm:text-2xl font-headline font-bold leading-tight">${project.title}</h3>
          ${actions}
        </div>
        <p class="text-on-surface-variant text-sm leading-relaxed">${project.description}</p>
        <div class="space-y-2 flex-grow">
          <h4 class="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Key Contributions</h4>
          <ul class="text-xs text-on-surface-variant list-disc list-inside space-y-1">${contributions}</ul>
        </div>
        <div class="pt-4 border-t border-outline-variant/10 mt-auto">
          <div class="flex flex-wrap gap-2">${stack}</div>
        </div>
      </div>
    </article>`;
}

/* ── Template: certificate card ───────────────────────── */
function renderCertItem(cert) {
  const pdfHref = cert.pdf || '#';
  return `
    <div class="w-64 sm:w-80 md:w-[24rem] lg:w-[28rem] h-44 sm:h-56 md:h-[17rem] lg:h-[19.6rem] flex-shrink-0 bg-surface-container rounded-xl shadow-lg ring-1 ring-outline-variant/10 overflow-hidden relative group"
         data-pdf="${pdfHref}">
      <a href="${pdfHref}" target="_blank" rel="noopener noreferrer"
         title="View ${cert.title} certificate"
         class="block w-full h-full">
        <!-- Canvas populated by PDF.js -->
        <canvas class="pdf-canvas w-full h-full object-contain" style="display:none"></canvas>
        <!-- Loading skeleton -->
        <div class="pdf-skeleton absolute inset-0 flex flex-col items-center justify-center gap-2 bg-surface-container">
          <span class="material-symbols-outlined text-3xl text-on-surface-variant animate-spin" style="animation:spin 1s linear infinite">progress_activity</span>
          <span class="text-[10px] text-on-surface-variant/60 uppercase tracking-wider font-bold">${cert.title}</span>
        </div>
      </a>
    </div>`;
}

/* ── Template: contact links ──────────────────────────── */
function renderContactLinks(personal) {
  return `
    <div class="flex items-center gap-4 group">
      <div class="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center text-primary transition-colors group-hover:bg-tertiary group-hover:text-on-tertiary">
        <span class="material-symbols-outlined">mail</span>
      </div>
      <div>
        <p class="text-[10px] text-on-surface-variant uppercase font-bold tracking-widest">Email</p>
        <a href="mailto:${personal.email}" class="font-medium text-on-surface text-sm sm:text-base hover:text-tertiary transition-colors">${personal.email}</a>
      </div>
    </div>
    <div class="flex items-center gap-4 group">
      <div class="w-12 h-12 bg-surface-container-high rounded-xl flex items-center justify-center text-primary transition-colors group-hover:bg-tertiary group-hover:text-on-tertiary">
        <span class="material-symbols-outlined">share</span>
      </div>
      <div class="flex gap-4">
        <a href="${personal.linkedin}" target="_blank" rel="noopener noreferrer" class="text-sm font-medium hover:text-tertiary transition-colors">LinkedIn</a>
        <a href="${personal.github}"   target="_blank" rel="noopener noreferrer" class="text-sm font-medium hover:text-tertiary transition-colors">GitHub</a>
      </div>
    </div>`;
}

/* ── Template: footer ─────────────────────────────────── */
function renderFooter(footer) {
  const builtItems = footer.builtWith.map((item, i) => {
    const sep = i < footer.builtWith.length - 1
      ? '<span class="w-1 h-1 bg-outline-variant/30 rounded-full hidden sm:inline-block"></span>'
      : '';
    return `<span class="text-[10px] font-bold text-on-surface-variant/60 tracking-widest uppercase hover:text-tertiary transition-colors cursor-default">${item}</span>${sep}`;
  }).join('');

  return `
    <div class="flex flex-col gap-1">
      <span class="text-[10px] uppercase font-bold tracking-[0.2em] text-on-surface-variant/60">Copyright</span>
      <div class="text-[10px] text-on-surface-variant/60 font-medium tracking-widest uppercase">
        &copy; ${footer.year} Vu The Tam. All rights reserved.
      </div>
    </div>
    <div class="flex flex-col md:items-end gap-1">
      <span class="text-[10px] uppercase font-bold tracking-widest text-on-surface-variant/60">Built with</span>
      <div class="flex flex-wrap justify-center md:justify-end gap-4 items-center">${builtItems}</div>
    </div>`;
}

/* ── PDF thumbnails via PDF.js ─────────────────────────── */
function renderPdfThumbnails() {
  if (typeof pdfjsLib === 'undefined') return;
  /* Use the matching worker from the same CDN version */
  pdfjsLib.GlobalWorkerOptions.workerSrc =
    'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';

  /*
   * We only render the FIRST set of cert cards — the second set is the
   * duplicate for the seamless marquee loop. PDF.js renders to canvas,
   * so we copy the ImageData from the first set to mirror duplicates.
   */
  const allCards   = document.querySelectorAll('#marquee-inner [data-pdf]');
  const totalCerts = allCards.length / 2; // half are originals, half are dupes

  allCards.forEach((card, idx) => {
    const isOriginal = idx < totalCerts;
    const canvas   = card.querySelector('.pdf-canvas');
    const skeleton = card.querySelector('.pdf-skeleton');
    if (!canvas || !skeleton) return;

    if (!isOriginal) return; // duplicates handled after originals render

    const pdfPath = card.dataset.pdf;
    pdfjsLib.getDocument(pdfPath).promise
      .then(pdf => pdf.getPage(1))
      .then(page => {
        /* Scale to fit the card height while keeping aspect ratio */
        const cardH   = card.offsetHeight || 224;
        const cardW   = card.offsetWidth  || 320;
        const base    = page.getViewport({ scale: 1 });
        const scale   = Math.max(cardW / base.width, cardH / base.height);
        const vp      = page.getViewport({ scale });

        canvas.width  = vp.width;
        canvas.height = vp.height;

        return page.render({
          canvasContext: canvas.getContext('2d'),
          viewport: vp,
        }).promise.then(() => {
          /* Show canvas, hide skeleton */
          canvas.style.display = 'block';
          skeleton.style.display = 'none';

          /* Mirror to the duplicate card (idx + totalCerts) */
          const dupCard    = allCards[idx + totalCerts];
          const dupCanvas  = dupCard?.querySelector('.pdf-canvas');
          const dupSkel    = dupCard?.querySelector('.pdf-skeleton');
          if (dupCanvas) {
            dupCanvas.width  = canvas.width;
            dupCanvas.height = canvas.height;
            dupCanvas.getContext('2d').drawImage(canvas, 0, 0);
            dupCanvas.style.display = 'block';
          }
          if (dupSkel) dupSkel.style.display = 'none';
        });
      })
      .catch(() => {
        /* Fallback on error: show cert title */
        skeleton.querySelector('span:last-child').textContent = card.querySelector('a').title;
        skeleton.querySelector('.material-symbols-outlined').textContent = 'description';
        skeleton.querySelector('.material-symbols-outlined').style.animation = 'none';
      });
  });
}

/* ── Load portfolio data from JSON ────────────────────── */
async function loadPortfolio() {
  try {
    const res = await fetch('data/portfolio.json');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();
    const { personal, skills, projects, certificates, footer } = data;

    /* Nav */
    const avatar = document.getElementById('nav-avatar');
    const avatarLink = document.getElementById('nav-avatar-link');
    avatar.src = personal.avatar;
    avatar.alt = personal.name;
    if (avatarLink) avatarLink.href = personal.avatar;
    document.getElementById('nav-name').textContent = personal.nameDisplay;

    /* Hero */
    document.getElementById('hero-title-tag').textContent = personal.title;
    document.getElementById('hero-bio').textContent = personal.bio;

    /* Skills */
    document.getElementById('skills-grid').innerHTML =
      skills.map(renderSkillCard).join('');

    /* Projects */
    document.getElementById('projects-grid').innerHTML =
      projects.map(renderProject).join('');

    /* Certificates — duplicate for seamless marquee */
    const certHTML = certificates.map(renderCertItem).join('');
    document.getElementById('marquee-inner').innerHTML = certHTML + certHTML;
    renderPdfThumbnails();
    /* Init slider after DOM is populated */
    initSlider();
    document.getElementById('contact-seeking').innerHTML =
      `I'm currently seeking <strong>${personal.seekingRole}</strong> opportunities. ` +
      `Whether you have a question or just want to say hi, I'll try my best to get back to you!`;
    document.getElementById('contact-links').innerHTML = renderContactLinks(personal);

    /* Footer */
    document.getElementById('footer-content').innerHTML = renderFooter(footer);

  } catch (err) {
    console.error('[Portfolio] Failed to load data:', err);
    /* Fallback message */
    document.getElementById('hero-bio').textContent =
      'Unable to load portfolio content. Please try refreshing the page.';
  }
}

/* ── Draggable marquee slider ─────────────────────────── */
function initSlider() {
  const slider  = document.getElementById('certificate-slider');
  const marquee = document.getElementById('marquee-inner');
  if (!slider || !marquee) return;

  let isDragging  = false;
  let startX      = 0;
  let currentX    = 0;   // current translateX value
  let dragDist    = 0;   // total px dragged — blocks link-clicks after drag
  let rafId;

  /* ── helpers ── */
  function hw() { return marquee.scrollWidth / 2; }

  /*
   * Positive-modulo wrap: always returns a value in (-hw, 0].
   * Works correctly for both left and right dragging.
   */
  function wrap(x) {
    const h = hw();
    if (!h) return x;
    x = ((x % h) + h) % h;   // positive remainder [0, h)
    if (x > 0) x -= h;        // shift to (-h, 0]
    return x;
  }

  /* ── auto-scroll ── */
  function autoScroll() {
    if (isDragging) return;
    currentX -= 0.5;
    if (Math.abs(currentX) >= hw()) currentX = 0;
    marquee.style.transform = `translateX(${currentX}px)`;
    rafId = requestAnimationFrame(autoScroll);
  }
  autoScroll();

  /* Prevent browser from showing the native image-drag ghost */
  slider.addEventListener('dragstart', e => e.preventDefault());

  /* ── mouse handlers (attached to document while dragging) ── */
  function onMouseMove(e) {
    const dx = e.clientX - startX;
    startX   = e.clientX;
    dragDist += Math.abs(dx);
    currentX  = wrap(currentX + dx);
    marquee.style.transform = `translateX(${currentX}px)`;
  }

  function onMouseUp() {
    isDragging = false;
    slider.style.cursor = '';
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup',   onMouseUp);
    autoScroll();
  }

  slider.addEventListener('mousedown', e => {
    /*
     * e.preventDefault() is the key fix:
     * it stops the browser from starting a native image/link drag
     * that eats all subsequent mousemove events.
     */
    e.preventDefault();
    isDragging = true;
    dragDist   = 0;
    startX     = e.clientX;
    slider.style.cursor = 'grabbing';
    cancelAnimationFrame(rafId);
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup',   onMouseUp);
  });

  /* Block cert-PDF link from opening after a drag */
  slider.addEventListener('click', e => {
    if (dragDist > 5) {
      e.preventDefault();
      e.stopPropagation();
    }
    dragDist = 0;
  }, true);

  /* ── touch handlers ── */
  slider.addEventListener('touchstart', e => {
    isDragging = true;
    dragDist   = 0;
    startX     = e.touches[0].clientX;
    cancelAnimationFrame(rafId);
  }, { passive: true });

  slider.addEventListener('touchmove', e => {
    if (!isDragging) return;
    const dx = e.touches[0].clientX - startX;
    startX   = e.touches[0].clientX;
    dragDist += Math.abs(dx);
    currentX  = wrap(currentX + dx);
    marquee.style.transform = `translateX(${currentX}px)`;
  }, { passive: true });

  slider.addEventListener('touchend', () => {
    isDragging = false;
    autoScroll();
  });
}

/* ── Scroll-to-top button ─────────────────────────────── */
(function initScrollTop() {
  const btn = document.getElementById('scroll-top-btn');
  if (!btn) return;

  /* Show / hide with spring animation (CSS handles the transition) */
  window.addEventListener('scroll', () => {
    btn.classList.toggle('show', window.scrollY > 320);
  }, { passive: true });

  /* Custom cubic-ease-out scroll — consistent across all browsers */
  btn.addEventListener('click', () => {
    const startY    = window.scrollY;
    const startTime = performance.now();
    /* Duration scales with distance but caps at 750 ms */
    const duration  = Math.min(startY * 0.6, 750);
    if (duration === 0) return;

    function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

    function step(now) {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY * (1 - easeOut(progress)));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
})();

/* ── Smooth anchor-link scrolling (same easing as scroll-to-top) ── */
(function initAnchorScroll() {
  function smoothScrollTo(targetY) {
    const startY    = window.scrollY;
    const distance  = targetY - startY;
    const startTime = performance.now();
    /* Duration scales with distance, capped at 900 ms */
    const duration  = Math.min(Math.abs(distance) * 0.55, 900);
    if (Math.abs(distance) < 1) return;

    function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

    function step(now) {
      const elapsed  = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      window.scrollTo(0, startY + distance * easeOut(progress));
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const hash   = link.getAttribute('href');
      if (!hash || hash === '#') return;
      const target = document.querySelector(hash);
      if (!target) return;
      e.preventDefault();
      const targetY = target.getBoundingClientRect().top + window.scrollY;
      smoothScrollTo(targetY);
      history.pushState(null, '', hash); // keep URL in sync
    });
  });
})();

/* ── Formspree contact form ───────────────────────────── */
(function initContactForm() {
  const ENDPOINT = 'https://formspree.io/f/xzdyjwzb';
  const form     = document.getElementById('contact-form');
  const btn      = document.getElementById('contact-submit');
  const label    = document.getElementById('submit-label');
  const toast    = document.getElementById('form-toast');
  const toastMsg = document.getElementById('toast-msg');
  const toastIco = document.getElementById('toast-icon');
  const emailEl  = document.getElementById('contact-email');
  const replyTo  = document.getElementById('form-replyto');
  if (!form) return;

  /* Keep _replyto in sync with email field so replies go to sender */
  if (emailEl && replyTo) {
    emailEl.addEventListener('input', () => {
      replyTo.value = emailEl.value;
    });
  }

  let toastTimer;

  function showToast(type, message) {
    toast.className = `show ${type}`; // 'success' | 'error'
    toastIco.textContent = type === 'success' ? 'check_circle' : 'error';
    toastMsg.textContent = message;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.className = ''; }, 5000);
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();

    /* Basic HTML5 validation */
    if (!form.checkValidity()) { form.reportValidity(); return; }

    /* Sync _replyto one last time before sending */
    if (emailEl && replyTo) replyTo.value = emailEl.value;

    /* Loading state */
    btn.disabled      = true;
    label.textContent = 'Sending…';

    try {
      const res = await fetch(ENDPOINT, {
        method:  'POST',
        headers: { 'Accept': 'application/json' },
        body:    new FormData(form),
      });

      if (res.ok) {
        showToast('success', "Message sent! I'll get back to you soon 🎉");
        form.reset();
      } else {
        const data = await res.json().catch(() => ({}));
        const msg  = data?.errors?.map(err => err.message).join(', ')
          || 'Something went wrong. Please try again.';
        showToast('error', msg);
      }
    } catch {
      showToast('error', 'Network error. Please check your connection.');
    } finally {
      btn.disabled      = false;
      label.textContent = 'Send';
    }
  });
})();

/* ── Bootstrap ────────────────────────────────────────── */
loadPortfolio();
