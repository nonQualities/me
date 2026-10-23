<script>
	import { base } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageFooter from '$lib/components/PageFooter.svelte';
	import { reading, textbooks } from '$lib/data/reading.js';
	import { watchlist } from '$lib/data/watchlist.js';
	import { writing } from '$lib/data/writing.js';

	const totalMedia = (watchlist?.animeSeries?.length || 0) + (watchlist?.animeMovies?.length || 0) + (watchlist?.liveActionSeries?.length || 0);
	const totalBooks = (reading?.length || 0) + (textbooks?.length || 0);

	// Curated real spotlights from reading.js
	const featuredReading = reading.slice(18, 25);
	const featuredTextbooks = textbooks.slice(0, 4);

	// Curated real masterworks from watchlist.js (Strictly WITHOUT anime or series in brackets)
	const featuredWatchlist = [
		{ title: 'Ergo Proxy', jp: 'エルゴプラクシー', genre: 'Cyberpunk · Psychological · Mystery' },
		{ title: 'Steins;Gate', jp: 'シュタインズ・ゲート', genre: 'Sci-Fi · Thriller · Psychological' },
		{ title: 'Cowboy Bebop', jp: 'カウボーイビバップ', genre: 'Sci-Fi · Neo-noir · Space Western' },
		{ title: 'Barakamon', jp: 'ばらかもん', genre: 'Slice of Life · Art · Philosophy' },
		{ title: 'Your Lie in April', jp: '四月は君の嘘', genre: 'Music · Romance · Drama' }
	];

	// Real quote from watchlist data
	const spotlightQuote = watchlist?.quotes?.[0] || {
		text: "Whatever happens, happens.",
		jp: "「何があっても、なるようになるさ」",
		author: "Spike Spiegel",
		source: "Cowboy Bebop"
	};
</script>

<svelte:head>
	<title>Ronit Choudhury — Personal Archive &amp; Life</title>
	<meta name="description" content="Personal archive of Ronit Choudhury: Reading, philosophy, music, fine arts, cinema, anime watchlist, and essays." />
</svelte:head>

