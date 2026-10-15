/* ============================================================
   PORTFOLIO DATA — Ronit Choudhury
   Specification standard: ASD-STE100 (Simplified Technical English)
   Concise, precise, unambiguous.
   ============================================================ */

const PORTFOLIO_DATA = {

  // ---- ABOUT ----
  about: {
    paragraphs: [
      "I study Software Development at Gauhati University in an Integrated Master of Science program within the Department of Information Technology (current CGPA: 8.5). Completed Higher Secondary education at B.Borooah College, Guwahati.",
      "My primary interests include theoretical computer science—specifically programming languages, theory of computation, algorithms—and systems programming. I am currently working on delay-tolerant networks (DTN), building deterministic and resource-efficient network communication software.",
      "I have formal training in Fine Arts. This background directs my approach to human-computer interaction, accessible design, and typography. I prioritize software that is deterministic, lightweight, and fast.",
      "I serve as the Community Lead for The Free Code Subculture (previously, The Free Code Syndicate), directing our public initiative dedicated to free software, collective systems study, and careful engineering."
    ],
    quote: {
      text: "A monad is a monoid in the category of endofunctors.",
      cite: "Saunders Mac Lane, Categories for the Working Mathematician (1971)"
    }
  },

  // ---- EDUCATION & ACADEMICS ----
  education: [
    {
      institution: "Gauhati University",
      degree: "Integrated Master of Science (MSc) in Software Development",
      department: "Department of Information Technology (IT)",
      status: "Currently Enrolled",
      cgpa: "8.5"
    },
    {
      institution: "B.Borooah College, Guwahati",
      degree: "Higher Secondary (HS)",
      status: "Completed"
    }
  ],

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
      label: "Department",
      value: "Department of IT, Gauhati University"
    },
    {
      label: "Core Focus",
      value: "Delay-Tolerant Networks, Systems, Theory"
    },
    {
      label: "Community",
      value: "Community Lead @ Free Code Subculture"
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
      name: "ErgoProxy",
      tags: ["C#", ".NET", "Linux", "Networking", "TUN"],
      desc: "Device-wide transparent network tunnel for Linux utilizing virtual TUN interfaces (ergo0), kernel policy routing (fwmark), and a fake-IP DNS resolver. Routes application TCP traffic through upstream HTTP proxies via standard HTTP CONNECT tunnels while preserving end-to-end TLS encryption without root certificate spoofing.",
      link: {
        text: "github.com/nonQualities/ergoproxy",
        url: "https://github.com/nonQualities/ergoproxy"
      }
    },
    {
      name: "AntiProxy",
      tags: ["Kotlin", "Android", "BLE", "Cryptography"],
      desc: "Decentralized classroom attendance verification system operating over Bluetooth Low Energy (BLE) GATT without internet connectivity. Mitigates remote proxy attendance via asymmetric cryptographic proofs signed inside hardware-backed Android Keystore (TEE/StrongBox), physical RSSI proximity validation, and ephemeral session nonces.",
      link: {
        text: "github.com/The3AMOrg/anti-proxy",
        url: "https://github.com/The3AMOrg/anti-proxy"
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
      role: "Community Lead",
      org: "The Free Code Subculture (previously, Syndicate)",
      period: "April 2026 – Present",
      url: "https://thefreecodesyndicate.github.io/fcs-site/",
      summary: "Directing the community for open software, collective study, and careful engineering. Organizing public RFCs, collaborative systems study, and open-source infrastructure.",
      tags: ["Community Lead", "Free Software", "Open Source", "Systems", "RFCs"]
    },
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
        title: "Software as Engineering in Constraints.",
        date: "Oct 2026",
        url: "https://medium.com/@ronitchoudhury965/software-as-engineering-in-constraints-7962630ca0c4"
      },
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
      type: "Subculture",
      value: "Free Code Subculture",
      href: "https://thefreecodesyndicate.github.io/fcs-site/"
    },
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
  ],

  // ---- WATCHLIST & LEISURE (Non-Academic Catalog) ----
  watchlist: {
    "quotes": [
      {
        "text": "Whatever happens, happens.",
        "jp": "「何があっても、なるようになるさ」",
        "author": "Spike Spiegel",
        "source": "Cowboy Bebop (カウボーイビバップ)"
      },
      {
        "text": "No one knows what the future holds. That's why its potential is infinite.",
        "jp": "「未来のことは誰にもわからない。だからこそ、その可能性は無限なんだ」",
        "author": "Rintaro Okabe",
        "source": "Steins;Gate (シュタインズ・ゲート)"
      },
      {
        "text": "The world is cruel, but it is also very beautiful.",
        "jp": "「この世界は残酷だ… そして… とても美しい」",
        "author": "Mikasa Ackerman",
        "source": "Attack on Titan (進撃の巨人)"
      },
      {
        "text": "Was I able to live inside someone's heart? Was I able to live inside your heart?",
        "jp": "「私は誰かの心に住めたかな？ 君の心に住めたかな？」",
        "author": "Kaori Miyazono",
        "source": "Your Lie in April (四月は君の嘘)"
      },
      {
        "text": "Treasure the experience. Dreams fade away after you wake up.",
        "jp": "「大事な経験だ。夢は、目覚めれば消えてしまう」",
        "author": "Hitoha Miyamizu",
        "source": "Your Name (君の名は。)"
      }
    ],
    "animeSeries": [
      {
        "id": 1,
        "title": "Your Lie in April",
        "jp": "四月は君の嘘",
        "genre": "Music · Romance · Drama",
        "spotlight": true
      },
      {
        "id": 2,
        "title": "Orange",
        "jp": "orange",
        "genre": "Sci-Fi · Drama · Romance"
      },
      {
        "id": 3,
        "title": "Ao Haru Ride",
        "jp": "アオハライド",
        "genre": "Romance · Slice of Life"
      },
      {
        "id": 4,
        "title": "Psycho-Pass Season 1",
        "jp": "PSYCHO-PASS サイコパス",
        "genre": "Cyberpunk · Psychological · Crime",
        "spotlight": true
      },
      {
        "id": 5,
        "title": "Psycho-Pass Season 2",
        "jp": "PSYCHO-PASS サイコパス 2",
        "genre": "Cyberpunk · Crime Thriller"
      },
      {
        "id": 6,
        "title": "Death Note",
        "jp": "DEATH NOTE",
        "genre": "Psychological · Supernatural Thriller",
        "spotlight": true
      },
      {
        "id": 7,
        "title": "Horimiya",
        "jp": "ホリミヤ",
        "genre": "Romance · Slice of Life · Comedy"
      },
      {
        "id": 8,
        "title": "Kimi ni Todoke (From Me to You) Season 1",
        "jp": "君に届け",
        "genre": "Romance · Slice of Life"
      },
      {
        "id": 9,
        "title": "Kimi ni Todoke (From Me to You) Season 2",
        "jp": "君に届け 2ND SEASON",
        "genre": "Romance · Slice of Life"
      },
      {
        "id": 10,
        "title": "Hyouka",
        "jp": "氷菓",
        "genre": "Mystery · Slice of Life · Kyoto Animation",
        "spotlight": true
      },
      {
        "id": 11,
        "title": "Anohana: The Flower We Saw That Day",
        "jp": "あの日見た花の名前を僕達はまだ知らない。",
        "genre": "Drama · Supernatural"
      },
      {
        "id": 12,
        "title": "Scum's Wish (Kuzu no Honkai)",
        "jp": "クズの本懐",
        "genre": "Psychological Drama · Romance"
      },
      {
        "id": 13,
        "title": "Kokoro Connect",
        "jp": "ココロコネクト",
        "genre": "Supernatural · Psychological Drama"
      },
      {
        "id": 14,
        "title": "Kokoro Connect OVA (3 Episodes)",
        "jp": "ココロコネクト ミチランダム",
        "genre": "Supernatural · Drama"
      },
      {
        "id": 15,
        "title": "Clannad",
        "jp": "CLANNAD",
        "genre": "Drama · Romance · Slice of Life"
      },
      {
        "id": 16,
        "title": "Clannad: After Story",
        "jp": "CLANNAD 〜AFTER STORY〜",
        "genre": "Family Drama · Tears · Masterpiece",
        "spotlight": true
      },
      {
        "id": 17,
        "title": "ReLIFE",
        "jp": "ReLIFE",
        "genre": "Sci-Fi · Slice of Life · Romance"
      },
      {
        "id": 18,
        "title": "ReLIFE OVA",
        "jp": "ReLIFE 完結編",
        "genre": "Romance · Slice of Life"
      },
      {
        "id": 19,
        "title": "Golden Time",
        "jp": "ゴールデンタイム",
        "genre": "Romance · University Drama · Comedy"
      },
      {
        "id": 20,
        "title": "Demon Slayer Season 1",
        "jp": "鬼滅の刃",
        "genre": "Action · Supernatural · Ufotable"
      },
      {
        "id": 21,
        "title": "Attack on Titan Season 1",
        "jp": "進撃の巨人 Season 1",
        "genre": "Dark Fantasy · Action · Drama",
        "spotlight": true
      },
      {
        "id": 22,
        "title": "Attack on Titan Season 2",
        "jp": "進撃の巨人 Season 2",
        "genre": "Dark Fantasy · Action · Drama"
      },
      {
        "id": 23,
        "title": "Attack on Titan Season 3",
        "jp": "進撃の巨人 Season 3",
        "genre": "Dark Fantasy · Action · Drama"
      },
      {
        "id": 24,
        "title": "Attack on Titan: The Final Season Part 1",
        "jp": "進撃の巨人 The Final Season Part 1",
        "genre": "Dark Fantasy · War · MAPPA"
      },
      {
        "id": 25,
        "title": "Attack on Titan: The Final Season Part 2",
        "jp": "進撃の巨人 The Final Season Part 2",
        "genre": "Dark Fantasy · War · MAPPA"
      },
      {
        "id": 26,
        "title": "Steins;Gate",
        "jp": "シュタインズ・ゲート",
        "genre": "Sci-Fi · Time Travel · Psychological",
        "spotlight": true
      },
      {
        "id": 27,
        "title": "My Little Monster",
        "jp": "となりの怪物くん",
        "genre": "Romantic Comedy · High School"
      },
      {
        "id": 28,
        "title": "My Little Monster OVA",
        "jp": "となりの怪物くん OVA",
        "genre": "Romantic Comedy"
      },
      {
        "id": 29,
        "title": "Steins;Gate 0",
        "jp": "シュタインズ・ゲート ゼロ",
        "genre": "Sci-Fi · Alternate Worldline · Thriller"
      },
      {
        "id": 30,
        "title": "Tokyo Ghoul",
        "jp": "東京喰種トーキョーグール",
        "genre": "Dark Fantasy · Horror · Action"
      },
      {
        "id": 31,
        "title": "Jujutsu Kaisen",
        "jp": "呪術廻戦",
        "genre": "Action · Supernatural · Dark Fantasy"
      },
      {
        "id": 32,
        "title": "Tokyo Revengers Season 1",
        "jp": "東京リベンジャーズ",
        "genre": "Time Leap · Delinquent Action · Drama"
      },
      {
        "id": 33,
        "title": "My Hero Academia Season 1",
        "jp": "僕のヒーローアカデミア",
        "genre": "Superhero · Action · Bones"
      },
      {
        "id": 34,
        "title": "My Hero Academia Season 2",
        "jp": "僕のヒーローアカデミア 第2期",
        "genre": "Superhero · Tournament Action · Bones"
      },
      {
        "id": 35,
        "title": "My Hero Academia Season 3",
        "jp": "僕のヒーローアカデミア 第3期",
        "genre": "Superhero · Action · Bones"
      },
      {
        "id": 36,
        "title": "My Hero Academia Season 4",
        "jp": "僕のヒーローアカデミア 第4期",
        "genre": "Superhero · Action · Bones"
      },
      {
        "id": 37,
        "title": "My Hero Academia Season 5",
        "jp": "僕のヒーローアカデミア 第5期",
        "genre": "Superhero · Action · Bones"
      },
      {
        "id": 38,
        "title": "Noragami",
        "jp": "ノラガミ",
        "genre": "Urban Fantasy · Action · Bones"
      },
      {
        "id": 39,
        "title": "Noragami Aragoto",
        "jp": "ノラガミ ARAGOTO",
        "genre": "Urban Fantasy · Action · Bones"
      },
      {
        "id": 40,
        "title": "Black Clover",
        "jp": "ブラッククローバー",
        "genre": "Magic Fantasy · Action · Shonen"
      },
      {
        "id": 41,
        "title": "Inuyashiki",
        "jp": "いぬやしき",
        "genre": "Cyborg Sci-Fi · Psychological · MAPPA"
      },
      {
        "id": 42,
        "title": "Say I Love You",
        "jp": "好きっていいなよ。",
        "genre": "Romance · Slice of Life"
      },
      {
        "id": 43,
        "title": "Naruto",
        "jp": "NARUTO -ナルト-",
        "genre": "Ninja Action · Adventure · Shonen"
      },
      {
        "id": 44,
        "title": "Naruto: Shippuden",
        "jp": "NARUTO -ナルト- 疾風伝",
        "genre": "Ninja Action · Epic Adventure · Shonen"
      },
      {
        "id": 45,
        "title": "Fullmetal Alchemist: Brotherhood",
        "jp": "鋼の錬金術師 FULLMETAL ALCHEMIST",
        "genre": "Dark Fantasy · Alchemy · Masterpiece",
        "spotlight": true
      },
      {
        "id": 46,
        "title": "Mob Psycho 100 Season 1",
        "jp": "モブサイコ100",
        "genre": "Supernatural Action · Bones"
      },
      {
        "id": 47,
        "title": "Mob Psycho 100 Season 2",
        "jp": "モブサイコ100 II",
        "genre": "Supernatural Action · Coming-of-Age · Bones",
        "spotlight": true
      },
      {
        "id": 48,
        "title": "Fate/Zero",
        "jp": "Fate/Zero",
        "genre": "Dark Fantasy · Holy Grail War · Ufotable",
        "spotlight": true
      },
      {
        "id": 49,
        "title": "Fate/Stay Night",
        "jp": "Fate/stay night",
        "genre": "Urban Fantasy · Action · Studio Deen"
      },
      {
        "id": 50,
        "title": "Fate/Stay Night: Unlimited Blade Works",
        "jp": "Fate/stay night [UBW]",
        "genre": "Action · High Fantasy · Ufotable"
      },
      {
        "id": 51,
        "title": "Psycho-Pass 3",
        "jp": "PSYCHO-PASS サイコパス 3",
        "genre": "Cyberpunk · Sci-Fi Crime"
      },
      {
        "id": 52,
        "title": "Rent-a-Girlfriend",
        "jp": "彼女、お借りします",
        "genre": "Romantic Comedy · Drama"
      },
      {
        "id": 53,
        "title": "My Dress-Up Darling",
        "jp": "その着せ替え人形は恋をする",
        "genre": "Cosplay · Romance · CloverWorks"
      },
      {
        "id": 54,
        "title": "Devilman Crybaby",
        "jp": "DEVILMAN crybaby",
        "genre": "Dark Fantasy · Masaaki Yuasa · Science SARU"
      },
      {
        "id": 55,
        "title": "Toradora!",
        "jp": "とらドラ!",
        "genre": "Romantic Comedy · High School Classic"
      },
      {
        "id": 56,
        "title": "Kaguya-sama: Love is War Season 1",
        "jp": "かぐや様は告らせたい",
        "genre": "Psychological Romance · Comedy"
      },
      {
        "id": 57,
        "title": "Kaguya-sama: Love is War Season 2",
        "jp": "かぐや様は告らせたい？",
        "genre": "Psychological Romance · Comedy"
      },
      {
        "id": 58,
        "title": "Kaguya-sama: Love is War Season 3",
        "jp": "かぐや様は告らせたい-ウルトラロマンティック-",
        "genre": "Romance · Masterpiece Comedy",
        "spotlight": true
      },
      {
        "id": 59,
        "title": "My Teen Romantic Comedy SNAFU Season 1",
        "jp": "やはり俺の青春ラブコメはまちがっている。",
        "genre": "Slice of Life · Cynical Philosophy"
      },
      {
        "id": 60,
        "title": "My Teen Romantic Comedy SNAFU TOO!",
        "jp": "やはり俺の青春ラブコメはまちがっている。続",
        "genre": "Psychological Drama · Romance"
      },
      {
        "id": 61,
        "title": "My Teen Romantic Comedy SNAFU Climax!",
        "jp": "やはり俺の青春ラブコメはまちがっている。完",
        "genre": "Psychological Drama · Romance"
      },
      {
        "id": 62,
        "title": "Classroom of the Elite Season 1",
        "jp": "ようこそ実力至上主義の教室へ",
        "genre": "Psychological Thriller · Mind Games"
      },
      {
        "id": 63,
        "title": "Spy x Family",
        "jp": "SPY×FAMILY",
        "genre": "Cold War Spy Comedy · Slice of Life"
      },
      {
        "id": 64,
        "title": "Chainsaw Man",
        "jp": "チェンソーマン",
        "genre": "Dark Fantasy · Splatter Action · MAPPA"
      },
      {
        "id": 65,
        "title": "SK8 the Infinity",
        "jp": "SK∞ エスケーエイト",
        "genre": "Skateboarding · Sports Action · Bones"
      },
      {
        "id": 66,
        "title": "Nana",
        "jp": "NANA",
        "genre": "Punk Rock · Mature Romance · Madhouse",
        "spotlight": true
      },
      {
        "id": 67,
        "title": "Barakamon",
        "jp": "ばらかもん",
        "genre": "Calligraphy · Island Slice of Life"
      },
      {
        "id": 68,
        "title": "Bungou Stray Dogs",
        "jp": "文豪ストレイドッグス",
        "genre": "Supernatural Action · Literary Detectives"
      },
      {
        "id": 69,
        "title": "Blue Period",
        "jp": "ブルーピリオド",
        "genre": "Oil Painting · Fine Arts · Passion"
      },
      {
        "id": 70,
        "title": "Vinland Saga",
        "jp": "ヴィンランド・サガ",
        "genre": "Historical Viking Epic · Drama",
        "spotlight": true
      },
      {
        "id": 71,
        "title": "My Love Story with Yamada-kun at Lv999",
        "jp": "山田くんとLv999の恋をする",
        "genre": "MMORPG · Romance · Madhouse"
      },
      {
        "id": 72,
        "title": "Mushoku Tensei: Jobless Reincarnation",
        "jp": "無職転生 〜異世界行ったら本気だす〜",
        "genre": "High Fantasy · Epic Adventure · Studio Bind"
      },
      {
        "id": 73,
        "title": "Kids on the Slope",
        "jp": "坂道のアポロン",
        "genre": "1960s Jazz · Youth Drama · Shinichiro Watanabe",
        "spotlight": true
      },
      {
        "id": 74,
        "title": "Beck: Mongolian Chop Squad",
        "jp": "BECK",
        "genre": "Indie Rock · Coming-of-Age · Madhouse"
      },
      {
        "id": 75,
        "title": "Pluto",
        "jp": "PLUTO",
        "genre": "Sci-Fi · Robotics · AI Ethics · Naoki Urasawa",
        "spotlight": true
      },
      {
        "id": 76,
        "title": "Skip and Loafer",
        "jp": "スキップとローファー",
        "genre": "Wholesome Slice of Life · High School"
      },
      {
        "id": 77,
        "title": "ACCA: 13-Territory Inspection Dept.",
        "jp": "ACCA13区監察課",
        "genre": "Political Mystery · Slice of Life · Madhouse"
      },
      {
        "id": 78,
        "title": "The Millionaire Detective Balance: Unlimited",
        "jp": "富豪刑事 Balance:UNLIMITED",
        "genre": "Detective Action · High Tech Gadgets"
      },
      {
        "id": 79,
        "title": "Horimiya: The Missing Pieces",
        "jp": "ホリミヤ -piece-",
        "genre": "Romance · Slice of Life"
      },
      {
        "id": 80,
        "title": "Silver Spoon",
        "jp": "銀の匙 Silver Spoon",
        "genre": "Agricultural High School · Hiromu Arakawa"
      },
      {
        "id": 81,
        "title": "86 Eighty-Six",
        "jp": "86-エイティシックス-",
        "genre": "Mecha · Military Sci-Fi · Dystopian Drama",
        "spotlight": true
      },
      {
        "id": 82,
        "title": "Oshi no Ko",
        "jp": "【推しの子】",
        "genre": "Entertainment Industry · Reincarnation · Mystery"
      },
      {
        "id": 83,
        "title": "Kaiju No. 8",
        "jp": "怪獣8号",
        "genre": "Sci-Fi · Giant Monsters · Defense Force"
      },
      {
        "id": 84,
        "title": "A Sign of Affection",
        "jp": "ゆびさきと恋々",
        "genre": "Heartwarming Romance · Sign Language"
      },
      {
        "id": 85,
        "title": "Sing \"Yesterday\" for Me",
        "jp": "イエスタデイをうたって",
        "genre": "Melancholy Youth · Slice of Life · Doga Kobo"
      },
      {
        "id": 86,
        "title": "Wind Breaker",
        "jp": "WIND BREAKER",
        "genre": "Brawler Action · High School Defenders"
      },
      {
        "id": 87,
        "title": "Solo Leveling",
        "jp": "俺だけレベルアップな件",
        "genre": "Dungeon Hunter · Action RPG Fantasy"
      },
      {
        "id": 88,
        "title": "Orb: On the Movements of the Earth",
        "jp": "チ。 ―地球の運動について―",
        "genre": "Astronomy · Inquisitions · Madhouse",
        "spotlight": true
      },
      {
        "id": 89,
        "title": "Otona Joshi no Anime Time",
        "jp": "大人女子のアニメタイム",
        "genre": "Josei Literary Fiction · Drama"
      },
      {
        "id": 90,
        "title": "Frieren: Beyond Journey's End",
        "jp": "葬送のフリーレン",
        "genre": "Fantasy · Post-Quest Journey · Masterpiece",
        "spotlight": true
      },
      {
        "id": 91,
        "title": "Neon Genesis Evangelion",
        "jp": "新世紀エヴァンゲリオン",
        "genre": "Mecha · Apocalyptic Sci-Fi · Masterpiece",
        "spotlight": true
      },
      {
        "id": 92,
        "title": "Ergo Proxy",
        "jp": "エルゴプラクシー",
        "genre": "Cyberpunk · Philosophical Dystopia · Manglobe",
        "spotlight": true
      },
      {
        "id": 93,
        "title": "Darling in the Franxx",
        "jp": "ダーリン・イン・ザ・フランキス",
        "genre": "Mecha · Post-Apocalyptic · Trigger"
      },
      {
        "id": 94,
        "title": "Terror in Resonance",
        "jp": "残響のテロル",
        "genre": "Psychological Thriller · MAPPA · Watanabe"
      },
      {
        "id": 95,
        "title": "Daemons of the Shadow Realm",
        "jp": "黄泉のツガイ",
        "genre": "Supernatural Action · Hiromu Arakawa"
      },
      {
        "id": 96,
        "title": "Handa-kun",
        "jp": "はんだくん",
        "genre": "Calligrapher Youth · Gag Comedy"
      },
      {
        "id": 97,
        "title": "Mashle: Magic and Muscles",
        "jp": "マッシュル-MASHLE-",
        "genre": "Magic School Parody · Slapstick"
      },
      {
        "id": 98,
        "title": "Heavenly Delusion",
        "jp": "天国大魔境",
        "genre": "Post-Apocalyptic Sci-Fi · Mystery · Production I.G"
      },
      {
        "id": 99,
        "title": "91 Days",
        "jp": "91Days",
        "genre": "Mafia Crime · Prohibition Revenge Drama"
      },
      {
        "id": 100,
        "title": "Cowboy Bebop",
        "jp": "カウボーイビバップ",
        "genre": "Space Western · Cyberpunk Noir · Legend",
        "spotlight": true
      },
      {
        "id": 101,
        "title": "Haikyuu!! (All Seasons)",
        "jp": "ハイキュー!!",
        "genre": "High School Volleyball · Sports Drama"
      },
      {
        "id": 102,
        "title": "Genius Party",
        "jp": "ジーニアス・パーティ",
        "genre": "Experimental Animation · Studio 4°C"
      },
      {
        "id": 103,
        "title": "Under Ninja",
        "jp": "アンダーニンジャ",
        "genre": "Modern Day Ninja · Black Comedy"
      },
      {
        "id": 104,
        "title": "Blue Box (Ao no Hako)",
        "jp": "アオのハコ",
        "genre": "Badminton · High School Sports Romance"
      },
      {
        "id": 105,
        "title": "The Great Passage",
        "jp": "舟を編む",
        "genre": "Lexicography · Craftsmanship · Studio ZEXCS"
      },
      {
        "id": 106,
        "title": "The Apothecary Diaries",
        "jp": "薬屋のひとりごと",
        "genre": "Imperial Palace Mystery · Pharmacology"
      },
      {
        "id": 107,
        "title": "My Hero Academia Final Season",
        "jp": "僕のヒーローアカデミア FINAL SEASON",
        "genre": "Superhero · Final Battle"
      },
      {
        "id": 108,
        "title": "The Sparks of Tomorrow",
        "jp": "あすの火花",
        "genre": "Reflective Drama · Youth"
      },
      {
        "id": 109,
        "title": "Neon Genesis Evangelion (Rewatch)",
        "jp": "新世紀エヴァンゲリオン (再視聴)",
        "genre": "Mecha · Existential Classic"
      },
      {
        "id": 110,
        "title": "Daemons of the Shadow Realm (Extended)",
        "jp": "黄泉のツガイ (続編)",
        "genre": "Supernatural Fantasy · Hiromu Arakawa"
      },
      {
        "id": 111,
        "title": "Sparks of Tomorrow (Encore)",
        "jp": "あすの火花 (アンコール)",
        "genre": "Reflective Drama · Encore"
      }
    ],
    "animeMovies": [
      {
        "id": 1,
        "title": "Your Name",
        "jp": "君の名は。",
        "genre": "Romance · Supernatural · Makoto Shinkai",
        "year": "2016",
        "spotlight": true
      },
      {
        "id": 2,
        "title": "The Anthem of the Heart",
        "jp": "心が叫びたがってるんだ。",
        "genre": "Youth Drama · Music · A-1 Pictures",
        "year": "2015"
      },
      {
        "id": 3,
        "title": "I Want to Eat Your Pancreas",
        "jp": "君の膵臓をたべたい",
        "genre": "Romance · Terminal Illness Drama",
        "year": "2018",
        "spotlight": true
      },
      {
        "id": 4,
        "title": "Weathering With You",
        "jp": "天気の子",
        "genre": "Romance · Urban Fantasy · Makoto Shinkai",
        "year": "2019"
      },
      {
        "id": 5,
        "title": "The Place Promised in Our Early Days",
        "jp": "雲のむこう、約束の場所",
        "genre": "Alternate History Sci-Fi · Makoto Shinkai",
        "year": "2004"
      },
      {
        "id": 6,
        "title": "Love Me, Love Me Not",
        "jp": "思い、思われ、ふり、ふられ",
        "genre": "High School Romance · A-1 Pictures",
        "year": "2020"
      },
      {
        "id": 7,
        "title": "The Garden of Words",
        "jp": "言の葉の庭",
        "genre": "Visual Poetry · Rain & Shoes · Shinkai",
        "year": "2013",
        "spotlight": true
      },
      {
        "id": 8,
        "title": "A Whisker Away",
        "jp": "泣きたい私は猫をかぶる",
        "genre": "Magic Realism · Cat Transformation · Studio Colorido",
        "year": "2020"
      },
      {
        "id": 9,
        "title": "Voices of a Distant Star",
        "jp": "ほしのこえ",
        "genre": "Mecha Sci-Fi · Relativistic Isolation · Shinkai",
        "year": "2002"
      },
      {
        "id": 10,
        "title": "Flavors of Youth",
        "jp": "詩季織々",
        "genre": "Nostalgic Anthology · CoMix Wave Films",
        "year": "2018"
      },
      {
        "id": 11,
        "title": "A Silent Voice",
        "jp": "聲の形",
        "genre": "Psychological Redemption · Kyoto Animation",
        "year": "2016",
        "spotlight": true
      },
      {
        "id": 12,
        "title": "5 Centimeters per Second",
        "jp": "秒速5センチメートル",
        "genre": "Poetic Romance · Distance & Cherry Blossoms",
        "year": "2007",
        "spotlight": true
      },
      {
        "id": 13,
        "title": "Fireworks",
        "jp": "打ち上げ花火、下から見るか？横から見るか？",
        "genre": "Time Loop · Romance · Studio Shaft",
        "year": "2017"
      },
      {
        "id": 14,
        "title": "I've Always Liked You",
        "jp": "ずっと前から好きでした。",
        "genre": "Romance · HoneyWorks",
        "year": "2016"
      },
      {
        "id": 15,
        "title": "Josee, the Tiger and the Fish",
        "jp": "ジョゼと虎と魚たち",
        "genre": "Romantic Drama · Disability · Studio Bones",
        "year": "2020",
        "spotlight": true
      },
      {
        "id": 16,
        "title": "Demon Slayer: Mugen Train",
        "jp": "劇場版「鬼滅の刃」無限列車編",
        "genre": "Action · Shonen · Ufotable Record Breaker",
        "year": "2020"
      },
      {
        "id": 17,
        "title": "Tamako Love Story",
        "jp": "たまこラブストーリー",
        "genre": "Pure Romance · Kyoto Animation",
        "year": "2014"
      },
      {
        "id": 18,
        "title": "Steins;Gate: The Movie – Load Region of Déjà Vu",
        "jp": "劇場版 STEINS;GATE 負荷領域のデジャヴ",
        "genre": "Sci-Fi · Time Travel · White Fox",
        "year": "2013"
      },
      {
        "id": 19,
        "title": "My Hero Academia: Two Heroes",
        "jp": "僕のヒーローアカデミア THE MOVIE 〜2人の英雄〜",
        "genre": "Superhero Action · Bones",
        "year": "2018"
      },
      {
        "id": 20,
        "title": "My Hero Academia: Heroes Rising",
        "jp": "僕のヒーローアカデミア THE MOVIE ヒーローズ:ライジング",
        "genre": "Superhero Action · Bones",
        "year": "2019"
      },
      {
        "id": 21,
        "title": "Children Who Chase Lost Voices",
        "jp": "星を追う子ども",
        "genre": "Mythological Fantasy · Agartha · Shinkai",
        "year": "2011"
      },
      {
        "id": 22,
        "title": "Grave of the Fireflies",
        "jp": "火垂るの墓",
        "genre": "WWII Tragedy · Isao Takahata · Studio Ghibli",
        "year": "1988",
        "spotlight": true
      },
      {
        "id": 23,
        "title": "My Hero Academia: World Heroes' Mission",
        "jp": "僕のヒーローアカデミア THE MOVIE ワールド ヒーローズ ミッション",
        "genre": "Superhero Action · Bones",
        "year": "2021"
      },
      {
        "id": 24,
        "title": "Fate/stay night: Heaven's Feel I – Presage Flower",
        "jp": "劇場版 Fate/stay night [Heaven's Feel] I",
        "genre": "Dark Fantasy · Ufotable",
        "year": "2017"
      },
      {
        "id": 25,
        "title": "Fate/stay night: Heaven's Feel II – Lost Butterfly",
        "jp": "劇場版 Fate/stay night [Heaven's Feel] II",
        "genre": "Dark Fantasy · Psychological · Ufotable",
        "year": "2019"
      },
      {
        "id": 26,
        "title": "Her Blue Sky",
        "jp": "空の青さを知る人よ",
        "genre": "Music · Youth Drama · CloverWorks",
        "year": "2019"
      },
      {
        "id": 27,
        "title": "Words Bubble Up Like Soda Pop",
        "jp": "サイダーのように言葉が湧き上がる",
        "genre": "Pop Art · Haiku Romance · Signal.MD",
        "year": "2021"
      },
      {
        "id": 28,
        "title": "Whisper of the Heart",
        "jp": "耳をすませば",
        "genre": "Coming-of-Age · Violin Craft · Studio Ghibli",
        "year": "1995"
      },
      {
        "id": 29,
        "title": "Suzume",
        "jp": "すずめの戸締まり",
        "genre": "Disaster Road Movie · Makoto Shinkai",
        "year": "2022"
      },
      {
        "id": 30,
        "title": "Mirai",
        "jp": "未来のミライ",
        "genre": "Family Fantasy · Mamoru Hosoda · Studio Chizu",
        "year": "2018"
      },
      {
        "id": 31,
        "title": "Belle",
        "jp": "竜とそばかすの姫",
        "genre": "Cyber Metaverse · Music · Mamoru Hosoda",
        "year": "2021"
      },
      {
        "id": 32,
        "title": "Summer Wars",
        "jp": "サマーウォーズ",
        "genre": "Cybersecurity War · AI · Mamoru Hosoda",
        "year": "2009",
        "spotlight": true
      },
      {
        "id": 33,
        "title": "From Up on Poppy Hill",
        "jp": "コクリコ坂から",
        "genre": "1960s Yokohama Romance · Studio Ghibli",
        "year": "2011"
      },
      {
        "id": 34,
        "title": "The Wind Rises",
        "jp": "風立ちぬ",
        "genre": "Aviation Biography · Hayao Miyazaki · Ghibli",
        "year": "2013",
        "spotlight": true
      },
      {
        "id": 35,
        "title": "Ocean Waves",
        "jp": "海がきこえる",
        "genre": "Kochi High School Romance · Studio Ghibli",
        "year": "1993"
      },
      {
        "id": 36,
        "title": "The Girl Who Leapt Through Time",
        "jp": "時をかける少女",
        "genre": "Time Leap · Summer Romance · Mamoru Hosoda",
        "year": "2006",
        "spotlight": true
      },
      {
        "id": 37,
        "title": "The Boy and the Beast",
        "jp": "バケモノの子",
        "genre": "Beast Realm Fantasy · Martial Arts · Hosoda",
        "year": "2015"
      },
      {
        "id": 38,
        "title": "Only Yesterday",
        "jp": "おもひでぽろぽろ",
        "genre": "Safflower Countryside · Isao Takahata · Ghibli",
        "year": "1991"
      },
      {
        "id": 39,
        "title": "Howl's Moving Castle",
        "jp": "ハウルの動く城",
        "genre": "Steampunk Magic · Hayao Miyazaki · Ghibli",
        "year": "2004",
        "spotlight": true
      }
    ],
    "liveActionSeries": [
      {
        "id": 1,
        "title": "Friends",
        "jp": "フレンズ",
        "genre": "Comedy · Sitcom · 90s Manhattan"
      },
      {
        "id": 2,
        "title": "How I Met Your Mother",
        "jp": "ママと恋に落ちるまで",
        "genre": "Romantic Comedy · NYC Friendship"
      },
      {
        "id": 3,
        "title": "Peaky Blinders",
        "jp": "ピーキー・ブラインダーズ",
        "genre": "Historical British Crime · Birmingham Noir",
        "spotlight": true
      },
      {
        "id": 4,
        "title": "Foundations",
        "jp": "ファウンデーション",
        "genre": "Hard Sci-Fi · Isaac Asimov · Galactic Empire",
        "spotlight": true
      },
      {
        "id": 5,
        "title": "Never Have I Ever",
        "jp": "私の“初めて”日記",
        "genre": "High School Comedy · Coming-of-Age"
      },
      {
        "id": 6,
        "title": "Looking for Alaska",
        "jp": "アラスカを追いかけて",
        "genre": "Philosophical Youth Drama · John Green"
      },
      {
        "id": 7,
        "title": "13 Reasons Why",
        "jp": "13の理由",
        "genre": "Psychological Mystery · High School Tapes"
      },
      {
        "id": 8,
        "title": "Shrinking",
        "jp": "シュリンキング: 悩めるセラピスト",
        "genre": "Psychology · Comedy Drama · Apple TV+"
      },
      {
        "id": 9,
        "title": "Ted Lasso",
        "jp": "テッド・ラッソ: 破天荒コーチがゆく",
        "genre": "Sports Comedy · Emotional Heart · AFC Richmond",
        "spotlight": true
      },
      {
        "id": 10,
        "title": "The Morning Show",
        "jp": "ザ・モーニングショー",
        "genre": "Broadcast News · Corporate Drama"
      },
      {
        "id": 11,
        "title": "Slow Horses",
        "jp": "窓際のスパイ",
        "genre": "British Espionage Thriller · MI5 Slough House",
        "spotlight": true
      },
      {
        "id": 12,
        "title": "Rocket Boys",
        "jp": "ロケット・ボーイズ",
        "genre": "Indian Space Program · Physics Pioneers",
        "spotlight": true
      },
      {
        "id": 13,
        "title": "Kota Factory",
        "jp": "コタ・ファクトリー",
        "genre": "IIT Coaching Drama · Black & White Realism"
      },
      {
        "id": 14,
        "title": "Sex Education",
        "jp": "セックス・エデュケーション",
        "genre": "British Comedy Drama · Coming-of-Age"
      },
      {
        "id": 15,
        "title": "Fleabag",
        "jp": "Fleabag フリーバッグ",
        "genre": "Dark British Comedy · 4th Wall Drama",
        "spotlight": true
      }
    ]
  }

};
