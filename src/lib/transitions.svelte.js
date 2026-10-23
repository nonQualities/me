import { goto } from '$app/navigation';

class TransitionManager {
	/** @type {'professional' | 'personal' | null} */
	active = $state(null);

	/** @type {'idle' | 'closing' | 'opening'} */
	phase = $state('idle');

	/**
	 * Navigate to target route with a custom cinematic transition
	 * @param {string} targetUrl
	 * @param {'professional' | 'personal'} type
	 */
	async navigate(targetUrl, type) {
		if (typeof window === 'undefined') return;

		// Respect user reduced-motion preferences
		const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
		if (prefersReduced) {
			goto(targetUrl);
			return;
		}

		this.active = type;
		this.phase = 'closing';

		// Phase 1: Closing sweep & chromatic dispersion to solid midpoint
		await new Promise(resolve => setTimeout(resolve, 260));

		// Route swap
		await goto(targetUrl);

		// Phase 2: Opening with rapid pixelation matrix dissolve
		this.phase = 'opening';
		await new Promise(resolve => setTimeout(resolve, 260));

		// Reset to idle
		this.active = null;
		this.phase = 'idle';
	}
}

export const transitionManager = new TransitionManager();
