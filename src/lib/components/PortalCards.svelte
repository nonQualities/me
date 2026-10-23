<script>
	import { base } from '$app/paths';
	import { transitionManager } from '$lib/transitions.svelte.js';

	function handleProfessionalClick(e) {
		e.preventDefault();
		const target = (base + '/professional/').replace(/\/+/g, '/');
		transitionManager.navigate(target, 'professional');
	}

	function handlePersonalClick(e) {
		e.preventDefault();
		const target = (base + '/personal/').replace(/\/+/g, '/');
		transitionManager.navigate(target, 'personal');
	}
</script>

<section class="portal-gateways-section hud-box-cross" aria-label="Primary Portals">
	<div class="hud-header">
		<span class="hud-title">PORTAL HUBS // PRIMARY GATEWAYS</span>
		<span class="hud-sub">[ SELECT DIMENSION ]</span>
	</div>

	<div class="portal-gateways-grid">
		<!-- Professional Portal Gateway (Phosphor Terminal Dossier) -->
		<div class="portal-card portal-professional">
			<div class="portal-card-top">
				<a
					href="{base}/professional/"
					class="portal-kicker-badge"
					onclick={handleProfessionalClick}
					aria-label="Open Professional Portal"
				>
					<span class="portal-badge-dot dot-green"></span>
					<span>SYS.PORTAL // 01</span>
				</a>
				<a
					href="{base}/professional/"
					class="portal-icon-indicator"
					onclick={handleProfessionalClick}
					title="Open Professional Systems Terminal"
					aria-label="Open Professional Systems Terminal"
				>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
						<polyline points="4 17 10 11 4 5"></polyline>
						<line x1="12" y1="19" x2="20" y2="19"></line>
					</svg>
				</a>
			</div>

			<div class="portal-card-body">
				<a
					href="{base}/professional/"
					class="portal-title-link"
					onclick={handleProfessionalClick}
				>
					<h2 class="portal-title">Professional Info</h2>
				</a>
				<p class="portal-subtitle">
					Systems programming, Delay-Tolerant Networks (DTN), store-carry-forward topologies, deterministic software, and Gauhati University academic research.
				</p>
			</div>

			<div class="portal-card-pillars" aria-label="Professional Sections">
				<a href="{base}/stack/" class="portal-pill-tag">Tech Stack &rarr;</a>
				<a href="{base}/projects/" class="portal-pill-tag">Projects &amp; Systems &rarr;</a>
				<a href="{base}/experience/" class="portal-pill-tag">Experience &rarr;</a>
				<a href="{base}/github/" class="portal-pill-tag">GitHub Telemetry &rarr;</a>
			</div>

			<a
				href="{base}/professional/"
				class="portal-card-action"
				onclick={handleProfessionalClick}
				aria-label="Launch Professional Hub"
			>
				<span class="action-label">OPEN PROFESSIONAL HUB</span>
				<span class="portal-arrow">&rarr;</span>
			</a>
		</div>

		<!-- Personal Portal Gateway (Warm Terracotta & Amber Literary Archive) -->
		<div class="portal-card portal-personal">
			<div class="portal-card-top">
				<a
					href="{base}/personal/"
					class="portal-kicker-badge"
					onclick={handlePersonalClick}
					aria-label="Open Personal Portal"
				>
					<span class="portal-badge-dot dot-amber"></span>
					<span>ARCHIVE.PORTAL // 02</span>
				</a>
				<a
					href="{base}/personal/"
					class="portal-icon-indicator"
					onclick={handlePersonalClick}
					title="Open Personal Editorial Archive"
					aria-label="Open Personal Editorial Archive"
				>
					<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
						<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
						<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
					</svg>
				</a>
			</div>

			<div class="portal-card-body">
				<a
					href="{base}/personal/"
					class="portal-title-link"
					onclick={handlePersonalClick}
				>
					<h2 class="portal-title">Personal Info</h2>
				</a>
				<p class="portal-subtitle">
					Selected literature, critical philosophy, foundational CS textbooks, 165+ media archive, musical instruments (guitar &amp; piano), and fine arts training.
				</p>
			</div>

			<div class="portal-card-pillars" aria-label="Personal Sections">
				<a href="{base}/reading/" class="portal-pill-tag">Reading &amp; Notes &rarr;</a>
				<a href="{base}/watchlist/" class="portal-pill-tag">Watchlist &amp; Media &rarr;</a>
				<a href="{base}/writing/" class="portal-pill-tag">Writing &amp; Essays &rarr;</a>
				<a href="{base}/about/" class="portal-pill-tag">Narrative &amp; Arts &rarr;</a>
			</div>

			<a
				href="{base}/personal/"
				class="portal-card-action"
				onclick={handlePersonalClick}
				aria-label="Launch Personal Archive Hub"
			>
				<span class="action-label">EXPLORE PERSONAL ARCHIVE</span>
				<span class="portal-arrow">&rarr;</span>
			</a>
		</div>
	</div>
