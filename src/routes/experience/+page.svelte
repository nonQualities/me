<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageFooter from '$lib/components/PageFooter.svelte';
	import { experience } from '$lib/data/experience.js';

	function formatUrl(url) {
		return (url || '').replace(/^https?:\/\//, '').replace(/\/$/, '');
	}
</script>

<svelte:head>
	<title>Ronit Choudhury — Experience</title>
	<meta name="description" content="Professional experience, software internships, research work, and engineering leadership of Ronit Choudhury." />
</svelte:head>

<main id="main-content" class="app-main rfc-main-content" tabindex="-1">
	<PageHeader
		kicker="Section 04 // Experience"
		title="Experience &amp; Internships"
		subtitle="Chronological record of software engineering internships, technical leadership, and research work"
	/>

	<div id="experience-page-content">
		{#each experience as exp}
			{@const isCommunityLead = (exp.role || '').includes('Community Lead')}
			<article class="item-card">
				<div class="item-header-row">
					<div class="item-title">{exp.role} &mdash; {exp.org}</div>
					{#if isCommunityLead}
						<span class="featured-role-badge">[ COMMUNITY LEADERSHIP ]</span>
					{/if}
				</div>
				<div class="item-meta">
					<span class="exp-period">{exp.period}</span>
					<span class="exp-tags">
						{#each exp.tags || [] as tag}
							<span class="project-tag">{tag}</span>
						{/each}
					</span>
				</div>
				<div class="item-body">{exp.summary}</div>
				{#if exp.url}
					<div class="item-link">
						&rarr; <a href={exp.url} target="_blank" rel="noopener noreferrer">{formatUrl(exp.url)}</a>
					</div>
				{/if}
			</article>
		{/each}
	</div>

	<PageFooter currentPage="experience" />
</main>
