<script>
	import { base } from '$app/paths';

	/** @type {{ kicker: string, title: string, subtitle?: string }} */
	let { kicker, title, subtitle } = $props();
</script>

<header class="page-header-block">
	<nav class="page-nav-crumbs" aria-label="Breadcrumb">
		<a href="{base}/">&larr; Return to Index</a>
	</nav>
	<div class="page-header-meta">
		<span class="page-kicker">{kicker}</span>
	</div>
	<h1 class="page-title">{title}</h1>
	{#if subtitle}
		<p class="page-subtitle">{subtitle}</p>
	{/if}
</header>
