// All site copy lives here, in both languages.
// Edit text in this file; the components only handle layout.

export type Lang = 'en' | 'nl';

export const links = {
  email: 'munzuratak@outlook.com',
  phone: '+31 6 39009964',
  phoneHref: 'tel:+31639009964',
  linkedin: 'https://www.linkedin.com/in/munzur-atak-284b62225/',
  linkedinLabel: 'linkedin.com/in/munzur-atak-284b62225',
  github: 'https://github.com/MunzurAtak',
  githubLabel: 'github.com/MunzurAtak',
  siteRepo: 'https://github.com/MunzurAtak/MunzurAtak.github.io',
  thesisRepo: 'https://github.com/MunzurAtak/stance-preservation-llm-debates',
  thesisPdf:
    'https://github.com/MunzurAtak/stance-preservation-llm-debates/blob/main/Comparing_LLM_Methods_for_Stance_Preservation_in_Adversarial_Debates_revised.pdf',
  contextai: 'https://github.com/MunzurAtak/contextai-rag-service',
  mlapi: 'https://github.com/MunzurAtak/ml-inference-api',
};

// Where a skill was used. Keys are referenced from the skills list below.
type RefKey = 'thesis' | 'contextai' | 'mlapi' | 'app' | 'agent' | 'weconnect' | 'bi' | 'morgens' | 'site';

export const refs: Record<RefKey, { href: string; en: string; nl: string }> = {
  thesis: { href: '#research', en: 'Thesis', nl: 'Scriptie' },
  contextai: { href: '#contextai', en: 'ContextAI', nl: 'ContextAI' },
  mlapi: { href: '#mlapi', en: 'ML Inference API', nl: 'ML Inference API' },
  app: { href: '#morgens', en: 'Knowledge app (Morgens)', nl: 'Kennisapplicatie (Morgens)' },
  agent: { href: '#morgens', en: 'Copilot Studio agent (Morgens)', nl: 'Copilot Studio-agent (Morgens)' },
  weconnect: { href: '#morgens', en: 'WeConnect dashboards', nl: 'WeConnect-dashboards' },
  bi: { href: '#morgens', en: 'BI dashboards (Morgens)', nl: 'BI-dashboards (Morgens)' },
  morgens: { href: '#morgens', en: 'Morgens Conclusion', nl: 'Morgens Conclusion' },
  site: { href: links.siteRepo, en: 'This website', nl: 'Deze website' },
};

type Skill = { name: { en: string; nl: string } | string; refs: RefKey[] };

const s = (name: Skill['name'], ...r: RefKey[]): Skill => ({ name, refs: r });

