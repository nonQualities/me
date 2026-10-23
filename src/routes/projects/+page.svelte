<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageFooter from '$lib/components/PageFooter.svelte';
	import { projects } from '$lib/data/projects.js';

	function getSlug(name) {
		return name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
	}
</script>

<svelte:head>
	<title>Ronit Choudhury — Projects</title>
	<meta name="description" content="Projects &amp; Software Systems — Ronit Choudhury. Network tunnels, cryptography, state machines, and language design." />
</svelte:head>

<main id="main-content" class="app-main rfc-main-content" tabindex="-1">
	<PageHeader
		kicker="Section 03 // Projects"
		title="Projects &amp; Systems"
		subtitle="Software implementations in network tunnels, cryptography, state machines, telemetry, and language design"
	/>

	<div id="projects-page-content">
		{#each projects as proj, idx}
			{@const num = String(idx + 1).padStart(2, '0')}
			{@const slug = getSlug(proj.name)}
			<article class="project-card" id={slug}>
				<div class="project-name-line">
					<span class="project-title">
						<span class="project-num">{num}.</span>{proj.name}
					</span>
					<div class="project-tags">
						{#each proj.tags || [] as tag}
							<span class="project-tag">{tag}</span>
						{/each}
					</div>
				</div>
				<div class="project-desc">{proj.desc}</div>
				{#if proj.link}
					<div class="project-link">
						&rarr; <a href={proj.link.url} target="_blank" rel="noopener noreferrer">{proj.link.text}</a>
					</div>
				{/if}
			</article>
		{/each}
	</div>

	<PageFooter currentPage="projects" />
</main>
