<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageFooter from '$lib/components/PageFooter.svelte';
	import { about, education, manifesto, snapshot } from '$lib/data/about.js';

	function wrapWords(str, maxLen) {
		const words = String(str ?? '').split(' ');
		const lines = [];
		let current = '';
		words.forEach(w => {
			if (!current) {
				current = w;
			} else if ((current + ' ' + w).length <= maxLen) {
				current += ' ' + w;
			} else {
				lines.push(current);
				current = w;
			}
		});
		if (current) lines.push(current);
		return lines;
	}

	function buildSnapshotTables() {
		if (!Array.isArray(snapshot)) return { desktop: '', mobile: '' };

		const dC1 = 14, dC2 = 45;
		const dSep = `+-${'-'.repeat(dC1)}-+-${'-'.repeat(dC2)}-+`;
		const dHeader = `| ${'PARAMETER'.padEnd(dC1)} | ${'VALUE'.padEnd(dC2)} |`;
		let dLines = [dSep, dHeader, dSep];

		snapshot.forEach(item => {
			dLines.push(`| ${(item.label || '').padEnd(dC1)} | ${(item.value || '').padEnd(dC2)} |`);
		});
		dLines.push(dSep);

		const mC1 = 12, mC2 = 27;
		const mSep = `+-${'-'.repeat(mC1)}-+-${'-'.repeat(mC2)}-+`;
		const mHeader = `| ${'PARAMETER'.padEnd(mC1)} | ${'VALUE'.padEnd(mC2)} |`;
		let mLines = [mSep, mHeader, mSep];

		snapshot.forEach(item => {
			const wrapped = wrapWords(item.value, mC2);
			wrapped.forEach((line, idx) => {
				const lbl = idx === 0 ? item.label : '';
				mLines.push(`| ${(lbl || '').padEnd(mC1)} | ${line.padEnd(mC2)} |`);
			});
		});
		mLines.push(mSep);

		return {
			desktop: dLines.join('\n'),
			mobile: mLines.join('\n')
		};
	}

	const tables = buildSnapshotTables();
</script>

<svelte:head>
	<title>Ronit Choudhury — About &amp; Principles</title>
	<meta name="description" content="Academic background, theoretical CS foundations, engineering manifesto, and system snapshot of Ronit Choudhury." />
</svelte:head>

<main id="main-content" class="app-main rfc-main-content" tabindex="-1">
	<PageHeader
		kicker="Section 01 // About"
		title="About &amp; Principles"
		subtitle="Academic training, theoretical CS interests, fine arts background, and the engineering manifesto"
	/>

	<div id="about-page-content">
		<!-- Background Narrative -->
		<article class="about-card hud-box-cross">
			<div class="about-card-header">
				<span class="about-card-kicker">[ NARRATIVE // ACADEMIC FOUNDATIONS ]</span>
				<h2 class="section-heading">Background</h2>
			</div>
			{#each about.paragraphs as p}
				<p class="rfc-p">{p}</p>
			{/each}
		</article>

		<!-- Education & Academics -->
		{#if Array.isArray(education) && education.length > 0}
			<h2 class="section-heading" id="education">Education &amp; Academics</h2>
			<div class="landing-education-block" style="margin-bottom: var(--sp-5);">
				<ul class="summary-points-list">
					{#each education as ed}
						<li>
							{#if ed.department}
								<strong>{ed.institution}:</strong> {ed.degree}, {ed.department} ({ed.status}{#if ed.cgpa} &middot; Current CGPA: <strong>{ed.cgpa}</strong>{/if})
							{:else}
								<strong>{ed.institution}:</strong> {ed.degree} ({ed.status})
							{/if}
						</li>
					{/each}
				</ul>
			</div>
		{/if}

		<!-- Quote -->
		{#if about.quote}
			<blockquote class="rfc-quote">
				"{about.quote.text}"
				<cite>&mdash; {about.quote.cite}</cite>
			</blockquote>
		{/if}

		<!-- Principles / Manifesto -->
		{#if Array.isArray(manifesto) && manifesto.length > 0}
			<article class="about-card hud-box-cross">
				<div class="about-card-header">
					<span class="about-card-kicker">[ OPERATIONAL DIRECTIVES // MANIFESTO ]</span>
					<h2 class="section-heading">Principles</h2>
				</div>
				<ul class="newspaper-items">
					{#each manifesto as item}
						<li>{item}</li>
					{/each}
				</ul>
			</article>
		{/if}

		<!-- System Snapshot ASCII Box -->
		{#if Array.isArray(snapshot) && snapshot.length > 0}
			<h2 class="section-heading">System Snapshot</h2>
			<pre class="ascii-box ascii-desktop" aria-label="System Snapshot Desktop">{tables.desktop}</pre>
			<pre class="ascii-box ascii-mobile" aria-label="System Snapshot Mobile">{tables.mobile}</pre>
		{/if}
	</div>

	<PageFooter currentPage="about" />
</main>
