<script>
	import { base } from '$app/paths';
	import { page } from '$app/stores';
	import { transitionManager } from '$lib/transitions.svelte.js';
	import { sidebarManager } from '$lib/sidebar.svelte.js';

	const navItems = [
		{ num: '00', label: 'Overview', path: '/', icon: 'grid' },
		{ num: '01', label: 'About', path: '/about/', icon: 'user' },
		{ num: '02', label: 'Stack', path: '/stack/', icon: 'layers' },
		{ num: '03', label: 'Projects', path: '/projects/', icon: 'terminal' },
		{ num: '04', label: 'Experience', path: '/experience/', icon: 'briefcase' },
		{ num: '05', label: 'GitHub', path: '/github/', icon: 'git' },
		{ num: '06', label: 'Reading', path: '/reading/', icon: 'book' },
		{ num: '07', label: 'Writing', path: '/writing/', icon: 'pen' },
		{ num: '08', label: 'Contact', path: '/contact/', icon: 'mail' },
		{ num: '09', label: 'Watchlist', path: '/watchlist/', icon: 'film' }
	];

	function isActive(itemPath, currentPath) {
		const normalizedCurrent = currentPath.endsWith('/') ? currentPath : currentPath + '/';
		const target = (base + itemPath).replace(/\/+/g, '/');
		const normalizedTarget = target.endsWith('/') ? target : target + '/';

		if (itemPath === '/') {
			return normalizedCurrent === normalizedTarget || normalizedCurrent === (base ? base + '/' : '/');
		}
		return normalizedCurrent.startsWith(normalizedTarget);
	}

	function handleProClick(e) {
		e.preventDefault();
		sidebarManager.closeMobile();
		const target = (base + '/professional/').replace(/\/+/g, '/');
		transitionManager.navigate(target, 'professional');
	}

	function handleLifeClick(e) {
		e.preventDefault();
		sidebarManager.closeMobile();
		const target = (base + '/personal/').replace(/\/+/g, '/');
		transitionManager.navigate(target, 'personal');
	}

	function handleNavClick() {
		sidebarManager.closeMobile();
	}
</script>

