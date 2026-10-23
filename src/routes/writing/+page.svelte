<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageFooter from '$lib/components/PageFooter.svelte';
	import { writing } from '$lib/data/writing.js';
	import { onMount } from 'svelte';

	let articles = $state(Array.isArray(writing?.items) ? [...writing.items] : []);
	let statusText = $state('Displaying Verified Stored Articles');
	let statusClass = $state('is-cached');

	async function fetchLiveMediumArticles() {
		statusText = 'Synchronizing with Medium RSS feed...';
		statusClass = 'is-fetching';

		try {
			const controller = new AbortController();
			const timeoutId = setTimeout(() => controller.abort(), 6500);

			const res = await fetch('https://feed2json.org/convert?url=https://medium.com/feed/@ronitchoudhury965', {
				signal: controller.signal
			});
			clearTimeout(timeoutId);

			if (!res.ok) throw new Error(`HTTP ${res.status}`);
			const data = await res.json();

			if (Array.isArray(data.items) && data.items.length > 0) {
				articles = data.items.map(/** @type {any} */ entry => {
					let dateStr = 'Medium';
					if (entry.date_published) {
						const d = new Date(entry.date_published);
						if (!isNaN(d.getTime())) {
							dateStr = d.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
						}
					}
					let snippet = '';
					const rawText = entry.summary || entry.content_html || '';
					if (rawText) {
						const tmp = document.createElement('div');
						tmp.innerHTML = rawText;
						snippet = (tmp.textContent || tmp.innerText || '').trim();
						if (snippet.length > 180) snippet = snippet.slice(0, 180).trim() + '...';
					}

					return {
						title: entry.title,
						date: dateStr,
						url: entry.url,
						snippet: snippet
					};
				});

				statusText = `Live Synced (${articles.length} publications from @ronitchoudhury965)`;
				statusClass = 'is-online';
				return;
			}
		} catch (err) {
			console.warn('Medium feed live synchronization fallback:', err);
		}

		statusText = 'Displaying Verified Stored Articles (Offline / Cached)';
		statusClass = 'is-cached';
	}

	onMount(() => {
		fetchLiveMediumArticles();
	});
</script>

<svelte:head>
	<title>Ronit Choudhury — Writing &amp; Articles</title>
	<meta name="description" content="Technical essays, reflections on network engineering, distributed systems, and publications." />
</svelte:head>

<main id="main-content" class="app-main rfc-main-content" tabindex="-1">
	<PageHeader
		kicker="Section 07 // Writing"
		title="Writing &amp; Articles"
		subtitle="Selected essays, reflections on network protocols, systems programming, and public articles"
	/>

	<div id="writing-page-content">
		<div class="medium-feed-hud-header">
			<div class="medium-feed-status">
				<span class="medium-status-dot {statusClass}"></span>
				<span>{statusText}</span>
			</div>
			<button
				type="button"
				class="medium-refresh-btn"
				onclick={fetchLiveMediumArticles}
				aria-label="Refresh latest Medium articles"
			>
				⟲ Sync Latest Feed
			</button>
		</div>

		<div id="medium-articles-list">
			{#if articles.length === 0}
				<p class="rfc-p">No articles available.</p>
			{:else}
				{#each articles as item}
					<article class="item-card">
						<div class="writing-card-header">
							<div class="item-title">
								<a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
							</div>
							<span class="writing-pub-badge">Medium</span>
						</div>
						<div class="item-meta">
							<span class="writing-date">{item.date}</span>
							<span class="meta-sep">&middot;</span>
							<span class="writing-author">Ronit Choudhury</span>
						</div>
						{#if item.snippet}
							<div class="item-snippet">{item.snippet}</div>
						{/if}
						<div class="item-link">
							<a href={item.url} target="_blank" rel="noopener noreferrer" class="writing-read-link">
								Read Publication &rarr;
							</a>
						</div>
					</article>
				{/each}
			{/if}
		</div>

		{#if writing?.moreLink}
			<p class="rfc-p" style="margin-top: 28px;">
				&rarr; <a href={writing.moreLink.url} target="_blank" rel="noopener noreferrer">{writing.moreLink.text}</a>
			</p>
		{/if}
	</div>

	<PageFooter currentPage="writing" />
</main>
