export interface LanguageString {
  en: string;
  te: string;
}

export interface SkillCategory {
  category: LanguageString;
  percentage: number;
  skillsList: string[];
}

export interface ProjectItem {
  id: string;
  fileName: string;
  title: LanguageString;
  description: LanguageString;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  architecture?: LanguageString;
  features?: LanguageString[];
}

export interface GitHubRepo {
  name: string;
  url: string;
  description: string;
  language: string;
}

export interface ExperienceItem {
  year: string;
  title: LanguageString;
  company: { en: string; te: string };
  period: string;
  description: LanguageString;
  tags?: string[];
  bullets?: LanguageString[];
}

export interface EducationItem {
  period: string;
  degree: LanguageString;
  institution: LanguageString;
  location: LanguageString;
  details?: LanguageString[];
}

export interface CertificationItem {
  name: LanguageString;
  issuer: string;
}

export interface SocialsInfo {
  github: string;
  linkedin: string;
  email: string;
  phone: string;
  location: LanguageString;
  hackerRank: string;
  codeChef: string;
}

export interface PortfolioData {
  profile: {
    name: LanguageString;
    titles: LanguageString[];
    bio: LanguageString;
    currentFocus: LanguageString[];
  };
  skills: SkillCategory[];
  projects: ProjectItem[];
  githubRepositories: GitHubRepo[];
  experience: ExperienceItem[];
  education: EducationItem[];
  certifications: CertificationItem[];
  socials: SocialsInfo;
}

