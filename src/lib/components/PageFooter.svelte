<script>
	import { base } from '$app/paths';

	/** @type {{ currentPage?: string }} */
	let { currentPage } = $props();

	const SUBPAGES = [
		{ key: 'about',      num: '01', title: 'About & Principles', path: '/about/' },
		{ key: 'stack',      num: '02', title: 'Technical Stack', path: '/stack/' },
		{ key: 'projects',   num: '03', title: 'Projects & Systems', path: '/projects/' },
		{ key: 'experience', num: '04', title: 'Experience & Internships', path: '/experience/' },
		{ key: 'github',     num: '05', title: 'GitHub Telemetry', path: '/github/' },
		{ key: 'reading',    num: '06', title: 'Reading & Notes', path: '/reading/' },
		{ key: 'writing',    num: '07', title: 'Writing & Articles', path: '/writing/' },
		{ key: 'contact',    num: '08', title: 'Contact Endpoints', path: '/contact/' },
		{ key: 'watchlist',  num: '09', title: 'Watchlist & Leisure', path: '/watchlist/' }
	];

	const currentIndex = $derived(SUBPAGES.findIndex(p => p.key === currentPage));
	const prevItem = $derived(
		currentIndex > 0 ? SUBPAGES[currentIndex - 1] : { num: '00', title: 'Overview', path: '/' }
	);
	const nextItem = $derived(
		currentIndex !== -1 && currentIndex < SUBPAGES.length - 1
			? SUBPAGES[currentIndex + 1]
			: { num: '00', title: 'Overview', path: '/' }
	);
</script>

{#if currentPage}
	<nav class="page-pagination-compact" aria-label="Section navigation">
		<a
			href="{base}{prevItem.path}"
			class="pager-icon-btn pager-prev"
			rel="prev"
			title="Previous: {prevItem.num}. {prevItem.title} (Hotkey: [)"
			aria-label="Previous section: {prevItem.num}. {prevItem.title}"
		>
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
				<line x1="19" y1="12" x2="5" y2="12"></line>
				<polyline points="12 19 5 12 12 5"></polyline>
			</svg>
		</a>
		<a
			href="{base}/"
			class="pager-icon-btn pager-home"
			title="Return to Overview (Hotkey: 0)"
			aria-label="Return to Overview"
		>
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
				<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
				<polyline points="9 22 9 12 15 12 15 22"></polyline>
			</svg>
		</a>
		<a
			href="{base}{nextItem.path}"
			class="pager-icon-btn pager-next"
			rel="next"
			title="Next: {nextItem.num}. {nextItem.title} (Hotkey: ])"
			aria-label="Next section: {nextItem.num}. {nextItem.title}"
		>
			<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
				<line x1="5" y1="12" x2="19" y2="12"></line>
				<polyline points="12 5 19 12 12 19"></polyline>
			</svg>
		</a>
	</nav>
{/if}

<footer class="page-footer">
	<span>Ronit Choudhury &middot; 2026</span>
	<span>Guwahati, Assam</span>
</footer>