<main id="main-content" class="app-main rfc-main-content" tabindex="-1">
	<PageHeader
		kicker="Portal Hub 02 // Personal Archive"
		title="Personal Archive &amp; Life"
		subtitle="Selected literature, critical philosophy, fine arts, musical instruments, media archive, and reflective essays"
	/>

	<!-- Personal Narrative & Context -->
	<section class="about-card hud-box-cross" aria-label="Personal Narrative & Background">
		<div class="about-card-header">
			<span class="about-card-kicker">[ LIFE BEYOND LOW-LEVEL ENGINEERING ]</span>
			<h2 class="section-heading">Personal Life, Arts &amp; Leisure</h2>
		</div>

		<p class="rfc-p">
			I was born in Panchatirtha Hajo and lived there until class 10th. After completing school, I moved to Guwahati to pursue Higher Secondary education at B.Borooah College, and eventually joined the Department of Information Technology at Gauhati University.
		</p>
		<p class="rfc-p">
			Outside computer science, I have been associated with fine arts since an early age, having completed a four-year diploma in fine arts. I design static graphics, having worked independently and in industry, and maintain a continuous passion for visual composition and typography.
		</p>
		<p class="rfc-p">
			In music, I play the guitar, I am learning the piano (though piano is very hard), and I sing. I maintain a regular reading habit spanning classical literature, epistemology, philosophy, and foundational computer science textbooks, alongside an archive of anime series, films, and television drama.
		</p>

		<!-- Personal Telemetry Quote -->
		<div class="personal-quote-strip">
			<div class="personal-quote-jp">{spotlightQuote.jp}</div>
			<div class="personal-quote-text">&ldquo;{spotlightQuote.text}&rdquo;</div>
			<div class="personal-quote-author">&mdash; {spotlightQuote.author} // {spotlightQuote.source}</div>
		</div>
	</section>

	<!-- Archival Telemetry Metrics -->
	<div class="hud-box" style="margin-top: var(--sp-5); margin-bottom: var(--sp-6);" aria-label="Personal Metrics">
		<div class="hud-header">
			<span class="hud-title">ARCHIVAL TELEMETRY</span>
			<span class="hud-sub">[ RECORD OVERVIEW ]</span>
		</div>
		<div class="gh-summary-grid">
			<div class="gh-metric">
				<span class="gh-metric-label">Hometown</span>
				<span class="gh-metric-val">Panchatirtha Hajo</span>
			</div>
			<div class="gh-metric">
				<span class="gh-metric-label">Fine Arts Diploma</span>
				<span class="gh-metric-val">4 Years Completed</span>
			</div>
			<div class="gh-metric">
				<span class="gh-metric-label">Catalogued Books</span>
				<span class="gh-metric-val">{totalBooks} Titles</span>
			</div>
			<div class="gh-metric">
				<span class="gh-metric-label">Media Archive</span>
				<span class="gh-metric-val">{totalMedia} Records</span>
			</div>
		</div>
	</div>

	<!-- Curated Reading & Literature -->
	<section class="dossier-section hud-box-cross" aria-label="Curated Reading">
		<div class="hud-header">
			<a href="{base}/reading/" class="hud-title hud-title-link">SELECTED LITERATURE &amp; PHILOSOPHY &rarr;</a>
			<a href="{base}/reading/" class="dossier-jump-link">FULL READING CATALOG ({totalBooks}) &rarr;</a>
		</div>

		<div class="personal-grid">
			{#each featuredReading as book}
				<a href="{base}/reading/" class="personal-card">
					<div class="personal-card-top">
						<span class="personal-card-tag">{book.genre}</span>
					</div>
					<h3 class="personal-card-title">{book.title}</h3>
					<div class="personal-card-sub">{book.author}</div>
				</a>
			{/each}
		</div>

		<div class="personal-subhead">
			<span class="personal-subhead-kicker">[ DIVISION II // FOUNDATIONAL CS TEXTBOOKS ]</span>
		</div>

		<div class="personal-grid">
			{#each featuredTextbooks as tb}
				<a href="{base}/reading/" class="personal-card">
					<div class="personal-card-top">
						<span class="personal-card-tag">{tb.domain || 'Core Systems'}</span>
					</div>
					<h3 class="personal-card-title">{tb.title}</h3>
					<div class="personal-card-sub">{tb.author}</div>
				</a>
			{/each}
		</div>

		<div class="dossier-action-bar">
			<a href="{base}/reading/" class="rfc-btn">Inspect All 50+ Catalogued Books &rarr;</a>
		</div>
	</section>

	<!-- Watchlist & Media Masterworks -->
	<section class="dossier-section hud-box-cross" aria-label="Watchlist & Media">
		<div class="hud-header">
			<a href="{base}/watchlist/" class="hud-title hud-title-link">MEDIA ARCHIVE &amp; MASTERWORKS &rarr;</a>
			<a href="{base}/watchlist/" class="dossier-jump-link">COMPLETE WATCHLIST ({totalMedia}) &rarr;</a>
		</div>

		<div class="personal-grid">
			{#each featuredWatchlist as item}
				<a href="{base}/watchlist/" class="personal-card">
					<div class="personal-card-top">
						<span class="personal-card-tag">{item.genre}</span>
						<span class="personal-jp-sub">{item.jp}</span>
					</div>
					<h3 class="personal-card-title">{item.title}</h3>
				</a>
			{/each}
		</div>

		<div class="dossier-action-bar">
			<a href="{base}/watchlist/" class="rfc-btn">Browse Complete 165+ Media Archive &rarr;</a>
		</div>
	</section>

	<!-- Essays & Writing -->
	<section class="dossier-section hud-box-cross" aria-label="Writing & Essays">
		<div class="hud-header">
			<a href="{base}/writing/" class="hud-title hud-title-link">PUBLICATIONS &amp; REFLECTIONS &rarr;</a>
			<a href="{base}/writing/" class="dossier-jump-link">WRITING ARCHIVE &rarr;</a>
		</div>

		<div class="personal-writing-list">
			{#each writing.items as article}
				<article class="personal-writing-card">
					<div class="personal-writing-meta">
						<span class="personal-writing-date">{article.date}</span>
						<span class="personal-writing-badge">ESSAY</span>
					</div>
					<h3 class="personal-writing-title">
						<a href={article.url} target="_blank" rel="noopener noreferrer">
							{article.title} &nearr;
						</a>
					</h3>
				</article>
			{/each}
		</div>

		<div class="dossier-action-bar">
			<a href={writing.moreLink.url} target="_blank" rel="noopener noreferrer" class="rfc-btn">
				{writing.moreLink.text} &nearr;
			</a>
		</div>
	</section>

	<!-- Additional Life Vectors -->
	<div class="personal-vectors-row">
		<a href="{base}/about/" class="personal-vector-card hud-box-cross">
			<div class="personal-vector-num">[ 01 ]</div>
			<div class="personal-vector-title">About &amp; Principles Manifesto &rarr;</div>
			<p class="personal-vector-desc">Complete biographical milestones, operating directives, and personal statement.</p>
		</a>
		<a href="{base}/contact/" class="personal-vector-card hud-box-cross">
			<div class="personal-vector-num">[ 08 ]</div>
			<div class="personal-vector-title">Contact &amp; Conversation &rarr;</div>
			<p class="personal-vector-desc">Open for collaborations, internships, and a long chat.</p>
		</a>
	</div>

	<PageFooter />
</main>

<style>
	.dossier-section {
		margin-top: var(--sp-6);
		margin-bottom: var(--sp-6);
		padding: 24px;
	}

	.hud-title-link {
		color: var(--fg);
		text-decoration: none;
		transition: color 0.15s ease-out;
	}

	.hud-title-link:hover {
		color: var(--accent);
	}

	.dossier-jump-link {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		font-weight: 700;
		color: var(--accent);
		letter-spacing: 0.08em;
		text-decoration: none;
	}

	.dossier-jump-link:hover {
		text-decoration: underline;
	}

	.dossier-action-bar {
		margin-top: 20px;
		padding-top: 16px;
		border-top: 1px solid var(--border);
		display: flex;
		justify-content: flex-end;
	}

	/* Personal Quote Strip */
	.personal-quote-strip {
		margin-top: 20px;
		padding: 16px 20px;
		background: var(--bg-panel);
		border-left: 3px solid var(--accent);
		border-radius: var(--radius);
	}

	.personal-quote-jp {
		font-family: 'Noto Sans JP', sans-serif;
		font-size: 13px;
		color: var(--accent);
		margin-bottom: 6px;
	}

	.personal-quote-text {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 15px;
		font-weight: 600;
		color: var(--fg);
		margin-bottom: 6px;
		font-style: italic;
	}

	.personal-quote-author {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		font-weight: 700;
		color: var(--fg-subtle);
	}

	/* Cards Grid */
	.personal-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
		gap: 16px;
		margin-top: 16px;
	}

	.personal-card {
		padding: 16px;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		transition: border-color 0.15s ease-out;
	}

	.personal-card:hover {
		border-color: var(--accent);
	}

	.personal-card-top {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin-bottom: 10px;
		gap: 8px;
	}

	.personal-card-tag {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		padding: 2px 7px;
		background: var(--tag-bg);
		border: 1px solid var(--border);
		color: var(--fg);
		border-radius: var(--radius-xs);
	}

	.personal-jp-sub {
		font-family: 'Noto Sans JP', sans-serif;
		font-size: 11px;
		color: var(--accent);
	}

	.personal-card-title {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 16px;
		font-weight: 700;
		color: var(--fg);
		margin: 0 0 6px 0;
	}

	.personal-card-sub {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		color: var(--fg-dim);
	}

	.personal-subhead {
		margin-top: 24px;
		margin-bottom: 8px;
	}

	.personal-subhead-kicker {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		font-weight: 700;
		color: var(--accent);
		letter-spacing: 0.1em;
	}

	/* Writing list */
	.personal-writing-list {
		display: flex;
		flex-direction: column;
		gap: 14px;
		margin-top: 16px;
	}

	.personal-writing-card {
		padding: 16px 20px;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		transition: border-color 0.15s ease-out;
	}

	.personal-writing-card:hover {
		border-color: var(--accent);
	}

	.personal-writing-meta {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 8px;
	}

	.personal-writing-date {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		font-weight: 700;
		color: var(--fg-subtle);
	}

	.personal-writing-badge {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		padding: 2px 6px;
		background: var(--accent);
		color: #ffffff;
		border-radius: var(--radius-xs);
		font-weight: 700;
	}

	.personal-writing-title {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 16px;
		font-weight: 700;
		margin: 0;
	}

	.personal-writing-title a {
		color: var(--fg);
		text-decoration: none;
		transition: color 0.15s;
	}

	.personal-writing-title a:hover {
		color: var(--accent);
	}

	/* Vectors Row */
	.personal-vectors-row {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 18px;
		margin-top: var(--sp-6);
		margin-bottom: var(--sp-6);
	}

	.personal-vector-card {
		padding: 20px;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		text-decoration: none;
		transition: border-color 0.15s ease-out;
	}

	.personal-vector-card:hover {
		border-color: var(--accent);
	}

	.personal-vector-num {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		font-weight: 700;
		color: var(--accent);
		margin-bottom: 8px;
	}

	.personal-vector-title {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 18px;
		font-weight: 700;
		color: var(--fg);
		margin-bottom: 6px;
	}

	.personal-vector-desc {
		font-family: 'JetBrains Mono', monospace;
		font-size: 12px;
		line-height: 1.55;
		color: var(--fg-dim);
		margin: 0;
	}

	@media (max-width: 640px) {
		.dossier-section {
			padding: 16px 12px;
		}

		.personal-grid,
		.personal-vectors-row {
			grid-template-columns: 1fr;
			gap: 12px;
		}

		.personal-card,
		.personal-vector-card {
			padding: 16px 14px;
		}

		.dossier-action-bar {
			justify-content: stretch;
		}

		.dossier-action-bar a {
			width: 100%;
			text-align: center;
			justify-content: center;
		}
	}
</style>
