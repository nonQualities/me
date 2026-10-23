<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageFooter from '$lib/components/PageFooter.svelte';
	import { stack } from '$lib/data/stack.js';

	const col1Domains = [stack[0], stack[1]].filter(Boolean);
	const col2Domains = [stack[3], stack[2]].filter(Boolean);

	function getItems(str) {
		return (str || '').split(',').map(s => s.trim()).filter(Boolean);
	}
</script>

<svelte:head>
	<title>Ronit Choudhury — Technical Stack</title>
	<meta name="description" content="Technical stack, languages, frameworks, systems tools, design, and theoretical computer science domains." />
</svelte:head>

<main id="main-content" class="app-main rfc-main-content" tabindex="-1">
	<PageHeader
		kicker="Section 02 // Stack"
		title="Technical Stack"
		subtitle="Comprehensive inventory of languages, systems tooling, formal theory, databases, and accessibility frameworks"
	/>

	<div id="stack-page-content">
		<div class="newspaper-grid">
			<div class="newspaper-col">
				{#each col1Domains as cat, idx}
					<div class="newspaper-domain hud-box-cross">
						<div class="newspaper-domain-title">
							<span>{cat.label}</span>
							<span class="newspaper-domain-num">[{String(idx + 1).padStart(2, '0')}]</span>
						</div>
						<ul class="newspaper-items">
							{#each getItems(cat.items) as item, itemIdx}
								<li>
									<span class="newspaper-item-idx">[{String(itemIdx + 1).padStart(2, '0')}]</span>
									<span class="newspaper-item-val">{item}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>

			<div class="newspaper-col">
				{#each col2Domains as cat, idx}
					<div class="newspaper-domain hud-box-cross">
						<div class="newspaper-domain-title">
							<span>{cat.label}</span>
							<span class="newspaper-domain-num">[{String(idx + 3).padStart(2, '0')}]</span>
						</div>
						<ul class="newspaper-items">
							{#each getItems(cat.items) as item, itemIdx}
								<li>
									<span class="newspaper-item-idx">[{String(itemIdx + 1).padStart(2, '0')}]</span>
									<span class="newspaper-item-val">{item}</span>
								</li>
							{/each}
						</ul>
					</div>
				{/each}
			</div>
		</div>
	</div>

	<PageFooter currentPage="stack" />
</main>
