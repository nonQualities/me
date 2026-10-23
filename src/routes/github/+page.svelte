<script>
	import PageHeader from '$lib/components/PageHeader.svelte';
	import PageFooter from '$lib/components/PageFooter.svelte';
	import { github } from '$lib/data/github.js';
	import { onMount } from 'svelte';

	const username = github?.username || 'nonQualities';

	let loading = $state(true);
	let error = $state(false);
	let user = $state(/** @type {any} */ (null));
	let publicRepos = $state(/** @type {any[]} */ ([]));
	let langChart = $state('');

	const telemetryCard = `+-- [TELEMETRY: @nonQualities] ----------------+
| Status   : api.github.com synchronized       |
| Identity : Systems & Theoretical CS          |
| Standard : Deterministic Systems            |
+----------------------------------------------+`;

	const ecosystemBox = `+-- [ECOSYSTEM AUDIT] -------------------------+
| Code Metric : Cache-aligned memory layouts   |
| Concurrency : Non-blocking async actors      |
| Verification: Formal state transition checks |
+----------------------------------------------+`;

	const fallbackBox = `+-- [GITHUB TELEMETRY: OFFLINE] ---------------+
| User   : @nonQualities                       |
| Status : API rate limit reached              |
| Action : Inspect codebases directly          |
+----------------------------------------------+`;

	onMount(async () => {
		try {
			const [userRes, reposRes] = await Promise.all([
				fetch('https://api.github.com/users/' + username),
				fetch('https://api.github.com/users/' + username + '/repos?sort=updated&per_page=15')
			]);

			if (!userRes.ok || !reposRes.ok) throw new Error('HTTP ' + userRes.status);

			user = await userRes.json();
			const repos = await reposRes.json();
			publicRepos = repos.filter(/** @type {any} */ r => !r.fork);

			const langCounts = /** @type {Record<string, number>} */ ({});
			let totalLangs = 0;
			publicRepos.forEach(r => {
				const l = r.language || 'Other';
				langCounts[l] = (langCounts[l] || 0) + 1;
				totalLangs++;
			});

			const sortedLangs = Object.entries(langCounts).sort((a, b) => b[1] - a[1]).slice(0, 5);

			let chart = `+-- [LANGUAGE DISTRIBUTION] -------------------+`;
			sortedLangs.forEach(([lang, count]) => {
				const pct = Math.round((count / totalLangs) * 100);
				const barWidth = 12;
				const filled = Math.round((pct / 100) * barWidth);
				const bar = '█'.repeat(filled) + '░'.repeat(barWidth - filled);

				const langLabel = (lang.length > 10 ? lang.slice(0, 9) + '…' : lang).padEnd(10);
				const meter = `[${bar}] ${(String(pct) + '%').padEnd(4)}`;
				const countStr = `(${count} repo${count !== 1 ? 's' : ''})`;
				const inner = `${langLabel} ${meter} ${countStr}`.padEnd(44);
				chart += `\n| ${inner} |`;
			});
			chart += `\n+----------------------------------------------+`;
			langChart = chart;
			loading = false;
		} catch (err) {
			error = true;
			loading = false;
		}
	});
</script>

<svelte:head>
	<title>Ronit Choudhury — GitHub Telemetry</title>
	<meta name="description" content="Live GitHub repository telemetry, language metrics, and open-source systems implementations." />
</svelte:head>

<main id="main-content" class="app-main rfc-main-content" tabindex="-1">
	<PageHeader
		kicker="Section 05 // GitHub"
		title="GitHub Telemetry"
		subtitle="Live telemetry query into public repositories, language distributions, and commit velocity"
	/>

	<div id="github-page-content">
		{#if loading}
			<pre class="ascii-box" aria-label="Polling GitHub">+-- [GITHUB TELEMETRY QUERY] ------------------+
| Handshake : api.github.com/users             |
| Target    : @nonQualities                    |
| Status    : Connecting to remote endpoint... |
+----------------------------------------------+</pre>
		{:else if error}
			<div class="github-dual-grid">
				<div class="github-summary-col">
					<pre class="ascii-box" aria-label="Offline telemetry">{fallbackBox}</pre>
					<p class="rfc-p">
						&rarr; <a href="https://github.com/{username}" target="_blank" rel="noopener noreferrer">Visit github.com/{username} directly</a>
					</p>
				</div>
				<div class="github-repos-col">
					<div class="github-section-title">Verified Implementations</div>
					<p class="rfc-p">
						Please visit the official repository index at <a href="https://github.com/{username}" target="_blank" rel="noopener noreferrer">github.com/{username}</a> to view active codebases and release packages.
					</p>
				</div>
			</div>
		{:else}
			<div class="github-dual-grid">
				<div class="github-summary-col">
					<pre class="ascii-box" aria-label="Account Telemetry">{telemetryCard}</pre>

					<div class="gh-summary-grid">
						<div class="gh-metric">
							<span class="gh-metric-label">Repositories</span>
							<span class="gh-metric-val">{user?.public_repos ?? publicRepos.length}</span>
						</div>
						<div class="gh-metric">
							<span class="gh-metric-label">Followers</span>
							<span class="gh-metric-val">{user?.followers ?? 0}</span>
						</div>
						<div class="gh-metric">
							<span class="gh-metric-label">Following</span>
							<span class="gh-metric-val">{user?.following ?? 0}</span>
						</div>
						<div class="gh-metric">
							<span class="gh-metric-label">Public Gists</span>
							<span class="gh-metric-val">{user?.public_gists ?? 0}</span>
						</div>
					</div>

					<pre class="ascii-box" aria-label="Language Breakdown">{langChart}</pre>
					<pre class="ascii-box" aria-label="Ecosystem Audit">{ecosystemBox}</pre>

					<p class="rfc-p" style="margin-top: 8px;">
						&rarr; <a href="https://github.com/{username}" target="_blank" rel="noopener noreferrer">Visit github.com/{username}</a>
					</p>
				</div>

				<div class="github-repos-col">
					<div class="github-section-title">Active Repositories</div>
					{#each publicRepos.slice(0, 8) as r}
						<div class="gh-repo-card">
							<div class="gh-repo-header">
								<span class="gh-repo-name">
									<a href={r.html_url} target="_blank" rel="noopener noreferrer">{r.name}</a>
								</span>
								<div class="gh-repo-meta">
									<span class="project-tag">{r.language || 'Other'}</span>
									<span>★ {r.stargazers_count}</span>
									<span>⑂ {r.forks_count}</span>
								</div>
							</div>
							<div class="gh-repo-desc">{r.description || 'Source repository and technical implementation.'}</div>
						</div>
					{/each}
				</div>
			</div>
		{/if}
	</div>

	<PageFooter currentPage="github" />
</main>
