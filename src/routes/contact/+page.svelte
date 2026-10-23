<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageFooter from '$lib/components/PageFooter.svelte';
	import { contact } from '$lib/data/contact.js';

	const dirBox = $derived.by(() => {
		let out = `+------------+-------------------------------+
| PROTOCOL   | ADDRESS / IDENTIFIER          |
+------------+-------------------------------+`;

		(contact || []).forEach(c => {
			const proto = (c.type || '').slice(0, 10).padEnd(10);
			const dest = (c.value || '').slice(0, 29).padEnd(29);
			out += `\n| ${proto} | ${dest} |`;
		});
		out += `\n+------------+-------------------------------+`;
		return out;
	});
</script>

<svelte:head>
	<title>Ronit Choudhury — Contact Endpoints</title>
	<meta name="description" content="Direct communication channels, routing vectors, and contact endpoints for Ronit Choudhury." />
</svelte:head>

<main id="main-content" class="app-main rfc-main-content" tabindex="-1">
	<PageHeader
		kicker="Section 08 // Contact"
		title="Contact Endpoints"
		subtitle="Direct communication channels, cryptographic vectors, and academic routing endpoints"
	/>

	<div id="contact-page-content">
		<pre class="ascii-box" aria-label="Contact Routing Table">{dirBox}</pre>

		<ul class="contact-list">
			{#each contact as c}
				<li class="contact-item">
					<span class="contact-type">{c.type}</span>
					<a href={c.href} target="_blank" rel="noopener noreferrer">{c.value}</a>
				</li>
			{/each}
		</ul>
	</div>

	<PageFooter currentPage="contact" />
</main>
