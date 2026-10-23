<script>
	import { base } from '$app/paths';
	import PortalCards from '$lib/components/PortalCards.svelte';
</script>

<svelte:head>
	<title>Ronit Choudhury — Overview</title>
	<meta name="description" content="Portfolio of Ronit Choudhury — Software Development, Delay-Tolerant Networks Research, Systems Programming, and Theoretical Computer Science." />
</svelte:head>

<main id="main-content" class="app-main app-main-wide" tabindex="-1">

	<!-- ===================================================================
	     OYSTER-STYLE SWISS EDITORIAL BROADSHEET POSTER
	     =================================================================== -->
	<section class="oyster-poster hud-box-cross" aria-label="Editorial System Broadside">

		<!-- TOP ROW: SCRIPT NOTE + GIANT NAME + CALLOUT CARD + INTEGRATED STACK + VERTICAL PILL -->
		<div class="poster-top-row">
			<div class="poster-masthead-col">
				<div class="poster-script-note">
					Greetings! If you want to clone me as I appear, this is a good starting point, or this is an venture for fascination, you are welcome, else if this is professional..Welcome to my Portfolio. Good Morning. In case I do not see you again, Good Afternoon, Good Evening and Good Night.
				</div>
				<!-- Multilingual Geometric Name Lockup in & around RONIT -->
				<div class="poster-title-lockup">
					<!-- Top / Overhead Scripts: Assamese, Hindi & Japanese stylized badges -->
					<div class="poster-title-kicker-row">
						<div class="name-script-badge name-badge-as" title="Assamese: ৰোণিত">
							<span class="badge-lang-label">AS //</span>
							<span class="badge-script-text as-text" lang="as">ৰোণিত</span>
						</div>
						<div class="name-script-badge name-badge-hi" title="Hindi: रोणित">
							<span class="badge-lang-label">HI //</span>
							<span class="badge-script-text hi-text" lang="hi">रोणित</span>
						</div>
						<div class="name-script-badge name-badge-ja" title="Japanese: ロニット">
							<span class="badge-lang-label">JA //</span>
							<span class="badge-script-text ja-text" lang="ja">ロニット</span>
						</div>
					</div>

					<!-- Main Title Row with Giant RONIT and Flanking Vertical Scripts -->
					<div class="poster-title-main-row">
						<h1 class="poster-giant-title ronit-landing-glow">RONIT</h1>
						<div class="poster-title-flank" aria-hidden="true">
							<span class="flank-script flank-ja" lang="ja" title="Japanese Katakana">ロニット</span>
							<span class="flank-script flank-as" lang="as" title="Assamese Script">ৰোণিত</span>
						</div>
					</div>

					<!-- Subtitle Line: Surname in English, Assamese, and Hindi -->
					<div class="poster-title-sub-scripts">
						<span class="sub-script-item en-sub" title="English">choudhury</span>
						<span class="sub-script-sep">&middot;</span>
						<span class="sub-script-item as-sub" lang="as" title="Assamese: চৌধুৰী">চৌধুৰী</span>
						<span class="sub-script-sep">&middot;</span>
						<span class="sub-script-item hi-sub" lang="hi" title="Hindi: चौधुरी">चौधुरी</span>
					</div>
				</div>

				<!-- Callout Box with Arrow ↗ -->
				<div class="poster-callout-box">
					<a href="#toc" class="callout-arrow" aria-label="Jump to Table of Contents">↗</a>
					<ul class="callout-list">
						<li><span class="callout-bullet">&#9658;</span> Network Programming (C, .NET, BEAM, RUST)</li>
						<li><span class="callout-bullet">&#9658;</span> DTNs &middot; Cryptography &middot; Theoretical CS</li>
						<li><span class="callout-bullet">&#9658;</span> Systems Programming &middot; System Design</li>
					</ul>
				</div>
			</div>

			<!-- Vertical Spine Indicator -->
			<div class="poster-vertical-spine" aria-hidden="true">
				<div class="v-spine-dots">
					<span class="v-spine-dot"></span>
					<span class="v-spine-dot"></span>
				</div>
				<span class="v-spine-text">PORTFOLIO // NETWORKING &middot; SYSTEMS &middot; PROTOCOLS 2026</span>
				<div class="v-spine-dots">
					<span class="v-spine-dot"></span>
					<span class="v-spine-dot"></span>
				</div>
			</div>

			<!-- Integrated Primary Stack Card -->
			<div class="poster-stack-card">
				<div class="poster-stack-header">
					<span class="stack-tag">[ PRIMARY STACK ]</span>
					<a href="{base}/stack/" class="stack-link">full spec &rarr;</a>
				</div>
				<div class="poster-stack-entries">
					<div class="stack-entry">
						<div class="stack-entry-title">.NET with C#</div>
						<div class="stack-entry-desc">ASP.NET Core &middot; Cross-Platform UI &middot; Networking &amp; TUN Tunnels</div>
					</div>
					<div class="stack-entry">
						<div class="stack-entry-title">C / C3</div>
						<div class="stack-entry-desc">Deterministic Memory &middot; Low-Overhead Network Tooling &middot; Systems</div>
					</div>
					<div class="stack-entry">
						<div class="stack-entry-title">Elixir / OTP</div>
						<div class="stack-entry-desc">Actor Concurrency &middot; Resilient Message Passing &middot; Distributed Nodes</div>
					</div>
					<div class="stack-entry">
						<div class="stack-entry-title">Linux</div>
						<div class="stack-entry-desc">Network Namespaces &middot; Policy Routing (fwmark) &middot; Shell Runtimes</div>
					</div>
					<div class="stack-entry">
						<div class="stack-entry-title">SQL</div>
						<div class="stack-entry-desc">PostgreSQL &middot; Relational Schema Modeling &middot; Query Optimization</div>
					</div>
				</div>
			</div>

			<!-- Unified Education Broadsheet Card -->
			<div class="poster-education-pill" aria-label="Education & Academic Specification">
				<div class="edu-card-header">
					<div class="edu-black-square" aria-hidden="true">
						<span>!</span>
					</div>
					<div class="edu-header-side">
						<div class="edu-micro-slogan">
							SOFTWARE<br>
							DEVELOPMENT<br>
							FOR A MORE<br>
							OPEN TOMORROW.
						</div>
						<div class="edu-globe-icon" aria-hidden="true">
							<svg class="edu-globe-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">
								<circle cx="12" cy="12" r="10"></circle>
								<line x1="2" y1="12" x2="22" y2="12"></line>
								<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
							</svg>
						</div>
					</div>
				</div>

				<div class="edu-degree-block">
					<div class="edu-degree-kicker">
						KNOWLEDGE<br>BUILDS<br>FREEDOM.<br>
						<span class="edu-mini-rule" aria-hidden="true"></span>
					</div>

					<div class="edu-degree-title-wrap">
						<div class="edu-degree-word">Integrated</div>
						<div class="edu-degree-giant-row">
							<div class="edu-giant-msc">
								<span class="msc-main">MS</span><span class="msc-c">c</span>
							</div>
							<div class="edu-asterisk-icon" aria-hidden="true">
								<svg class="msc-asterisk-svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
									<line x1="12" y1="2" x2="12" y2="22"></line>
									<line x1="2" y1="12" x2="22" y2="12"></line>
									<line x1="4.93" y1="4.93" x2="19.07" y2="19.07"></line>
									<line x1="19.07" y1="4.93" x2="4.93" y2="19.07"></line>
								</svg>
							</div>
							<div class="edu-degree-side-note">
								5 YEARS<br>DEEPER<br>INTO<br>SOFTWARE<br>DEVELOPMENT<br>
								<span class="edu-mini-rule" aria-hidden="true"></span>
							</div>
						</div>
					</div>

					<a href="https://gauhati.ac.in/syllabus/software-development-fyimp-2026/" target="_blank" rel="noopener noreferrer" class="edu-syllabus-btn" title="View Gauhati University Software Development Syllabus">
						<span>SOFTWARE DEVELOPMENT</span>
						<span class="syllabus-btn-arrow" aria-hidden="true">&#x2197;</span>
					</a>
				</div>

				<div class="edu-dots-row" aria-hidden="true">
					<span>&middot;</span>
					<span>&middot;</span>
					<span>&middot;</span>
				</div>

				<div class="edu-uni-block">
					<div class="edu-uni-main-row">
						<a href="https://gauhati.ac.in" target="_blank" rel="noopener noreferrer" class="edu-uni-link" title="Visit Gauhati University Official Portal">
							<div class="uni-black-arrow-box" aria-hidden="true">
								<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
									<line x1="5" y1="12" x2="19" y2="12"></line>
									<polyline points="12 5 19 12 12 19"></polyline>
								</svg>
							</div>
							<div class="uni-name-stack">
								<span class="uni-name-word">Gauhati</span>
								<span class="uni-name-word">University</span>
							</div>
						</a>
						<div class="edu-uni-side-note">
							A<br>PUBLIC<br>UNIVERSITY<br>IN<br>ASSAM<br>
							<span class="edu-mini-rule" aria-hidden="true"></span>
						</div>
					</div>

					<div class="edu-dept-strike-row">
						<span class="dept-strike-line" aria-hidden="true"></span>
						<span class="dept-strike-label">DEPT OF IT</span>
						<span class="dept-strike-line" aria-hidden="true"></span>
					</div>
				</div>

				<div class="edu-hs-row">
					<div class="edu-hs-pin" aria-hidden="true">
						<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
							<path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/>
						</svg>
					</div>
					<div class="edu-hs-text">B.BOROOAH COLLEGE IN HS</div>
				</div>

				<div class="edu-dotted-rule" aria-hidden="true"></div>

				<div class="edu-location-row">
					<div class="edu-target-icon" aria-hidden="true">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="12" cy="12" r="7"></circle>
							<line x1="12" y1="1" x2="12" y2="5"></line>
							<line x1="12" y1="19" x2="12" y2="23"></line>
							<line x1="1" y1="12" x2="5" y2="12"></line>
							<line x1="19" y1="12" x2="23" y2="12"></line>
						</svg>
					</div>
					<div class="edu-loc-text-col">
						<div class="edu-loc-city">GUWAHATI, ASSAM</div>
						<div class="edu-loc-coords">26.14&deg;N 91.74&deg;E</div>
					</div>
					<div class="edu-loc-v-rule" aria-hidden="true"></div>
					<div class="edu-loc-side-note">
						ON THE<br>
						BANKS OF<br>
						THE BRAHMAPUTRA<br>
						<span class="edu-mini-rule" aria-hidden="true"></span>
					</div>
				</div>

				<div class="edu-solid-rule" aria-hidden="true"></div>

				<div class="edu-card-footer">
					<div class="edu-glider-icon" aria-hidden="true">
						<svg class="edu-pixel-glider" width="26" height="26" viewBox="0 0 4 4" fill="currentColor">
							<rect x="0" y="0" width="0.85" height="0.85"/>
							<rect x="1" y="1" width="0.85" height="0.85"/>
							<rect x="0" y="2" width="0.85" height="0.85"/>
							<rect x="1" y="2" width="0.85" height="0.85"/>
							<rect x="2" y="3" width="0.85" height="0.85"/>
						</svg>
					</div>

					<div class="edu-footer-v-rule" aria-hidden="true"></div>

					<div class="edu-footer-text-col">
						<div class="edu-subculture-title">THE FREE CODE<br>SUBCULTURE</div>
						<div class="edu-subculture-sub">
							SOFTWARE IS KNOWLEDGE.<br>
							KNOWLEDGE MUST BE FREE.<br>
							<span class="edu-mini-rule" aria-hidden="true"></span>
						</div>
					</div>

					<div class="edu-status-dots-col" aria-hidden="true">
						<span class="status-dot dot-gray"></span>
						<span class="status-dot dot-black"></span>
						<span class="status-dot dot-green"></span>
					</div>
				</div>
			</div>
		</div>

		<!-- MID ROW 1: CONTRAST STATEMENT + SYMBOL BOX + SPEC BIG NUM -->
		<div class="poster-statement-row">
			<div class="poster-vertical-kicker" aria-hidden="true">
				<span>// FOCUS</span>
			</div>

			<div class="poster-statement-text">
				<span class="stmt-sans">my areas of interest are</span>
				<span class="stmt-script">networking, systems programming, performance engineering &amp; database systems</span>
			</div>

			<div class="poster-symbol-box" aria-hidden="true">
				<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
			</div>

			<div class="poster-spec-box">
				<div class="spec-big-num">8.5 CGPA</div>
				<div class="spec-title">INTEGRATED MSC (IT)</div>
			</div>
		</div>

		<!-- MID ROW 2: FINE PRINT, SLASHES, WARRANTY BADGE, POSTAL STAMP -->
		<div class="poster-stamps-row">
			<div class="poster-fine-print-col">
				<p class="fine-print-text">
					DELAY-TOLERANT NETWORKS. STORE-CARRY-FORWARD TOPOLOGIES. INTERMITTENT CONNECTIVITY PROTOCOLS.
				</p>
				<div class="poster-slashes-line">
					// THINGS I AM THINKING RECENTLY
				</div>
			</div>

			<div class="poster-warranty-badge">
				<span>Community Lead @ The <a href="https://thefreecodesyndicate.github.io/fcs-site" target="_blank" rel="noopener noreferrer">Free Code Subculture</a></span>
			</div>

			<div class="poster-vertical-badge" aria-hidden="true">
				<span>SYSTEMS // RESEARCH</span>
			</div>

			<div class="poster-postage-stamp">
				<div class="stamp-top-bar">CORE MANIFESTO</div>
				<div class="stamp-body">
					<div class="stamp-icon-box" aria-hidden="true">
						<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
					</div>
					<div class="stamp-text">
						I APPRECIATE FAST, SIMPLE AND UNBLOATED SOFTWARE. I DO NOT ENJOY UNECESSARY COMPLICATIONS OR LAYERS OF ABSTRACTTION JUST FOR THE SAKE OF IT
					</div>
				</div>
			</div>
		</div>

		<!-- BOTTOM ROW: HUGE AMPERSAND + PARTITIONED JAPANESE TICKET + TELEMETRY BARCODE -->
		<div class="poster-ticket-row">
			<div class="poster-edge-vertical poster-edge-left" aria-hidden="true">
				JP's jus aesthetic fascination
			</div>

			<div class="poster-ampersand-col">
				<span class="huge-ampersand">&amp;</span>
			</div>

			<div class="poster-ticket-partition">
				<div class="ticket-upper">
					<div class="ticket-disclaimer">
						DISCLAIMER: I am not a frontend developer at its best. This website is the extent of my frontend skills althuogh not the end of my design skills.
					</div>
					<div class="ticket-rights">
						<span class="rights-kicker">PERSONAL PORTFOLIO</span>
						<span class="rights-code">RONIT &middot; 2026</span>
					</div>
				</div>

				<div class="ticket-japanese-wrap" tabindex="0" title="Delay-Tolerant Networks · Software Development">
					<div class="ticket-japanese" lang="ja">
						遅延耐性ネットワーク・ソフトウェア開発
					</div>
					<div class="ticket-japanese-translation" aria-hidden="true">
						[ Delay-Tolerant Networks &middot; Software Development ]
					</div>
				</div>

				<div class="ticket-lower">
					<span class="ticket-hours-label">connect &#9658;</span>
					<a href="mailto:choudhury.ronit@proton.me" class="ticket-endpoint-link" title="Send direct email via Proton Mail">proton mail</a> &middot;
					<a href="https://github.com/nonQualities" target="_blank" rel="noopener noreferrer" class="ticket-endpoint-link" title="View GitHub profile">github</a> &middot;
					<a href="https://www.linkedin.com/in/ronit-choudhury-2672ab404/" target="_blank" rel="noopener noreferrer" class="ticket-endpoint-link" title="View LinkedIn profile">linkedin</a> &middot;
					<a href="{base}/contact/" class="ticket-endpoint-link" title="View all contact endpoints">direct contact &rarr;</a>
				</div>
			</div>

			<div class="poster-barcode-col">
				<div class="dense-specs-text">
					Apart from tech, I enjoy reading, music and art in general. I play the guitar, and learning the piano, but piano is very hard. I also sing sometimes (all the time) and I watch a lot of anime, atleast used to watch a lot of anime. Recently, Ted Lasso on apple tv really impressed me, and in anime world, Ergo proxy was really good (yes the old one).
				</div>
				<div class="barcode-graphic-box" title="Code 128 Barcode: ronit">
					<svg class="barcode-svg" viewBox="0 0 110 36" width="100%" height="36" preserveAspectRatio="none" aria-label="Barcode encoding: ronit" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#ffffff" rx="0"/><rect x="10" y="0" width="2" height="36" fill="#000000"/><rect x="13" y="0" width="1" height="36" fill="#000000"/><rect x="16" y="0" width="1" height="36" fill="#000000"/><rect x="21" y="0" width="1" height="36" fill="#000000"/><rect x="24" y="0" width="1" height="36" fill="#000000"/><rect x="27" y="0" width="4" height="36" fill="#000000"/><rect x="32" y="0" width="1" height="36" fill="#000000"/><rect x="36" y="0" width="4" height="36" fill="#000000"/><rect x="41" y="0" width="1" height="36" fill="#000000"/><rect x="43" y="0" width="2" height="36" fill="#000000"/><rect x="49" y="0" width="1" height="36" fill="#000000"/><rect x="51" y="0" width="1" height="36" fill="#000000"/><rect x="54" y="0" width="1" height="36" fill="#000000"/><rect x="59" y="0" width="2" height="36" fill="#000000"/><rect x="62" y="0" width="1" height="36" fill="#000000"/><rect x="65" y="0" width="1" height="36" fill="#000000"/><rect x="68" y="0" width="4" height="36" fill="#000000"/><rect x="73" y="0" width="1" height="36" fill="#000000"/><rect x="76" y="0" width="3" height="36" fill="#000000"/><rect x="80" y="0" width="1" height="36" fill="#000000"/><rect x="82" y="0" width="2" height="36" fill="#000000"/><rect x="87" y="0" width="2" height="36" fill="#000000"/><rect x="92" y="0" width="3" height="36" fill="#000000"/><rect x="96" y="0" width="1" height="36" fill="#000000"/><rect x="98" y="0" width="2" height="36" fill="#000000"/></svg>
				</div>
			</div>

			<div class="poster-edge-vertical">
				regarless of tech
			</div>
		</div>

	</section>

	<!-- Primary Portals: Professional & Personal Gateways -->
	<PortalCards />

	<!-- Research & Areas of Interest -->
	<section class="hud-box" aria-label="Research and Areas of Interest">
		<div class="hud-header">
			<span class="hud-title">Research &amp; Areas of Interest</span>
			<span class="hud-sub">[ Focus Domains ]</span>
		</div>
		<div class="hud-grid">
			<div class="hud-card">
				<div class="hud-card-label">Active Research</div>
				<h2 class="hud-card-title">Delay-Tolerant Networks (DTN)</h2>
				<p class="hud-card-desc">
					Investigating deterministic and resource-efficient network communication software, store-carry-forward topologies, and routing behavior under intermittent connectivity and high-latency conditions.
				</p>
			</div>
			<div class="hud-card">
				<div class="hud-card-label">Technical Interests</div>
				<h2 class="hud-card-title">Core Areas of Study</h2>
				<ul class="hud-interests-list">
					<li>Systems Programming</li>
					<li>Computer Networks</li>
					<li>Performance Engineering</li>
					<li>Database Systems</li>
					<li>Theoretical Computer Science</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- Compact High-Density Table of Contents Grid -->
	<nav class="toc-container" id="toc" aria-label="Table of Contents">
		<div class="hud-header">
			<span class="hud-title">Table of Contents // Navigation</span>
			<span class="hud-sub">[ Hotkeys: 0-9 &middot; / to Search ]</span>
		</div>
		<div class="toc-grid">
			<a href="{base}/about/" class="toc-item" data-key="1">
				<div class="toc-item-left">
					<span class="toc-num">01.</span>
					<span class="toc-title">About &amp; Principles</span>
				</div>
				<span class="toc-arrow">&rarr;</span>
			</a>
			<a href="{base}/stack/" class="toc-item" data-key="2">
				<div class="toc-item-left">
					<span class="toc-num">02.</span>
					<span class="toc-title">Technical Stack</span>
				</div>
				<span class="toc-arrow">&rarr;</span>
			</a>
			<a href="{base}/projects/" class="toc-item" data-key="3">
				<div class="toc-item-left">
					<span class="toc-num">03.</span>
					<span class="toc-title">Projects &amp; Systems</span>
				</div>
				<span class="toc-arrow">&rarr;</span>
			</a>
			<a href="{base}/experience/" class="toc-item" data-key="4">
				<div class="toc-item-left">
					<span class="toc-num">04.</span>
					<span class="toc-title">Experience &amp; Internships</span>
				</div>
				<span class="toc-arrow">&rarr;</span>
			</a>
			<a href="{base}/github/" class="toc-item" data-key="5">
				<div class="toc-item-left">
					<span class="toc-num">05.</span>
					<span class="toc-title">GitHub Telemetry</span>
				</div>
				<span class="toc-arrow">&rarr;</span>
			</a>
			<a href="{base}/reading/" class="toc-item" data-key="6">
				<div class="toc-item-left">
					<span class="toc-num">06.</span>
					<span class="toc-title">Reading &amp; Notes</span>
				</div>
				<span class="toc-arrow">&rarr;</span>
			</a>
			<a href="{base}/writing/" class="toc-item" data-key="7">
				<div class="toc-item-left">
					<span class="toc-num">07.</span>
					<span class="toc-title">Writing &amp; Articles</span>
				</div>
				<span class="toc-arrow">&rarr;</span>
			</a>
			<a href="{base}/contact/" class="toc-item" data-key="8">
				<div class="toc-item-left">
					<span class="toc-num">08.</span>
					<span class="toc-title">Contact Endpoints</span>
				</div>
				<span class="toc-arrow">&rarr;</span>
			</a>
			<a href="{base}/watchlist/" class="toc-item" data-key="9">
				<div class="toc-item-left">
					<span class="toc-num">09.</span>
					<span class="toc-title">Watchlist &amp; Leisure</span>
				</div>
				<span class="toc-arrow">&rarr;</span>
			</a>
		</div>
	</nav>

	<!-- Direct Contact Channels -->
	<section class="landing-contacts-block" aria-label="Direct Contact Endpoints">
		<div class="hud-header">
			<span class="hud-title">Direct Contact Endpoints</span>
			<span class="hud-sub">[ Direct Channels ]</span>
		</div>
		<div class="contacts-table">
			<a href="https://github.com/nonQualities" target="_blank" rel="noopener noreferrer" class="contact-row" data-channel="github">
				<span class="contact-ch-badge">GitHub</span>
				<span class="contact-ch-val">@nonQualities</span>
				<span class="contact-ch-action">&rarr; View Repositories</span>
			</a>
			<a href="https://www.linkedin.com/in/ronit-choudhury-2672ab404/" target="_blank" rel="noopener noreferrer" class="contact-row" data-channel="linkedin">
				<span class="contact-ch-badge">LinkedIn</span>
				<span class="contact-ch-val">Ronit Choudhury</span>
				<span class="contact-ch-action">&rarr; View Profile</span>
			</a>
			<a href="mailto:choudhury.ronit@proton.me" class="contact-row" data-channel="proton">
				<span class="contact-ch-badge">Proton Mail</span>
				<span class="contact-ch-val">choudhury.ronit@proton.me</span>
				<span class="contact-ch-action">&rarr; Send Direct Mail</span>
			</a>
			<a href="mailto:ronitchoudhury965@gmail.com" class="contact-row" data-channel="gmail">
				<span class="contact-ch-badge">Gmail</span>
				<span class="contact-ch-val">ronitchoudhury965@gmail.com</span>
				<span class="contact-ch-action">&rarr; Send Direct Mail</span>
			</a>
		</div>
	</section>

	<footer class="page-footer">
		<span>Ronit Choudhury &middot; 2026</span>
		<span>Guwahati, Assam</span>
	</footer>

</main>