{#snippet navIcon(name)}
	{#if name === 'grid'}
		<svg class="sidebar-item-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<rect x="3" y="3" width="7" height="7"></rect>
			<rect x="14" y="3" width="7" height="7"></rect>
			<rect x="14" y="14" width="7" height="7"></rect>
			<rect x="3" y="14" width="7" height="7"></rect>
		</svg>
	{:else if name === 'user'}
		<svg class="sidebar-item-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
			<circle cx="12" cy="7" r="4"></circle>
		</svg>
	{:else if name === 'layers'}
		<svg class="sidebar-item-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
			<polyline points="2 17 12 22 22 17"></polyline>
			<polyline points="2 12 12 17 22 12"></polyline>
		</svg>
	{:else if name === 'terminal'}
		<svg class="sidebar-item-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<polyline points="4 17 10 11 4 5"></polyline>
			<line x1="12" y1="19" x2="20" y2="19"></line>
		</svg>
	{:else if name === 'briefcase'}
		<svg class="sidebar-item-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
			<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
		</svg>
	{:else if name === 'git'}
		<svg class="sidebar-item-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<line x1="6" y1="3" x2="6" y2="15"></line>
			<circle cx="18" cy="6" r="3"></circle>
			<circle cx="6" cy="18" r="3"></circle>
			<path d="M18 9a9 9 0 0 1-9 9"></path>
		</svg>
	{:else if name === 'book'}
		<svg class="sidebar-item-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
			<path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
		</svg>
	{:else if name === 'pen'}
		<svg class="sidebar-item-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path d="M12 19l7-7 3 3-7 7-3-3z"></path>
			<path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"></path>
			<path d="M2 2l7.586 7.586"></path>
		</svg>
	{:else if name === 'mail'}
		<svg class="sidebar-item-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
			<polyline points="22,6 12,13 2,6"></polyline>
		</svg>
	{:else if name === 'film'}
		<svg class="sidebar-item-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
			<rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
			<line x1="7" y1="2" x2="7" y2="22"></line>
			<line x1="17" y1="2" x2="17" y2="22"></line>
			<line x1="2" y1="12" x2="22" y2="12"></line>
			<line x1="2" y1="7" x2="7" y2="7"></line>
			<line x1="2" y1="17" x2="7" y2="17"></line>
			<line x1="17" y1="17" x2="22" y2="17"></line>
			<line x1="17" y1="7" x2="22" y2="7"></line>
		</svg>
	{/if}
{/snippet}

<!-- Mobile Backdrop -->
{#if sidebarManager.isOpenMobile}
	<button
		type="button"
		class="sidebar-mobile-backdrop"
		onclick={() => sidebarManager.closeMobile()}
		aria-label="Close navigation index"
		tabindex="0"
	></button>
{/if}

<aside
	class="app-sidebar"
	class:is-open-mobile={sidebarManager.isOpenMobile}
	class:is-collapsed-desktop={sidebarManager.isCollapsedDesktop}
	aria-label="Section Index"
>
	<div class="sidebar-top-section">
		<!-- Dual Switcher: PRO + LIFE -->
		<div class="sidebar-portals-toggle">
			<a
				href="{base}/professional/"
				class="sidebar-portal-btn portal-pro-btn"
				class:is-active={$page.url.pathname.includes('/professional')}
				onclick={handleProClick}
				title="Professional Info Portal"
			>
				<span class="portal-btn-dot dot-green"></span>
				<span class="btn-text">PRO</span>
			</a>
			<a
				href="{base}/personal/"
				class="sidebar-portal-btn portal-life-btn"
				class:is-active={$page.url.pathname.includes('/personal')}
				onclick={handleLifeClick}
				title="Personal Info Portal"
			>
				<span class="portal-btn-dot dot-gold"></span>
				<span class="btn-text">LIFE</span>
			</a>
		</div>

		<div class="sidebar-nav-header">
			<span class="header-label">INDEX</span>
			<div class="header-controls">
				<span class="header-range">[ 00 - 09 ]</span>
				<!-- Desktop Collapse / Expand Toggle Button -->
				<button
					type="button"
					class="sidebar-collapse-toggle-btn desktop-only"
					onclick={() => sidebarManager.toggleDesktop()}
					title={sidebarManager.isCollapsedDesktop ? 'Expand sidebar' : 'Collapse sidebar'}
					aria-label={sidebarManager.isCollapsedDesktop ? 'Expand sidebar' : 'Collapse sidebar'}
				>
					{#if sidebarManager.isCollapsedDesktop}
						&rarr;
					{:else}
						&larr;
					{/if}
				</button>
				<!-- Mobile Close Button -->
				<button
					type="button"
					class="sidebar-close-mobile-btn mobile-only"
					onclick={() => sidebarManager.closeMobile()}
					title="Close index"
					aria-label="Close index"
				>
					&times;
				</button>
			</div>
		</div>

		<nav class="sidebar-nav-list">
			{#each navItems as item}
				{@const active = isActive(item.path, $page.url.pathname)}
				<a
					href="{base}{item.path}"
					class="sidebar-nav-item"
					class:is-active={active}
					aria-current={active ? 'page' : undefined}
					onclick={handleNavClick}
					title="{item.num} // {item.label}"
				>
					<span class="nav-icon-wrap" aria-hidden="true">
						{@render navIcon(item.icon)}
					</span>
					<span class="nav-idx">{item.num}</span>
					<span class="nav-label">{item.label}</span>
				</a>
			{/each}
		</nav>
	</div>

	<div class="sidebar-footer">
		<div class="sidebar-coords">26.14°N 91.74°E</div>
		<div class="footer-meta">GUWAHATI, ASSAM</div>
		<div class="footer-sub">DETERMINISTIC SYSTEMS</div>
	</div>
</aside>

<style>
	/* Mobile Backdrop */
	.sidebar-mobile-backdrop {
		display: none;
	}

	@media (max-width: 860px) {
		.sidebar-mobile-backdrop {
			display: block;
			position: fixed;
			inset: 0;
			background: rgba(0, 0, 0, 0.65);
			backdrop-filter: blur(2px);
			z-index: 1000;
			border: none;
			padding: 0;
			cursor: pointer;
		}
	}

	/* Dual Switcher: PRO + LIFE */
	.sidebar-portals-toggle {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 6px;
		margin: 0 var(--sp-4) var(--sp-3) var(--sp-4);
		padding-bottom: var(--sp-3);
		border-bottom: 1px solid var(--border-light);
		box-sizing: border-box;
	}

	.sidebar-portal-btn {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		gap: 5px;
		height: 32px;
		padding: 0 4px;
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		font-weight: 700;
		letter-spacing: 0.04em;
		border: 1px solid var(--border);
		box-sizing: border-box;
		text-decoration: none;
		transition: all 0.15s ease-out;
		background: var(--bg-card);
		border-radius: var(--radius-sm, 6px);
	}

	.portal-btn-dot {
		width: 6px;
		height: 6px;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.dot-green {
		background: #059669;
	}

	:global([data-theme="dark"]) .dot-green {
		background: #00ff66;
	}

	.dot-gold {
		background: #b85d19;
	}

	:global([data-theme="dark"]) .dot-gold {
		background: #e08338;
	}

	.portal-pro-btn {
		color: var(--fg);
	}

	.portal-pro-btn:hover,
	.portal-pro-btn.is-active {
		border-color: #059669;
		background: #059669;
		color: #ffffff;
	}

	:global([data-theme="dark"]) .portal-pro-btn:hover,
	:global([data-theme="dark"]) .portal-pro-btn.is-active {
		border-color: #00ff66;
		background: #0e2014;
		color: #00ff66;
	}

	.portal-life-btn {
		color: var(--fg);
	}

	.portal-life-btn:hover,
	.portal-life-btn.is-active {
		border-color: #b85d19;
		background: #b85d19;
		color: #ffffff;
	}

	:global([data-theme="dark"]) .portal-life-btn:hover,
	:global([data-theme="dark"]) .portal-life-btn.is-active {
		border-color: #e08338;
		background: #22160d;
		color: #f0954e;
	}

	.nav-icon-wrap {
		display: inline-flex;
		align-items: center;
		justify-content: center;
		width: 16px;
		height: 16px;
		color: var(--fg-subtle);
		flex-shrink: 0;
		transition: color 0.15s ease-out;
	}

	:global(.sidebar-nav-item:hover) .nav-icon-wrap,
	:global(.sidebar-nav-item.is-active) .nav-icon-wrap {
		color: var(--accent);
	}

	.header-controls {
		display: flex;
		align-items: center;
		gap: 6px;
	}

	.sidebar-collapse-toggle-btn,
	.sidebar-close-mobile-btn {
		background: none;
		border: 1px solid var(--border);
		color: var(--fg-dim);
		padding: 0 4px;
		font-family: var(--font-mono);
		font-size: 11px;
		line-height: 1.2;
		cursor: pointer;
		border-radius: var(--radius-xs, 4px);
	}

	.sidebar-collapse-toggle-btn:hover,
	.sidebar-close-mobile-btn:hover {
		color: var(--accent);
		border-color: var(--accent);
	}

	.desktop-only {
		display: inline-flex;
	}

	.mobile-only {
		display: none;
	}

	@media (max-width: 860px) {
		.desktop-only {
			display: none;
		}
		.mobile-only {
			display: inline-flex;
		}
	}

	/* Desktop Collapsed Rail Mode */
	:global(.app-sidebar.is-collapsed-desktop) {
		width: 68px !important;
		padding: var(--sp-4) 0;
	}

	:global(.app-sidebar.is-collapsed-desktop) .sidebar-portals-toggle {
		grid-template-columns: 1fr;
		margin: 0 8px var(--sp-3) 8px;
		gap: 6px;
	}

	:global(.app-sidebar.is-collapsed-desktop) .btn-text,
	:global(.app-sidebar.is-collapsed-desktop) .header-label,
	:global(.app-sidebar.is-collapsed-desktop) .header-range,
	:global(.app-sidebar.is-collapsed-desktop) .nav-label,
	:global(.app-sidebar.is-collapsed-desktop) .footer-meta,
	:global(.app-sidebar.is-collapsed-desktop) .footer-sub {
		display: none !important;
	}

	:global(.app-sidebar.is-collapsed-desktop) .sidebar-nav-header {
		padding: 0 10px var(--sp-2) 10px;
		justify-content: center;
	}

	:global(.app-sidebar.is-collapsed-desktop) .sidebar-nav-item {
		display: flex !important;
		flex-direction: column !important;
		align-items: center !important;
		justify-content: center !important;
		padding: 7px 4px !important;
		margin: 3px 8px !important;
		border-radius: 6px !important;
		border-left: none !important;
		border: 1px solid transparent !important;
		gap: 2px !important;
		text-align: center !important;
		box-sizing: border-box !important;
	}

	:global(.app-sidebar.is-collapsed-desktop) .sidebar-nav-item:hover {
		background: var(--bg-hover) !important;
		border-color: var(--border) !important;
		color: var(--accent) !important;
	}

	:global(.app-sidebar.is-collapsed-desktop) .sidebar-nav-item.is-active {
		background: var(--accent-subtle, rgba(5, 150, 105, 0.08)) !important;
		border-color: var(--accent) !important;
		color: var(--accent) !important;
	}

	:global(.app-sidebar.is-collapsed-desktop) .nav-icon-wrap {
		width: 20px !important;
		height: 20px !important;
		color: var(--fg-dim) !important;
	}

	:global(.app-sidebar.is-collapsed-desktop) .nav-icon-wrap svg {
		width: 17px !important;
		height: 17px !important;
	}

	:global(.app-sidebar.is-collapsed-desktop) .sidebar-nav-item.is-active .nav-icon-wrap {
		color: var(--accent) !important;
	}

	:global(.app-sidebar.is-collapsed-desktop) .sidebar-nav-item .nav-idx {
		font-size: 9px !important;
		font-weight: 700 !important;
		letter-spacing: 0.04em !important;
		color: var(--fg-subtle) !important;
		line-height: 1 !important;
		display: block !important;
	}

	:global(.app-sidebar.is-collapsed-desktop) .sidebar-nav-item.is-active .nav-idx {
		color: var(--accent) !important;
	}

	:global(.app-sidebar.is-collapsed-desktop) .sidebar-nav-item.is-active::after {
		display: none;
	}

	:global(.app-sidebar.is-collapsed-desktop) .sidebar-footer {
		padding: 8px;
		text-align: center;
	}

	:global(.app-sidebar.is-collapsed-desktop) .sidebar-coords {
		font-size: 8px;
		word-break: break-all;
	}

	/* Mobile Slide-in Drawer Mode */
	@media (max-width: 860px) {
		:global(.app-sidebar) {
			display: flex !important;
			position: fixed !important;
			top: 48px !important;
			left: 0 !important;
			bottom: 0 !important;
			height: calc(100dvh - 48px) !important;
			height: calc(100vh - 48px) !important;
			width: min(280px, 85vw) !important;
			background: var(--bg) !important;
			border-right: 1.5px solid var(--border-bright) !important;
			z-index: 1001 !important;
			transform: translateX(-100%);
			transition: transform 0.22s cubic-bezier(0.16, 1, 0.3, 1) !important;
			box-shadow: 4px 0 24px rgba(0, 0, 0, 0.35) !important;
		}

		:global(.app-sidebar.is-open-mobile) {
			transform: translateX(0%) !important;
		}
	}
</style>
