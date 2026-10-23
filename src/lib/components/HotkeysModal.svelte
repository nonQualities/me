<script>
	/** @type {{ isOpen: boolean, onClose: () => void }} */
	let { isOpen = $bindable(false), onClose } = $props();

	function handleKeydown(e) {
		if (isOpen && e.key === 'Escape') {
			e.preventDefault();
			onClose();
		}
	}
</script>

<svelte:window onkeydown={handleKeydown} />

{#if isOpen}
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<div
		class="hotkeys-modal-backdrop is-visible"
		role="dialog"
		aria-modal="true"
		aria-label="Keyboard Shortcuts"
		onclick={(e) => { if (e.target === e.currentTarget) onClose(); }}
	>
		<div class="hotkeys-dialog">
			<div class="hotkeys-title">
				<span>Keyboard Shortcuts</span>
				<!-- svelte-ignore a11y_interactive_supports_focus -->
				<span
					style="cursor:pointer;"
					role="button"
					tabindex="0"
					aria-label="Close dialog"
					onclick={onClose}
					onkeydown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClose(); } }}
				>Esc</span>
			</div>
			<div style="margin-bottom:12px; font-size:12px; color:var(--fg-subtle);">
				Press a number key to navigate directly:
			</div>
			<div class="hotkey-row"><span>Overview</span><span class="hotkey-key">0</span></div>
			<div class="hotkey-row"><span>About &amp; Principles</span><span class="hotkey-key">1</span></div>
			<div class="hotkey-row"><span>Technical Stack</span><span class="hotkey-key">2</span></div>
			<div class="hotkey-row"><span>Projects &amp; Systems</span><span class="hotkey-key">3</span></div>
			<div class="hotkey-row"><span>Experience &amp; Internships</span><span class="hotkey-key">4</span></div>
			<div class="hotkey-row"><span>GitHub Telemetry</span><span class="hotkey-key">5</span></div>
			<div class="hotkey-row"><span>Reading &amp; Notes</span><span class="hotkey-key">6</span></div>
			<div class="hotkey-row"><span>Writing &amp; Articles</span><span class="hotkey-key">7</span></div>
			<div class="hotkey-row"><span>Contact Endpoints</span><span class="hotkey-key">8</span></div>
			<div class="hotkey-row"><span>Watchlist &amp; Leisure</span><span class="hotkey-key">9</span></div>
			<div class="hotkey-row" style="margin-top:8px; border-top:1px solid var(--border); padding-top:6px;">
				<span>Quick Search</span><span class="hotkey-key">/ or ⌘K</span>
			</div>
			<div class="hotkey-row"><span>Previous Section</span><span class="hotkey-key">[</span></div>
			<div class="hotkey-row"><span>Next Section</span><span class="hotkey-key">]</span></div>
			<div class="hotkey-row"><span>Toggle Visual Theme</span><span class="hotkey-key">t</span></div>
			<div class="hotkey-row"><span>Close Dialog</span><span class="hotkey-key">Esc</span></div>
		</div>
	</div>
{/if}
