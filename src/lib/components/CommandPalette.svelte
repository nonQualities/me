<script>
	import { base } from '$app/paths';
	import { goto } from '$app/navigation';
	import { portfolioData } from '$lib/data';
	import { tick } from 'svelte';

	/** @type {{ isOpen: boolean, onClose: () => void }} */
	let { isOpen = $bindable(false), onClose } = $props();

	let query = $state('');
	let selectedIndex = $state(0);
	let inputEl = $state(/** @type {HTMLInputElement | null} */ (null));

	// Build search items list
	const basePages = [
		{ title: '00. Overview', desc: 'Landing, summary, core focus, and contact endpoints', path: '/', cat: 'Page' },
		{ title: '01. About & Principles', desc: 'Academic training, theoretical CS interests, fine arts background, and manifesto', path: '/about/', cat: 'Page' },
		{ title: '02. Technical Stack', desc: 'Languages, Systems, Machine Learning, Tooling, Theory, and Web/HCI', path: '/stack/', cat: 'Page' },
		{ title: '03. Projects & Systems', desc: 'Upagraha, Dasam FSM Simulator, ErgoProxy, AntiProxy, DSL Prototype & Evaluator, FSynth', path: '/projects/', cat: 'Page' },
		{ title: '04. Experience & Work', desc: 'The Free Code Subculture, DITEC, NIELIT, Funked Media, Campus Group', path: '/experience/', cat: 'Page' },
		{ title: '05. GitHub Telemetry', desc: 'Repository metrics, language distributions, and commit telemetry', path: '/github/', cat: 'Page' },
		{ title: '06. Reading & Notes', desc: 'Literature, Philosophy, Essays, and 21 Foundational Textbooks', path: '/reading/', cat: 'Page' },
		{ title: '07. Writing & Articles', desc: 'Research essays, technical papers, and system reflections', path: '/writing/', cat: 'Page' },
		{ title: '08. Contact Endpoints', desc: 'GitHub, LinkedIn, Proton Mail, Gmail direct communication channels', path: '/contact/', cat: 'Page' },
		{ title: '09. Watchlist & Leisure', desc: 'Anime series, anime films, western television, and non-academic media', path: '/watchlist/', cat: 'Page' },
		{ title: 'PORTAL // Professional Info', desc: 'DTN research, technical stack, projects, experience & applied CS dossier', path: '/professional/', cat: 'Portal' },
		{ title: 'PORTAL // Personal Info', desc: 'Literature, philosophy, fine arts, music, media archive & essays', path: '/personal/', cat: 'Portal' }
	];

	const catalog = $derived.by(() => {
		const items = [...basePages];

		if (portfolioData.projects) {
			portfolioData.projects.forEach(p => {
				const slug = p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
				items.push({
					title: p.name,
					desc: `${p.tagline || p.desc || ''} [${p.domain || 'Systems'}]`,
					path: `/projects/#${slug}`,
					cat: 'Project'
				});
			});
		}

		if (portfolioData.education) {
			portfolioData.education.forEach(ed => {
				items.push({
					title: `${ed.institution} — ${ed.degree}`,
					desc: `${ed.department ? ed.department + ' · ' : ''}${ed.status}${ed.cgpa ? ' · CGPA: ' + ed.cgpa : ''}`,
					path: '/about/#education',
					cat: 'Education'
				});
			});
		}

		if (portfolioData.stack) {
			portfolioData.stack.forEach(s => {
				items.push({
					title: s.label,
					desc: s.items,
					path: '/stack/',
					cat: 'Stack'
				});
			});
		}

		if (portfolioData.reading) {
			portfolioData.reading.forEach(r => {
				items.push({
					title: r.title,
					desc: `${r.author} · ${r.genre || 'Literature'}`,
					path: '/reading/',
					cat: 'Book'
				});
			});
		}

		if (portfolioData.textbooks) {
			portfolioData.textbooks.forEach(t => {
				items.push({
					title: t.title,
					desc: `${t.author} · ${t.publisher || ''} [${t.discipline || 'Textbook'}]`,
					path: '/reading/',
					cat: 'Textbook'
				});
			});
		}

		if (portfolioData.experience) {
			portfolioData.experience.forEach(e => {
				items.push({
					title: `${e.role} · ${e.org}`,
					desc: `${e.period || ''} · ${(e.tags || []).join(', ')}`,
					path: '/experience/',
					cat: 'Experience'
				});
			});
		}

		if (portfolioData.writing?.items) {
			portfolioData.writing.items.forEach(w => {
				items.push({
					title: w.title,
					desc: `Published ${w.date || ''} · Essay & Publication`,
					path: w.url || '/writing/',
					isExternal: !!w.url,
					cat: 'Article'
				});
			});
		}

		if (portfolioData.contact) {
			portfolioData.contact.forEach(c => {
				items.push({
					title: `${c.type}: ${c.value}`,
					desc: 'Direct Communication Endpoint',
					path: c.href || '/contact/',
					isExternal: !!c.href,
					cat: 'Contact'
				});
			});
		}

		return items;
	});

	const results = $derived.by(() => {
		const q = query.trim().toLowerCase();
		if (!q) return catalog.slice(0, 12);
		return catalog
			.filter(item => item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q) || item.cat.toLowerCase().includes(q))
			.slice(0, 15);
	});

	$effect(() => {
		if (isOpen) {
			query = '';
			selectedIndex = 0;
			tick().then(() => inputEl?.focus());
		}
	});

	function handleKeydown(e) {
		if (!isOpen) return;

		if (e.key === 'Escape') {
			e.preventDefault();
			onClose();
		} else if (e.key === 'ArrowDown') {
			e.preventDefault();
			selectedIndex = (selectedIndex + 1) % (results.length || 1);
		} else if (e.key === 'ArrowUp') {
			e.preventDefault();
			selectedIndex = (selectedIndex - 1 + results.length) % (results.length || 1);
		} else if (e.key === 'Enter') {
			e.preventDefault();
			const selected = results[selectedIndex];
			if (selected) {
				selectItem(selected);
			}
		}
	}

	function selectItem(item) {
		onClose();
		if (item.isExternal) {
			window.open(item.path, '_blank', 'noopener,noreferrer');
		} else {
			const target = (base + item.path).replace(/\/+/g, '/');
			goto(target);
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<div
		class="cmd-palette-backdrop is-visible"
		role="dialog"
		aria-modal="true"
		aria-label="Command Palette / Global Search"
		onclick={(e) => { if (e.target === e.currentTarget) onClose(); }}
	>
		<div class="cmd-palette-dialog hud-box-cross">
			<div class="cmd-palette-header">
				<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
					<circle cx="11" cy="11" r="8"></circle>
					<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
				</svg>
				<input
					bind:this={inputEl}
					bind:value={query}
					class="cmd-palette-input"
					type="search"
					placeholder="Search index, projects, reading, telemetry..."
					aria-label="Search portfolio"
					autocomplete="off"
					spellcheck="false"
				/>
				<kbd class="cmd-palette-esc" onclick={onClose}>ESC</kbd>
			</div>

			<div class="cmd-palette-results" role="listbox">
				{#if results.length === 0}
					<div class="cmd-palette-empty">No results matching "{query}"</div>
				{:else}
					{#each results as item, idx}
						<!-- svelte-ignore a11y_click_events_have_key_events -->
						<div
							class="cmd-palette-item"
							class:is-active={idx === selectedIndex}
							role="option"
							aria-selected={idx === selectedIndex}
							tabindex="-1"
							onclick={() => selectItem(item)}
							onmouseenter={() => selectedIndex = idx}
						>
							<div class="cmd-item-main">
								<span class="cmd-item-title">{item.title}</span>
								<span class="cmd-item-desc">{item.desc}</span>
							</div>
							<span class="cmd-item-cat">{item.cat}</span>
						</div>
					{/each}
				{/if}
			</div>

			<div class="cmd-palette-footer">
				<span><kbd>↑</kbd><kbd>↓</kbd> navigate</span>
				<span><kbd>↵</kbd> select</span>
				<span><kbd>esc</kbd> close</span>
			</div>
		</div>
	</div>
{/if}
