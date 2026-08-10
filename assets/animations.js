// Solid State Construction — shared scroll/entrance animation behavior.
// Include after assets/styles.css on every page: <script src="assets/animations.js" defer></script>

document.addEventListener("DOMContentLoaded", () => {
  // Defensive fallback: loremflickr.com is a free third-party service with no uptime SLA.
  // If a photo fails to load, swap to a same-size picsum.photos image rather than showing a broken image icon.
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener(
      "error",
      function onError() {
        if (this.dataset.fallbackApplied) return;
        // Never substitute stock imagery for a real project photo served from assets/.
        // A broken real photo is honest; a random stock stand-in misrepresents our work.
        if (!/^https?:/i.test(this.getAttribute("src") || "")) return;
        this.dataset.fallbackApplied = "true";
        const match = this.src.match(/(\d+)\/(\d+)/);
        const w = match ? match[1] : 1200;
        const h = match ? match[2] : 800;
        const seed = encodeURIComponent((this.alt || "solid-state-construction").trim().replace(/\s+/g, "-"));
        this.src = `https://picsum.photos/seed/${seed}/${w}/${h}`;
      },
      { once: true }
    );
  });

  // Scroll-reveal: any element with class "reveal" or "reveal-scale" fades/slides in once visible.
  const revealTargets = document.querySelectorAll(".reveal, .reveal-scale");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target;
            const delay = el.dataset.delay ? Number(el.dataset.delay) : 0;
            setTimeout(() => el.classList.add("is-visible"), delay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
    );
    revealTargets.forEach((el) => observer.observe(el));
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }

  // Gallery b-roll: only play a clip while it is actually on screen, and only fetch
  // it at that point (the markup ships preload="none"). Keeps three background videos
  // from decoding at once or costing anything on a page the visitor never scrolls.
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const lazyVideos = document.querySelectorAll("video[data-autoplay-in-view]");

  if (lazyVideos.length && !reducedMotion.matches) {
    if ("IntersectionObserver" in window) {
      const videoObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const video = entry.target;
            if (entry.isIntersecting) {
              if (video.preload === "none") video.preload = "auto";
              // play() rejects on browsers that block autoplay — poster stays, which is fine.
              video.play().catch(() => {});
            } else {
              video.pause();
            }
          });
        },
        { threshold: 0.4 }
      );
      lazyVideos.forEach((video) => videoObserver.observe(video));
    } else {
      lazyVideos.forEach((video) => {
        video.preload = "auto";
        video.play().catch(() => {});
      });
    }
  }

  // Reduced motion: stop the hero loop too. CSS hides it, but a hidden <video> with
  // autoplay would still decode frames in some browsers.
  if (reducedMotion.matches) {
    document.querySelectorAll("video.motion-video").forEach((video) => {
      video.autoplay = false;
      video.pause();
    });
  }

  // Sticky nav: add a stronger shadow/blur once the page has scrolled.
  const nav = document.querySelector("[data-nav]");
  if (nav) {
    const onScroll = () => {
      if (window.scrollY > 12) {
        nav.classList.add("shadow-brand-md");
      } else {
        nav.classList.remove("shadow-brand-md");
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Mobile nav toggle
  const menuBtn = document.querySelector("[data-menu-toggle]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");
  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mobileMenu.classList.toggle("flex");
      mobileMenu.classList.toggle("hidden");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Animated stat counters: <span data-counter="150" data-suffix="+">
  const counters = document.querySelectorAll("[data-counter]");
  if ("IntersectionObserver" in window && counters.length) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          const target = Number(el.dataset.counter);
          const suffix = el.dataset.suffix || "";
          const duration = 1400;
          const start = performance.now();
          const tick = (now) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(eased * target) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          counterObserver.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach((el) => counterObserver.observe(el));
  }

  // Basic client-side validation feedback for any form on the page (contact form etc.)
  const forms = document.querySelectorAll("form[data-validate]");
  forms.forEach((form) => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      let valid = true;
      form.querySelectorAll("input, textarea, select").forEach((field) => {
        field.value = field.value.trim();
        const empty = field.hasAttribute("required") && !field.value;
        const invalidFormat = !field.checkValidity();
        if (empty || invalidFormat) {
          valid = false;
          field.classList.add("border-red-500");
        } else {
          field.classList.remove("border-red-500");
        }
      });
      const status = form.querySelector("[data-form-status]");
      if (valid) {
        form.reset();
        if (status) {
          status.textContent = "Thanks — your request has been received. We'll call you back shortly.";
          status.classList.remove("hidden", "text-red-400");
          status.classList.add("text-brand-300");
        }
      } else if (status) {
        status.textContent = "Please fill in the required fields above.";
        status.classList.remove("hidden", "text-brand-300");
        status.classList.add("text-red-400");
      }
    });
  });
});