export const portfolioData: PortfolioData = {
  profile: {
    name: {
      en: "Akhil Sai Sammeta",
      te: "అఖిల్ సాయి సమ్మేట"
    },
    titles: [
      { en: "Software Developer", te: "సాఫ్ట్‌వేర్ డెవలపర్" },
      { en: "AI Engineer", te: "ఏఐ ఇంజనీర్" },
      { en: "Full Stack Developer", te: "ఫుల్ స్టాక్ డెవలపర్" },
      { en: "Entrepreneur", te: "వ్యాపారవేత్త" }
    ],
    bio: {
      en: "I am in my final year of computer science engineering graduation with a strong interest in software development, AI engineering, and automation. Having completed virtual internships and freelance roles across AI-ML, Data Engineering, and Full Stack web applications, I have learned how real-world projects are designed, built, and optimized. I am comfortable working with modern systems and always eager to learn new tools to solve challenging problems and build impactful applications.",
      te: "నేను సాఫ్ట్‌వేర్ డెవలప్‌మెంట్, ఏఐ ఇంజనీరింగ్ మరియు ఆటోమేషన్ రంగాలపై గట్టి ఆసక్తి ఉన్న కంప్యూటర్ సైన్స్ ఇంజనీరింగ్ చివరి సంవత్సర విద్యార్థిని. AI-ML, డేటా ఇంజనీరింగ్ మరియు ఫుల్ స్టాక్ వెబ్ అప్లికేషన్లలో వర్చువల్ ఇంటర్న్‌షిప్‌లు మరియు ఫ్రీలాన్స్ పనులను పూర్తి చేయడం ద్వారా, వాస్తవ ప్రపంచ ప్రాజెక్టులను ఎలా రూపకల్పన చేయాలో, నిర్మించాలో మరియు ఆప్టిమైజ్ చేయాలో నేను తెలుసుకున్నాను."
    },
    currentFocus: [
      { en: "Full Stack Development", te: "ఫుల్ స్టాక్ డెవలప్‌మెంట్" },
      { en: "Artificial Intelligence & ML", te: "కృత్రిమ మేధస్సు & ఎంఎల్ (AI-ML)" },
      { en: "Cloud Technologies & Data Engineering", te: "క్లౌడ్ టెక్నాలజీస్ & డేటా ఇంజనీరింగ్" },
      { en: "Agentic Systems & Automation", te: "ఏజెంటిక్ సిస్టమ్స్ & ఆటోమేషన్" }
    ]
  },
  skills: [
    {
      category: { en: "Frontend", te: "ఫ్రంట్ఎండ్" },
      percentage: 95,
      skillsList: ["React.js", "HTML5", "CSS3", "JavaScript", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      category: { en: "Backend & Databases", te: "బ్యాకెండ్ & డేటాబేస్లు" },
      percentage: 90,
      skillsList: ["Python", "Java", "SQL", "Go", "C#", ".NET", "Supabase", "Firebase", "Node.js"]
    },
    {
      category: { en: "Artificial Intelligence", te: "కృత్రిమ మేధస్సు" },
      percentage: 85,
      skillsList: ["Machine Learning", "Image Processing", "Image Classification", "Chatbot Development", "Model Evaluation"]
    },
    {
      category: { en: "Cloud & Automation", te: "క్లౌడ్ & ఆటోమేషన్" },
      percentage: 75,
      skillsList: ["AWS", "Google Cloud", "Robotic Process Automation (UiPath)", "CI/CD", "Git", "GitHub"]
    },
    {
      category: { en: "DevOps & Systems", te: "డెవ్ఆప్స్ & సిస్టమ్స్" },
      percentage: 70,
      skillsList: ["Docker", "Linux Shell", "Windows OS", "Mac OS", "WordPress"]
    }
  ],
  projects: [
    {
      id: "stratos-edge",
      fileName: "StratosEdge.jsx",
      title: { en: "StratosEdge Redesign", te: "స్ట్రాటోస్ఎడ్జ్ రీడిజైన్" },
      description: {
        en: "Redesigned static web platform into a dynamic, scalable web application capability of supporting significantly higher traffic volumes.",
        te: "అస్థిరమైన స్టాటిక్ వెబ్ ప్లాట్‌ఫారమ్‌ను అధిక-సామర్థ్యం గల ఇంటరాక్టివ్ డేటాబేస్ అప్లికేషన్‌గా మార్చడం ద్వారా ఏకకాల వినియోగదారుల సామర్థ్యాన్ని 20 రెట్లు పెంచడం."
      },
      techStack: ["React.js", "Firebase", "HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/AkhilsaiSammeta/stratos-edge",
      liveUrl: "https://stratosedge.vercel.app",
      architecture: {
        en: "React SPA communicating directly with Firebase Firestore, incorporating client-side caching.",
        te: "ఫైర్‌బేస్ ఫైర్‌స్టోర్‌తో నేరుగా సంప్రదించే రియాక్ట్ ఎస్పిఎ (SPA), క్లయింట్-సైడ్ క్యాషింగ్ కలిగి ఉంది."
      },
      features: [
        { en: "Role-based access control (RBAC) security layer", te: "రోల్-బేస్డ్ యాక్సెస్ కంట్రోల్ (RBAC) సెక్యూరిటీ లేయర్" },
        { en: "Expanded concurrency from 30 to support 1,000+ simultaneous sessions", te: "ఏకకాలంలో 30 నుండి 1,000+ పైగా కనెక్ట్ అయ్యేలా సామర్థ్య విస్తరణ" }
      ]
    },
    {
      id: "blood-group-prediction",
      fileName: "BloodGroupPrediction.py",
      title: { en: "Blood Group Prediction using Image Processing", te: "ఇమేజ్ ప్రాసెసింగ్ ద్వారా బ్లడ్ గ్రూప్ ప్రిడిక్షన్" },
      description: {
        en: "Developed a machine learning and image processing system to predict blood groups from microscopic blood smear images.",
        te: "మైక్రోస్కోపిక్ రక్త నమూనా చిత్రాల నుండి బ్లడ్ గ్రూపులను అంచనా వేయడానికి ఇమేజ్ ప్రాసెసింగ్ మరియు మెషిన్ లెర్నింగ్ సిస్టమ్‌ను అభివృద్ధి చేసారు."
      },
      techStack: ["Python", "Image Processing", "Machine Learning", "OpenCV", "Scikit-Learn"],
      architecture: {
        en: "Preprocesses microscopic blood smear images, extracts key cell features, and uses trained classifier models to determine blood groups.",
        te: "మైక్రోస్కోపిక్ బ్లడ్ స్మెర్ చిత్రాలను ప్రిప్రాసెస్ చేయడం, సెల్ ఫీచర్లను ఎక్స్‌ట్రాక్ట్ చేయడం మరియు బ్లడ్ గ్రూప్‌ను గుర్తించడానికి క్లాసిఫైయర్ మోడల్స్‌ను ఉపయోగించడం."
      },
      features: [
        { en: "Microscopic image preprocessing and feature extraction", te: "మైక్రోస్కోపిక్ ఇమేజ్ ప్రిప్రాసెసింగ్ మరియు ఫీచర్ ఎక్స్‌ట్రాక్షన్" },
        { en: "Machine learning classifier training and validation", te: "మెషిన్ లెర్నింగ్ క్లాసిఫైయర్ శిక్షణ మరియు వ్యాలిడేషన్" },
        { en: "Improved understanding of computer vision, medical image analysis, and model evaluation", te: "కంప్యూటర్ విజన్, మెడికల్ ఇమేజ్ అనాలిసిస్ మరియు మోడల్ మూల్యాంకనంపై అవగాహన మెరుగుపడింది" }
      ]
    },
    {
      id: "expense-tracker",
      fileName: "ExpenseTracker.jsx",
      title: { en: "Expense Tracker Web Application", te: "ఖర్చుల ట్రాకింగ్ వెబ్ అప్లికేషన్" },
      description: {
        en: "Built a web application to track and manage shared expenses among multiple users, featuring secure authentication and real-time database sync.",
        te: "వినియోగదారుల మధ్య పంచుకున్న ఖర్చులను ట్రాక్ చేయడానికి మరియు నిర్వహించడానికి సురక్షితమైన అథెంటికేషన్ మరియు రియల్-టైమ్ డేటాబేస్ సమకాలీకరణతో వెబ్ అప్లికేషన్‌ను రూపొందించారు."
      },
      techStack: ["React.js", "HTML5", "CSS3", "JavaScript", "Supabase", "Firebase", "Vercel"],
      githubUrl: "https://github.com/AkhilsaiSammeta/expense-tracker",
      liveUrl: "https://expense-tracker.vercel.app",
      architecture: {
        en: "React frontend integrated with Supabase for data storage and Firebase Auth for secure user authentication.",
        te: "డేటా నిల్వ కోసం సుపాబేస్ మరియు యూజర్ అథెంటికేషన్ కోసం ఫైర్‌బేస్ అథెంటికేషన్‌తో అనుసంధానించబడిన రియాక్ట్ ఫ్రంట్ఎండ్."
      },
      features: [
        { en: "Secure login using email and password authentication", te: "ఇమెయిల్ మరియు పాస్‌వర్డ్ అథెంటికేషన్‌తో సురక్షిత లాగిన్" },
        { en: "Real-time expense tracking and automatic calculation of individual shares", te: "రియల్-టైమ్ ఖర్చుల ట్రాకింగ్ మరియు ప్రతి ఒక్కరి షేర్ల స్వయంచాలక లెక్కింపు" },
        { en: "Deployed the application on Vercel for live access and usability", te: "లైవ్ యాక్సెస్ మరియు ఉపయోగం కోసం వర్సెల్‌లో అప్లికేషన్ డిప్లాయ్మెంట్" }
      ]
    }
  ],
  githubRepositories: [],
  experience: [
    {
      year: "2025 - 2026",
      company: { en: "Cosavu", te: "కొసావు" },
      period: "Aug 2025 – Jun 2026",
      title: {
        en: "AI Engineer & Forward Deployed Engineer",
        te: "ఏఐ ఇంజనీర్ & ఫార్వర్డ్ డిప్లాయ్డ్ ఇంజనీర్"
      },
      tags: ["#ArtificialIntelligence", "#AIAgents", "#LLMs", "#AgenticAI", "#EnterpriseAI", "#PromptEngineering", "#ModelEvaluation", "#ForwardDeployed", "#SystemsIntegration"],
      description: {
        en: "Working with a UK-based AI company focused on building, deploying, and optimizing AI-powered solutions for enterprise clients.",
        te: "యునైటెడ్ కింగ్‌డమ్ (UK) కి చెందిన ఏఐ స్టార్టప్ లో ఎంటర్‌ప్రైజ్ క్లయింట్ల కోసం ఏఐ ఏజెంట్లు, ఎల్‌ఎల్‌ఎమ్స్ (LLMs) డెవలప్‌మెంట్‌పై పని చేస్తున్నారు."
      },
      bullets: [
        { en: "Assisted in dataset preparation and data quality improvement.", te: "డేటాసెట్ తయారీ మరియు డేటా నాణ్యత మెరుగుదలలో సహాయపడటం." },
        { en: "Participated in model evaluation and AI testing workflows.", te: "మోడల్ మూల్యాంకన ప్రక్రియలు మరియు ఏఐ టెస్టింగ్ వర్క్‌ఫ్లోస్‌లో పాల్గొనడం." },
        { en: "Supported AI fine-tuning, optimization, and validation initiatives.", te: "ఏఐ ఫైన్-ట్యూనింగ్, ఆప్టిమైజేషన్ మరియు వ్యాలిడేషన్ పనులకు మద్దతు ఇవ్వడం." },
        { en: "Integrated AI agents and workflows into client enterprise software platforms.", te: "క్లయింట్‌ల సాఫ్ట్‌వేర్ ప్లాట్‌ఫారమ్‌లలో ఏఐ ఏజెంట్లు మరియు వర్క్‌ఫ్లోలను జోడించడం." },
        { en: "Connected AI agents with customer-facing systems and internal database processes.", te: "కస్టమర్-ఫేసింగ్ సిస్టమ్స్ మరియు అంతర్గత డేటాబేస్ ప్రాసెస్లతో ఏఐ ఏజెంట్లను అనుసంధానించడం." },
        { en: "Supported enterprise adoption and operationalization of AI technologies.", te: "ఎంటర్‌ప్రైజ్ స్థాయిలో ఏఐ టెక్నాలజీల అడాప్షన్ మరియు ఆపరేషనలైజేషన్‌కు తోడ్పడటం." }
      ]
    },
    {
      year: "2025",
      company: { en: "StratosEdge", te: "స్ట్రాటోస్ఎడ్జ్" },
      period: "Jun 2025 – Aug 2025",
      title: {
        en: "Full Stack Developer",
        te: "ఫుల్ స్టాక్ డెవలపర్"
      },
      tags: ["#FullStackDevelopment", "#ReactJS", "#Firebase", "#WebApplications", "#Scalability"],
      description: {
        en: "Led the modernization and scalability transformation of the StratosEdge educational platform.",
        te: "స్ట్రాటోస్ఎడ్జ్ ఎడ్యుకేషనల్ ప్లాట్‌ఫారమ్‌ను డైనమిక్, స్కేలబుల్ వెబ్ అప్లికేషన్‌గా మార్చడంపై పని చేశారు."
      },
      bullets: [
        { en: "Identified scalability limitations in the static website, which supported only 30–50 concurrent users.", te: "30-50 మంది వినియోగదారులను మాత్రమే సపోర్ట్ చేసే పాత స్టాటిక్ వెబ్ సైట్ యొక్క స్కేలబిలిటీ లోపాలను గుర్తించడం." },
        { en: "Migrated legacy static frontend architecture to a scalable React.js-based system.", te: "పాత స్టాటిక్ వెబ్ సైట్‌ను స్కేలబుల్ రియాక్ట్ ఆధారిత సిస్టమ్‌గా మార్చడం." },
        { en: "Integrated Firebase backend services, authentication, and role-based access control.", te: "ఫైర్‌బేస్ బ్యాకెండ్ సేవలు, అథెంటికేషన్ మరియు రోల్-బేస్డ్ యాక్సెస్ కంట్రోల్‌ను జోడించడం." },
        { en: "Expanded concurrency capacity from 30 concurrent users to over 1,000+ sessions.", te: "ప్లాట్‌ఫారమ్ సామర్థ్యాన్ని 30 మంది నుండి ఏకకాలంలో 1,000+ కి పైగా పెంచడం." }
      ]
    },
    {
      year: "2024",
      company: { en: "Hyperbare (Bare Metal Services)", te: "హైపర్‌బేర్" },
      period: "May 2024 – Dec 2024",
      title: {
        en: "Freelance Part-Time Web Developer & Business Development Associate",
        te: "ఫ్రీలాన్స్ వెబ్ డెవలపర్ & బిజినెస్ డెవలప్‌మెంట్ అసోసియేట్"
      },
      tags: ["#WebDevelopment", "#B2BSales", "#BusinessDevelopment", "#BareMetal", "#StartupGrowth"],
      description: {
        en: "Supported both technical web development and business client acquisition for dedicated server services.",
        te: "డెడికేటెడ్ సర్వర్ సేవల కోసం వెబ్ డెవలప్‌మెంట్ మరియు బిజినెస్ క్లయింట్ అక్విజిషన్‌ రెండింటిలోనూ తోడ్పడ్డారు."
      },
      bullets: [
        { en: "Developed and maintained the company website, integrating meeting workflow syncs.", te: "మీటింగ్ వర్క్‌ఫ్లో సమకాలీకరణలతో కంపెనీ వెబ్‌సైట్‌ను అభివృద్ధి చేయడం మరియు నిర్వహించడం." },
        { en: "Supported client onboarding, lead qualification, and B2B outreach actions.", te: "క్లయింట్ ఆన్‌బోర్డింగ్, లీడ్ క్వాలిఫికేషన్ మరియు బి2బి ఔట్రీచ్ కార్యకలాపాలను నిర్వహించడం." },
        { en: "Assisted clients in selecting infrastructure hosting and server solutions.", te: "సర్వర్ మరియు హోస్టింగ్ సొల్యూషన్స్‌ని ఎంచుకోవడంలో వినియోగదారులకు మార్గనిర్దేశం చేయడం." }
      ]
    },
    {
      year: "2024",
      company: { en: "Remote Virtual Internship Cohorts - EduSkills (Google, AWS, UiPath)", te: "ఎడ్యుస్కిల్స్" },
      period: "Jan 2024 – Sep 2024",
      title: {
        en: "AI-ML, Data Engineering & RPA Intern",
        te: "ఏఐ-ఎమ్ఎల్, డేటా ఇంజనీరింగ్ & ఆర్‌పిఎ ఇంటర్న్"
      },
      tags: ["#ArtificialIntelligence", "#DataEngineering", "#AWS", "#GoogleAI", "#UiPath"],
      description: {
        en: "Successfully completed three distinct learning programs hosted in collaboration with Google, AWS, and UiPath.",
        te: "గూగుల్, ఏడబ్ల్యూఎస్ మరియు యూఐపాత్ భాగస్వామ్యంతో నిర్వహించబడిన మూడు ఇంటర్న్‌షిప్‌లను విజయవంతంగా పూర్తి చేశారు."
      },
      bullets: [
        { en: "Google AI-ML: Gained hands-on experience with ML models, data processing, and evaluation.", te: "గూగుల్ AI-ML: మెషిన్ లెర్నింగ్ మోడల్స్, డేటా ప్రాసెసింగ్ మరియు మూల్యాంకనంలో శిక్షణ పొందడం." },
        { en: "AWS Data Engineering: Studied cloud databases, pipeline designs, and ETL flows.", te: "ఏడబ్ల్యూఎస్ డేటా ఇంజనీరింగ్: క్లౌడ్ డేటాబేస్, పైప్‌లైన్ మరియు ఈటీఎల్ (ETL) డిజైన్లను నేర్చుకోవడం." },
        { en: "UiPath RPA: Modeled robotic process automations and operational business workflows.", te: "యూఐపాత్ RPA: రోబోటిక్ ప్రాసెస్ ఆటోమేషన్ మరియు బిజినెస్ వర్క్‌ఫ్లోలను రూపొందించడం." },
        { en: "Completed structured modules, practical exercises, and task-based learning workflows.", te: "నిర్మాణాత్మక మాడ్యూల్స్, ఆచరణాత్మక వ్యాయామాలు మరియు టాస్క్-ఆధారిత వర్క్‌ఫ్లోలను పూర్తి చేయడం." },
        { en: "Built clear understanding of data collection, processing, and system engineering.", te: "డేటా సేకరణ, ప్రాసెసింగ్ మరియు సిస్టమ్స్ ఇంజనీరింగ్‌పై స్పష్టమైన అవగాహన పొందడం." }
      ]
    },
    {
      year: "2023",
      company: { en: "SyncLayer", te: "సింక్‌లేయర్" },
      period: "Jan 2023 – Dec 2023",
      title: {
        en: "Security Software Engineering Intern",
        te: "సెక్యూరిటీ సాఫ్ట్‌వేర్ ఇంజనీరింగ్ ఇంటర్న్"
      },
      tags: ["#CyberSecurity", "#LinuxSecurity", "#SystemProgramming", "#KernelSecurity", "#DevSecOps"],
      description: {
        en: "Worked as part of the founding engineering team at SyncLayer, a Linux-focused security platform designed to enhance endpoint protection and system monitoring capabilities. Project discontinued due to funding limitations.",
        te: "లైనక్స్ ఆధారిత భద్రతా పర్యవేక్షణ మరియు సిస్టమ్ అబ్సర్వబిలిటీ ప్లాట్‌ఫారమ్ డెవలప్‌మెంట్‌లో పని చేసారు. ఫండింగ్ లోపాల వల్ల ప్రాజెక్ట్ నిలిచిపోయింది."
      },
      bullets: [
        { en: "Assisted in building Linux-based security monitoring solutions.", te: "లైనక్స్ సిస్టమ్స్‌లో సెక్యూరిటీ పర్యవేక్షణ మరియు ముప్పు గుర్తింపు సాధనాల రూపకల్పన." },
        { en: "Worked on system-level process observation and threat detection concepts.", te: "సిస్టమ్-స్థాయి ప్రక్రియ పరిశీలన మరియు ముప్పు గుర్తింపు భావనలపై పని చేయడం." },
        { en: "Participated in designing security controls for cloud operations and security teams.", te: "క్లౌడ్ కార్యకలాపాలు మరియు సెక్యూరిటీ టీమ్స్ కోసం సెక్యూరిటీ కంట్రోల్స్ రూపకల్పనలో పాల్గొనడం." },
        { en: "Contributed to software architecture discussions around endpoint security and operational visibility.", te: "ఎండ్‌పాయింట్ సెక్యూరిటీ మరియు ఆపరేషనల్ విజిబిలిటీ సాఫ్ట్‌వేర్ ఆర్కిటెక్చర్ చర్చలలో పాల్గొనడం." },
        { en: "Supported testing and validation of security workflows in Linux environments.", te: "లైనక్స్ నోడ్స్‌లో డెవ్‌సెక్‌ఆప్స్ (DevSecOps) వర్క్‌ఫ్లోస్ టెస్టింగ్ మరియు వ్యాలిడేషన్." }
      ]
    }
  ],
  education: [
    {
      period: "2022 - 2026",
      degree: {
        en: "Bachelor of Technology in Computer Science And Engineering",
        te: "బ్యాచిలర్ ఆఫ్ టెక్నాలజీ (కంప్యూటర్ సైన్స్ అండ్ ఇంజనీరింగ్)"
      },
      institution: {
        en: "CMR Institute of Technology",
        te: "సీఎంఆర్ ఇన్‌స్టిట్యూట్ ఆఫ్ టెక్నాలజీ"
      },
      location: {
        en: "Hyderabad, India",
        te: "హైదరాబాద్, భారతదేశం"
      },
      details: [
        {
          en: "Training and Placements Cell - Student Coordinator",
          te: "ట్రైనింగ్ అండ్ ప్లేస్‌మెంట్స్ సెల్ - స్టూడెంట్ కోఆర్డినేటర్"
        },
        {
          en: "  - Coordinated between students, Training and Placement Officers (TPO).",
          te: "  - విద్యార్థులు, ట్రెయినింగ్ & ప్లేస్‌మెంట్ అధికారుల (TPO) మధ్య సమన్వయం చేశారు."
        },
        {
          en: "  - Assisted juniors with registration, queries, and placement process guidance.",
          te: "  - రిజిస్ట్రేషన్లు, సందేహాలు మరియు ప్లేస్‌మెంట్ ప్రక్రియ మార్గదర్శకత్వంలో జూనియర్లకు సహాయపడ్డారు."
        },
        {
          en: "  - Communicated with different departments to ensure smooth conduct of placement activities.",
          te: "  - ప్లేస్‌మెంట్ కార్యకలాపాలు సాఫీగా సాగేందుకు వివిధ విభాగాలతో సమన్వయం చేసుకున్నారు."
        },
        {
          en: "  - Helped organize placement-related information and supported students in completing required procedures.",
          te: "  - ప్లేస్‌మెంట్ సమాచారాన్ని క్రమబద్ధీకరించడంలో మరియు విద్యార్థులకు అవసరమైన విధానాలను పూర్తి చేయడంలో సహాయపడ్డారు."
        },
        {
          en: "Department Magazine Committee Member",
          te: "డిపార్ట్‌మెంట్ మ్యాగజైన్ కమిటీ సభ్యులు"
        },
        {
          en: "  - Selected as a member of the department magazine committee under faculty guidance.",
          te: "  - ఫ్యాకల్టీ మార్గదర్శకత్వంలో డిపార్ట్‌మెంట్ మ్యాగజైన్ కమిటీ సభ్యుడిగా ఎంపికయ్యారు."
        },
        {
          en: "  - Collected, organized, and prepared technical and academic content for semester-wise magazine publication.",
          te: "  - సెమిస్టర్ వారీగా పత్రికా ప్రచురణ కోసం సాంకేతిక మరియు విద్యాపరమైన కంటెంట్‌ను సేకరించి సిద్ధం చేశారు."
        },
        {
          en: "  - Coordinated with faculty and students to gather relevant topics, news, and departmental updates.",
          te: "  - సంబంధిత అంశాలు, వార్తలు మరియు విభాగం అప్‌డేట్‌లను సేకరించడానికి ఫ్యాకల్టీ మరియు విద్యార్థులతో సమన్వయం చేశారు."
        },
        {
          en: "  - Contributed to the successful release of the magazine every semester.",
          te: "  - ప్రతి సెమిస్టర్ మ్యాగజైన్ విజయవంతంగా విడుదల కావడానికి దోహదపడ్డారు."
        },
        {
          en: "  - Improved research, content organization, and teamwork skills.",
          te: "  - పరిశోధన, కంటెంట్ ఆర్గనైజేషన్ మరియు టీమ్‌వర్క్ నైపుణ్యాలను మెరుగుపరుచుకున్నారు."
        },
        {
          en: "Student Assistant - Data Entry & Basic Data Analysis",
          te: "స్టూడెంట్ అసిస్టెంట్ - డేటా ఎంట్రీ & బేసిక్ డేటా అనాలిసిస్"
        },
        {
          en: "  - Supported faculty in managing and updating student and academic records using Excel.",
          te: "  - ఎక్సెల్ ఉపయోగించి విద్యార్థుల మరియు విద్యా సంబంధిత రికార్డులను నిర్వహించడంలో అధ్యాపకులకు సహాయపడ్డారు."
        },
        {
          en: "  - Entered, verified, and organized data accurately for official academic and administrative use.",
          te: "  - అధికారిక విద్యా మరియు పరిపాలనా ఉపయోగం కోసం డేటాను ఖచ్చితంగా నమోదు చేసి, ధృవీకరించి, క్రమబద్ధీకరించారు."
        },
        {
          en: "  - Assisted in analyzing and structuring information before submitting it to higher authorities.",
          te: "  - ఉన్నతాధికారులకు సమర్పించే ముందు సమాచారాన్ని విశ్లేషించడంలో మరియు రూపకల్పన చేయడంలో సహాయపడ్డారు."
        },
        {
          en: "  - Maintained proper documentation and ensured data accuracy and completeness.",
          te: "  - సరైన డాక్యుమెంటేషన్‌ను నిర్వహించి, డేటా ఖచ్చితత్వాన్ని మరియు పరిపూర్ణతను నిర్ధారించారు."
        },
        {
          en: "  - Strengthened attention to detail, data handling, and professional responsibility skills.",
          te: "  - వివరాలపై శ్రద్ధ, డేటా హ్యాండ్లింగ్ మరియు వృత్తిపరమైన బాధ్యత నైపుణ్యాలను పటిష్టం చేసుకున్నారు."
        }
      ]
    }
  ],
  certifications: [
    {
      name: { en: "Java as a Second Language", te: "జావా యాజ్ ఎ సెకండ్ లాంగ్వేజ్" },
      issuer: "Coursera"
    },
    {
      name: { en: "C# Foundational Microsoft Certification", te: "సి# ఫౌండేషనల్ మైక్రోసాఫ్ట్ సర్టిఫికేషన్" },
      issuer: "freeCodeCamp"
    }
  ],
  socials: {
    github: "https://github.com/akhilsaisammeta",
    linkedin: "https://linkedin.com/in/akhilsaisammeta",
    email: "sammetaakhilsai@gmail.com",
    phone: "+91 8466867596",
    location: { en: "Hyderabad, Telangana, India", te: "హైదరాబాద్, తెలంగాణ, భారతదేశం" },
    hackerRank: "22R01A05J1",
    codeChef: "cmr22r01a05j1"
  }
};
