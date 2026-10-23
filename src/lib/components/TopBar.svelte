<script>
	import { base } from '$app/paths';
	import { theme } from '$lib/theme.svelte.js';
	import { sidebarManager } from '$lib/sidebar.svelte.js';

	/** @type {{ onOpenSearch: () => void, onOpenHotkeys: () => void }} */
	let { onOpenSearch, onOpenHotkeys } = $props();
</script>

<header class="top-utility-bar">
	<div class="top-bar-left">
		<button
			id="sidebar-toggle-btn"
			class="rfc-btn sidebar-menu-btn"
			type="button"
			aria-label="Toggle navigation index"
			onclick={() => sidebarManager.toggle()}
		>
			<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
				<line x1="3" y1="12" x2="21" y2="12"></line>
				<line x1="3" y1="6" x2="21" y2="6"></line>
				<line x1="3" y1="18" x2="21" y2="18"></line>
			</svg>
			<span class="menu-btn-label">Index</span>
		</button>
		<a href="{base}/" class="top-bar-logo" aria-label="Ronit Choudhury Home">
			<span class="brand-dot"></span>
			<span>Ronit Choudhury</span>
		</a>
		<span class="top-bar-telemetry">GUWAHATI // 26.14°N 91.74°E</span>
	</div>
	<div class="top-bar-right">
		<button
			id="search-btn"
			class="rfc-btn"
			type="button"
			aria-label="Search Portfolio (Hotkey: /)"
			onclick={onOpenSearch}
		>
			<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
				<circle cx="11" cy="11" r="8"></circle>
				<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
			</svg>
			<span class="search-btn-label">Search <kbd>/</kbd></span>
		</button>
		<button
			id="theme-toggle"
			class="rfc-btn theme-toggle-btn"
			type="button"
			aria-label="Toggle visual theme (Hotkey: t)"
			onclick={() => theme.toggle()}
		>
			{#if theme.current === 'dark'}
				<svg class="theme-icon-sun" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<circle cx="12" cy="12" r="5"></circle>
					<line x1="12" y1="1" x2="12" y2="3"></line>
					<line x1="12" y1="21" x2="12" y2="23"></line>
					<line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
					<line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
					<line x1="1" y1="12" x2="3" y2="12"></line>
					<line x1="21" y1="12" x2="23" y2="12"></line>
					<line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
					<line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
				</svg>
				<span class="theme-btn-label">Dark</span>
			{:else}
				<svg class="theme-icon-moon" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
				</svg>
				<span class="theme-btn-label">Light</span>
			{/if}
		</button>
		<button
			id="hotkeys-btn"
			class="rfc-btn"
			type="button"
			aria-label="Keyboard Shortcuts (Hotkey: ?)"
			onclick={onOpenHotkeys}
		>
			<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
				<circle cx="12" cy="12" r="10"></circle>
				<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
				<line x1="12" y1="17" x2="12.01" y2="17"></line>
			</svg>
			<span class="hotkeys-btn-label">Keys <kbd>?</kbd></span>
		</button>
	</div>
</header>
