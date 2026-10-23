import { browser } from '$app/environment';

class SidebarManager {
	isOpenMobile = $state(false);
	isCollapsedDesktop = $state(false);

	toggle() {
		if (browser && window.innerWidth <= 860) {
			this.isOpenMobile = !this.isOpenMobile;
		} else {
			this.isCollapsedDesktop = !this.isCollapsedDesktop;
		}
	}

	toggleMobile() {
		this.isOpenMobile = !this.isOpenMobile;
	}

	closeMobile() {
		this.isOpenMobile = false;
	}

	toggleDesktop() {
		this.isCollapsedDesktop = !this.isCollapsedDesktop;
	}
}

export const sidebarManager = new SidebarManager();
