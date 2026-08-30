const DESIGN_WIDTH = 1440;

function getDesktopScale() {
  return Math.max(1, window.innerWidth / DESIGN_WIDTH);
}

function getSectionScrollTop(section) {
  if (window.innerWidth < DESIGN_WIDTH) {
    return window.scrollY + section.getBoundingClientRect().top;
  }

  const rawTop = Number.parseFloat(getComputedStyle(section).top || "0");
  if (Number.isFinite(rawTop)) {
    return rawTop * getDesktopScale();
  }

  return window.scrollY + section.getBoundingClientRect().top;
}

function activateWithKeyboard(event, callback) {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    callback();
  }
}

document.querySelectorAll("[data-scroll-target]").forEach((control) => {
  const scrollToTarget = () => {
    const target = document.querySelector(`.${control.dataset.scrollTarget}`);
    if (!target) return;

    window.scrollTo({
      top: getSectionScrollTop(target),
      left: 0,
      behavior: "auto",
    });
  };

  control.addEventListener("click", scrollToTarget);
  control.addEventListener("keydown", (event) => activateWithKeyboard(event, scrollToTarget));
});

function setupHorizontalMarquee(row, speed) {
  const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
  const originals = Array.from(row.children);
  let offset = 0;
  let cycleDistance = 0;
  let lastFrameTime = performance.now();
  let resumeAt = 0;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartOffset = 0;

  originals.forEach((image) => {
    const bounds = image.getBoundingClientRect();
    image.style.width = `${bounds.width / getDesktopScale()}px`;
    image.style.height = `${bounds.height / getDesktopScale()}px`;
    image.draggable = false;
  });

  originals.forEach((image) => {
    const clone = image.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    clone.draggable = false;
    row.appendChild(clone);
  });

  function measureCycle() {
    const firstClone = row.children[originals.length];
    cycleDistance = firstClone ? firstClone.offsetLeft : row.scrollWidth / 2;
  }

  function normalizeOffset() {
    if (!cycleDistance) return;

    while (offset <= -cycleDistance) offset += cycleDistance;
    while (offset > 0) offset -= cycleDistance;
  }

  function render() {
    normalizeOffset();
    row.style.transform = `translate3d(${offset}px, 0, 0)`;
  }

  function pauseAutoScroll(duration = 1200) {
    resumeAt = performance.now() + duration;
  }

  function animate(now) {
    const deltaSeconds = Math.min((now - lastFrameTime) / 1000, 0.05);
    lastFrameTime = now;

    if (!reduceMotionQuery.matches && !isDragging && now >= resumeAt) {
      offset -= speed * deltaSeconds;
      render();
    }

    requestAnimationFrame(animate);
  }

  row.addEventListener(
    "wheel",
    (event) => {
      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      offset -= delta / getDesktopScale();
      pauseAutoScroll();
      render();
      event.preventDefault();
    },
    { passive: false },
  );

  row.addEventListener("pointerdown", (event) => {
    isDragging = true;
    dragStartX = event.clientX;
    dragStartOffset = offset;
    row.classList.add("is-dragging");
    row.setPointerCapture(event.pointerId);
    pauseAutoScroll();
  });

  row.addEventListener("pointermove", (event) => {
    if (!isDragging) return;

    offset = dragStartOffset + (event.clientX - dragStartX) / getDesktopScale();
    render();
  });

  function stopDragging(event) {
    if (!isDragging) return;

    isDragging = false;
    row.classList.remove("is-dragging");
    if (row.hasPointerCapture(event.pointerId)) {
      row.releasePointerCapture(event.pointerId);
    }
    pauseAutoScroll();
  }

  row.addEventListener("pointerup", stopDragging);
  row.addEventListener("pointercancel", stopDragging);
  window.addEventListener("resize", () => {
    measureCycle();
    render();
  });

  measureCycle();
  render();
  requestAnimationFrame(animate);
}

const drawingRow = document.querySelector(".drawing-row");
const likesRow = document.querySelector(".likes-row");

if (drawingRow) setupHorizontalMarquee(drawingRow, 24);
if (likesRow) setupHorizontalMarquee(likesRow, 18);
