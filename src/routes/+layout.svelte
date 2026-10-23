<script>
	import '../app.css';
	import { base } from '$app/paths';
	import { goto, onNavigate } from '$app/navigation';
	import { page } from '$app/stores';
	import { browser } from '$app/environment';
	import TopBar from '$lib/components/TopBar.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';
	import CommandPalette from '$lib/components/CommandPalette.svelte';
	import HotkeysModal from '$lib/components/HotkeysModal.svelte';
	import TransitionOverlay from '$lib/components/TransitionOverlay.svelte';
	import { transitionManager } from '$lib/transitions.svelte.js';
	import { theme } from '$lib/theme.svelte.js';

	onNavigate((navigation) => {
		if (!browser || !document.startViewTransition || transitionManager.active) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	/** @type {{ children: import('svelte').Snippet }} */
	let { children } = $props();

	let isSearchOpen = $state(false);
	let isHotkeysOpen = $state(false);

	const PAGES = [
		'/',
		'/about/',
		'/stack/',
		'/projects/',
		'/experience/',
		'/github/',
		'/reading/',
		'/writing/',
		'/contact/',
		'/watchlist/'
	];

	function handleGlobalKeydown(e) {
		// Ignore if target is input, textarea, etc.
		const target = /** @type {HTMLElement} */ (e.target);
		if (target && (['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName) || target.isContentEditable)) {
			return;
		}

		// Command palette: / or Cmd+K / Ctrl+K
		if (e.key === '/' || ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k')) {
			e.preventDefault();
			isHotkeysOpen = false;
			isSearchOpen = true;
			return;
		}

		// Hotkeys modal: ? or Shift+/
		if (e.key === '?' || (e.shiftKey && e.key === '/')) {
			e.preventDefault();
			isSearchOpen = false;
			isHotkeysOpen = !isHotkeysOpen;
			return;
		}

		// Theme toggle: t
		if (e.key.toLowerCase() === 't') {
			e.preventDefault();
			theme.toggle();
			return;
		}

		// Section jump: 0 - 9
		if (e.key >= '0' && e.key <= '9') {
			const idx = parseInt(e.key, 10);
			if (PAGES[idx]) {
				e.preventDefault();
				const targetPath = (base + PAGES[idx]).replace(/\/+/g, '/');
				goto(targetPath);
			}
			return;
		}

		// Pager shortcuts: [ (prev) and ] (next)
		if (e.key === '[' || e.key === ']') {
			const currentPath = $page.url.pathname;
			const normalized = currentPath.endsWith('/') ? currentPath : currentPath + '/';
			let currentIndex = PAGES.findIndex(p => {
				const full = (base + p).replace(/\/+/g, '/');
				const normFull = full.endsWith('/') ? full : full + '/';
				return normFull === normalized;
			});

			if (currentIndex === -1) {
				// Try matching by section key
				currentIndex = PAGES.findIndex(p => p !== '/' && normalized.includes(p));
			}

			if (currentIndex !== -1) {
				e.preventDefault();
				let targetIndex = currentIndex;
				if (e.key === '[') {
					targetIndex = currentIndex === 0 ? PAGES.length - 1 : currentIndex - 1;
				} else {
					targetIndex = currentIndex === PAGES.length - 1 ? 0 : currentIndex + 1;
				}
				const targetPath = (base + PAGES[targetIndex]).replace(/\/+/g, '/');
				goto(targetPath);
			}
		}
	}

	const PRO_ROUTES = ['/professional', '/stack', '/projects', '/experience', '/github'];
	const PERSONAL_ROUTES = ['/personal', '/reading', '/watchlist', '/writing', '/about'];

	const activeDimension = $derived.by(() => {
		const path = $page.url.pathname;
		if (PRO_ROUTES.some(r => path.includes(r))) return 'pro';
		if (PERSONAL_ROUTES.some(r => path.includes(r))) return 'personal';
		return 'neutral';
	});

	$effect(() => {
		if (browser) {
			if (activeDimension !== 'neutral') {
				document.documentElement.setAttribute('data-dimension', activeDimension);
			} else {
				document.documentElement.removeAttribute('data-dimension');
			}
		}
	});
</script>

<svelte:window onkeydown={handleGlobalKeydown} />

<a href="#main-content" class="skip-link">Skip to main content</a>

<TopBar
	onOpenSearch={() => { isHotkeysOpen = false; isSearchOpen = true; }}
	onOpenHotkeys={() => { isSearchOpen = false; isHotkeysOpen = true; }}
/>

<div class="app-container" data-dimension={activeDimension} class:dimension-pro={activeDimension === 'pro'} class:dimension-personal={activeDimension === 'personal'}>
	<Sidebar />
	{@render children()}
</div>

<CommandPalette bind:isOpen={isSearchOpen} onClose={() => isSearchOpen = false} />
<HotkeysModal bind:isOpen={isHotkeysOpen} onClose={() => isHotkeysOpen = false} />
<TransitionOverlay />

