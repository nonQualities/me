/* ============================================================
   PORTFOLIO DATA — Ronit Choudhury
   Specification standard: ASD-STE100 (Simplified Technical English)
   Concise, precise, unambiguous.
   ============================================================ */

const PORTFOLIO_DATA = {

  // ---- ABOUT ----
  about: {
    paragraphs: [
      "I study Software Development at Gauhati University in an Integrated Master of Science program. Concurrently, I read Economics at Indira Gandhi National Open University (IGNOU).",
      "My primary interests include theoretical computer science,specifically Programming languages, Theory of Computation and Algorithms. I like programming in general, but I enjoy small, simple yet powerful tools to do so. In development, I am interested more on the systems side of things",
      "I have formal training in Fine Arts. This background directs my approach to human-computer interaction, accessible design, and typography. I prioritize software that is deterministic, lightweight, and fast."
    ],
    quote: {
      text: "A monad is a monoid in the category of endofunctors.",
      cite: "Saunders Mac Lane, Categories for the Working Mathematician (1971)"
    }
  },

  // ---- MANIFESTO / PRINCIPLES (ASD-STE100) ----
  manifesto: [
    "Build software that is deterministic, fast, and resource-efficient.",
    "Reject unnecessary software layers and artificial complexity.",
    "Treat development as applied computer science, not arbitrary assembly.",
    "Design interfaces that remain accessible under low-bandwidth and high-latency conditions."
  ],

  // ---- SNAPSHOT ----
  snapshot: [
    {
      label: "Program",
      value: "Integrated MSc (Software Development)"
    },
    {
      label: "Secondary",
      value: "Economics (BA, IGNOU)"
    },
    {
      label: "Core Focus",
      value: "Theory, Systems Architecture, HCI"
    },
    {
      label: "Base",
      value: "Guwahati, Assam, India (26.14°N, 91.74°E)"
    },
    {
      label: "Standard",
      value: "Lightweight, Reliable, Deterministic"
    }
  ],

  // ---- STACK ----
  stack: [
    {
      label: "Languages",
      items: "C/C++, C#, C3, Java, Python, Haskell, Elixir, Fortran, SQL, HTML/CSS, R",
      level: 92
    },
    {
      label: "Frameworks & Tools",
      items: "ASP.NET Core, Avalonia UI, WebSockets, PostgreSQL, Podman",
      level: 86
    },
    {
      label: "Design & HCI",
      items: "Figma, Inkscape, Adobe Illustrator, WCAG 2.1 AA Accessibility Standards",
      level: 88
    },
    {
      label: "Theoretical CS",
      items: "Automata Theory, Type Systems, Algorithm Complexity, Discrete Mathematics, Statistics",
      level: 90
    }
  ],

  // ---- PROJECTS (ASD-STE100) ----
  projects: [
    {
      name: "Upagraha",
      tags: ["C#", ".NET", "Avalonia UI", "Onix Runtime"],
      desc: "UpaGraha is an enterprise-grade Earth Observation (EO) and Geospatial Intelligence (GEOINT) platform architected for 100% air-gapped, zero-internet, on-premises operation. It empowers defense and intelligence analysts, disaster management teams, and environmental monitoring organizations to ingest high-resolution satellite imagery, execute sub-millisecond visual similarity searches, detect physical land-use changes, track multi-temporal onset timelines, and conduct analyst verification workflows without external network dependencies or third-party cloud mapping services.",
      link: {
        text: "Github:Upagraha",
        url: "https://github.com/arnabbfr/Unified-RSanalytics"
      }
    },
    {
      name: "Dasam — FSM Simulator",
      tags: ["C#", "Avalonia UI", "Automata"],
      desc: "Cross-platform finite state machine simulator. Features visual execution trace, real-time deterministic transition logic, and an accessible GUI designed for screen-reader compatibility.",
      link: {
        text: "github.com/nonQualities/Dasaam",
        url: "https://github.com/nonQualities/Dasaam"
      }
    },
    {
      name: "Fluid Simulation Engine",
      tags: ["C++", "SIMD", "Numerical Physics"],
      desc: "Two-dimensional fluid dynamics engine based on the Lattice Boltzmann Method (LBM) with a D2Q9 discretization grid. Utilizes cache-aligned structure-of-arrays to maximize memory throughput.",
      link: {
        text: "github.com/nonQualities/vayunicus",
        url: "https://github.com/nonQualities/vayunicus"
      }
    },
    {
      name: "DSL Prototype & Evaluator",
      tags: ["Haskell", "Type Theory", "Compilers"],
      desc: "Domain-specific programming language. Implements an abstract syntax tree parser, Hindley-Milner type inference, and an evaluator using monad transformer stacks.",
      link: {
        text: "github.com/nonQualities/ExpressionEval",
        url: "https://github.com/nonQualities/ExpressionEval"
      }
    },
    {
      name: "FSynth — ADSR Synthesizer",
      tags: ["Fortran", "DSP", "Audio"],
      desc: "Low-level digital audio synthesizer written in modern Fortran. Generates continuous waveforms with configurable Attack-Decay-Sustain-Release (ADSR) amplitude envelopes.",
      link: {
        text: "github.com/nonQualities/synth",
        url: "https://github.com/nonQualities/synth"
      }
    }
  ],

  // ---- GITHUB ----
  github: {
    username: "nonQualities",
    note: "All repositories emphasize algorithmic correctness, low resource consumption, and portable code."
  },

  // ---- EXPERIENCE (ASD-STE100) ----
  experience: [
    {
      role: "Technical Intern",
      org: "Directorate of Information Technology, Electronics and Communications",
      period: "July 2026",
      summary: "Evaluated Digital Public Infrastructure (DPI) architectures, state network topologies, and WCAG-compliant software implementations.Visit LinkedIn for more details",
      tags: ["DPI", "Network Engineering", "Security", "Accessibility"]
    },
    {
      role: "ML Intern",
      org: "National Institute of Electronics & Information Technology (NIELIT)",
      period: "July 2026",
      summary: "Constructed data preprocessing pipelines, performed tabular data cleaning, and trained supervised classification models. Visit LinkedIn for more details",
      tags: ["ML", "Data Pipelines", "Python"]
    },
    {
      role: "Design Specialist",
      org: "Funked Media Limited",
      period: "July 2025 – September 2025",
      summary: "Produced brand identity guidelines, custom logotypes, and digital vector graphics for domestic clients.Visit LinkedIn for more details",
      tags: ["Typography", "Brand Identity", "Vector HCI"]
    },
    {
      role: "Frontend & Accessibility Contributor",
      org: "Campus Project Group",
      period: "2025",
      summary: "Built accessible web layouts optimized for low-bandwidth networks and users with low digital literacy.",
      tags: ["UI", "WCAG 2.1", "Accessibility"]
    }
  ],

  // ---- READING ----
  reading: [
    {
      title: "Concrete Mathematics",
      author: "Ronald L. Graham, Donald E. Knuth, Oren Patashnik",
      trivia: "A foundational text on discrete mathematics, recurrence relations, and combinatorial analysis."
    },
    {
      title: "War and Peace",
      author: "Leo Tolstoy",
      trivia: "An examination of historical determinism, human choice, and systemic complexity."
    },
    {
      title: "Ghost in the Wires",
      author: "Kevin Mitnick",
      trivia: "Demonstrates that authentication models fail primarily through social engineering rather than cryptographic breakage."
    }
  ],

  // ---- WRITING ----
  writing: {
    items: [
      {
        title: "I Built a CSMA Simulator and Accidentally Read a 1975 Paper About It",
        date: "Apr 2026",
        url: "https://medium.com/@ronitchoudhury965/i-built-a-csma-simulator-and-accidentally-read-a-1975-paper-about-it-66dfe56c35ea"
      },
      {
        title: "Hopefully, A Hopeful Piece of Literature",
        date: "Dec 2023",
        url: "https://medium.com/@ronitchoudhury965/hopefully-a-hopeful-piece-of-literature-e0299bbbc7d0"
      }
    ],
    moreLink: {
      text: "View all publications on Medium",
      url: "https://medium.com/@ronitchoudhury965"
    }
  },

  // ---- CONTACT ----
  contact: [
    {
      type: "Proton",
      value: "choudhury.ronit@proton.me",
      href: "mailto:choudhury.ronit@proton.me"
    },
    {
      type: "Gmail",
      value: "ronitchoudhury965@gmail.com",
      href: "mailto:ronitchoudhury965@gmail.com"
    },
    {
      type: "GitHub",
      value: "nonQualities",
      href: "https://github.com/nonQualities"
    },
    {
      type: "LinkedIn",
      value: "Ronit Choudhury",
      href: "https://www.linkedin.com/in/ronit-choudhury-2672ab404/"
    }
  ]

};

