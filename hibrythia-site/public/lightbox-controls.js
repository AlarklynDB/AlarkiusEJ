/**
 * lightbox-controls.js
 * Enhances the React Lightbox component with:
 *  - ESC key to close (replaces click-outside-to-close)
 *  - Scroll / pinch-to-zoom on the image ONLY (does not zoom the page)
 *  - Left-click drag to pan while zoomed
 *  - touch-action:none on overlay to fully block browser native pinch-zoom
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

  // ── Patch overlay: block native touch/pinch gestures on the whole overlay ──
  function patchOverlay(overlay) {
    if (overlay._lcPatched) return;
    overlay._lcPatched = true;

    // touch-action:none tells the browser: we handle all touch gestures here,
    // don't do native scroll/zoom on this element or anything beneath it
    overlay.style.touchAction = 'none';

    // Also needed on <html>/<body> to prevent viewport zoom leaking through
    document.documentElement.style.touchAction = 'none';

    // Neutralise the React onClick on the overlay backdrop
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        e.stopImmediatePropagation();
      }
    }, true);

    // Block ALL touch events on the overlay from reaching the page behind
    overlay.addEventListener('touchstart', function (e) {
      e.stopPropagation();
    }, { passive: false });

    overlay.addEventListener('touchmove', function (e) {
      e.preventDefault();
      e.stopPropagation();
    }, { passive: false });
  }

  // ── Zoom & pan ──────────────────────────────────────────────────────────────
  function resetTransform(img) {
    scale = 1;
    originX = 0;
    originY = 0;
    applyTransform(img);
  }

  function applyTransform(img) {
    // Strip React's transition on transform so zoom feels instant, not laggy
    img.style.transition = 'opacity 200ms ease';
    img.style.transform = `scale(${scale}) translate(${originX / scale}px, ${originY / scale}px)`;
    img.style.cursor = scale > 1 ? 'grab' : 'zoom-in';
  }

  function onWheel(e) {
    if (!currentImg) return;
    e.preventDefault();
    e.stopPropagation();

    const delta = e.deltaY < 0 ? 0.15 : -0.15;
    scale = Math.min(Math.max(1, scale + delta), 5);

    if (scale === 1) { originX = 0; originY = 0; }
    applyTransform(currentImg);
  }

  function onMouseDown(e) {
    if (!currentImg || e.button !== 0) return;
    if (scale <= 1) return;
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

  // ── Pinch-to-zoom (touch) — image only, never the page ─────────────────────
  let lastPinchDist = null;
  let lastTouchX = null;
  let lastTouchY = null;

  function getTouchDist(touches) {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  }

  function getTouchMidpoint(touches) {
    return {
      x: (touches[0].clientX + touches[1].clientX) / 2,
      y: (touches[0].clientY + touches[1].clientY) / 2,
    };
  }

  function onImgTouchMove(e) {
    if (!currentImg) return;
    e.preventDefault();
    e.stopPropagation();

    if (e.touches.length === 2) {
      // Pinch zoom
      const dist = getTouchDist(e.touches);
      if (lastPinchDist !== null) {
        const delta = (dist - lastPinchDist) * 0.015;
        scale = Math.min(Math.max(1, scale + delta), 5);
        if (scale === 1) { originX = 0; originY = 0; }
        applyTransform(currentImg);
      }
      lastPinchDist = dist;
      lastTouchX = null;
      lastTouchY = null;
    } else if (e.touches.length === 1 && scale > 1) {
      // Single finger pan when zoomed
      const tx = e.touches[0].clientX;
      const ty = e.touches[0].clientY;
      if (lastTouchX !== null) {
        originX += tx - lastTouchX;
        originY += ty - lastTouchY;
        applyTransform(currentImg);
      }
      lastTouchX = tx;
      lastTouchY = ty;
    }
  }

  function onImgTouchEnd() {
    lastPinchDist = null;
    lastTouchX = null;
    lastTouchY = null;
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

    resetTransform(img);

    // Scroll zoom on img
    img.addEventListener('wheel', onWheel, { passive: false });
    // Also catch wheel on the overlay itself in case cursor isn't over img
    overlay.addEventListener('wheel', onWheel, { passive: false });

    // Mouse drag
    img.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Touch zoom/pan — on img
    img.addEventListener('touchmove', onImgTouchMove, { passive: false });
    img.addEventListener('touchend', onImgTouchEnd);

    // ESC
    document.addEventListener('keydown', onKeyDown);

    patchOverlay(overlay);
  }

  function detachListeners() {
    if (currentImg) {
      currentImg.removeEventListener('wheel', onWheel);
      currentImg.removeEventListener('mousedown', onMouseDown);
      currentImg.removeEventListener('touchmove', onImgTouchMove);
      currentImg.removeEventListener('touchend', onImgTouchEnd);
    }
    if (currentOverlay) {
      currentOverlay.removeEventListener('wheel', onWheel);
    }
    window.removeEventListener('mousemove', onMouseMove);
    window.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('keydown', onKeyDown);

    // Restore page touch-action
    document.documentElement.style.touchAction = '';

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
