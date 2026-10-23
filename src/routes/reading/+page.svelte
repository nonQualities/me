<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageFooter from '$lib/components/PageFooter.svelte';
	import { reading, textbooks, textbooksNote } from '$lib/data/reading.js';

	// Group reading items by genre
	const readingGenreGroups = $derived.by(() => {
		const groups = new Map();
		(reading || []).forEach(book => {
			const genre = book.genre || 'General';
			if (!groups.has(genre)) groups.set(genre, []);
			groups.get(genre).push(book);
		});
		return Array.from(groups.entries());
	});

	// Group textbooks by genre
	const textbookGenreGroups = $derived.by(() => {
		const groups = new Map();
		(textbooks || []).forEach(tb => {
			const genre = tb.genre || 'General';
			if (!groups.has(genre)) groups.set(genre, []);
			groups.get(genre).push(tb);
		});
		return Array.from(groups.entries());
	});
</script>

<svelte:head>
	<title>Ronit Choudhury — Reading &amp; Notes</title>
	<meta name="description" content="Books I have managed to finish." />
</svelte:head>

<main id="main-content" class="app-main rfc-main-content" tabindex="-1">
	<PageHeader
		kicker="Section 06 // Reading"
		title="Reading &amp; Notes"
		subtitle="From literature, philosophy, critical essays, and foundational computer science textbooks"
	/>

	<div id="reading-page-content">
		<div class="newspaper-grid">
			<!-- Division I -->
			<div class="newspaper-col">
				<div class="reading-col-header">
					<span class="reading-col-kicker">Division I</span>
					<h2 class="reading-col-heading">Literature, Philosophy &amp; Essays</h2>
				</div>

				{#each readingGenreGroups as [genreName, books], gIdx}
					<section class="reading-genre-section">
						<div class="reading-genre-header">
							<span class="reading-genre-title">{genreName}</span>
							<span class="reading-genre-count">[ {books.length} {books.length === 1 ? 'title' : 'titles'} ]</span>
						</div>
						<div class="reading-books-list">
							{#each books as book, bIdx}
								<div class="reading-book-card">
									<span class="reading-book-index">[{String(bIdx + 1).padStart(2, '0')}]</span>
									<div class="reading-book-content">
										<span class="reading-book-title">{book.title}</span>
										<span class="reading-book-sep">&mdash;</span>
										<span class="reading-book-author">{book.author}</span>
									</div>
								</div>
							{/each}
						</div>
					</section>
				{/each}
			</div>

			<!-- Division II -->
			<div class="newspaper-col">
				<div class="reading-col-header">
					<span class="reading-col-kicker">Division II</span>
					<h2 class="reading-col-heading">Foundational Textbooks</h2>
				</div>

				{#if textbooksNote}
					<div class="reading-section-note">{textbooksNote}</div>
				{/if}

				{#each textbookGenreGroups as [genreName, books]}
					<section class="reading-genre-section">
						<div class="reading-genre-header">
							<span class="reading-genre-title">{genreName}</span>
							<span class="reading-genre-count">[ {books.length} {books.length === 1 ? 'volume' : 'volumes'} ]</span>
						</div>
						<div class="reading-books-list">
							{#each books as tb, tbIdx}
								<div class="reading-book-card">
									<span class="reading-book-index">[T{String(tbIdx + 1).padStart(2, '0')}]</span>
									<div class="reading-book-content">
										<span class="reading-book-title">{tb.title}</span>
										<span class="reading-book-sep">&mdash;</span>
										<span class="reading-book-author">{tb.author}</span>
										{#if tb.publisher}
											<span class="reading-book-pub">{tb.publisher}</span>
										{/if}
									</div>
								</div>
							{/each}
						</div>
					</section>
				{/each}
			</div>
		</div>
	</div>

	<PageFooter currentPage="reading" />
</main>