</section>

<style>
	.portal-gateways-section {
		margin-top: var(--sp-6);
		margin-bottom: var(--sp-6);
		padding: 24px;
	}

	.portal-gateways-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 20px;
		margin-top: 18px;
	}

	.portal-card {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 26px 24px 22px;
		position: relative;
		border-radius: 10px;
		box-sizing: border-box;
		transition: transform 0.18s ease-out, border-color 0.18s ease-out, box-shadow 0.18s ease-out;
	}

	.portal-card:hover {
		transform: translateY(-2px);
	}

	/* ==========================================================================
	   1. PROFESSIONAL CARD (Phosphor Terminal Dossier)
	   ========================================================================== */
	/* Light Mode */
	.portal-professional {
		background: #ffffff;
		border: 1.5px solid #c4d4c7;
		color: #0d1710;
		box-shadow: 0 4px 16px rgba(5, 150, 105, 0.06);
	}

	.portal-professional:hover {
		border-color: #059669;
		box-shadow: 0 6px 24px rgba(5, 150, 105, 0.14);
	}

	.portal-professional .portal-kicker-badge {
		color: #059669;
	}

	.portal-professional .portal-icon-indicator {
		color: #059669;
	}

	.portal-professional .portal-title {
		color: #0d1710;
	}

	.portal-professional .portal-subtitle {
		color: #3e5244;
	}

	.portal-professional .portal-pill-tag {
		background: #f0f6f1;
		border: 1px solid #cce0d1;
		color: #1e3b26;
	}

	.portal-professional .portal-pill-tag:hover {
		background: #059669;
		color: #ffffff;
		border-color: #059669;
	}

	.portal-professional .portal-card-action {
		background: #059669;
		color: #ffffff;
		border: 1px solid #047857;
		box-shadow: 0 2px 8px rgba(5, 150, 105, 0.22);
	}

	.portal-professional:hover .portal-card-action,
	.portal-professional .portal-card-action:hover {
		background: #047857;
		border-color: #065f46;
		color: #ffffff;
		transform: translateY(-1px);
		box-shadow: 0 4px 14px rgba(5, 150, 105, 0.35);
	}

	/* Dark Mode */
	:global([data-theme="dark"]) .portal-professional {
		background: #09150d;
		border: 1.5px solid #1a3824;
		color: #f0f7f2;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45);
	}

	:global([data-theme="dark"]) .portal-professional::before,
	:global([data-theme="dark"]) .portal-professional::after {
		color: #00ff66;
	}

	:global([data-theme="dark"]) .portal-professional:hover {
		border-color: #00ff66;
		background: #0d1f14;
		box-shadow: 0 6px 24px rgba(0, 255, 102, 0.12);
	}

	:global([data-theme="dark"]) .portal-professional .portal-kicker-badge {
		color: #00ff66;
	}

	:global([data-theme="dark"]) .portal-professional .portal-icon-indicator {
		color: #00ff66;
	}

	:global([data-theme="dark"]) .portal-professional .portal-title {
		color: #ffffff;
	}

	:global([data-theme="dark"]) .portal-professional .portal-subtitle {
		color: #92b09c;
	}

	:global([data-theme="dark"]) .portal-professional .portal-pill-tag {
		background: #0e2417;
		border: 1px solid #1d4d2f;
		color: #bbf7d0;
	}

	:global([data-theme="dark"]) .portal-professional .portal-pill-tag:hover {
		background: #00ff66;
		color: #000000;
		border-color: #00ff66;
	}

	:global([data-theme="dark"]) .portal-professional .portal-card-action {
		background: #059669;
		color: #ffffff;
		border: 1px solid #00ff66;
		box-shadow: 0 2px 10px rgba(0, 255, 102, 0.25);
	}

	:global([data-theme="dark"]) .portal-professional:hover .portal-card-action,
	:global([data-theme="dark"]) .portal-professional .portal-card-action:hover {
		background: #00ff66;
		color: #000000;
		border-color: #00ff66;
		transform: translateY(-1px);
		box-shadow: 0 4px 18px rgba(0, 255, 102, 0.45);
	}

	/* ==========================================================================
	   2. PERSONAL CARD (Warm Terracotta & Amber Literary Archive)
	   ========================================================================== */
	/* Light Mode */
	.portal-personal {
		background: #fffdf9;
		border: 1.5px solid #dbc9b5;
		color: #241408;
		box-shadow: 0 4px 16px rgba(184, 93, 25, 0.06);
	}

	.portal-personal:hover {
		border-color: #b85d19;
		box-shadow: 0 6px 24px rgba(184, 93, 25, 0.14);
	}

	.portal-personal .portal-kicker-badge {
		color: #b85d19;
	}

	.portal-personal .portal-icon-indicator {
		color: #b85d19;
	}

	.portal-personal .portal-title {
		color: #241408;
	}

	.portal-personal .portal-subtitle {
		color: #5c4434;
	}

	.portal-personal .portal-pill-tag {
		background: #f7ede0;
		border: 1px solid #e5d1bd;
		color: #4a2810;
	}

	.portal-personal .portal-pill-tag:hover {
		background: #b85d19;
		color: #ffffff;
		border-color: #b85d19;
	}

	.portal-personal .portal-card-action {
		background: #b85d19;
		color: #ffffff;
		border: 1px solid #9a4d13;
		box-shadow: 0 2px 8px rgba(184, 93, 25, 0.22);
	}

	.portal-personal:hover .portal-card-action,
	.portal-personal .portal-card-action:hover {
		background: #9a4d13;
		border-color: #7d3d0e;
		color: #ffffff;
		transform: translateY(-1px);
		box-shadow: 0 4px 14px rgba(184, 93, 25, 0.35);
	}

	/* Dark Mode */
	:global([data-theme="dark"]) .portal-personal {
		background: #170e08;
		border: 1.5px solid #3d2717;
		color: #f8efe6;
		box-shadow: 0 4px 20px rgba(0, 0, 0, 0.45);
	}

	:global([data-theme="dark"]) .portal-personal:hover {
		border-color: #e08338;
		background: #22140c;
		box-shadow: 0 6px 24px rgba(224, 131, 56, 0.14);
	}

	:global([data-theme="dark"]) .portal-personal .portal-kicker-badge {
		color: #e08338;
	}

	:global([data-theme="dark"]) .portal-personal .portal-icon-indicator {
		color: #e08338;
	}

	:global([data-theme="dark"]) .portal-personal .portal-title {
		color: #ffffff;
	}

	:global([data-theme="dark"]) .portal-personal .portal-subtitle {
		color: #c9b4a1;
	}

	:global([data-theme="dark"]) .portal-personal .portal-pill-tag {
		background: #2b180d;
		border: 1px solid #57351e;
		color: #fed7aa;
	}

	:global([data-theme="dark"]) .portal-personal .portal-pill-tag:hover {
		background: #e08338;
		color: #110b06;
		border-color: #e08338;
	}

	:global([data-theme="dark"]) .portal-personal .portal-card-action {
		background: #c96c24;
		color: #ffffff;
		border: 1px solid #e08338;
		box-shadow: 0 2px 10px rgba(224, 131, 56, 0.25);
	}

	:global([data-theme="dark"]) .portal-personal:hover .portal-card-action,
	:global([data-theme="dark"]) .portal-personal .portal-card-action:hover {
		background: #e08338;
		color: #110b06;
		border-color: #e08338;
		transform: translateY(-1px);
		box-shadow: 0 4px 18px rgba(224, 131, 56, 0.45);
	}

	/* ==========================================================================
	   3. SHARED TYPOGRAPHY & MICRO-ELEMENTS
	   ========================================================================== */
	.portal-card-top {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 16px;
	}

	.portal-kicker-badge {
		display: inline-flex;
		align-items: center;
		gap: 8px;
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.1em;
		text-transform: uppercase;
		text-decoration: none;
	}

	.portal-badge-dot {
		width: 7px;
		height: 7px;
		border-radius: 50%;
	}

	.dot-green {
		background: #059669;
	}

	:global([data-theme="dark"]) .dot-green {
		background: #00ff66;
		box-shadow: 0 0 6px rgba(0, 255, 102, 0.6);
	}

	.dot-amber {
		background: #b85d19;
	}

	:global([data-theme="dark"]) .dot-amber {
		background: #e08338;
		box-shadow: 0 0 6px rgba(224, 131, 56, 0.6);
	}

	.portal-icon-indicator {
		display: flex;
		align-items: center;
		text-decoration: none;
		transition: transform 0.2s ease-out;
	}

	.portal-card:hover .portal-icon-indicator {
		transform: scale(1.1);
	}

	.portal-title-link {
		text-decoration: none;
		display: inline-block;
	}

	.portal-title {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 26px;
		font-weight: 700;
		letter-spacing: -0.02em;
		line-height: 1.15;
		margin: 0 0 10px 0;
		transition: color 0.15s ease-out;
	}

	.portal-title-link:hover .portal-title {
		text-decoration: underline;
	}

	.portal-subtitle {
		font-family: 'JetBrains Mono', monospace;
		font-size: 12.5px;
		line-height: 1.6;
		margin: 0 0 20px 0;
	}

	.portal-card-pillars {
		display: flex;
		flex-wrap: wrap;
		gap: 7px;
		margin-bottom: 22px;
	}

	.portal-pill-tag {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		font-weight: 600;
		padding: 4px 9px;
		border-radius: 6px;
		letter-spacing: 0.02em;
		text-decoration: none;
		display: inline-flex;
		align-items: center;
		transition: all 0.15s ease-out;
	}

	.portal-card-action {
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-family: 'JetBrains Mono', monospace;
		font-size: 11.5px;
		font-weight: 700;
		letter-spacing: 0.07em;
		padding: 12px 18px;
		border-radius: 8px;
		text-decoration: none;
		margin-top: 8px;
		box-sizing: border-box;
		transition: all 0.18s ease-out;
	}

	.portal-arrow {
		font-size: 16px;
		line-height: 1;
		transition: transform 0.18s ease-out;
	}

	.portal-card-action:hover .portal-arrow {
		transform: translateX(4px);
	}

	@media (max-width: 640px) {
		.portal-gateways-section {
			padding: 16px 12px;
		}

		.portal-gateways-grid {
			grid-template-columns: 1fr;
			gap: 14px;
		}

		.portal-card {
			padding: 20px 16px 18px;
		}
	}
</style>