export const skillGroups: { title: { en: string; nl: string }; items: Skill[] }[] = [
  {
    title: { en: 'AI & LLM Engineering', nl: 'AI & LLM Engineering' },
    items: [
      s('RAG pipelines', 'thesis', 'contextai'),
      s('Vector search (FAISS)', 'thesis', 'contextai'),
      s('Fine-tuning (LoRA, QLoRA)', 'thesis'),
      s({ en: 'LLM evaluation (LLM-as-a-judge, Cohen’s kappa)', nl: 'LLM-evaluatie (LLM-as-a-judge, Cohen’s kappa)' }, 'thesis'),
      s({ en: 'Prompt & agent design', nl: 'Prompt- & agentontwerp' }, 'thesis', 'agent'),
      s({ en: 'Local inference (Ollama)', nl: 'Lokale inference (Ollama)' }, 'thesis'),
      s('NLP', 'thesis', 'contextai'),
    ],
  },
  {
    title: { en: 'Machine Learning', nl: 'Machine Learning' },
    items: [s('PyTorch', 'thesis'), s('Hugging Face Transformers & PEFT', 'thesis'), s('scikit-learn', 'mlapi')],
  },
  {
    title: { en: 'Languages', nl: 'Programmeertalen' },
    items: [s('Python', 'thesis', 'contextai', 'mlapi'), s('TypeScript', 'app'), s('JavaScript', 'app', 'contextai'), s('SQL')],
  },
  {
    title: { en: 'Software Engineering', nl: 'Software Engineering' },
    items: [
      s('FastAPI', 'contextai', 'mlapi'),
      s('React', 'app'),
      s('Vite', 'app'),
      s({ en: 'REST APIs', nl: "REST API's" }, 'contextai', 'mlapi'),
      s('Docker', 'contextai', 'mlapi'),
      s('Git', 'thesis', 'contextai', 'mlapi', 'site'),
      s('GitHub Actions', 'site'),
      s('Pytest', 'mlapi'),
    ],
  },
  {
    title: { en: 'Cloud & Platforms', nl: 'Cloud & platformen' },
    items: [
      s('Cloudflare', 'app'),
      s('Supabase', 'app'),
      s({ en: 'Microsoft Azure & Azure AI Foundry (foundational)', nl: 'Microsoft Azure & Azure AI Foundry (basis)' }),
      s('Copilot Studio', 'agent'),
      s('Power Automate', 'morgens'),
      s('Microsoft 365', 'morgens'),
    ],
  },
  {
    title: { en: 'Data & BI', nl: 'Data & BI' },
    items: [s('Power BI', 'weconnect', 'bi'), s('pandas', 'thesis'), s('NumPy', 'thesis')],
  },
];

