(function () {
  const lazyImages = Array.from(document.querySelectorAll("img[data-src]"));

  function loadImage(image) {
    if (!image.dataset.src) return;

    image.src = image.dataset.src;
    image.removeAttribute("data-src");
  }

  window.loadDeferredImage = loadImage;

  if (!lazyImages.length) return;

  if (!("IntersectionObserver" in window)) {
    window.addEventListener("load", () => lazyImages.forEach(loadImage), { once: true });
    return;
  }

  const rootMargin = document.querySelector(".desktop-2-frame") ? "240px 0px" : "900px 0px";
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        observer.unobserve(entry.target);
        loadImage(entry.target);
      });
    },
    { rootMargin },
  );

  lazyImages.forEach((image) => observer.observe(image));
})();
