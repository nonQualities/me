<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageFooter from '$lib/components/PageFooter.svelte';
	import { watchlist } from '$lib/data/watchlist.js';

	const quotes = watchlist?.quotes || [];
	const animeSeries = watchlist?.animeSeries || [];
	const animeMovies = watchlist?.animeMovies || [];
	const liveSeries = watchlist?.liveActionSeries || [];
	const totalCount = animeSeries.length + animeMovies.length + liveSeries.length;

	const allSpotlights = [
		...animeSeries.filter(s => s.spotlight).map(s => ({ ...s, format: 'series' })),
		...animeMovies.filter(m => m.spotlight).map(m => ({ ...m, format: 'movies' })),
		...liveSeries.filter(l => l.spotlight).map(l => ({ ...l, format: 'live' }))
	];

	let quoteIndex = $state(0);
	let activeCategory = $state('all');
	let activeGenre = $state('all');
	let searchQuery = $state('');

	const currentQuote = $derived(quotes[quoteIndex] || null);

	function nextQuote() {
		if (quotes.length > 0) {
			quoteIndex = (quoteIndex + 1) % quotes.length;
		}
	}

	function matchesGenre(item) {
		if (activeGenre === 'all') return true;
		const g = (item.genre || '').toLowerCase();
		if (activeGenre === 'scifi') return /sci-fi|cyberpunk|space|mecha|time travel/i.test(g);
		if (activeGenre === 'romance') return /romance|shoujo/i.test(g);
		if (activeGenre === 'action') return /action|shonen|adventure|supernatural|fantasy/i.test(g);
		if (activeGenre === 'psychological') return /psychological|thriller|mystery|crime|horror/i.test(g);
		if (activeGenre === 'drama') return /drama|music|slice of life|comedy|historical/i.test(g);
		return true;
	}

	function matchesSearch(item) {
		const q = searchQuery.trim().toLowerCase();
		if (!q) return true;
		const titleMatch = (item.title || '').toLowerCase().includes(q);
		const jpMatch = (item.jp || '').toLowerCase().includes(q);
		const genreMatch = (item.genre || '').toLowerCase().includes(q);
		return titleMatch || jpMatch || genreMatch;
	}

	function getGenreTags(genreStr) {
		if (!genreStr) return [];
		return genreStr.split('·').map(s => s.trim()).filter(Boolean);
	}

	const filteredSeries = $derived(
		animeSeries.filter(item => (activeCategory === 'all' || activeCategory === 'series' || (activeCategory === 'spotlight' && item.spotlight)) && matchesGenre(item) && matchesSearch(item))
	);

	const filteredMovies = $derived(
		animeMovies.filter(item => (activeCategory === 'all' || activeCategory === 'movies' || (activeCategory === 'spotlight' && item.spotlight)) && matchesGenre(item) && matchesSearch(item))
	);

	const filteredLive = $derived(
		liveSeries.filter(item => (activeCategory === 'all' || activeCategory === 'live' || (activeCategory === 'spotlight' && item.spotlight)) && matchesGenre(item) && matchesSearch(item))
	);

	const hasResults = $derived(filteredSeries.length > 0 || filteredMovies.length > 0 || filteredLive.length > 0);
</script>

<svelte:head>
	<title>Ronit Choudhury — Watchlist &amp; Leisure</title>
	<meta name="description" content="Personal media archive: anime series, anime films, western television, and philosophical quotes." />
</svelte:head>

