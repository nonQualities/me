<script>
	import { transitionManager } from '$lib/transitions.svelte.js';

	// 120 pixel tiles for the phosphor green pixelate mosaic reveal (12 columns x 10 rows)
	const PIXEL_COUNT = 120;
</script>

{#if transitionManager.active}
	<div
		class="cinematic-transition-container"
		class:is-professional={transitionManager.active === 'professional'}
		class:is-personal={transitionManager.active === 'personal'}
		class:is-closing={transitionManager.phase === 'closing'}
		class:is-opening={transitionManager.phase === 'opening'}
		aria-hidden="true"
	>
		{#if transitionManager.active === 'professional'}
			<!-- ===================================================================
			     PROFESSIONAL TRANSITION:
			     PAGE TRANSLATE + MOTION BLUR + CHROMATIC ABERRATION
			     -> SOLID PHOSPHOR GREEN MIDPOINT
			     -> RAPID PIXELATION MATRIX DISSOLVE REVEAL
			     =================================================================== -->
			<!-- Sweep & Motion Blur Curtain with Chromatic Aberration -->
			<div class="pro-sweep-curtain">
				<div class="pro-chroma-layer pro-chroma-red"></div>
				<div class="pro-chroma-layer pro-chroma-cyan"></div>
			</div>

			<!-- Midpoint Solid Phosphor Green Screen -->
			<div class="pro-phosphor-screen">
				<div class="pro-midpoint-terminal">
					<div class="pro-terminal-tag">[ 01 // PROFESSIONAL SYSTEM ]</div>
					<div class="pro-terminal-status">TRANSLATING WORKSPACE &middot; LOW-LEVEL SUBSYSTEM</div>
				</div>
			</div>

			<!-- Rapid Pixelation Reveal Grid (Dissolves on Opening Phase) -->
			<div class="pro-pixel-matrix">
				{#each Array(PIXEL_COUNT) as _, i}
					<div
						class="pro-pixel-block"
						style="--delay: {((i * 19) % 180)}ms;"
					></div>
				{/each}
			</div>

		{:else if transitionManager.active === 'personal'}
			<!-- ===================================================================
			     PERSONAL ARCHIVE:
			     WARM AMBER (#e08338) & TERRACOTTA (#b85d19) EDITORIAL SHUTTER
			     (ZERO GRADIENTS)
			     =================================================================== -->
			<!-- Flat Backdrop -->
			<div class="personal-flat-backdrop"></div>

			<!-- Flat Terracotta Shutters with Solid Amber Edges -->
			<div class="personal-curtain-left">
				<div class="personal-curtain-edge"></div>
			</div>
			<div class="personal-curtain-right">
				<div class="personal-curtain-edge"></div>
			</div>

			<!-- Japanese Editorial Hanko / Traditional Seal Stamp HUD -->
			<div class="personal-editorial-hud">
				<div class="personal-film-sprocket-top">
					<span>◆ FRAME 02 // ARCHIVE CATALOGUE</span>
					<span>思索 &middot; 文学 &middot; 思潮</span>
				</div>

				<div class="personal-hanko-seal-wrap">
					<div class="personal-hanko-box">
						<span class="personal-kanji-stamp">記憶</span>
					</div>
					<div class="personal-seal-label">
						<span class="seal-title">PERSONAL ARCHIVE</span>
						<span class="seal-sub">LITERATURE &middot; CINEMA &middot; SOUND &middot; LIFE</span>
					</div>
				</div>

				<div class="personal-film-sprocket-bottom">
					<span>RONIT CHOUDHURY ARCHIVE // 2026</span>
					<span class="seal-dots">&middot; &middot; &middot;</span>
				</div>
			</div>
		{/if}
	</div>
{/if}

<style>
	.cinematic-transition-container {
		position: fixed;
		inset: 0;
		z-index: 99999;
		pointer-events: all;
		overflow: hidden;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	/* ==========================================================================
	   1. PROFESSIONAL TRANSITION: Translate + Motion Blur + Solid Green + Pixelate
	   ========================================================================== */
	/* Motion Blur & Chromatic Sweep Curtain */
	.pro-sweep-curtain {
		position: absolute;
		inset: 0;
		background: #021a10;
		transform: translateX(-100%);
		transition: transform 0.24s cubic-bezier(0.16, 1, 0.3, 1);
		z-index: 2;
		will-change: transform;
	}

	.is-closing .pro-sweep-curtain {
		transform: translateX(0%);
	}

	.is-opening .pro-sweep-curtain {
		transform: translateX(100%);
		transition-duration: 0.22s;
	}

	.pro-chroma-layer {
		position: absolute;
		inset: -20px;
		pointer-events: none;
		mix-blend-mode: screen;
		opacity: 0.7;
	}

	.pro-chroma-red {
		background: rgba(255, 30, 80, 0.35);
		transform: translateX(16px);
		filter: blur(10px);
	}

	.pro-chroma-cyan {
		background: rgba(0, 240, 255, 0.35);
		transform: translateX(-16px);
		filter: blur(10px);
	}

	/* Solid Flat Phosphor Green Screen at Midpoint */
	.pro-phosphor-screen {
		position: absolute;
		inset: 0;
		background: #00ff66;
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 3;
		opacity: 0;
		pointer-events: none;
		transition: opacity 0.18s ease-in;
	}

	.is-closing .pro-phosphor-screen {
		opacity: 1;
	}

	.is-opening .pro-phosphor-screen {
		opacity: 0;
		transition: opacity 0.22s ease-out;
	}

	.pro-midpoint-terminal {
		text-align: center;
		font-family: 'JetBrains Mono', monospace;
		color: #000000;
	}

	.pro-terminal-tag {
		font-size: 18px;
		font-weight: 800;
		letter-spacing: 0.14em;
		margin-bottom: 6px;
	}

	.pro-terminal-status {
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.12em;
	}

	/* Rapid Pixelation Reveal Matrix */
	.pro-pixel-matrix {
		position: absolute;
		inset: 0;
		display: grid;
		grid-template-columns: repeat(12, 1fr);
		grid-template-rows: repeat(10, 1fr);
		z-index: 4;
		pointer-events: none;
	}

	.pro-pixel-block {
		background: #00ff66;
		border: 0.5px solid rgba(0, 204, 82, 0.4);
		transform-origin: center center;
		will-change: transform, opacity;
	}

	.is-closing .pro-pixel-block {
		transform: scale(1);
		opacity: 1;
	}

	/* On opening: Rapid pixel dissolve cascade reveals destination */
	.is-opening .pro-pixel-block {
		animation: pixel-dissolve 0.18s cubic-bezier(0.4, 0, 0.2, 1) forwards;
		animation-delay: var(--delay);
	}

	@keyframes pixel-dissolve {
		0% {
			transform: scale(1.02);
			opacity: 1;
			background: #00ff66;
		}
		50% {
			transform: scale(0.65);
			opacity: 0.85;
			background: #00ff66;
		}
		100% {
			transform: scale(0);
			opacity: 0;
			background: #00cc52;
		}
	}

	/* ==========================================================================
	   2. PERSONAL TRANSITION: Warm Amber #e08338 & Terracotta #b85d19 (Zero Gradients)
	   ========================================================================== */
	.personal-flat-backdrop {
		position: absolute;
		inset: 0;
		background: #110b06;
		z-index: 1;
	}

	.personal-curtain-left,
	.personal-curtain-right {
		position: absolute;
		top: 0;
		bottom: 0;
		width: 51%;
		background: #b85d19;
		transition: transform 0.26s cubic-bezier(0.22, 1, 0.36, 1);
		z-index: 3;
		will-change: transform;
	}

	.personal-curtain-left {
		left: 0;
		transform: translateX(-100%);
	}

	.personal-curtain-left .personal-curtain-edge {
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		width: 3px;
		background: #e08338;
	}

	.personal-curtain-right {
		right: 0;
		transform: translateX(100%);
	}

	.personal-curtain-right .personal-curtain-edge {
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		width: 3px;
		background: #e08338;
	}

	.is-closing .personal-curtain-left {
		transform: translateX(0%);
	}

	.is-closing .personal-curtain-right {
		transform: translateX(0%);
	}

	.is-opening .personal-curtain-left {
		transform: translateX(-100%);
	}

	.is-opening .personal-curtain-right {
		transform: translateX(100%);
	}

	/* Editorial Hanko Seal & Film Sprocket HUD */
	.personal-editorial-hud {
		position: absolute;
		inset: 28px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		z-index: 10;
		pointer-events: none;
		color: #e08338;
		font-family: 'JetBrains Mono', monospace;
	}

	.personal-film-sprocket-top,
	.personal-film-sprocket-bottom {
		display: flex;
		justify-content: space-between;
		width: 100%;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.14em;
		padding: 8px 16px;
		background: #110b06;
		border: 1.5px solid #e08338;
		color: #e08338;
	}

	.personal-hanko-seal-wrap {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 16px;
		text-align: center;
	}

	.personal-hanko-box {
		width: 76px;
		height: 76px;
		border: 3px solid #e08338;
		display: flex;
		align-items: center;
		justify-content: center;
		background: #110b06;
		animation: hanko-stamp 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards;
	}

	@keyframes hanko-stamp {
		0% { transform: scale(1.5) rotate(-10deg); opacity: 0; }
		100% { transform: scale(1.0) rotate(0deg); opacity: 1; }
	}

	.personal-kanji-stamp {
		font-family: 'Noto Sans JP', sans-serif;
		font-size: 34px;
		font-weight: 900;
		color: #e08338;
		letter-spacing: 0.1em;
	}

	.seal-title {
		display: block;
		font-family: 'Space Grotesk', sans-serif;
		font-size: 20px;
		font-weight: 700;
		letter-spacing: 0.18em;
		color: #ffffff;
	}

	.seal-sub {
		display: block;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.14em;
		color: #e08338;
		margin-top: 5px;
	}
</style>
