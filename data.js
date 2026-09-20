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

  // ---- READING (Subdivided by Genre) ----
  reading: [
    // Classical Literature & Epics
    {
      title: "Chapman’s Homer",
      author: "Homer (translated by George Chapman)",
      genre: "Classical Literature & Epics"
    },
    // Philosophy, Ethics & Epistemology
    {
      title: "The Principal Upanishads",
      author: "Sarvepalli Radhakrishnan",
      genre: "Philosophy, Ethics & Epistemology"
    },
    {
      title: "The Nyāya Theory of Knowledge",
      author: "Satis Chandra Chatterjee",
      genre: "Philosophy, Ethics & Epistemology"
    },
    {
      title: "Critique of Pure Reason",
      author: "Immanuel Kant",
      genre: "Philosophy, Ethics & Epistemology"
    },
    {
      title: "Twilight of the Idols",
      author: "Friedrich Nietzsche",
      genre: "Philosophy, Ethics & Epistemology"
    },
    {
      title: "Beyond Good and Evil",
      author: "Friedrich Nietzsche",
      genre: "Philosophy, Ethics & Epistemology"
    },
    {
      title: "Apology",
      author: "Plato",
      genre: "Philosophy, Ethics & Epistemology"
    },
    {
      title: "Crito",
      author: "Plato",
      genre: "Philosophy, Ethics & Epistemology"
    },
    {
      title: "Euthyphro",
      author: "Plato",
      genre: "Philosophy, Ethics & Epistemology"
    },
    {
      title: "On the Shortness of Life",
      author: "Seneca",
      genre: "Philosophy, Ethics & Epistemology"
    },
    {
      title: "Letter to a Priest",
      author: "Simone Weil",
      genre: "Philosophy, Ethics & Epistemology"
    },
    {
      title: "Reflections",
      author: "Swami Vivekananda",
      genre: "Philosophy, Ethics & Epistemology"
    },
    // Classic & World Fiction
    {
      title: "The Originals: Crime and Punishment",
      author: "Fyodor Dostoevsky",
      genre: "Classic & World Fiction"
    },
    {
      title: "The Brothers Karamazov",
      author: "Fyodor Dostoevsky",
      genre: "Classic & World Fiction"
    },
    {
      title: "Notes from Underground",
      author: "Fyodor Dostoevsky",
      genre: "Classic & World Fiction"
    },
    {
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      genre: "Classic & World Fiction"
    },
    {
      title: "Metamorphosis",
      author: "Franz Kafka",
      genre: "Classic & World Fiction"
    },
    {
      title: "The Trial",
      author: "Franz Kafka",
      genre: "Classic & World Fiction"
    },
    {
      title: "A Portrait of the Artist as a Young Man",
      author: "James Joyce",
      genre: "Classic & World Fiction"
    },
    {
      title: "In Search of Lost Time, Vol. 1",
      author: "Marcel Proust",
      genre: "Classic & World Fiction"
    },
    {
      title: "Nineteen Eighty-Four",
      author: "George Orwell",
      genre: "Classic & World Fiction"
    },
    {
      title: "All the Pretty Horses",
      author: "Cormac McCarthy",
      genre: "Classic & World Fiction"
    },
    {
      title: "Aghori Atmar Kahini",
      author: "Syed Abdul Malik",
      genre: "Classic & World Fiction"
    },
    // Contemporary Fiction
    {
      title: "Killing Commendatore",
      author: "Haruki Murakami",
      genre: "Contemporary Fiction"
    },
    {
      title: "The Wind-Up Bird Chronicle",
      author: "Haruki Murakami",
      genre: "Contemporary Fiction"
    },
    {
      title: "Never Let Me Go",
      author: "Kazuo Ishiguro",
      genre: "Contemporary Fiction"
    },
    {
      title: "A Thousand Splendid Suns",
      author: "Khaled Hosseini",
      genre: "Contemporary Fiction"
    },
    {
      title: "A Little Life",
      author: "Hanya Yanagihara",
      genre: "Contemporary Fiction"
    },
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Contemporary Fiction"
    },
    {
      title: "The Da Vinci Code",
      author: "Dan Brown",
      genre: "Contemporary Fiction"
    },
    {
      title: "Paper Towns",
      author: "John Green",
      genre: "Contemporary Fiction"
    },
    {
      title: "Looking for Alaska",
      author: "John Green",
      genre: "Contemporary Fiction"
    },
    {
      title: "The Fountainhead",
      author: "Ayn Rand",
      genre: "Contemporary Fiction"
    },
    // Psychology, Behaviour & Cognitive Science
    {
      title: "Thinking, Fast and Slow",
      author: "Daniel Kahneman",
      genre: "Psychology & Cognitive Science"
    },
    {
      title: "Behave",
      author: "Robert M. Sapolsky",
      genre: "Psychology & Cognitive Science"
    },
    // Economics & Political Philosophy
    {
      title: "Capital, Vol. 1",
      author: "Karl Marx",
      genre: "Economics & Social Theory"
    },
    // Language, Craft & Rhetoric
    {
      title: "Quack This Way",
      author: "Bryan A. Garner & David Foster Wallace",
      genre: "Language & Craft"
    }
  ],

  // ---- TEXTBOOKS (Selected Reference & Foundational Works) ----
  textbooksNote: "Selected foundational textbooks and references of personal interest. Referenced for core theory and study; not necessarily read cover-to-cover.",
  textbooks: [
    // Mathematics
    {
      title: "Calculus, Volume 1",
      author: "Tom M. Apostol",
      publisher: "Wiley",
      genre: "Mathematics"
    },
    {
      title: "Discrete Mathematical Structures with Applications to Computer Science",
      author: "Jean-Paul Tremblay & Ram Manohar",
      publisher: "McGraw-Hill",
      genre: "Mathematics"
    },
    {
      title: "Linear Algebra",
      author: "Stephen H. Friedberg, Arnold J. Insel, Lawrence E. Spence (FIS)",
      publisher: "Pearson",
      genre: "Mathematics"
    },
    {
      title: "Algebra for Applications: Cryptography, Secret Sharing, Error-Correcting, and Quantum Computing",
      author: "Arkadii Slinko",
      publisher: "Springer",
      genre: "Mathematics"
    },
    {
      title: "Concrete Mathematics: A Foundation for Computer Science",
      author: "Ronald L. Graham, Donald E. Knuth, Oren Patashnik",
      publisher: "Addison-Wesley / Pearson",
      genre: "Mathematics"
    },
    {
      title: "Computational Number Theory",
      author: "Abhijit Das",
      publisher: "CRC Press / Chapman & Hall",
      genre: "Mathematics"
    },

    // Core Computer Science
    {
      title: "Computer Networks with Internet Protocols and Technology",
      author: "William Stallings",
      publisher: "Pearson",
      genre: "Core Computer Science"
    },
    {
      title: "Algorithm Design",
      author: "Jon Kleinberg & Éva Tardos (K&T)",
      publisher: "Pearson",
      genre: "Core Computer Science"
    },
    {
      title: "The C++ Programming Language",
      author: "Bjarne Stroustrup",
      publisher: "Pearson",
      genre: "Core Computer Science"
    },
    {
      title: "Computer Organization, Design, and Architecture",
      author: "Sajjan G. Shiva",
      publisher: "CRC Press",
      genre: "Core Computer Science"
    },
    {
      title: "An Introduction to Database Systems",
      author: "C. J. Date",
      publisher: "Pearson",
      genre: "Core Computer Science"
    },
    {
      title: "Data Structures and Algorithms",
      author: "Alfred V. Aho, Jeffrey D. Ullman, John E. Hopcroft",
      publisher: "Pearson",
      genre: "Core Computer Science"
    },
    {
      title: "Introduction to Automata Theory, Languages, and Computation",
      author: "John E. Hopcroft, Rajeev Motwani, Jeffrey D. Ullman (HMU)",
      publisher: "Pearson",
      genre: "Core Computer Science"
    },
    {
      title: "Operating Systems: Internals and Design Principles",
      author: "William Stallings",
      publisher: "Pearson",
      genre: "Core Computer Science"
    },
    {
      title: "Modern Coding Theory",
      author: "Tom Richardson & Rüdiger Urbanke",
      publisher: "Cambridge University Press",
      genre: "Core Computer Science"
    },

    // Artificial Intelligence & Machine Learning
    {
      title: "An Introduction to Statistical Learning",
      author: "Gareth James, Daniela Witten, Trevor Hastie, Robert Tibshirani",
      publisher: "Springer",
      genre: "Artificial Intelligence & Machine Learning"
    },
    {
      title: "Artificial Intelligence: A Modern Approach",
      author: "Stuart Russell & Peter Norvig",
      publisher: "Pearson",
      genre: "Artificial Intelligence & Machine Learning"
    },

    // Statistics
    {
      title: "Statistical Methods",
      author: "N. G. Das",
      publisher: "McGraw-Hill",
      genre: "Statistics"
    },
    {
      title: "Statistical Inference",
      author: "George Casella & Roger L. Berger",
      publisher: "Cengage",
      genre: "Statistics"
    },

    // Physics
    {
      title: "University Physics with Modern Physics",
      author: "Hugh D. Young & Roger A. Freedman (Sears and Zemansky's)",
      publisher: "Pearson",
      genre: "Physics"
    },
    {
      title: "Berkeley Physics Course (Undergraduate Physics Series)",
      author: "Charles Kittel, Edward M. Purcell, et al.",
      publisher: "McGraw-Hill",
      genre: "Physics"
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