<main id="main-content" class="app-main rfc-main-content" tabindex="-1">
	<PageHeader
		kicker="Section 09 // Media &amp; Leisure"
		title="Watchlist &amp; Leisure"
		subtitle="165+ complete anime series, cinema films, and television drama with Japanese typography, quotes, and telemetry"
	/>

	<div id="watchlist-page-content">
		<!-- Featured Quote -->
		{#if currentQuote}
			<div class="anime-quote-hud hud-box-cross" role="region" aria-label="Featured Anime Quote">
				<div class="anime-quote-telemetry">
					<span>QUOTE STREAM // 心に残る名言</span>
					<button
						type="button"
						class="anime-quote-cycle-btn"
						onclick={nextQuote}
						title="Cycle featured quote"
					>
						<span>次へ NEXT</span> <span>↻</span>
					</button>
				</div>
				<div class="anime-quote-content">
					<p class="anime-quote-jp" lang="ja">{currentQuote.jp}</p>
					<blockquote class="anime-quote-en">&ldquo;{currentQuote.text}&rdquo;</blockquote>
					<cite class="anime-quote-cite">
						<span>{currentQuote.author}</span>
						<span>//</span>
						<span>{currentQuote.source}</span>
					</cite>
				</div>
			</div>
		{/if}

		<!-- Stats HUD -->
		<div class="anime-stats-hud" role="region" aria-label="Anime Telemetry Overview">
			<button
				type="button"
				class="anime-stat-card"
				class:is-active={activeCategory === 'all'}
				onclick={() => activeCategory = 'all'}
			>
				<span class="stat-en">TOTAL ARCHIVE</span>
				<span class="stat-num">{totalCount}</span>
				<span class="stat-jp">全タイトル</span>
			</button>
			<button
				type="button"
				class="anime-stat-card"
				class:is-active={activeCategory === 'series'}
				onclick={() => activeCategory = 'series'}
			>
				<span class="stat-en">TV SERIES</span>
				<span class="stat-num">{animeSeries.length}</span>
				<span class="stat-jp">テレビアニメ</span>
			</button>
			<button
				type="button"
				class="anime-stat-card"
				class:is-active={activeCategory === 'movies'}
				onclick={() => activeCategory = 'movies'}
			>
				<span class="stat-en">FILMS &amp; MOVIES</span>
				<span class="stat-num">{animeMovies.length}</span>
				<span class="stat-jp">劇場版映画</span>
			</button>
			<button
				type="button"
				class="anime-stat-card"
				class:is-active={activeCategory === 'live'}
				onclick={() => activeCategory = 'live'}
			>
				<span class="stat-en">TV &amp; DRAMA</span>
				<span class="stat-num">{liveSeries.length}</span>
				<span class="stat-jp">実写ドラマ</span>
			</button>
			<button
				type="button"
				class="anime-stat-card"
				class:is-active={activeCategory === 'spotlight'}
				onclick={() => activeCategory = 'spotlight'}
			>
				<span class="stat-en">MASTERWORKS</span>
				<span class="stat-num">{allSpotlights.length}</span>
				<span class="stat-jp">殿堂入り名作</span>
			</button>
		</div>

		<!-- Controls HUD -->
		<div class="anime-controls-hud">
			<div class="anime-category-tabs" role="tablist" aria-label="Filter by media category">
				<button
					type="button"
					role="tab"
					class="anime-cat-btn"
					class:is-active={activeCategory === 'all'}
					aria-selected={activeCategory === 'all'}
					onclick={() => activeCategory = 'all'}
				>
					All Archive <span class="tab-count">{totalCount}</span>
				</button>
				<button
					type="button"
					role="tab"
					class="anime-cat-btn"
					class:is-active={activeCategory === 'series'}
					aria-selected={activeCategory === 'series'}
					onclick={() => activeCategory = 'series'}
				>
					Anime Series <span class="tab-count">{animeSeries.length}</span>
				</button>
				<button
					type="button"
					role="tab"
					class="anime-cat-btn"
					class:is-active={activeCategory === 'movies'}
					aria-selected={activeCategory === 'movies'}
					onclick={() => activeCategory = 'movies'}
				>
					Anime Films <span class="tab-count">{animeMovies.length}</span>
				</button>
				<button
					type="button"
					role="tab"
					class="anime-cat-btn"
					class:is-active={activeCategory === 'live'}
					aria-selected={activeCategory === 'live'}
					onclick={() => activeCategory = 'live'}
				>
					TV &amp; Drama <span class="tab-count">{liveSeries.length}</span>
				</button>
				<button
					type="button"
					role="tab"
					class="anime-cat-btn"
					class:is-active={activeCategory === 'spotlight'}
					aria-selected={activeCategory === 'spotlight'}
					onclick={() => activeCategory = 'spotlight'}
				>
					★ Masterpieces <span class="tab-count">{allSpotlights.length}</span>
				</button>
			</div>

			<div class="anime-genre-scroll-wrap" role="region" aria-label="Genre quick filters">
				<span class="genre-filter-label">GENRE //:</span>
				<div class="anime-genre-chips">
					{#each [
						{ key: 'all', label: 'All Genres' },
						{ key: 'scifi', label: 'Sci-Fi & Cyberpunk' },
						{ key: 'romance', label: 'Romance & Slice of Life' },
						{ key: 'psychological', label: 'Psychological & Mystery' },
						{ key: 'action', label: 'Action & Shonen' },
						{ key: 'drama', label: 'Drama & Music' }
					] as g}
						<button
							type="button"
							class="anime-genre-chip"
							class:is-active={activeGenre === g.key}
							onclick={() => activeGenre = g.key}
						>
							{g.label}
						</button>
					{/each}
				</div>
			</div>

			<div class="anime-search-bar-wrap">
				<input
					type="search"
					class="anime-search-input"
					bind:value={searchQuery}
					placeholder="Filter titles (e.g., Steins;Gate, サイコパス, Sci-Fi)..."
					aria-label="Filter watchlist titles"
				/>
			</div>
		</div>

		<!-- Groups List -->
		{#if !hasResults}
			<div class="hud-box" style="margin-top: var(--sp-4); text-align: center;">
				<p class="rfc-p">No titles match your active category, genre, or search filter.</p>
			</div>
		{:else}
			{#if (activeCategory === 'all' || activeCategory === 'series' || activeCategory === 'spotlight') && filteredSeries.length > 0}
				<section class="anime-group-section" aria-label="TV Series" style="margin-bottom: var(--sp-6);">
					<div class="hud-header">
						<span class="hud-title">TV Series // テレビアニメ</span>
						<span class="hud-sub">Division I [ {filteredSeries.length} RECORDS ]</span>
					</div>
					<div class="anime-cards-grid">
						{#each filteredSeries as item}
							<article class="anime-card" class:is-spotlight={item.spotlight}>
								<div class="anime-card-header">
									<span class="anime-card-code">SERIES.{String(item.id).padStart(3, '0')}</span>
									<div class="anime-card-badges">
										{#if item.spotlight}<span class="anime-spot-tag">★ ICON</span>{/if}
										<span class="anime-format-tag">TV SERIES</span>
									</div>
								</div>
								<div>
									<h3 class="anime-card-en">{item.title}</h3>
									{#if item.jp}<div class="anime-card-jp" lang="ja">{item.jp}</div>{/if}
								</div>
								<div style="margin-top: 8px;">
									{#each getGenreTags(item.genre) as tag}
										<span class="anime-genre-pill">{tag}</span>
									{/each}
								</div>
								<div class="anime-card-footer">
									<span>COMPLETED // 完</span>
								</div>
							</article>
						{/each}
					</div>
				</section>
			{/if}

			{#if (activeCategory === 'all' || activeCategory === 'movies' || activeCategory === 'spotlight') && filteredMovies.length > 0}
				<section class="anime-group-section" aria-label="Films & Movies" style="margin-bottom: var(--sp-6);">
					<div class="hud-header">
						<span class="hud-title">Films &amp; Movies // 劇場版</span>
						<span class="hud-sub">Division II [ {filteredMovies.length} RECORDS ]</span>
					</div>
					<div class="anime-cards-grid">
						{#each filteredMovies as item}
							<article class="anime-card" class:is-spotlight={item.spotlight}>
								<div class="anime-card-header">
									<span class="anime-card-code">FILM.{String(item.id).padStart(3, '0')}</span>
									<div class="anime-card-badges">
										{#if item.spotlight}<span class="anime-spot-tag">★ ICON</span>{/if}
										<span class="anime-format-tag">THEATRICAL</span>
									</div>
								</div>
								<div>
									<h3 class="anime-card-en">{item.title}</h3>
									{#if item.jp}<div class="anime-card-jp" lang="ja">{item.jp}</div>{/if}
								</div>
								<div style="margin-top: 8px;">
									{#each getGenreTags(item.genre) as tag}
										<span class="anime-genre-pill">{tag}</span>
									{/each}
								</div>
								<div class="anime-card-footer">
									<span>COMPLETED // 完</span>
								</div>
							</article>
						{/each}
					</div>
				</section>
			{/if}

			{#if (activeCategory === 'all' || activeCategory === 'live' || activeCategory === 'spotlight') && filteredLive.length > 0}
				<section class="anime-group-section" aria-label="TV & Drama" style="margin-bottom: var(--sp-6);">
					<div class="hud-header">
						<span class="hud-title">TV &amp; Drama // 実写ドラマ</span>
						<span class="hud-sub">Division III [ {filteredLive.length} RECORDS ]</span>
					</div>
					<div class="anime-cards-grid">
						{#each filteredLive as item}
							<article class="anime-card" class:is-spotlight={item.spotlight}>
								<div class="anime-card-header">
									<span class="anime-card-code">DRAMA.{String(item.id).padStart(3, '0')}</span>
									<div class="anime-card-badges">
										{#if item.spotlight}<span class="anime-spot-tag">★ ICON</span>{/if}
										<span class="anime-format-tag">LIVE DRAMA</span>
									</div>
								</div>
								<div>
									<h3 class="anime-card-en">{item.title}</h3>
									{#if item.jp}<div class="anime-card-jp" lang="ja">{item.jp}</div>{/if}
								</div>
								<div style="margin-top: 8px;">
									{#each getGenreTags(item.genre) as tag}
										<span class="anime-genre-pill">{tag}</span>
									{/each}
								</div>
								<div class="anime-card-footer">
									<span>COMPLETED // 完</span>
								</div>
							</article>
						{/each}
					</div>
				</section>
			{/if}
		{/if}
	</div>

	<PageFooter currentPage="watchlist" />
</main>
