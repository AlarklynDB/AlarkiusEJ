/**
 * lightbox-controls.js
 * Enhances the React Lightbox component with:
 *  - ESC key to close (replaces click-outside-to-close)
 *  - Scroll / pinch-to-zoom on the image
 *  - Left-click drag to pan while zoomed
 * Loaded once globally via BaseLayout.astro.
 * Works by observing the DOM for lightbox overlays (z-index 9999).
 */

(function () {
  let scale = 1;
  let originX = 0;
  let originY = 0;
  let isDragging = false;
  let dragStartX = 0;
  let dragStartY = 0;
  let currentImg = null;
  let currentOverlay = null;
  let closeBtn = null;

  // ── Patch overlay: disable click-to-close on the backdrop ──────────────────
  function patchOverlay(overlay) {
    if (overlay._lcPatched) return;
    overlay._lcPatched = true;

    // Neutralise the React onClick on the overlay div (fires via bubbling)
    overlay.addEventListener('click', function (e) {
      // Only block clicks that land directly on the overlay (not the X button)
      if (e.target === overlay) {
        e.stopImmediatePropagation();
      }
    }, true); // capture phase — runs before React's bubble handler
  }

  // ── Zoom & pan ──────────────────────────────────────────────────────────────
  function resetTransform(img) {
    scale = 1;
    originX = 0;
    originY = 0;
    applyTransform(img);
  }

  function applyTransform(img) {
    img.style.transform = `scale(${scale}) translate(${originX / scale}px, ${originY / scale}px)`;
    img.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
  }

  function onWheel(e) {
    if (!currentImg) return;
    e.preventDefault();

    const delta = e.deltaY < 0 ? 0.15 : -0.15;
    scale = Math.min(Math.max(1, scale + delta), 5);

    if (scale === 1) { originX = 0; originY = 0; }
    applyTransform(currentImg);
  }

  function onMouseDown(e) {
    if (!currentImg || e.button !== 0) return;
    if (scale <= 1) return; // no drag at normal size
    isDragging = true;
    dragStartX = e.clientX - originX;
    dragStartY = e.clientY - originY;
    currentImg.style.cursor = 'grabbing';
    e.preventDefault();
  }

  function onMouseMove(e) {
    if (!isDragging || !currentImg) return;
    originX = e.clientX - dragStartX;
    originY = e.clientY - dragStartY;
    applyTransform(currentImg);
  }

  function onMouseUp() {
    if (!currentImg) return;
    isDragging = false;
    currentImg.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
  }

  // ── Pinch-to-zoom (touch) ───────────────────────────────────────────────────
  let lastPinchDist = null;

  function getTouchDist(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function onTouchMove(e) {
    if (!currentImg || e.touches.length < 2) return;
    e.preventDefault();
    const dist = getTouchDist(e.touches);
    if (lastPinchDist !== null) {
      const delta = (dist - lastPinchDist) * 0.01;
      scale = Math.min(Math.max(1, scale + delta), 5);
      if (scale === 1) { originX = 0; originY = 0; }
      applyTransform(currentImg);
    }
    lastPinchDist = dist;
  }

  function onTouchEnd() {
    lastPinchDist = null;
  }

  // ── ESC to close ───────────────────────────────────────────────────────────
  function onKeyDown(e) {
    if (e.key === 'Escape' && closeBtn) {
      closeBtn.click();
    }
  }

  // ── Attach / detach listeners ───────────────────────────────────────────────
  function attachListeners(overlay, img, btn) {
    currentImg = img;
    currentOverlay = overlay;
    closeBtn = btn;

    // Reset zoom state on every open
    resetTransform(img);

    img.addEventListener('wheel', onWheel, { passive: false });
    img.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    img.addEventListener('touchmove', onTouchMove, { passive: false });
    img.addEventListener('touchend', onTouchEnd);
    document.addEventListener('keydown', onKeyDown);

    patchOverlay(overlay);
  }

  function detachListeners() {
    if (currentImg) {
      currentImg.removeEventListener('wheel', onWheel);
      currentImg.removeEventListener('mousedown', onMouseDown);
      currentImg.removeEventListener('touchmove', onTouchMove);
      currentImg.removeEventListener('touchend', onTouchEnd);
    }
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('keydown', onKeyDown);
    currentImg = null;
    currentOverlay = null;
    closeBtn = null;
  }

  // ── MutationObserver: watch for lightbox mount/unmount ─────────────────────
  const observer = new MutationObserver(function (mutations) {
    for (const mutation of mutations) {
      // Lightbox added
      for (const node of mutation.addedNodes) {
        if (node.nodeType !== 1) continue;
        // The overlay has style="z-index: 9999; ..."
        const overlay = node.style && node.style.zIndex === '9999'
          ? node
          : node.querySelector && node.querySelector('[style*="z-index: 9999"]');
        if (!overlay) continue;

        const img = overlay.querySelector('img');
        const btn = overlay.querySelector('button[aria-label="Close"]');
        if (img && btn) {
          attachListeners(overlay, img, btn);
        }
      }

      // Lightbox removed
      for (const node of mutation.removedNodes) {
        if (node.nodeType !== 1) continue;
        const wasOverlay = node.style && node.style.zIndex === '9999';
        const hadOverlay = node.querySelector && node.querySelector('[style*="z-index: 9999"]');
        if (wasOverlay || hadOverlay) {
          detachListeners();
        }
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();
