/* ==========================================================================
   SPACETIME WARP ENGINE — Ronit Choudhury
   Interactive 3D Spacetime Grid & Celestial Cosmic Simulation
   Zero-dependency Vanilla HTML5 Canvas WebGL-grade Projection Engine
   Dual Theme Support: Dark Cosmic Void & White Space Void
   ========================================================================== */

(function () {
  'use strict';

  const INTRO_DURATION_MS = 4000;
  let canvas, ctx;
  let width = 0, height = 0, cx = 0, cy = 0;
  let animId = null;
  let startTime = null;
  let introActive = false;
  let introProgress = 1.0; // 0.0 to 1.0
  let isTornOff = false;
  let tearRadius = 0;

  // Mouse & Scroll gravity interaction
  let mouseX = 0, mouseY = 0;
  let targetMouseX = 0, targetMouseY = 0;
  let scrollY = 0;

  // Starfield simulation
  const NUM_STARS = 260;
  const stars = [];

  // Celestial Radiant Photons & Light Objects
  const NUM_PHOTONS = 8;
  const photons = [];

  // Spacetime Grid Configuration
  const GRID_SIZE = 760;
  const GRID_STEP = 38;
  const GRID_DEPTH_NEAR = 100;
  const GRID_DEPTH_FAR = 1100;
  const FOV = 360;

  function isDarkTheme() {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  }

  function prefersReducedMotion() {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }

  /* --------------------------------------------------------------------------
     1. INITIALIZATION & RESIZE
     -------------------------------------------------------------------------- */
  function initSpacetime() {
    // Only run the interactive 3D simulation on the homepage
    if (!document.querySelector('.page-landing') && !document.getElementById('spacetime-intro-overlay')) {
      return;
    }

    canvas = document.getElementById('spacetime-canvas');
    if (!canvas) return;
    ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    initStars();
    initPhotons();

    // Mouse tracking for interactive gravitational lensing & glass refraction highlights
    window.addEventListener('mousemove', (e) => {
      targetMouseX = (e.clientX - cx);
      targetMouseY = (e.clientY - cy);
      const px = ((e.clientX / window.innerWidth) * 100).toFixed(2);
      const py = ((e.clientY / window.innerHeight) * 100).toFixed(2);
      document.documentElement.style.setProperty('--mouse-x', px + '%');
      document.documentElement.style.setProperty('--mouse-y', py + '%');
    }, { passive: true });

    window.addEventListener('scroll', () => {
      scrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    }, { passive: true });

    // Keyboard trigger: Esc skips intro
    window.addEventListener('keydown', (e) => {
      if (introActive && e.key === 'Escape') {
        skipIntro();
      }
    });

    // Check if intro overlay exists on this page, or already played, or reduced motion
    const hasIntroOverlay = !!document.getElementById('spacetime-intro-overlay');
    const alreadyPlayed = sessionStorage.getItem('spacetime-intro-played');
    if (!hasIntroOverlay || alreadyPlayed || prefersReducedMotion()) {
      introActive = false;
      introProgress = 1.0;
      isTornOff = true;
      tearRadius = Math.hypot(width, height);
      notifyTearoffComplete();
    } else {
      startIntro();
    }

    // Begin animation loop
    if (animId) cancelAnimationFrame(animId);
    animId = requestAnimationFrame(renderLoop);
  }

  function handleResize() {
    if (!canvas) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * dpr);
    canvas.height = Math.floor(height * dpr);
    canvas.style.width = width + 'px';
    canvas.style.height = height + 'px';
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cx = width / 2;
    cy = height / 2;
  }

  /* --------------------------------------------------------------------------
     2. STARFIELD DATA
     -------------------------------------------------------------------------- */
  function initStars() {
    stars.length = 0;
    for (let i = 0; i < NUM_STARS; i++) {
      stars.push({
        x: (Math.random() - 0.5) * 2200,
        y: (Math.random() - 0.5) * 1600,
        z: Math.random() * 1200 + 40,
        size: Math.random() * 1.6 + 0.6,
        baseAlpha: Math.random() * 0.7 + 0.3,
        twinkleSpeed: Math.random() * 0.04 + 0.01
      });
    }
  }

  function initPhotons() {
    photons.length = 0;
    for (let i = 0; i < NUM_PHOTONS; i++) {
      photons.push({
        x: (Math.random() - 0.5) * 1600,
        y: (Math.random() - 0.5) * 1000,
        z: Math.random() * 850 + 150,
        radius: Math.random() * 16 + 12,
        speedX: (Math.random() - 0.5) * 0.7,
        speedY: (Math.random() - 0.5) * 0.5,
        speedZ: (Math.random() - 0.5) * 0.4,
        pulseOffset: Math.random() * Math.PI * 2,
        colorIndex: i % 3 // 0: electric cyan, 1: cerulean, 2: pearl/azure
      });
    }
  }

  /* --------------------------------------------------------------------------
     3. INTRO SEQUENCING & TEAROFF
     -------------------------------------------------------------------------- */
  function startIntro() {
    introActive = true;
    introProgress = 0.0;
    isTornOff = false;
    tearRadius = 0;
    startTime = performance.now();
    document.body.classList.add('spacetime-intro-running');

    const overlay = document.getElementById('spacetime-intro-overlay');
    if (overlay) {
      overlay.classList.remove('is-torn-off');
      overlay.classList.add('is-active');
    }
  }

  function skipIntro() {
    introActive = false;
    introProgress = 1.0;
    isTornOff = true;
    tearRadius = Math.hypot(width, height);
    sessionStorage.setItem('spacetime-intro-played', 'true');
    notifyTearoffComplete();
  }

  function notifyTearoffComplete() {
    document.body.classList.remove('spacetime-intro-running');
    document.body.classList.add('spacetime-intro-complete');
    const overlay = document.getElementById('spacetime-intro-overlay');
    if (overlay) {
      overlay.classList.add('is-torn-off');
      setTimeout(() => {
        overlay.classList.remove('is-active');
      }, 700);
    }
  }

  window.replaySpacetimeWarp = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    startIntro();
  };

  window.skipSpacetimeWarp = skipIntro;

  /* --------------------------------------------------------------------------
     4. 3D MATH & SPACETIME WARPING
     -------------------------------------------------------------------------- */
  function project(x, y, z) {
    if (z <= 1) z = 1;
    const scale = FOV / z;
    return {
      x: cx + x * scale,
      y: cy + y * scale,
      scale: scale
    };
  }

  function getSpacetimeHeight(x, z, time, warpFactor, mouseGravX, mouseGravY) {
    const distFromOrigin = Math.hypot(x, z - 500);

    // Relativistic ripples in the fabric of space-time
    const ripple = Math.sin(distFromOrigin * 0.016 - time * 2.8) * Math.cos(x * 0.012);

    // Central gravitational curvature (gravitational well)
    const wellDepth = (180 * warpFactor) / (1 + Math.pow(distFromOrigin / 140, 2));

    // Dynamic wave modulation
    const dynamicWave = ripple * (22 + 48 * warpFactor) * Math.exp(-distFromOrigin * 0.0018);

    // Interactive cursor gravitational lensing
    const distToMouse = Math.hypot(x - mouseGravX, (z - 500) - mouseGravY);
    const mouseDent = 40 / (1 + Math.pow(distToMouse / 120, 2));

    // Natural downward perspective baseline
    const horizonOffset = 130 + (scrollY * 0.15);

    return horizonOffset - wellDepth + dynamicWave - mouseDent;
  }

  /* --------------------------------------------------------------------------
     5. MAIN RENDERING LOOP
     -------------------------------------------------------------------------- */
  function renderLoop(now) {
    if (!startTime) startTime = now;
    const elapsed = now - startTime;

    // Smooth mouse lerp
    mouseX += (targetMouseX - mouseX) * 0.06;
    mouseY += (targetMouseY - mouseY) * 0.06;

    // Evaluate intro sequence timing
    if (introActive) {
      introProgress = Math.min(1.0, elapsed / INTRO_DURATION_MS);
      if (introProgress >= 1.0) {
        introActive = false;
        sessionStorage.setItem('spacetime-intro-played', 'true');
        notifyTearoffComplete();
      }
    }

    const dark = isDarkTheme();
    const time = now * 0.001;

    // Clear background
    ctx.clearRect(0, 0, width, height);

    // Draw ambient cosmic void backdrop
    renderCosmicVoid(dark, introProgress);

    // Draw starfield
    renderStars(dark, time, introProgress);

    // Draw radiant celestial photons & light objects (refracted through glass panels)
    renderPhotons(dark, time, introProgress);

    // Draw 3D spacetime grid
    renderSpacetimeGrid(dark, time, introProgress);

    // Draw tearoff / spacetime rift during transition
    if (introActive && introProgress > 0.65) {
      renderTearoffHorizon(dark, introProgress);
    }

    animId = requestAnimationFrame(renderLoop);
  }

  /* --------------------------------------------------------------------------
     6. RENDER PASSES
     -------------------------------------------------------------------------- */
  function renderCosmicVoid(dark, progress) {
    const grad = ctx.createRadialGradient(cx, cy, 10, cx, cy, Math.max(width, height) * 0.85);
    if (dark) {
      grad.addColorStop(0, 'rgba(12, 22, 45, 0.45)');
      grad.addColorStop(0.5, 'rgba(6, 12, 24, 0.25)');
      grad.addColorStop(1, 'rgba(3, 7, 18, 0)');
    } else {
      // White Space Void: celestial solar pearl lighting
      grad.addColorStop(0, 'rgba(238, 246, 255, 0.55)');
      grad.addColorStop(0.5, 'rgba(241, 245, 249, 0.3)');
      grad.addColorStop(1, 'rgba(248, 250, 252, 0)');
    }
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);
  }

  function renderStars(dark, time, progress) {
    const warpSpeed = introActive ? 1.0 + (1.0 - Math.abs(progress - 0.5) * 2) * 5.0 : 0.65;

    for (let i = 0; i < stars.length; i++) {
      const s = stars[i];
      s.z -= warpSpeed;
      if (s.z <= 20) {
        s.z = 1200;
        s.x = (Math.random() - 0.5) * 2200;
        s.y = (Math.random() - 0.5) * 1600;
      }

      const p = project(s.x, s.y, s.z);
      if (p.x < 0 || p.x > width || p.y < 0 || p.y > height) continue;

      const twinkle = Math.sin(time * 3 + i) * 0.25;
      const alpha = Math.min(1, Math.max(0.1, s.baseAlpha + twinkle));
      const r = Math.max(0.6, s.size * p.scale);

      if (dark) {
        ctx.fillStyle = (i % 5 === 0)
          ? `rgba(56, 189, 248, ${alpha * 0.9})`
          : `rgba(255, 255, 255, ${alpha * 0.85})`;
      } else {
        // White Space Void stars: slate & metallic celestial dust
        ctx.fillStyle = (i % 4 === 0)
          ? `rgba(2, 132, 199, ${alpha * 0.6})`
          : `rgba(71, 85, 105, ${alpha * 0.45})`;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function renderPhotons(dark, time, progress) {
    for (let i = 0; i < photons.length; i++) {
      const p = photons[i];
      // Radiant harmonic orbit
      p.x += p.speedX + Math.sin(time * 0.7 + p.pulseOffset) * 0.6;
      p.y += p.speedY + Math.cos(time * 0.6 + p.pulseOffset) * 0.5;
      p.z += p.speedZ;

      // Wrap boundaries smoothly in 3D
      if (p.x < -1000) p.x = 1000;
      if (p.x > 1000) p.x = -1000;
      if (p.y < -700) p.y = 700;
      if (p.y > 700) p.y = -700;
      if (p.z < 100) p.z = 950;
      if (p.z > 980) p.z = 120;

      const proj = project(p.x, p.y, p.z);
      if (proj.x < -120 || proj.x > width + 120 || proj.y < -120 || proj.y > height + 120) continue;

      const scale = proj.scale;
      const screenRadius = Math.max(7, p.radius * scale);
      const pulse = 1 + Math.sin(time * 2.2 + p.pulseOffset) * 0.28;
      const haloRadius = screenRadius * 3.8 * pulse;

      const radialGrad = ctx.createRadialGradient(proj.x, proj.y, 0, proj.x, proj.y, haloRadius);

      if (dark) {
        if (p.colorIndex === 0) {
          // Electric Cyan Radiant Light
          radialGrad.addColorStop(0, 'rgba(6, 182, 212, 0.85)');
          radialGrad.addColorStop(0.25, 'rgba(6, 182, 212, 0.45)');
          radialGrad.addColorStop(0.65, 'rgba(56, 189, 248, 0.15)');
          radialGrad.addColorStop(1, 'rgba(6, 182, 212, 0)');
        } else if (p.colorIndex === 1) {
          // Deep Azure/Violet Light
          radialGrad.addColorStop(0, 'rgba(14, 165, 233, 0.85)');
          radialGrad.addColorStop(0.25, 'rgba(2, 132, 199, 0.4)');
          radialGrad.addColorStop(0.65, 'rgba(99, 102, 241, 0.12)');
          radialGrad.addColorStop(1, 'rgba(2, 132, 199, 0)');
        } else {
          // Celestial Pearl White/Cyan Light
          radialGrad.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
          radialGrad.addColorStop(0.2, 'rgba(165, 243, 252, 0.55)');
          radialGrad.addColorStop(0.6, 'rgba(34, 211, 238, 0.16)');
          radialGrad.addColorStop(1, 'rgba(34, 211, 238, 0)');
        }
      } else {
        // Light White Space Void mode: Cerulean & Solar Sky Blue
        if (p.colorIndex === 0) {
          radialGrad.addColorStop(0, 'rgba(2, 132, 199, 0.65)');
          radialGrad.addColorStop(0.3, 'rgba(2, 132, 199, 0.28)');
          radialGrad.addColorStop(0.7, 'rgba(14, 165, 233, 0.08)');
          radialGrad.addColorStop(1, 'rgba(2, 132, 199, 0)');
        } else if (p.colorIndex === 1) {
          radialGrad.addColorStop(0, 'rgba(59, 130, 246, 0.6)');
          radialGrad.addColorStop(0.3, 'rgba(37, 99, 235, 0.22)');
          radialGrad.addColorStop(0.7, 'rgba(96, 165, 250, 0.08)');
          radialGrad.addColorStop(1, 'rgba(59, 130, 246, 0)');
        } else {
          radialGrad.addColorStop(0, 'rgba(14, 165, 233, 0.7)');
          radialGrad.addColorStop(0.3, 'rgba(56, 189, 248, 0.3)');
          radialGrad.addColorStop(0.7, 'rgba(186, 230, 253, 0.12)');
          radialGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
        }
      }

      ctx.fillStyle = radialGrad;
      ctx.beginPath();
      ctx.arc(proj.x, proj.y, haloRadius, 0, Math.PI * 2);
      ctx.fill();

      // Sharp central photon nucleus
      ctx.fillStyle = dark ? 'rgba(255, 255, 255, 0.92)' : 'rgba(2, 132, 199, 0.85)';
      ctx.beginPath();
      ctx.arc(proj.x, proj.y, Math.max(1.5, screenRadius * 0.22), 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function renderSpacetimeGrid(dark, time, progress) {
    let warpFactor;
    let gridAlpha;

    if (introActive) {
      if (progress < 0.25) {
        warpFactor = progress * 4.0;
        gridAlpha = progress * 3.6;
      } else if (progress < 0.75) {
        warpFactor = 1.0 + Math.sin((progress - 0.25) * Math.PI * 2) * 0.4;
        gridAlpha = 0.9;
      } else {
        const settle = (progress - 0.75) * 4.0;
        warpFactor = 1.0 - settle * 0.55;
        gridAlpha = 0.9 - settle * 0.35;
      }
    } else {
      warpFactor = 0.45;
      gridAlpha = 0.55;
    }

    const mouseGravX = mouseX * 1.2;
    const mouseGravY = mouseY * 1.2;

    let strokeColorLong, strokeColorLat, vertColor;
    if (dark) {
      strokeColorLong = `rgba(0, 240, 255, ${gridAlpha * 0.45})`;
      strokeColorLat = `rgba(14, 165, 233, ${gridAlpha * 0.35})`;
      vertColor = `rgba(56, 189, 248, ${gridAlpha * 0.8})`;
    } else {
      // White Space mode: celestial cerulean & architectural drafting indigo
      strokeColorLong = `rgba(2, 132, 199, ${gridAlpha * 0.45})`;
      strokeColorLat = `rgba(30, 41, 59, ${gridAlpha * 0.22})`;
      vertColor = `rgba(2, 132, 199, ${gridAlpha * 0.75})`;
    }

    ctx.lineWidth = 1;

    // 1. Longitudinal Lines (running along Z axis into distance)
    ctx.strokeStyle = strokeColorLong;
    for (let x = -GRID_SIZE; x <= GRID_SIZE; x += GRID_STEP) {
      ctx.beginPath();
      let started = false;

      for (let z = GRID_DEPTH_NEAR; z <= GRID_DEPTH_FAR; z += 35) {
        const y = getSpacetimeHeight(x, z, time, warpFactor, mouseGravX, mouseGravY);
        const p = project(x, y, z);

        if (!started) {
          ctx.moveTo(p.x, p.y);
          started = true;
        } else {
          ctx.lineTo(p.x, p.y);
        }
      }
      ctx.stroke();
    }

    // 2. Latitudinal Lines (running across X axis at fixed Z depths)
    ctx.strokeStyle = strokeColorLat;
    for (let z = GRID_DEPTH_NEAR; z <= GRID_DEPTH_FAR; z += 55) {
      ctx.beginPath();
      let started = false;

      for (let x = -GRID_SIZE; x <= GRID_SIZE; x += 25) {
        const y = getSpacetimeHeight(x, z, time, warpFactor, mouseGravX, mouseGravY);
        const p = project(x, y, z);

        if (!started) {
          ctx.moveTo(p.x, p.y);
          started = true;
        } else {
          ctx.lineTo(p.x, p.y);
        }
      }
      ctx.stroke();
    }

    // 3. Highlight Coordinate Vertices
    ctx.fillStyle = vertColor;
    for (let z = GRID_DEPTH_NEAR + 60; z <= GRID_DEPTH_FAR - 100; z += 110) {
      for (let x = -GRID_SIZE + 76; x <= GRID_SIZE - 76; x += 76) {
        const y = getSpacetimeHeight(x, z, time, warpFactor, mouseGravX, mouseGravY);
        const p = project(x, y, z);
        if (p.x >= 0 && p.x <= width && p.y >= 0 && p.y <= height) {
          const dotSize = Math.max(1, 2.2 * p.scale);
          ctx.beginPath();
          ctx.arc(p.x, p.y, dotSize, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    }
  }

  function renderTearoffHorizon(dark, progress) {
    const tearNorm = (progress - 0.65) / 0.35;
    const maxRadius = Math.hypot(width, height) * 0.9;
    tearRadius = Math.pow(tearNorm, 1.8) * maxRadius;

    ctx.save();

    ctx.beginPath();
    ctx.arc(cx, cy, tearRadius, 0, Math.PI * 2);
    ctx.lineWidth = 2;
    ctx.strokeStyle = dark
      ? `rgba(0, 245, 255, ${1 - tearNorm})`
      : `rgba(2, 132, 199, ${1 - tearNorm})`;
    ctx.stroke();

    const halo = ctx.createRadialGradient(cx, cy, Math.max(0, tearRadius - 40), cx, cy, tearRadius + 60);
    if (dark) {
      halo.addColorStop(0, 'rgba(0, 245, 255, 0)');
      halo.addColorStop(0.7, `rgba(56, 189, 248, ${(1 - tearNorm) * 0.35})`);
      halo.addColorStop(1, 'rgba(3, 7, 18, 0)');
    } else {
      halo.addColorStop(0, 'rgba(2, 132, 199, 0)');
      halo.addColorStop(0.7, `rgba(2, 132, 199, ${(1 - tearNorm) * 0.25})`);
      halo.addColorStop(1, 'rgba(248, 250, 252, 0)');
    }
    ctx.fillStyle = halo;
    ctx.beginPath();
    ctx.arc(cx, cy, tearRadius + 60, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  /* --------------------------------------------------------------------------
     7. BOOTSTRAP
     -------------------------------------------------------------------------- */
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initSpacetime);
  } else {
    initSpacetime();
  }

})();
