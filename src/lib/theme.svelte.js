import { browser } from '$app/environment';

class ThemeManager {
	current = $state('dark');

	constructor() {
		if (browser) {
			const stored = localStorage.getItem('rfc-theme');
			const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
			this.current = stored || (prefersDark ? 'dark' : 'light');
			this.apply();
		}
	}

	toggle() {
		this.current = this.current === 'dark' ? 'light' : 'dark';
		if (browser) {
			localStorage.setItem('rfc-theme', this.current);
			this.apply();
		}
	}

	apply() {
		if (!browser) return;
		if (this.current === 'dark') {
			document.documentElement.setAttribute('data-theme', 'dark');
		} else {
			document.documentElement.removeAttribute('data-theme');
		}
	}
}

export const theme = new ThemeManager();
