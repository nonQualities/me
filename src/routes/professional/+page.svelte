<script>
	import { base } from '$app/paths';
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageFooter from '$lib/components/PageFooter.svelte';
	import { stack } from '$lib/data/stack.js';
	import { projects } from '$lib/data/projects.js';
	import { experience } from '$lib/data/experience.js';
	import { manifesto } from '$lib/data/about.js';

	// Top 4 highlighted flagship systems
	const featuredProjects = projects.slice(0, 4);
	// Top 3 experience records
	const featuredExperience = experience.slice(0, 3);
</script>

<svelte:head>
	<title>Ronit Choudhury — Professional Systems &amp; Engineering</title>
	<meta name="description" content="Map of my Professional Stuff: Systems programming, Delay-Tolerant Networks, low-level network engineering, and technical research." />
</svelte:head>

<main id="main-content" class="app-main rfc-main-content" tabindex="-1">
	<PageHeader
		kicker="Portal Hub 01 // Professional Dossier"
		title="Professional Systems &amp; Engineering"
		subtitle="Delay-Tolerant Networks, deterministic systems, low-level network engineering, and applied computer science"
	/>

	<!-- Academic Foundations & Research Orientation -->
	<section class="about-card hud-box-cross" aria-label="Professional Dossier & Academic Research">
		<div class="about-card-header">
			<span class="about-card-kicker">[ ACADEMIC FOUNDATIONS &amp; RESEARCH ORIENTATION ]</span>
			<h2 class="section-heading">Systems Research &amp; Engineering Turf</h2>
		</div>

		<p class="rfc-p">
			Hello, I am Ronit (also known as Rakta). I study Software Development at Gauhati University in an Integrated Master of Science program within the Department of Information Technology (current CGPA: 8.5). Prior to Gauhati University, I completed my Higher Secondary education at B.Borooah College in Guwahati, having grown up in Panchatirtha Hajo.
		</p>
		<p class="rfc-p">
			My engineering work leans heavily toward systems research and low-level development close to the turf rather than arbitrary software product development. Specifically, I am presently working on Delay-Tolerant Networks (DTNs), focusing on responsibility management; networking in general, like resource-efficient communication software,routing protocols engineered for high-latency and intermittent connectivity.
		</p>
		<p class="rfc-p">
			I also serve as Community Lead for The Free Code Subculture, directing our internal affairs dedicated to free software, collective systems study, and careful engineering. Outside pure systems code, I completed a four-year diploma in fine arts; this visual training directly guides my human-computer interaction (HCI) approach, prioritizing deterministic, lightweight, and accessible interfaces.
		</p>

		<div class="pro-manifesto-strip">
			<div class="pro-manifesto-kicker">[ OPERATIONAL DIRECTIVES ]</div>
			<ul class="pro-manifesto-list">
				{#each manifesto as directive}
					<li class="pro-manifesto-item">
						<span class="pro-bullet">&rsaquo;</span>
						<span>{directive}</span>
					</li>
				{/each}
			</ul>
		</div>
	</section>

	<!-- Telemetry Snapshot Grid -->
	<div class="hud-box" style="margin-top: var(--sp-5); margin-bottom: var(--sp-6);" aria-label="System Metrics">
		<div class="hud-header">
			<span class="hud-title">SYSTEM SPECIFICATION TELEMETRY</span>
			<span class="hud-sub">[GUWAHATI ]</span>
		</div>
		<div class="gh-summary-grid">
			<div class="gh-metric">
				<span class="gh-metric-label">Degree Track</span>
				<span class="gh-metric-val">Integrated MSc</span>
			</div>
			<div class="gh-metric">
				<span class="gh-metric-label">Department</span>
				<span class="gh-metric-val">IT, Gauhati Univ</span>
			</div>
			<div class="gh-metric">
				<span class="gh-metric-label">Academic Merit</span>
				<span class="gh-metric-val">8.5 CGPA</span>
			</div>
			<div class="gh-metric">
				<span class="gh-metric-label">Research Field</span>
				<span class="gh-metric-val">Networks</span>
			</div>
		</div>
	</div>

	<!-- Core Technical Stack Inventory -->
	<section class="dossier-section hud-box-cross" aria-label="Technical Stack Inventory">
		<div class="hud-header">
			<a href="{base}/stack/" class="hud-title hud-title-link">TECHNICAL STACK INVENTORY &rarr;</a>
			<a href="{base}/stack/" class="dossier-jump-link">FULL STACK ANALYZER &rarr;</a>
		</div>

		<div class="pro-stack-grid">
			{#each stack as group}
				<div class="pro-stack-card">
					<div class="pro-stack-card-header">
						<span class="pro-stack-label">{group.label}</span>
						<span class="pro-stack-tag">DOMAIN</span>
					</div>
					<p class="pro-stack-items">{group.items}</p>
				</div>
			{/each}
		</div>

		<div class="dossier-action-bar">
			<a href="{base}/stack/" class="rfc-btn">Inspect Exhaustive Stack Breakdown &rarr;</a>
		</div>
	</section>

	<!-- Flagship Systems & Implementations -->
	<section class="dossier-section hud-box-cross" aria-label="Flagship Systems">
		<div class="hud-header">
			<a href="{base}/projects/" class="hud-title hud-title-link">SOME PROJECTS &amp; IMPLEMENTATIONS &rarr;</a>
			<a href="{base}/projects/" class="dossier-jump-link">ALL PROJECTS ({projects.length}) &rarr;</a>
		</div>

		<div class="pro-projects-grid">
			{#each featuredProjects as project}
				<article class="pro-project-card">
					<div class="pro-project-top">
						<h3 class="pro-project-name">{project.name}</h3>
						{#if project.link}
							<a href={project.link.url} target="_blank" rel="noopener noreferrer" class="pro-project-link">
								{project.link.text} &nearr;
							</a>
						{/if}
					</div>
					<p class="pro-project-desc">{project.desc}</p>
					<div class="pro-project-tags">
						{#each project.tags as tag}
							<span class="pro-tag">{tag}</span>
						{/each}
					</div>
				</article>
			{/each}
		</div>

		<div class="dossier-action-bar">
			<a href="{base}/projects/" class="rfc-btn">View All Projects and Work ({projects.length}) &rarr;</a>
		</div>
	</section>

	<!-- Engineering Experience & Community -->
	<section class="dossier-section hud-box-cross" aria-label="Experience & Community">
		<div class="hud-header">
			<a href="{base}/experience/" class="hud-title hud-title-link">EXPERIENCES &rarr;</a>
			<a href="{base}/experience/" class="dossier-jump-link"> PROFESSIONAL TIMELINE ({experience.length}) &rarr;</a>
		</div>

		<div class="pro-experience-list">
			{#each featuredExperience as exp}
				<div class="pro-exp-item">
					<div class="pro-exp-header">
						<div>
							<h3 class="pro-exp-role">{exp.role}</h3>
							<div class="pro-exp-org">
								{#if exp.url}
									<a href={exp.url} target="_blank" rel="noopener noreferrer">{exp.org} &nearr;</a>
								{:else}
									<span>{exp.org}</span>
								{/if}
							</div>
						</div>
						<span class="pro-exp-period">{exp.period}</span>
					</div>
					<p class="pro-exp-summary">{exp.summary}</p>
					<div class="pro-exp-tags">
						{#each exp.tags as tag}
							<span class="pro-tag">{tag}</span>
						{/each}
					</div>
				</div>
			{/each}
		</div>

		<div class="dossier-action-bar">
			<a href="{base}/experience/" class="rfc-btn">View Complete Experience Archive &rarr;</a>
		</div>
	</section>

	<!-- Additional Engineering Vectors -->
	<div class="pro-vectors-row">
		<a href="{base}/github/" class="pro-vector-card hud-box-cross">
			<div class="pro-vector-num">[ 05 ]</div>
			<div class="pro-vector-title">Live GitHub Telemetry &rarr;</div>
			<p class="pro-vector-desc">Real-time repository query, public commit history, and language distributions.</p>
		</a>
		<a href="{base}/contact/" class="pro-vector-card hud-box-cross">
			<div class="pro-vector-num">[ 08 ]</div>
			<div class="pro-vector-title">CONNECT WITH ME! &rarr;</div>
			<p class="pro-vector-desc">Proton Mail, LinkedIn, GitHub, and academic endpoints for collaboration.</p>
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

	/* Manifesto directives */
	.pro-manifesto-strip {
		margin-top: 20px;
		padding: 16px;
		background: var(--bg-panel);
		border-left: 3px solid var(--accent);
		border-radius: var(--radius);
	}

	.pro-manifesto-kicker {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		font-weight: 700;
		color: var(--accent);
		letter-spacing: 0.12em;
		margin-bottom: 10px;
	}

	.pro-manifesto-list {
		list-style: none;
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.pro-manifesto-item {
		display: flex;
		align-items: baseline;
		gap: 8px;
		font-family: 'JetBrains Mono', monospace;
		font-size: 12px;
		color: var(--fg);
	}

	.pro-bullet {
		color: var(--accent);
		font-weight: 800;
	}

	/* Stack Grid */
	.pro-stack-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 16px;
		margin-top: 16px;
	}

	.pro-stack-card {
		padding: 16px;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius);
	}

	.pro-stack-card-header {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-bottom: 10px;
		padding-bottom: 6px;
		border-bottom: 1px dashed var(--border);
	}

	.pro-stack-label {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 15px;
		font-weight: 700;
		color: var(--fg);
	}

	.pro-stack-tag {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		font-weight: 700;
		color: var(--accent);
		background: var(--tag-bg);
		border: 1px solid var(--border);
		padding: 1px 6px;
		border-radius: var(--radius-xs);
		letter-spacing: 0.06em;
	}

	.pro-stack-items {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11.5px;
		line-height: 1.65;
		color: var(--fg-dim);
	}

	/* Projects Grid */
	.pro-projects-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
		gap: 18px;
		margin-top: 16px;
	}

	.pro-project-card {
		padding: 20px;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		transition: border-color 0.15s ease-out;
	}

	.pro-project-card:hover {
		border-color: var(--accent);
	}

	.pro-project-top {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin-bottom: 10px;
		gap: 12px;
	}

	.pro-project-name {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 18px;
		font-weight: 700;
		color: var(--fg);
		margin: 0;
	}

	.pro-project-link {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		font-weight: 700;
		color: var(--accent);
		text-decoration: none;
		white-space: nowrap;
	}

	.pro-project-link:hover {
		text-decoration: underline;
	}

	.pro-project-desc {
		font-family: 'JetBrains Mono', monospace;
		font-size: 12px;
		line-height: 1.65;
		color: var(--fg-dim);
		margin-bottom: 16px;
		flex-grow: 1;
	}

	.pro-project-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	.pro-tag {
		font-family: 'JetBrains Mono', monospace;
		font-size: 10px;
		padding: 2px 7px;
		background: var(--tag-bg);
		border: 1px solid var(--border);
		color: var(--fg);
		border-radius: var(--radius-xs);
	}

	/* Experience List */
	.pro-experience-list {
		display: flex;
		flex-direction: column;
		gap: 16px;
		margin-top: 16px;
	}

	.pro-exp-item {
		padding: 18px;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius);
	}

	.pro-exp-header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		margin-bottom: 8px;
		gap: 16px;
		flex-wrap: wrap;
	}

	.pro-exp-role {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 16px;
		font-weight: 700;
		color: var(--fg);
		margin: 0 0 2px 0;
	}

	.pro-exp-org {
		font-family: 'JetBrains Mono', monospace;
		font-size: 12px;
		color: var(--accent);
	}

	.pro-exp-org a {
		color: var(--accent);
		text-decoration: none;
	}

	.pro-exp-org a:hover {
		text-decoration: underline;
	}

	.pro-exp-period {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		font-weight: 700;
		color: var(--fg-subtle);
	}

	.pro-exp-summary {
		font-family: 'JetBrains Mono', monospace;
		font-size: 12px;
		line-height: 1.6;
		color: var(--fg-dim);
		margin: 8px 0 12px 0;
	}

	.pro-exp-tags {
		display: flex;
		flex-wrap: wrap;
		gap: 6px;
	}

	/* Vectors Row */
	.pro-vectors-row {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
		gap: 18px;
		margin-top: var(--sp-6);
		margin-bottom: var(--sp-6);
	}

	.pro-vector-card {
		padding: 20px;
		background: var(--bg-card);
		border: 1px solid var(--border);
		border-radius: var(--radius);
		text-decoration: none;
		transition: border-color 0.15s ease-out;
	}

	.pro-vector-card:hover {
		border-color: var(--accent);
	}

	.pro-vector-num {
		font-family: 'JetBrains Mono', monospace;
		font-size: 11px;
		font-weight: 700;
		color: var(--accent);
		margin-bottom: 8px;
	}

	.pro-vector-title {
		font-family: 'Space Grotesk', sans-serif;
		font-size: 18px;
		font-weight: 700;
		color: var(--fg);
		margin-bottom: 6px;
	}

	.pro-vector-desc {
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

		.pro-stack-grid,
		.pro-projects-grid,
		.pro-vectors-row {
			grid-template-columns: 1fr;
			gap: 12px;
		}

		.pro-project-card,
		.pro-stack-card,
		.pro-vector-card {
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