export const t = {
  en: {
    htmlLang: 'en',
    title: 'Munzur Atak · AI & Software Engineer',
    description:
      'Munzur Atak builds LLM systems end to end: retrieval pipelines, fine-tuning and the evaluation that proves they work. Open to full-time AI engineering roles from January 2027.',
    nav: { research: 'Research', experience: 'Experience', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
    themeLabel: 'Toggle dark mode',
    langLabel: 'Language',
    skipLink: 'Skip to content',
    hero: {
      role: 'AI & Software Engineer',
      headlineA: 'I build LLM systems end to end,',
      headlineB: 'and the evaluation that proves they work.',
      sub: 'Final-year BSc AI at VU Amsterdam · Working student Data & AI at Morgens Conclusion · Rotterdam',
      badgeA: 'Open to full-time AI Engineering roles from',
      badgeB: 'January 2027',
      cta: 'Get in touch',
      cv: 'Download CV',
      cvHref: '/cv/Munzur_Atak_CV_EN.pdf',
      teaser: {
        label: 'Featured research',
        meta: 'BSc thesis · 8.5',
        title: 'Can an LLM hold its ground?',
        test: 'Test agent · Qwen2.5 7B',
        opp: 'Opponent · Llama 3.1 8B',
        body: 'A judge model (Gemma 3 12B) scores the stance of every turn, comparing prompting, stance-anchored RAG and LoRA fine-tuning.',
        foot: '90 debates · 900 turns · 3 methods',
        link: 'Explore the results',
      },
      stats: [
        { big: '8.5', small: 'Thesis graded at VU Amsterdam' },
        { big: '900', small: 'Debate turns evaluated' },
        { big: 'Board level', small: 'Where my dashboards are used' },
      ],
    },
    research: {
      label: 'Featured research',
      title: 'Can an LLM hold its ground?',
      sub: 'Comparing LLM Methods for Stance Preservation in Adversarial Debates · BSc thesis, VU Amsterdam · Graded 8.5',
      intro:
        'When an LLM is assigned a position and pushed back on for five rounds, does it hold that position or drift? I compared three ways of conditioning a model’s stance (prompting, stance-anchored RAG and LoRA fine-tuning) across 90 controlled debates and 900 generated turns.',
      replay: {
        title: 'One debate, turn by turn',
        caption:
          'A real debate from the experiment: RAG condition, climate change, test agent assigned the contra stance. The judge scores every turn from −2 (against) to +2 (in favour).',
        test: 'Test agent',
        opp: 'Opponent',
        judge: 'Judge',
        round: 'Round',
        onStance: 'On stance',
        offStance: 'Off stance',
        play: 'Replay debate',
      },
      chart: {
        title: 'Stance over five rounds',
        caption:
          'Average stance score per round, aligned so that +2 means fully on the assigned stance and −2 means fully on the opposite stance.',
        yTop: 'On assigned stance',
        yBottom: 'Opposite stance',
        round: 'Round',
        method: 'Method',
        topic: 'Topic',
        stance: 'Stance',
        all: 'All',
        pro: 'Pro',
        contra: 'Contra',
        topics: { climate_change: 'Climate change', abortion: 'Abortion', gun_control: 'Gun control' },
        mode: 'Consistency',
        polarity: 'Polarity',
        strict: 'Strict',
        debates: 'debates',
        best: 'Best',
      },
      methods: { prompting: 'Prompting', rag: 'Stance-anchored RAG', lora: 'LoRA fine-tuning' },
      metrics: {
        tof: { name: 'Turn of Flip', help: 'First round in which the stance flips (6 = never flipped). Higher is better.' },
        nof: { name: 'Number of Flips', help: 'How often the stance flips between rounds. Lower is better.' },
        ostc: { name: 'Off-Stance Turns', help: 'Number of turns outside the assigned stance. Lower is better.' },
      },
      findingsTitle: 'Key findings',
      findings: [
        'External grounding via RAG preserved the assigned stance most reliably.',
        'Most failures were driven by the normative direction of the stance, not by the conditioning method.',
      ],
      trustTitle: 'Trust the measurement',
      trust:
        'The LLM judge was validated against one human and two external LLM annotators using Cohen’s kappa, reaching 93–100% polarity agreement.',
      chips: ['Ollama', 'Qwen2.5 7B', 'Llama 3.1 8B', 'Gemma 3 12B', 'FAISS', 'sentence-transformers', 'QLoRA (1,500 examples)', 'Cohen’s kappa'],
      code: 'View code',
      pdf: 'Read the thesis (PDF)',
    },
    experience: {
      title: 'Experience',
      jobs: [
        {
          id: 'morgens',
          role: 'Working Student Data & AI',
          org: 'Morgens Conclusion',
          dates: 'Jun 2026 – present',
          context: 'Management and digital consultancy, 100+ consultants, part of the Conclusion group',
          bullets: [
            ['Internal AI knowledge app:', 'Building an application that helps 100+ consultants find the methods and information they need for client work. Built with TypeScript, React and Vite, running in preview on Cloudflare and Supabase, and being prepared for production within Morgens’ Microsoft environment.'],
            ['Copilot Studio agent:', 'Built and rolled out an AI agent that automates drafting project plans and emails the result to the user.'],
            ['AI team:', 'Part of the team responsible for AI tooling at Morgens, co-responsible for the internal Claude pilot, and supporting colleagues with AI and data questions in client engagements.'],
            ['Healthcare analytics (WeConnect):', 'Co-developed Power BI dashboards for four programmes within WeConnect, based on data from hospitals in the Rijnmond region. Board members and project leads use them to decide on software adoption in their organisations.'],
            ['Business intelligence:', 'Built three business-critical Power BI dashboards with finance and sales insights for consultants and the management team.'],
          ],
          chips: ['TypeScript', 'React', 'Vite', 'Cloudflare', 'Supabase', 'Copilot Studio', 'Power Automate', 'Power BI'],
        },
        {
          id: 'opniveau',
          role: 'Business Operations & Internal Automation',
          org: '010 Op Niveau',
          dates: 'Apr 2025 – Sep 2026',
          context: 'Tutoring organisation, ~30 staff, Rotterdam',
          bullets: [
            ['', 'Automated monthly payroll by building, with Claude, a tool that generates SEPA batch files (pain.001.001.03) directly from exported time registrations, replacing manual entry per employee.'],
            ['', 'Built and maintained the organisation’s website, including a Typeform-based CITO level test in the student intake.'],
            ['', 'Processed student and family balance administration from CSV exports, with anomaly checks before invoicing.'],
          ],
          chips: ['Claude', 'SEPA (pain.001)', 'Typeform'],
        },
        {
          id: 'proteam',
          role: 'Administrative Officer & Director Support',
          org: 'ProTeam BV',
          dates: 'May 2023 – May 2024',
          context: 'Security company, Rotterdam',
          bullets: [['', 'Supported the director with reporting, documentation and operational logistics.']],
          chips: [],
        },
      ],
    },
    projects: {
      title: 'Projects',
      contextai: {
        name: 'ContextAI: RAG service',
        tagline: 'Upload a PDF, ask a question, get a grounded answer with sources and a confidence score.',
        body: 'A two-stage retrieval pipeline: fast FAISS bi-encoder search narrows the document to ten candidates, then a cross-encoder reranks them for accuracy before Llama 3.1 (via Groq) generates the answer. Every request logs per-stage latency, and the reranker score doubles as a confidence signal.',
        decisionsTitle: 'Key decisions',
        decisions: [
          ['Cross-encoder reranking:', 'trades a little latency for much more precise final ranking than bi-encoder search alone.'],
          ['Sentence-aware chunking:', 'keeps semantic units intact instead of cutting mid-sentence.'],
          ['Sigmoid-normalised reranker scores:', 'turns unbounded logits into interpretable confidence thresholds.'],
        ],
        chips: ['FastAPI', 'FAISS', 'sentence-transformers', 'Cross-encoder', 'Llama 3.1', 'Groq', 'Docker Compose'],
      },
      mlapi: {
        name: 'ML Inference API',
        tagline: 'A production-style pattern for serving ML models.',
        body: 'Training is separated from serving, inputs are validated with Pydantic, model artifacts are persisted separately, tests run with Pytest, and the whole service ships as a Docker container that retrains itself if artifacts are missing.',
        chips: ['FastAPI', 'scikit-learn', 'Pydantic', 'Pytest', 'Docker'],
      },
      pipeline: ['Index', 'Retrieve', 'Rerank', 'Generate'],
      code: 'View code',
    },
    skills: {
      title: 'Skills',
      intro: 'I build and deploy AI applications end to end, with a growing focus on running them on cloud platforms.',
      usedIn: 'Used in:',
    },
    education: {
      title: 'Education',
      items: [
        { name: 'BSc Artificial Intelligence', org: 'Vrije Universiteit Amsterdam', dates: 'Expected Dec 2026', note: 'Thesis graded 8.5' },
        { name: 'VWO Gymnasium', org: 'Marnix Gymnasium', dates: '2021', note: '' },
      ],
      languagesTitle: 'Languages',
      languages: 'Dutch (native) · Turkish (native) · English (fluent)',
    },
    contact: {
      title: 'Let’s build something.',
      body: 'I’m looking for a full-time AI engineering role from January 2027. Happy to talk about a role, a project, or anything in this portfolio.',
      location: 'Rotterdam, Netherlands · Open to hybrid roles in the Randstad',
      cv: 'Download CV (PDF)',
    },
    footer: { built: 'Built with Astro', deployed: 'Deployed with GitHub Actions', source: 'View source' },
  },

  nl: {
    htmlLang: 'nl',
    title: 'Munzur Atak · AI & Software Engineer',
    description:
      'Munzur Atak bouwt LLM-systemen end-to-end: retrieval pipelines, fine-tuning en de evaluatie die aantoont dat ze werken. Beschikbaar voor een fulltime functie als AI engineer vanaf januari 2027.',
    nav: { research: 'Onderzoek', experience: 'Ervaring', projects: 'Projecten', skills: 'Vaardigheden', contact: 'Contact' },
    themeLabel: 'Donkere modus aan/uit',
    langLabel: 'Taal',
    skipLink: 'Naar de inhoud',
    hero: {
      role: 'AI & Software Engineer',
      headlineA: 'Ik bouw LLM-systemen end-to-end,',
      headlineB: 'en de evaluatie die aantoont dat ze werken.',
      sub: 'Laatstejaars BSc AI aan de VU Amsterdam · Werkstudent Data & AI bij Morgens Conclusion · Rotterdam',
      badgeA: 'Beschikbaar voor een fulltime functie als AI engineer vanaf',
      badgeB: 'januari 2027',
      cta: 'Neem contact op',
      cv: 'Download cv',
      cvHref: '/cv/Munzur_Atak_CV_NL.pdf',
      teaser: {
        label: 'Uitgelicht onderzoek',
        meta: 'BSc-scriptie · 8,5',
        title: 'Kan een LLM voet bij stuk houden?',
        test: 'Testagent · Qwen2.5 7B',
        opp: 'Tegenstander · Llama 3.1 8B',
        body: 'Een judge-model (Gemma 3 12B) beoordeelt het standpunt in elke beurt, voor prompting, stance-anchored RAG en LoRA fine-tuning.',
        foot: '90 debatten · 900 beurten · 3 methodes',
        link: 'Bekijk de resultaten',
      },
      stats: [
        { big: '8,5', small: 'Scriptie beoordeeld aan de VU Amsterdam' },
        { big: '900', small: 'Debatbeurten geëvalueerd' },
        { big: 'Bestuursniveau', small: 'Waar mijn dashboards worden gebruikt' },
      ],
    },
    research: {
      label: 'Uitgelicht onderzoek',
      title: 'Kan een LLM voet bij stuk houden?',
      sub: 'Comparing LLM Methods for Stance Preservation in Adversarial Debates · BSc-scriptie, VU Amsterdam · Beoordeeld met een 8,5',
      intro:
        'Wat gebeurt er als een LLM een standpunt krijgt toegewezen en vijf rondes lang tegengas krijgt: houdt het dat standpunt vast, of schuift het op? Ik vergeleek drie manieren om het standpunt van een model te sturen (prompting, stance-anchored RAG en LoRA fine-tuning) in 90 gecontroleerde debatten met 900 gegenereerde beurten.',
      replay: {
        title: 'Eén debat, beurt voor beurt',
        caption:
          'Een echt debat uit het experiment: RAG-conditie, klimaatverandering, de testagent kreeg het contra-standpunt toegewezen. De judge scoort elke beurt van −2 (tegen) tot +2 (voor).',
        test: 'Testagent',
        opp: 'Tegenstander',
        judge: 'Judge',
        round: 'Ronde',
        onStance: 'Binnen standpunt',
        offStance: 'Buiten standpunt',
        play: 'Debat opnieuw afspelen',
      },
      chart: {
        title: 'Standpunt over vijf rondes',
        caption:
          'Gemiddelde stance-score per ronde, zo uitgelijnd dat +2 volledig binnen het toegewezen standpunt betekent en −2 volledig binnen het tegenovergestelde standpunt.',
        yTop: 'Toegewezen standpunt',
        yBottom: 'Tegenovergesteld standpunt',
        round: 'Ronde',
        method: 'Methode',
        topic: 'Onderwerp',
        stance: 'Standpunt',
        all: 'Alle',
        pro: 'Pro',
        contra: 'Contra',
        topics: { climate_change: 'Klimaatverandering', abortion: 'Abortus', gun_control: 'Wapenwetgeving' },
        mode: 'Consistentie',
        polarity: 'Polariteit',
        strict: 'Strikt',
        debates: 'debatten',
        best: 'Beste',
      },
      methods: { prompting: 'Prompting', rag: 'Stance-anchored RAG', lora: 'LoRA fine-tuning' },
      metrics: {
        tof: { name: 'Turn of Flip', help: 'De eerste beurt waarin het standpunt omslaat (6 = nooit omgeslagen). Hoger is beter.' },
        nof: { name: 'Number of Flips', help: 'Hoe vaak het standpunt omslaat. Lager is beter.' },
        ostc: { name: 'Off-Stance Turns', help: 'Het aantal beurten buiten het toegewezen standpunt. Lager is beter.' },
      },
      findingsTitle: 'Belangrijkste bevindingen',
      findings: [
        'Externe grounding via RAG hield het toegewezen standpunt het betrouwbaarst vast.',
        'De meeste fouten werden bepaald door de normatieve richting van het standpunt, niet door de gekozen methode.',
      ],
      trustTitle: 'Een betrouwbare meting',
      trust:
        'Het judge-model is gevalideerd tegen één menselijke en twee externe LLM-annotatoren met Cohen’s kappa, met 93 tot 100% overeenstemming op polariteit.',
      chips: ['Ollama', 'Qwen2.5 7B', 'Llama 3.1 8B', 'Gemma 3 12B', 'FAISS', 'sentence-transformers', 'QLoRA (1.500 voorbeelden)', 'Cohen’s kappa'],
      code: 'Bekijk de code',
      pdf: 'Lees de scriptie (pdf)',
    },
    experience: {
      title: 'Ervaring',
      jobs: [
        {
          id: 'morgens',
          role: 'Werkstudent Data & AI',
          org: 'Morgens Conclusion',
          dates: 'jun 2026 – heden',
          context: 'Management- en digital consultancy, 100+ consultants, onderdeel van de Conclusion-groep',
          bullets: [
            ['Interne AI-kennisapplicatie:', 'ik ontwikkel een applicatie waarmee 100+ consultants sneller de werkvormen en informatie vinden die ze nodig hebben bij klantopdrachten. Gebouwd in TypeScript met React en Vite, draait in preview op Cloudflare en Supabase, en wordt voorbereid op productie binnen de Microsoft-omgeving van Morgens.'],
            ['Copilot Studio-agent:', 'bouwde en rolde een AI-agent uit die het opstellen van bouwplannen automatiseert en het resultaat per mail naar de gebruiker stuurt.'],
            ['AI-team:', 'onderdeel van het team dat verantwoordelijk is voor de AI-tooling binnen Morgens, medeverantwoordelijk voor de interne Claude-pilot, en ondersteuning van collega’s bij AI- en datavraagstukken in klantopdrachten.'],
            ['Healthcare analytics (WeConnect):', 'medeontwikkelaar van de Power BI-dashboards voor vier programma’s binnen WeConnect, op basis van data van ziekenhuizen in de regio Rijnmond. Bestuursleden en projectleiders gebruiken ze voor besluiten over softwaregebruik in hun organisaties.'],
            ['Business intelligence:', 'bouwde drie bedrijfskritische Power BI-dashboards met finance- en salesinzichten voor consultants en het managementteam.'],
          ],
          chips: ['TypeScript', 'React', 'Vite', 'Cloudflare', 'Supabase', 'Copilot Studio', 'Power Automate', 'Power BI'],
        },
        {
          id: 'opniveau',
          role: 'Bedrijfsvoering & interne automatisering',
          org: '010 Op Niveau',
          dates: 'apr 2025 – sep 2026',
          context: 'Bijlesorganisatie, circa 30 medewerkers, Rotterdam',
          bullets: [
            ['', 'Automatiseerde de maandelijkse salarisbetaling door met Claude een tool te bouwen die SEPA-batchbestanden (pain.001.001.03) direct genereert uit geëxporteerde urenregistratie, ter vervanging van handmatige invoer per medewerker.'],
            ['', 'Bouwde en onderhield de website van de organisatie, inclusief een Typeform-gebaseerde CITO-niveautest in het intakeproces.'],
            ['', 'Verwerkte de saldo-administratie van leerlingen en gezinnen uit CSV-exports, met controle op afwijkingen vóór facturatie.'],
          ],
          chips: ['Claude', 'SEPA (pain.001)', 'Typeform'],
        },
        {
          id: 'proteam',
          role: 'Administratief medewerker & directieondersteuning',
          org: 'ProTeam BV',
          dates: 'mei 2023 – mei 2024',
          context: 'Beveiligingsbedrijf, Rotterdam',
          bullets: [['', 'Ondersteunde de directie met rapportage, documentatie en operationele logistiek.']],
          chips: [],
        },
      ],
    },
    projects: {
      title: 'Projecten',
      contextai: {
        name: 'ContextAI: RAG-service',
        tagline: 'Upload een pdf, stel een vraag en krijg een onderbouwd antwoord met bronnen en een confidence-score.',
        body: 'Een two-stage retrieval pipeline: snelle FAISS bi-encoder search brengt het document terug tot tien kandidaten, waarna een cross-encoder ze herrangschikt op relevantie, voordat Llama 3.1 (via Groq) het antwoord genereert. Elke request logt de latency per stap, en de reranker-score dient tegelijk als confidence-signaal.',
        decisionsTitle: 'Belangrijke keuzes',
        decisions: [
          ['Cross-encoder reranking:', 'iets meer latency in ruil voor een veel preciezere eindrangschikking dan bi-encoder search alleen.'],
          ['Zinsbewuste chunking:', 'houdt betekenisvolle eenheden heel in plaats van midden in een zin te knippen.'],
          ['Sigmoid-genormaliseerde reranker-scores:', 'zet onbegrensde logits om in interpreteerbare confidence-drempels.'],
        ],
        chips: ['FastAPI', 'FAISS', 'sentence-transformers', 'Cross-encoder', 'Llama 3.1', 'Groq', 'Docker Compose'],
      },
      mlapi: {
        name: 'ML Inference API',
        tagline: 'Een productieklaar patroon voor het serveren van ML-modellen.',
        body: 'Training is gescheiden van serving, input wordt gevalideerd met Pydantic, modelartefacten worden apart opgeslagen, tests draaien met Pytest, en de service wordt geleverd als Docker-container die zichzelf opnieuw traint als artefacten ontbreken.',
        chips: ['FastAPI', 'scikit-learn', 'Pydantic', 'Pytest', 'Docker'],
      },
      pipeline: ['Index', 'Retrieve', 'Rerank', 'Generate'],
      code: 'Bekijk de code',
    },
    skills: {
      title: 'Vaardigheden',
      intro: 'Ik bouw en deploy AI-applicaties end-to-end, met een groeiende focus op het draaien ervan op cloudplatformen.',
      usedIn: 'Ingezet bij:',
    },
    education: {
      title: 'Opleiding',
      items: [
        { name: 'BSc Artificial Intelligence', org: 'Vrije Universiteit Amsterdam', dates: 'verwacht dec 2026', note: 'Scriptie beoordeeld met een 8,5' },
        { name: 'VWO Gymnasium', org: 'Marnix Gymnasium', dates: '2021', note: '' },
      ],
      languagesTitle: 'Talen',
      languages: 'Nederlands (moedertaal) · Turks (moedertaal) · Engels (vloeiend)',
    },
    contact: {
      title: 'Laten we iets bouwen.',
      body: 'Ik zoek vanaf januari 2027 een fulltime functie als AI engineer. Ik praat graag over een rol, een project of iets uit dit portfolio.',
      location: 'Rotterdam · Open voor hybride functies in de Randstad',
      cv: 'Download cv (pdf)',
    },
    footer: { built: 'Gebouwd met Astro', deployed: 'Gedeployed met GitHub Actions', source: 'Bekijk de broncode' },
  },
} as const;

export const skillName = (sk: Skill, lang: Lang) => (typeof sk.name === 'string' ? sk.name : sk.name[lang]);
