export interface Skill {
  name: string;
  domain: string;
  subdomain?: string;
  description: string;
  level: "Advanced" | "Intermediate" | "Familiar";
  years: number;
  projects: string[];
  tech: string[];
  experiences: string[];
}

export const skillsData: Skill[] = [
  // ==========================================
  // 1. Software Engineering
  // ==========================================
  {
    name: "Java",
    domain: "Software Engineering",
    subdomain: "Programming Languages",
    description: "Robust, class-based object-oriented programming language designed for enterprise systems, backend APIs, and cross-platform application development.",
    level: "Advanced",
    years: 3,
    projects: [],
    tech: ["JVM", "Spring Boot", "OOP"],
    experiences: ["EduSkills"]
  },
  {
    name: "Python",
    domain: "Software Engineering",
    subdomain: "Programming Languages",
    description: "Versatile, high-level programming language heavily used in artificial intelligence development, machine learning, and automation scripting.",
    level: "Advanced",
    years: 4,
    projects: [],
    tech: ["FastAPI", "Flask", "NumPy", "Pandas"],
    experiences: ["Cosavu", "EduSkills"]
  },
  {
    name: "JavaScript",
    domain: "Software Engineering",
    subdomain: "Programming Languages",
    description: "Core scripting language for web pages, enabling dynamic content delivery, frontend reactivity, and server-side runtimes like Node.js.",
    level: "Advanced",
    years: 4,
    projects: ["stratos-edge"],
    tech: ["React.js", "ES6+", "Node.js"],
    experiences: ["StratosEdge", "Hyperbare"]
  },
  {
    name: "TypeScript",
    domain: "Software Engineering",
    subdomain: "Programming Languages",
    description: "Typed superset of JavaScript that adds static types, improving developer tooling and codebase safety for large web applications.",
    level: "Advanced",
    years: 2,
    projects: ["stratos-edge"],
    tech: ["React.js", "Next.js", "Node.js"],
    experiences: ["Cosavu", "StratosEdge"]
  },
  {
    name: "C",
    domain: "Software Engineering",
    subdomain: "Programming Languages",
    description: "Procedural system programming language used for low-level operating system operations, performance-critical services, and security modules.",
    level: "Intermediate",
    years: 3,
    projects: [],
    tech: ["Systems Programming", "GCC", "Memory Management"],
    experiences: ["SyncLayer"]
  },
  {
    name: "C++",
    domain: "Software Engineering",
    subdomain: "Programming Languages",
    description: "General-purpose programming language extending C with object-oriented paradigms, ideal for system software, gaming engines, and performance utilities.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: ["STL", "OOP", "Pointers"],
    experiences: []
  },
  {
    name: "Go",
    domain: "Software Engineering",
    subdomain: "Programming Languages",
    description: "Statically typed compiled language developed at Google, designed for high concurrency, microservices, and high-performance network services.",
    level: "Familiar",
    years: 1.5,
    projects: [],
    tech: ["Goroutines", "APIs", "Microservices"],
    experiences: []
  },
  {
    name: "C#",
    domain: "Software Engineering",
    subdomain: "Programming Languages",
    description: "Modern, type-safe, object-oriented language developed by Microsoft for web services, desktop applications, and .NET projects.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: [".NET Framework", "OOP", "Visual Studio"],
    experiences: []
  },
  {
    name: "SQL",
    domain: "Software Engineering",
    subdomain: "Programming Languages",
    description: "Standard programming language for accessing, managing, and manipulating relational databases and structured data tables.",
    level: "Advanced",
    years: 3,
    projects: [],
    tech: ["MySQL", "PostgreSQL", "Queries"],
    experiences: ["EduSkills"]
  },
  {
    name: "HTML5",
    domain: "Software Engineering",
    subdomain: "Programming Languages",
    description: "Standard markup language used to structure contents and layouts of web documents on the modern web.",
    level: "Advanced",
    years: 4,
    projects: ["stratos-edge"],
    tech: ["DOM", "Semantic Layouts"],
    experiences: ["StratosEdge", "Hyperbare"]
  },
  {
    name: "CSS3",
    domain: "Software Engineering",
    subdomain: "Programming Languages",
    description: "Style sheet language used to design web pages, including layouts, colors, typography, media queries, and responsive alignments.",
    level: "Advanced",
    years: 4,
    projects: ["stratos-edge"],
    tech: ["Flexbox", "CSS Grid", "Tailwind CSS"],
    experiences: ["StratosEdge", "Hyperbare"]
  },
  {
    name: "Object-Oriented Programming",
    domain: "Software Engineering",
    subdomain: "Software Development",
    description: "Programming paradigm based on elements styled as objects containing data fields and structural method operations.",
    level: "Advanced",
    years: 3.5,
    projects: [],
    tech: ["Inheritance", "Polymorphism", "Encapsulation"],
    experiences: []
  },
  {
    name: "Data Structures & Algorithms",
    domain: "Software Engineering",
    subdomain: "Software Development",
    description: "Core concepts of organizing data structure items and algorithmic steps to solve logical problems with optimal complexity.",
    level: "Advanced",
    years: 3.5,
    projects: [],
    tech: ["Trees", "Graphs", "Sorting", "Searching"],
    experiences: []
  },
  {
    name: "REST API Development",
    domain: "Software Engineering",
    subdomain: "Software Development",
    description: "Designing and building representational state transfer endpoints for communication between frontend and backend client servers.",
    level: "Advanced",
    years: 2.5,
    projects: ["stratos-edge"],
    tech: ["HTTP Methods", "JSON Payload", "Postman"],
    experiences: []
  },
  {
    name: "Design Patterns",
    domain: "Software Engineering",
    subdomain: "Software Development",
    description: "Standard reusable software solutions to commonly occurring architectural problems in systems development.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: ["Singleton", "Factory Pattern", "Observer"],
    experiences: []
  },
  {
    name: "Software Architecture",
    domain: "Software Engineering",
    subdomain: "Software Development",
    description: "Designing the high-level structural framework, components, data flows, and constraints of complete software solutions.",
    level: "Intermediate",
    years: 2,
    projects: ["stratos-edge"],
    tech: ["System Design", "N-Tier", "MVC"],
    experiences: []
  },
  {
    name: "Debugging & Troubleshooting",
    domain: "Software Engineering",
    subdomain: "Software Development",
    description: "Methodically tracing codebase flow, diagnosing exceptions, reading stack traces, and resolving runtime bugs.",
    level: "Advanced",
    years: 3,
    projects: [],
    tech: ["DevTools", "GDB", "Logger Output"],
    experiences: []
  },
  {
    name: "Performance Optimization",
    domain: "Software Engineering",
    subdomain: "Software Development",
    description: "Evaluating execution latency, database queries, and bandwidth footprints to refine code speeds and system resources.",
    level: "Intermediate",
    years: 2,
    projects: ["stratos-edge"],
    tech: ["Caching", "Index tuning", "Payload minimization"],
    experiences: []
  },
  {
    name: "Code Review",
    domain: "Software Engineering",
    subdomain: "Software Development",
    description: "Analyzing code changes submitted by peers to verify correctness, logic, performance, and compliance with codebase style guidelines.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: ["Pull Requests", "Linters", "Refactoring"],
    experiences: []
  },
  {
    name: "Version Control",
    domain: "Software Engineering",
    subdomain: "Software Development",
    description: "Tracking changes to projects over time to manage code history and branches safely using revision control systems.",
    level: "Advanced",
    years: 4,
    projects: ["stratos-edge"],
    tech: ["Git", "GitHub", "Branching"],
    experiences: []
  },

  // ==========================================
  // 2. Full Stack Development
  // ==========================================
  {
    name: "React.js",
    domain: "Full Stack Development",
    subdomain: "Frontend",
    description: "Declarative, component-based frontend JavaScript library for building interactive user interfaces and responsive web applications.",
    level: "Advanced",
    years: 3,
    projects: ["stratos-edge"],
    tech: ["Hooks", "Virtual DOM", "Framer Motion"],
    experiences: ["StratosEdge"]
  },
  {
    name: "Next.js",
    domain: "Full Stack Development",
    subdomain: "Frontend",
    description: "React framework for production environments, facilitating static exports, server-side rendering, routing, and optimization.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["App Router", "SSR", "Static Export"],
    experiences: ["Cosavu", "StratosEdge"]
  },
  {
    name: "Tailwind CSS",
    domain: "Full Stack Development",
    subdomain: "Frontend",
    description: "Utility-first CSS framework for rapidly styling web interfaces directly inside HTML/React code markup.",
    level: "Advanced",
    years: 3,
    projects: [],
    tech: ["Utility classes", "Responsive classes", "JIT Compiler"],
    experiences: []
  },
  {
    name: "Bootstrap",
    domain: "Full Stack Development",
    subdomain: "Frontend",
    description: "Popular HTML, CSS, and JS library containing pre-designed responsive components for UI layout structure.",
    level: "Intermediate",
    years: 2.5,
    projects: [],
    tech: ["Flexbox grid", "UI Components"],
    experiences: []
  },
  {
    name: "Responsive Design",
    domain: "Full Stack Development",
    subdomain: "Frontend",
    description: "Designing layout patterns and media query breakouts to ensure web pages scale properly across desktops, tablets, and phones.",
    level: "Advanced",
    years: 3.5,
    projects: ["stratos-edge"],
    tech: ["Flexbox", "Media Queries", "Mobile First"],
    experiences: ["StratosEdge", "Hyperbare"]
  },
  {
    name: "Single Page Applications (SPA)",
    domain: "Full Stack Development",
    subdomain: "Frontend",
    description: "Web application development pattern where all client operations run inside one HTML document, dynamically rewriting layouts.",
    level: "Advanced",
    years: 3,
    projects: ["stratos-edge"],
    tech: ["Client-Side Routing", "State Management"],
    experiences: ["StratosEdge"]
  },
  {
    name: "Progressive Web Applications",
    domain: "Full Stack Development",
    subdomain: "Frontend",
    description: "Building websites that can be installed on client devices and run offline using service workers and manifests.",
    level: "Familiar",
    years: 1,
    projects: [],
    tech: ["Service Workers", "Web Manifest"],
    experiences: []
  },
  {
    name: "Node.js",
    domain: "Full Stack Development",
    subdomain: "Backend",
    description: "Cross-platform JavaScript runtime environment for building server-side applications, automation scripts, and REST APIs.",
    level: "Intermediate",
    years: 2.5,
    projects: ["stratos-edge"],
    tech: ["npm", "V8 Engine", "CommonJS/ESM"],
    experiences: ["StratosEdge"]
  },
  {
    name: "Express.js",
    domain: "Full Stack Development",
    subdomain: "Backend",
    description: "Minimalist, flexible web application backend framework for Node.js, providing essential server-side utilities and middleware handling.",
    level: "Intermediate",
    years: 2,
    projects: ["stratos-edge"],
    tech: ["Middleware", "APIs", "Routing"],
    experiences: ["StratosEdge"]
  },
  {
    name: "FastAPI",
    domain: "Full Stack Development",
    subdomain: "Backend",
    description: "Extremely fast, production-ready Python framework for building APIs, leveraging standard python type hints and Swagger docs.",
    level: "Advanced",
    years: 2,
    projects: [],
    tech: ["Pydantic", "Uvicorn", "AsyncIO"],
    experiences: ["Cosavu"]
  },
  {
    name: "Flask",
    domain: "Full Stack Development",
    subdomain: "Backend",
    description: "Lightweight WSGI web application framework in Python, offering essential tools to build APIs and backend endpoints.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: ["Jinja2", "Werkzeug", "APIs"],
    experiences: []
  },
  {
    name: "Authentication Systems",
    domain: "Full Stack Development",
    subdomain: "Backend",
    description: "Integrating secure user login mechanisms using credentials checks, token handling, session tokens, and OAuth protocols.",
    level: "Advanced",
    years: 2.5,
    projects: ["stratos-edge"],
    tech: ["JWT", "Firebase Auth", "Salting/Hashing"],
    experiences: ["StratosEdge"]
  },
  {
    name: "Authorization Systems",
    domain: "Full Stack Development",
    subdomain: "Backend",
    description: "Establishing rules and mechanisms to restrict or permit specific user access to web assets based on identities.",
    level: "Advanced",
    years: 2.5,
    projects: ["stratos-edge"],
    tech: ["ACL", "Role Permissions", "Tokens"],
    experiences: ["StratosEdge"]
  },
  {
    name: "Role-Based Access Control",
    domain: "Full Stack Development",
    subdomain: "Backend",
    description: "Security architecture restricting system access to authorized users based on their defined workspace role category.",
    level: "Advanced",
    years: 2.5,
    projects: ["stratos-edge"],
    tech: ["RBAC", "Admin/User Roles", "Security Rules"],
    experiences: ["StratosEdge"]
  },
  {
    name: "API Design",
    domain: "Full Stack Development",
    subdomain: "Backend",
    description: "Planning semantic URL structures, parameters, models, headers, and specifications to offer scalable developer APIs.",
    level: "Advanced",
    years: 2.5,
    projects: ["stratos-edge"],
    tech: ["OpenAPI", "JSON schema", "REST Constraints"],
    experiences: []
  },
  {
    name: "Session Management",
    domain: "Full Stack Development",
    subdomain: "Backend",
    description: "Securing stateful interactions by issuing session IDs, cookies, or database tracking indicators for client connections.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: ["Cookies", "Redis Store", "Auth State"],
    experiences: []
  },
  {
    name: "MySQL",
    domain: "Full Stack Development",
    subdomain: "Databases",
    description: "Relational database system storing data in structured tables. Used in database course studies and backend projects.",
    level: "Intermediate",
    years: 2.5,
    projects: [],
    tech: ["SQL", "Relational schemas", "Indexes"],
    experiences: []
  },
  {
    name: "PostgreSQL",
    domain: "Full Stack Development",
    subdomain: "Databases",
    description: "Advanced relational database system supporting extensive SQL syntax, JSON query functions, and transactional durability.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: ["pgvector", "Triggers", "JSONB data"],
    experiences: []
  },
  {
    name: "Supabase",
    domain: "Full Stack Development",
    subdomain: "Databases",
    description: "Backend service layer wrapping PostgreSQL databases with convenient APIs for authentication, database synchronization, and storage.",
    level: "Intermediate",
    years: 1.5,
    projects: [],
    tech: ["PostgreSQL", "Realtime Sync", "Supabase Auth"],
    experiences: []
  },
  {
    name: "Firebase Firestore",
    domain: "Full Stack Development",
    subdomain: "Databases",
    description: "Flexible, scalable NoSQL document database offered by Google to store, query, and synchronize data in real-time.",
    level: "Advanced",
    years: 2.5,
    projects: ["stratos-edge"],
    tech: ["NoSQL", "Realtime Syncing", "Offline Support"],
    experiences: ["StratosEdge"]
  },
  {
    name: "SQL Query Optimization",
    domain: "Full Stack Development",
    subdomain: "Databases",
    description: "Analyzing execution paths, constructing indices, and restructuring nested operations to speed database queries.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: ["EXPLAIN", "Index coverage", "Joins tuning"],
    experiences: []
  },
  {
    name: "Database Design",
    domain: "Full Stack Development",
    subdomain: "Databases",
    description: "Creating database structures, normalizing data schemas, and mapping fields to handle business objects efficiently.",
    level: "Intermediate",
    years: 2,
    projects: ["stratos-edge"],
    tech: ["Schema design", "Normalization", "Entity Relationships"],
    experiences: []
  },
  {
    name: "Data Modeling",
    domain: "Full Stack Development",
    subdomain: "Databases",
    description: "Structuring and defining datasets, relationships, and parameters to serve logic systems or analytics pipelines.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: ["Schemas", "ER Diagrams"],
    experiences: []
  },
  {
    name: "Vercel",
    domain: "Full Stack Development",
    subdomain: "Deployment",
    description: "Frontend-focused cloud environment designed to host modern serverless frameworks like Next.js and static web apps.",
    level: "Advanced",
    years: 2,
    projects: ["stratos-edge"],
    tech: ["Next.js", "Serverless Deployment", "Edge Functions"],
    experiences: ["Cosavu", "StratosEdge"]
  },
  {
    name: "Netlify",
    domain: "Full Stack Development",
    subdomain: "Deployment",
    description: "Cloud application platform enabling fast hosting configurations with git hooks, serverless runs, and instant rollbacks.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: ["Static Hosting", "Webhooks", "Forms Integrations"],
    experiences: []
  },
  {
    name: "Firebase Hosting",
    domain: "Full Stack Development",
    subdomain: "Deployment",
    description: "Production-grade hosting service optimized for static content and serverless cloud functions, delivered over worldwide CDN nodes.",
    level: "Advanced",
    years: 2.5,
    projects: ["stratos-edge"],
    tech: ["CDN Nodes", "SSL Configuration", "CLI Deploy"],
    experiences: ["StratosEdge"]
  },
  {
    name: "Linux Server Deployment",
    domain: "Full Stack Development",
    subdomain: "Deployment",
    description: "Setting up server operating environments, packages, proxies, and run configurations directly on virtual/bare metal Linux instances.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: ["SSH", "Nginx", "Systemd", "PM2"],
    experiences: ["Hyperbare", "SyncLayer"]
  },
  {
    name: "Domain Configuration",
    domain: "Full Stack Development",
    subdomain: "Deployment",
    description: "Connecting custom domain names with cloud storage or server endpoints to resolve network connections correctly.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: ["Domain mapping", "SSL Certificates"],
    experiences: ["Hyperbare"]
  },
  {
    name: "DNS Management",
    domain: "Full Stack Development",
    subdomain: "Deployment",
    description: "Managing hostnames, name servers, MX records, CNAME records, and A mapping files to route domain traffic.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: ["DNS Records", "Cloudflare", "NS servers"],
    experiences: ["Hyperbare"]
  },

  // ==========================================
  // 3. Artificial Intelligence Engineering
  // ==========================================
  {
    name: "AI Agent Development",
    domain: "Artificial Intelligence Engineering",
    subdomain: "AI Development",
    description: "Engineering software systems that use LLMs to evaluate instructions, formulate logical plans, call external tools, and resolve goals.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["LangGraph", "Tool Calling", "ReAct Framework"],
    experiences: ["Cosavu"]
  },
  {
    name: "Agentic AI Systems",
    domain: "Artificial Intelligence Engineering",
    subdomain: "AI Development",
    description: "Designing workflows and software frames where AI models operate autonomously in loops to handle complex client challenges.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["Multi-Agent Orchestration", "State Management"],
    experiences: ["Cosavu"]
  },
  {
    name: "LLM Applications",
    domain: "Artificial Intelligence Engineering",
    subdomain: "AI Development",
    description: "Developing client-facing applications that utilize API or local connections to Large Language Models for generative work.",
    level: "Advanced",
    years: 2,
    projects: [],
    tech: ["GPT-4", "Claude", "LLaMA", "JSON mode"],
    experiences: ["Cosavu"]
  },
  {
    name: "Prompt Engineering",
    domain: "Artificial Intelligence Engineering",
    subdomain: "AI Development",
    description: "Structuring prompt scripts, guidelines, system commands, and context examples to guide LLM outputs reliably.",
    level: "Advanced",
    years: 2,
    projects: [],
    tech: ["Few-Shot", "CoT (Chain of Thought)", "System Prompts"],
    experiences: ["Cosavu"]
  },
  {
    name: "AI Workflow Design",
    domain: "Artificial Intelligence Engineering",
    subdomain: "AI Development",
    description: "Configuring multi-step loops, decisions, checks, and memory layers that chain together multiple generative LLM calls and validation rules.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["LangChain", "State Graphs", "Flowcharts"],
    experiences: ["Cosavu"]
  },
  {
    name: "Retrieval Augmented Generation (RAG)",
    domain: "Artificial Intelligence Engineering",
    subdomain: "AI Development",
    description: "Enhancing generative AI outputs by querying search libraries or vector databases to inject context before invoking models.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["Vector Embeddings", "Semantic Search", "Chunking Strategies"],
    experiences: ["Cosavu"]
  },
  {
    name: "Conversational AI",
    domain: "Artificial Intelligence Engineering",
    subdomain: "AI Development",
    description: "Building natural language dialogue engines that understand context, preserve conversation state, and handle user queries.",
    level: "Advanced",
    years: 2,
    projects: [],
    tech: ["Chat History", "Token Optimization", "Context Windows"],
    experiences: ["Cosavu"]
  },
  {
    name: "Chatbot Development",
    domain: "Artificial Intelligence Engineering",
    subdomain: "AI Development",
    description: "Creating interactive chat assistants, system integrations, and widgets to support user actions or corporate workflows.",
    level: "Advanced",
    years: 2,
    projects: [],
    tech: ["WebSockets", "UI Widgets", "API Webhooks"],
    experiences: ["Cosavu"]
  },
  {
    name: "Machine Learning Fundamentals",
    domain: "Artificial Intelligence Engineering",
    subdomain: "Machine Learning",
    description: "Core algorithms and mathematical principles governing model training, including supervised, unsupervised, and predictive pipelines.",
    level: "Intermediate",
    years: 2.5,
    projects: [],
    tech: ["Scikit-Learn", "Regression", "Classification"],
    experiences: ["EduSkills"]
  },
  {
    name: "Data Preprocessing",
    domain: "Artificial Intelligence Engineering",
    subdomain: "Machine Learning",
    description: "Transforming, normalizing, cleaning, and formatting raw datasets to make them suitable for training machine learning algorithms.",
    level: "Intermediate",
    years: 2.5,
    projects: [],
    tech: ["Pandas", "Feature Scaling", "Imputation"],
    experiences: ["EduSkills"]
  },
  {
    name: "Feature Engineering",
    domain: "Artificial Intelligence Engineering",
    subdomain: "Machine Learning",
    description: "Selecting, combining, and converting raw database fields to construct indicators that help boost model performance.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: ["Dimensionality Reduction", "One-Hot Encoding"],
    experiences: ["EduSkills"]
  },
  {
    name: "Model Evaluation",
    domain: "Artificial Intelligence Engineering",
    subdomain: "Machine Learning",
    description: "Measuring validation results using metrics like accuracy, confusion matrices, F1 score, precision, and recall.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: ["Cross-Validation", "ROC Curve", "Metrics Analysis"],
    experiences: ["Cosavu", "EduSkills"]
  },
  {
    name: "Classification Models",
    domain: "Artificial Intelligence Engineering",
    subdomain: "Machine Learning",
    description: "Configuring algorithms (e.g. Random Forest, SVM, logistic regression) to classify input records into discrete categories.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: ["Decision Trees", "SVM", "Logistic Regression"],
    experiences: ["EduSkills"]
  },
  {
    name: "Regression Models",
    domain: "Artificial Intelligence Engineering",
    subdomain: "Machine Learning",
    description: "Training algorithms to calculate continuous output numerical variables based on statistical trend factors.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: ["Linear Regression", "Ridge/Lasso", "MSE"],
    experiences: ["EduSkills"]
  },
  {
    name: "Image Classification",
    domain: "Artificial Intelligence Engineering",
    subdomain: "Machine Learning",
    description: "Using machine learning and neural networks to classify input visual documents or photos into labeled categories.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: ["OpenCV", "TensorFlow/Keras", "CNNs"],
    experiences: ["EduSkills"]
  },
  {
    name: "Computer Vision Fundamentals",
    domain: "Artificial Intelligence Engineering",
    subdomain: "Machine Learning",
    description: "Basic operations of digital image processing, contour filtering, thresholding, and object detection methods.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: ["OpenCV", "Image Processing", "Filters"],
    experiences: ["EduSkills"]
  },
  {
    name: "Dataset Preparation",
    domain: "Artificial Intelligence Engineering",
    subdomain: "AI Operations",
    description: "Collecting, refining, structuring, and dividing raw information libraries into train, validation, and test datasets.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["Data Pipelines", "Data Splitting"],
    experiences: ["Cosavu"]
  },
  {
    name: "Data Annotation",
    domain: "Artificial Intelligence Engineering",
    subdomain: "AI Operations",
    description: "Labeling text content, images, or files with metadata parameters to train machine learning models.",
    level: "Intermediate",
    years: 1.5,
    projects: [],
    tech: ["Labeling tools", "Bounding Boxes", "JSON tags"],
    experiences: ["Cosavu"]
  },
  {
    name: "AI Testing",
    domain: "Artificial Intelligence Engineering",
    subdomain: "AI Operations",
    description: "Evaluating output formats, hallucination limits, security boundaries, and edge configurations of AI agent systems.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["LLM-as-a-Judge", "Test Cases", "Evaluation Sets"],
    experiences: ["Cosavu"]
  },
  {
    name: "Model Validation",
    domain: "Artificial Intelligence Engineering",
    subdomain: "AI Operations",
    description: "Testing model instances against test cases to confirm generalization limits and prevent overfitting issues.",
    level: "Intermediate",
    years: 1.5,
    projects: [],
    tech: ["Validation sets", "Performance Checks"],
    experiences: ["Cosavu"]
  },
  {
    name: "Performance Evaluation",
    domain: "Artificial Intelligence Engineering",
    subdomain: "AI Operations",
    description: "Analyzing runtime latencies, token consumption weights, costs, and output accuracies of agentic system setups.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["Latency metrics", "Cost tracking", "Token counts"],
    experiences: ["Cosavu"]
  },
  {
    name: "Fine-Tuning Support",
    domain: "Artificial Intelligence Engineering",
    subdomain: "AI Operations",
    description: "Preparing clean instructional or structural JSON datasets to fine-tune open-weight models.",
    level: "Familiar",
    years: 1,
    projects: [],
    tech: ["Dataset Formatting", "Instruction Tuning"],
    experiences: ["Cosavu"]
  },
  {
    name: "AI Quality Assurance",
    domain: "Artificial Intelligence Engineering",
    subdomain: "AI Operations",
    description: "Setting up safety blocks, schema checks, and review loops to ensure AI system responses align with client rules.",
    level: "Intermediate",
    years: 1.5,
    projects: [],
    tech: ["Guardrails", "Regex checks", "JSON Schema validation"],
    experiences: ["Cosavu"]
  },
  {
    name: "Ollama",
    domain: "Artificial Intelligence Engineering",
    subdomain: "AI Frameworks & Tools",
    description: "Framework enabling developer environments to configure, host, and run open LLMs (like LLaMA or Mistral) locally.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["Model files", "Local APIs", "Quantization"],
    experiences: ["Cosavu"]
  },
  {
    name: "LangChain",
    domain: "Artificial Intelligence Engineering",
    subdomain: "AI Frameworks & Tools",
    description: "Popular open-source library orchestrating prompts, LLM invocations, vector libraries, and tool scripts together.",
    level: "Advanced",
    years: 2,
    projects: [],
    tech: ["Chains", "Memory", "Document Loaders"],
    experiences: ["Cosavu"]
  },
  {
    name: "LangGraph",
    domain: "Artificial Intelligence Engineering",
    subdomain: "AI Frameworks & Tools",
    description: "Stateful agentic library from LangChain allowing the configuration of multi-actor systems with cyclic logic and loops.",
    level: "Advanced",
    years: 1,
    projects: [],
    tech: ["State Graphs", "Nodes", "Edges", "Conditional Router"],
    experiences: ["Cosavu"]
  },
  {
    name: "Vector Databases",
    domain: "Artificial Intelligence Engineering",
    subdomain: "AI Frameworks & Tools",
    description: "Storage systems optimized to catalog and semantically search high-dimensional vector embeddings.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["ChromaDB", "Pinecone", "pgvector"],
    experiences: ["Cosavu"]
  },
  {
    name: "Local LLM Deployment",
    domain: "Artificial Intelligence Engineering",
    subdomain: "AI Frameworks & Tools",
    description: "Provisioning hardware, installing runtimes, and serving model layers locally to maintain client data privacy.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["Ollama", "vLLM", "Local serving"],
    experiences: ["Cosavu"]
  },
  {
    name: "OpenAI APIs",
    domain: "Artificial Intelligence Engineering",
    subdomain: "AI Frameworks & Tools",
    description: "Integrating OpenAI's cloud models (GPT-4, embeddings) into custom software services using HTTP API keys.",
    level: "Advanced",
    years: 2,
    projects: [],
    tech: ["API integration", "Token limits", "Function Calling"],
    experiences: ["Cosavu"]
  },
  {
    name: "Gemini APIs",
    domain: "Artificial Intelligence Engineering",
    subdomain: "AI Frameworks & Tools",
    description: "Connecting Google's multimodal Gemini models to leverage large context windows and fast inference capabilities.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["Vertex AI", "Multimodal inputs", "Google AI Studio"],
    experiences: ["Cosavu"]
  },

  // ==========================================
  // 4. Cybersecurity & Linux Systems
  // ==========================================
  {
    name: "Threat Detection",
    domain: "Cybersecurity & Linux Systems",
    subdomain: "Security Engineering",
    description: "Monitoring system behaviors, parsing security audits, and analyzing anomalies to identify malicious process activity.",
    level: "Advanced",
    years: 1,
    projects: [],
    tech: ["Intrusion Detection", "Syscall Monitoring"],
    experiences: ["SyncLayer"]
  },
  {
    name: "Endpoint Security Concepts",
    domain: "Cybersecurity & Linux Systems",
    subdomain: "Security Engineering",
    description: "Techniques and strategies for safeguarding network-connected client host nodes against malicious exploits.",
    level: "Intermediate",
    years: 1,
    projects: [],
    tech: ["EDR", "Host Hardening", "Malware analysis"],
    experiences: ["SyncLayer"]
  },
  {
    name: "Security Monitoring",
    domain: "Cybersecurity & Linux Systems",
    subdomain: "Security Engineering",
    description: "Continuous surveillance of event streams, logs, files, and networks to identify patterns of unauthorized access.",
    level: "Advanced",
    years: 1,
    projects: [],
    tech: ["SIEM", "Auditd", "Log Parsing"],
    experiences: ["SyncLayer"]
  },
  {
    name: "Security Operations Fundamentals",
    domain: "Cybersecurity & Linux Systems",
    subdomain: "Security Engineering",
    description: "Foundational protocols for managing alerts, responding to events, and establishing defensive network rules.",
    level: "Intermediate",
    years: 1,
    projects: [],
    tech: ["Incident response", "Alert Triage"],
    experiences: ["SyncLayer"]
  },
  {
    name: "Attack Surface Analysis",
    domain: "Cybersecurity & Linux Systems",
    subdomain: "Security Engineering",
    description: "Mapping network ports, active APIs, configurations, and permissions to identify and close potential vulnerability points.",
    level: "Intermediate",
    years: 1,
    projects: [],
    tech: ["Vulnerability scanning", "Port mapping"],
    experiences: ["SyncLayer"]
  },
  {
    name: "Linux Security",
    domain: "Cybersecurity & Linux Systems",
    subdomain: "Security Engineering",
    description: "Hardening Linux hosts using strict access controls, firewall constraints, system logs audits, and file permissions.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["SELinux", "Permissions", "Audit logs", "IPTables"],
    experiences: ["SyncLayer"]
  },
  {
    name: "Linux Administration",
    domain: "Cybersecurity & Linux Systems",
    subdomain: "Linux & Systems",
    description: "Managing host systems, creating users, scheduling cron tasks, writing systemd units, and organizing filesystems.",
    level: "Advanced",
    years: 2.5,
    projects: [],
    tech: ["Bash", "Systemd", "User Administration"],
    experiences: ["SyncLayer", "Hyperbare"]
  },
  {
    name: "Ubuntu",
    domain: "Cybersecurity & Linux Systems",
    subdomain: "Linux & Systems",
    description: "Popular Debian-based Linux distribution commonly deployed to host production web applications and database containers.",
    level: "Advanced",
    years: 3,
    projects: [],
    tech: ["apt package manager", "Ubuntu Server"],
    experiences: ["SyncLayer", "Hyperbare"]
  },
  {
    name: "Fedora",
    domain: "Cybersecurity & Linux Systems",
    subdomain: "Linux & Systems",
    description: "Red Hat-sponsored Linux distribution used to test upstream package developments and software environments.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: ["dnf package manager", "RPM"],
    experiences: []
  },
  {
    name: "Arch Linux",
    domain: "Cybersecurity & Linux Systems",
    subdomain: "Linux & Systems",
    description: "Lightweight, customizable Linux distribution focused on simplicity and keeping packages up-to-date via rolling releases.",
    level: "Familiar",
    years: 1.5,
    projects: [],
    tech: ["pacman package manager", "System customization"],
    experiences: []
  },
  {
    name: "Shell Scripting",
    domain: "Cybersecurity & Linux Systems",
    subdomain: "Linux & Systems",
    description: "Writing executable shell command scripts in Bash or Zsh to automate system tasks, log checking, and files operations.",
    level: "Advanced",
    years: 2.5,
    projects: [],
    tech: ["Bash", "Automation", "Regex parsing"],
    experiences: ["SyncLayer"]
  },
  {
    name: "System Monitoring",
    domain: "Cybersecurity & Linux Systems",
    subdomain: "Linux & Systems",
    description: "Observing metrics like CPU loads, memory usage, network interfaces, and disk volumes to troubleshoot service degradation.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["htop", "sysstat", "Log analysis"],
    experiences: ["SyncLayer"]
  },
  {
    name: "Process Management",
    domain: "Cybersecurity & Linux Systems",
    subdomain: "Linux & Systems",
    description: "Controlling system processes, managing priorities, terminating hanging tasks, and tracking syscalls.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["ps", "kill", "systemd", "nice"],
    experiences: ["SyncLayer"]
  },
  {
    name: "Package Management",
    domain: "Cybersecurity & Linux Systems",
    subdomain: "Linux & Systems",
    description: "Installing, updating, configuring, and removing software packages cleanly using systems packaging utilities.",
    level: "Advanced",
    years: 3,
    projects: [],
    tech: ["apt", "dnf", "pacman"],
    experiences: ["SyncLayer"]
  },
  {
    name: "Server Configuration",
    domain: "Cybersecurity & Linux Systems",
    subdomain: "Linux & Systems",
    description: "Setting up web engines, system paths, firewalls, and service managers to host production web applications.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: ["Nginx", "Systemd", "UFW"],
    experiences: ["Hyperbare"]
  },
  {
    name: "Security Controls",
    domain: "Cybersecurity & Linux Systems",
    subdomain: "Cloud Security Exposure",
    description: "Developing guidelines, audits, and checks to maintain security standards for cloud server infrastructure.",
    level: "Intermediate",
    years: 1,
    projects: [],
    tech: ["Compliance", "Auditing"],
    experiences: ["SyncLayer"]
  },
  {
    name: "Infrastructure Monitoring",
    domain: "Cybersecurity & Linux Systems",
    subdomain: "Cloud Security Exposure",
    description: "Implementing hooks and alerts to track hardware loads and abnormal resource metrics of servers and networks.",
    level: "Intermediate",
    years: 1,
    projects: [],
    tech: ["CloudWatch", "Server Alerts"],
    experiences: ["SyncLayer"]
  },
  {
    name: "Cloud Operations Awareness",
    domain: "Cybersecurity & Linux Systems",
    subdomain: "Cloud Security Exposure",
    description: "Practical understanding of deploying services, configuring virtual private clouds (VPCs), and running backups.",
    level: "Intermediate",
    years: 1,
    projects: [],
    tech: ["VPC", "Backups", "Cloud instances"],
    experiences: ["SyncLayer"]
  },
  {
    name: "Security Workflow Design",
    domain: "Cybersecurity & Linux Systems",
    subdomain: "Cloud Security Exposure",
    description: "Configuring automated scanners, checks, and credentials gates directly within cloud deployment files.",
    level: "Intermediate",
    years: 1,
    projects: [],
    tech: ["Security pipelines", "Secret management"],
    experiences: ["SyncLayer"]
  },

  // ==========================================
  // 5. Cloud & Data Engineering
  // ==========================================
  {
    name: "AWS Fundamentals",
    domain: "Cloud & Data Engineering",
    subdomain: "Cloud Platforms",
    description: "Core features of Amazon Web Services, including S3 storage, EC2 virtual instances, RDS databases, and IAM access rules.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["EC2", "S3", "IAM", "Lambda"],
    experiences: ["EduSkills"]
  },
  {
    name: "Google Cloud Fundamentals",
    domain: "Cloud & Data Engineering",
    subdomain: "Cloud Platforms",
    description: "Basic services in Google Cloud, including Compute Engine virtual units, Cloud Storage, and BigQuery analytics.",
    level: "Intermediate",
    years: 1.5,
    projects: [],
    tech: ["Compute Engine", "GCS", "BigQuery"],
    experiences: []
  },
  {
    name: "Cloud Computing Concepts",
    domain: "Cloud & Data Engineering",
    subdomain: "Cloud Platforms",
    description: "Distributed storage architectures, virtualization layers, and cloud infrastructure service models (IaaS, PaaS, SaaS).",
    level: "Advanced",
    years: 2,
    projects: [],
    tech: ["Virtualization", "SaaS/PaaS/IaaS"],
    experiences: ["EduSkills"]
  },
  {
    name: "Cloud Storage",
    domain: "Cloud & Data Engineering",
    subdomain: "Cloud Platforms",
    description: "Storing object files, datasets, and static content in cloud buckets (e.g. AWS S3 or Google Cloud Storage).",
    level: "Advanced",
    years: 2,
    projects: [],
    tech: ["AWS S3", "Bucket Policies", "Supabase Storage"],
    experiences: ["EduSkills"]
  },
  {
    name: "Virtual Machines",
    domain: "Cloud & Data Engineering",
    subdomain: "Cloud Platforms",
    description: "Configuring, executing, and maintaining isolated virtual operating environments on remote cloud architectures.",
    level: "Advanced",
    years: 2,
    projects: [],
    tech: ["EC2", "Hypervisors", "VirtualBox"],
    experiences: ["Hyperbare"]
  },
  {
    name: "Serverless Concepts",
    domain: "Cloud & Data Engineering",
    subdomain: "Cloud Platforms",
    description: "Design pattern where applications run code dynamically on-demand, scaling automatically without pre-allocating servers.",
    level: "Intermediate",
    years: 1.5,
    projects: [],
    tech: ["AWS Lambda", "Serverless APIs"],
    experiences: ["EduSkills"]
  },
  {
    name: "ETL Fundamentals",
    domain: "Cloud & Data Engineering",
    subdomain: "Data Engineering",
    description: "Extract, Transform, Load workflows to extract data from various inputs, clean it, and load it into analytical datastores.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["Data extraction", "Schema mappings"],
    experiences: ["EduSkills"]
  },
  {
    name: "Data Pipelines",
    domain: "Cloud & Data Engineering",
    subdomain: "Data Engineering",
    description: "Chains of data processing operations that automate the movement and formatting of records from creation points to targets.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["ETL", "Data orchestration"],
    experiences: ["EduSkills"]
  },
  {
    name: "Data Processing",
    domain: "Cloud & Data Engineering",
    subdomain: "Data Engineering",
    description: "Manipulating raw datasets using scripts to clean out duplicates, fix errors, and structure elements.",
    level: "Advanced",
    years: 2,
    projects: [],
    tech: ["Pandas", "JSON files processing"],
    experiences: ["EduSkills"]
  },
  {
    name: "Data Transformation",
    domain: "Cloud & Data Engineering",
    subdomain: "Data Engineering",
    description: "Converting data formats and structures to make them compatible with downstream modeling applications.",
    level: "Advanced",
    years: 2,
    projects: [],
    tech: ["Data cleaning", "Normalisation"],
    experiences: ["EduSkills"]
  },
  {
    name: "Structured Data",
    domain: "Cloud & Data Engineering",
    subdomain: "Data Engineering",
    description: "Information formatted in predictable layouts like relational databases, tables, CSV files, and fixed-schema JSON documents.",
    level: "Advanced",
    years: 3,
    projects: [],
    tech: ["SQL schemas", "JSON validation"],
    experiences: ["EduSkills"]
  },
  {
    name: "Data Analysis",
    domain: "Cloud & Data Engineering",
    subdomain: "Data Engineering",
    description: "Inspecting and modeling database records to find trends, derive stats summaries, and formulate recommendations.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: ["Pandas", "Matplotlib", "Statistics"],
    experiences: ["EduSkills"]
  },
  {
    name: "Data Management",
    domain: "Cloud & Data Engineering",
    subdomain: "Data Engineering",
    description: "Implementing access rules, storage schemas, and pipelines to ensure corporate data remains correct and accessible.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: ["Data governance", "Database administration"],
    experiences: ["EduSkills"]
  },

  // ==========================================
  // 6. DevOps & Infrastructure
  // ==========================================
  {
    name: "Git",
    domain: "DevOps & Infrastructure",
    subdomain: "DevOps",
    description: "Standard open-source distributed version control tool used to track file edits and collaborate across codebases.",
    level: "Advanced",
    years: 4,
    projects: ["stratos-edge"],
    tech: ["Branching", "Merging", "Rebasing"],
    experiences: ["Cosavu", "StratosEdge", "SyncLayer"]
  },
  {
    name: "GitHub",
    domain: "DevOps & Infrastructure",
    subdomain: "DevOps",
    description: "Web hosting platform for Git repositories, facilitating team reviews, pull requests, actions pipelines, and releases.",
    level: "Advanced",
    years: 4,
    projects: ["stratos-edge"],
    tech: ["GitHub Actions", "Pull Requests", "Releases"],
    experiences: ["Cosavu", "StratosEdge", "SyncLayer"]
  },
  {
    name: "CI/CD Fundamentals",
    domain: "DevOps & Infrastructure",
    subdomain: "DevOps",
    description: "Automating application builds, testing scripts, and server deployment updates using integration pipelines.",
    level: "Intermediate",
    years: 1.5,
    projects: [],
    tech: ["GitHub Actions", "Build scripts"],
    experiences: ["Cosavu"]
  },
  {
    name: "Docker",
    domain: "DevOps & Infrastructure",
    subdomain: "DevOps",
    description: "Containerization tool packing software code along with its dependencies inside containers to run reliably anywhere.",
    level: "Advanced",
    years: 2,
    projects: [],
    tech: ["Dockerfiles", "Docker Compose", "Containers"],
    experiences: ["Cosavu", "SyncLayer"]
  },
  {
    name: "Containerization",
    domain: "DevOps & Infrastructure",
    subdomain: "DevOps",
    description: "Bundling code applications and system configurations inside isolated containers that share the host kernel.",
    level: "Advanced",
    years: 2,
    projects: [],
    tech: ["Docker", "Container images"],
    experiences: ["Cosavu", "SyncLayer"]
  },
  {
    name: "Deployment Automation",
    domain: "DevOps & Infrastructure",
    subdomain: "DevOps",
    description: "Setting up triggers and webhook scripts that deploy server updates automatically when changes land in main branches.",
    level: "Intermediate",
    years: 1.5,
    projects: [],
    tech: ["Webhooks", "Vercel integration"],
    experiences: ["Cosavu"]
  },
  {
    name: "Bare Metal Hosting Concepts",
    domain: "DevOps & Infrastructure",
    subdomain: "Infrastructure",
    description: "Configuring workloads directly on physical, non-virtualized servers to secure raw CPU and network output.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["Physical Servers", "IP Allocations"],
    experiences: ["Hyperbare"]
  },
  {
    name: "Hosting Management",
    domain: "DevOps & Infrastructure",
    subdomain: "Infrastructure",
    description: "Administering nameservers, server ports, file uploads, and network firewalls to host websites safely.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["cPanel", "Virtual Hosts", "Firewalls"],
    experiences: ["Hyperbare"]
  },
  {
    name: "Server Provisioning",
    domain: "DevOps & Infrastructure",
    subdomain: "Infrastructure",
    description: "Installing basic operating systems, configuring network files, and setting up environments on new server drives.",
    level: "Intermediate",
    years: 1.5,
    projects: [],
    tech: ["OS installation", "Network config"],
    experiences: ["Hyperbare"]
  },
  {
    name: "Domain Management",
    domain: "DevOps & Infrastructure",
    subdomain: "Infrastructure",
    description: "Registering web domains, resolving pointing bugs, setting nameservers, and configuring domain forwarding rules.",
    level: "Advanced",
    years: 2,
    projects: [],
    tech: ["Registrars", "DNS Records"],
    experiences: ["Hyperbare"]
  },
  {
    name: "Infrastructure Consulting",
    domain: "DevOps & Infrastructure",
    subdomain: "Infrastructure",
    description: "Evaluating user computing demands to recommend appropriate physical server capacities and bandwidth rates.",
    level: "Intermediate",
    years: 1.5,
    projects: [],
    tech: ["Server specifications", "Network bandwidth limits"],
    experiences: ["Hyperbare"]
  },

  // ==========================================
  // 7. Robotic Process Automation
  // ==========================================
  {
    name: "Process Automation",
    domain: "Robotic Process Automation",
    subdomain: "UiPath",
    description: "Creating software bots to automate repetitive browser activities, document entry, and file movements.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["UiPath Studio", "Robots"],
    experiences: ["EduSkills"]
  },
  {
    name: "Workflow Design",
    domain: "Robotic Process Automation",
    subdomain: "UiPath",
    description: "Charting sequential process steps, checks, loops, and conditions to map business tasks into bot logic diagrams.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["Flowcharts", "Sequence Diagrams"],
    experiences: ["EduSkills"]
  },
  {
    name: "Business Automation",
    domain: "Robotic Process Automation",
    subdomain: "UiPath",
    description: "Connecting legacy software products, spreadsheets, and emails using robotic bots to streamline operations.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["RPA Integrations", "Email automation"],
    experiences: ["EduSkills"]
  },
  {
    name: "Task Automation",
    domain: "Robotic Process Automation",
    subdomain: "UiPath",
    description: "Writing scripts and bot triggers to handle basic desktop operations, saving time and removing human entry errors.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["Desktop bots", "Data scraping"],
    experiences: ["EduSkills"]
  },
  {
    name: "Automation Testing",
    domain: "Robotic Process Automation",
    subdomain: "UiPath",
    description: "Running automated test passes to confirm bots execute correctly under all data variables.",
    level: "Intermediate",
    years: 1.5,
    projects: [],
    tech: ["UiPath test suite", "Exception handling"],
    experiences: ["EduSkills"]
  },
  {
    name: "Process Optimization",
    domain: "Robotic Process Automation",
    subdomain: "UiPath",
    description: "Evaluating manual operations paths to remove unnecessary work blocks before designing robotic workflows.",
    level: "Intermediate",
    years: 1.5,
    projects: [],
    tech: ["Bottleneck analysis", "Flow optimization"],
    experiences: ["EduSkills"]
  },

  // ==========================================
  // 8. Product Development
  // ==========================================
  {
    name: "Requirement Analysis",
    domain: "Product Development",
    subdomain: "Product Engineering",
    description: "Deconstructing raw client requests to formulate clean, actionable technical development blueprints.",
    level: "Advanced",
    years: 2.5,
    projects: ["stratos-edge"],
    tech: ["Technical specs", "Feature scoping"],
    experiences: ["Hyperbare", "StratosEdge"]
  },
  {
    name: "Feature Planning",
    domain: "Product Development",
    subdomain: "Product Engineering",
    description: "Mapping application feature sets, scoping milestones, and establishing rollout sprints for software delivery.",
    level: "Advanced",
    years: 2,
    projects: ["stratos-edge"],
    tech: ["Sprints roadmap", "Scoping"],
    experiences: ["StratosEdge", "Cosavu"]
  },
  {
    name: "User Story Design",
    domain: "Product Development",
    subdomain: "Product Engineering",
    description: "Defining product functionalities from a target user's perspective to guide UX structures and code logic.",
    level: "Intermediate",
    years: 2,
    projects: ["stratos-edge"],
    tech: ["User Journeys", "Agile stories"],
    experiences: ["StratosEdge"]
  },
  {
    name: "MVP Development",
    domain: "Product Development",
    subdomain: "Product Engineering",
    description: "Quickly coding core features to build functional product versions that validate target client demands.",
    level: "Advanced",
    years: 2,
    projects: ["stratos-edge"],
    tech: ["Rapid prototyping", "Lean dev"],
    experiences: ["Cosavu", "StratosEdge"]
  },
  {
    name: "Product Iteration",
    domain: "Product Development",
    subdomain: "Product Engineering",
    description: "Collecting user reviews to continuously refactor systems, release patches, and expand app capabilities.",
    level: "Advanced",
    years: 2,
    projects: ["stratos-edge"],
    tech: ["Feedback loop", "Continuous Deployment"],
    experiences: ["Cosavu", "StratosEdge"]
  },
  {
    name: "Scalability Planning",
    domain: "Product Development",
    subdomain: "Product Engineering",
    description: "Architecting backend routing, data caching, and server instances to scale with massive traffic spikes.",
    level: "Advanced",
    years: 2,
    projects: ["stratos-edge"],
    tech: ["Load balancing", "Caching", "Resource scaling"],
    experiences: ["StratosEdge"]
  },
  {
    name: "Technical Decision Making",
    domain: "Product Development",
    subdomain: "Startup Experience",
    description: "Evaluating tradeoffs to select languages, databases, hosting environments, and designs under strict budgets.",
    level: "Advanced",
    years: 2,
    projects: ["stratos-edge"],
    tech: ["Tech stack evaluation", "Cost/benefit analysis"],
    experiences: ["Cosavu", "StratosEdge"]
  },
  {
    name: "Early Stage Product Development",
    domain: "Product Development",
    subdomain: "Startup Experience",
    description: "Developing code in dynamic, early-stage pre-seed environments, responding quickly to feedback changes.",
    level: "Advanced",
    years: 2,
    projects: ["stratos-edge"],
    tech: ["Rapid releases", "Agile adaptations"],
    experiences: ["Cosavu", "StratosEdge"]
  },
  {
    name: "Product Validation",
    domain: "Product Development",
    subdomain: "Startup Experience",
    description: "Deploying basic functional tests to assess whether the proposed software resolves client demands before scaling.",
    level: "Advanced",
    years: 2,
    projects: ["stratos-edge"],
    tech: ["Beta testing", "User analytics"],
    experiences: ["Cosavu", "StratosEdge"]
  },
  {
    name: "Growth-Oriented Development",
    domain: "Product Development",
    subdomain: "Startup Experience",
    description: "Prioritizing the design of rapid feature funnels, sharing controls, and integrations that help speed acquisition.",
    level: "Advanced",
    years: 2,
    projects: ["stratos-edge"],
    tech: ["Analytics integration", "Speedy delivery"],
    experiences: ["Cosavu", "StratosEdge"]
  },

  // ==========================================
  // 9. Business Development & Sales
  // ==========================================
  {
    name: "B2B Sales",
    domain: "Business Development & Sales",
    subdomain: "Business Development",
    description: "Engaging corporate clients to represent hosting services, server units, and IT enterprise products.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["Outreach", "Presentations", "Pricing"],
    experiences: ["Hyperbare"]
  },
  {
    name: "Lead Generation",
    domain: "Business Development & Sales",
    subdomain: "Business Development",
    description: "Finding, qualifying, and researching corporate prospects to pitch specialized server setups.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["Prospecting", "Market research"],
    experiences: ["Hyperbare"]
  },
  {
    name: "Client Acquisition",
    domain: "Business Development & Sales",
    subdomain: "Business Development",
    description: "Pitching proposals, answering client queries, negotiating pricing rates, and closing server deals.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["Negotiations", "Sales pipeline"],
    experiences: ["Hyperbare"]
  },
  {
    name: "Client Onboarding",
    domain: "Business Development & Sales",
    subdomain: "Business Development",
    description: "Assisting new server clients to initialize their server access, choose OS packages, and configure networks.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["Setup guides", "Client support"],
    experiences: ["Hyperbare"]
  },
  {
    name: "Requirement Gathering",
    domain: "Business Development & Sales",
    subdomain: "Business Development",
    description: "Consulting directly with business leads to identify their computational needs and bandwidth limits.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["Consultations", "Specifications"],
    experiences: ["Hyperbare"]
  },
  {
    name: "Stakeholder Communication",
    domain: "Business Development & Sales",
    subdomain: "Business Development",
    description: "Presenting system designs, execution roadmaps, and milestones clearly to company executives and founders.",
    level: "Advanced",
    years: 2,
    projects: [],
    tech: ["Presentations", "Milestones reports"],
    experiences: ["Cosavu", "Hyperbare"]
  },
  {
    name: "Technical Sales",
    domain: "Business Development & Sales",
    subdomain: "Marketing",
    description: "Utilizing hardware knowledge to build trust and resolve client concerns regarding network and server speeds.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["Server specifications", "Solution designs"],
    experiences: ["Hyperbare"]
  },
  {
    name: "Solution Selling",
    domain: "Business Development & Sales",
    subdomain: "Marketing",
    description: "Pitching custom server and hosting configurations designed specifically to resolve client load challenges.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["Custom configurations", "Tailored packages"],
    experiences: ["Hyperbare"]
  },
  {
    name: "Customer Discovery",
    domain: "Business Development & Sales",
    subdomain: "Marketing",
    description: "Conducting structured interviews with potential business leads to identify common infrastructure pain points.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["Interviews", "Market research"],
    experiences: ["Hyperbare"]
  },
  {
    name: "Sales Presentations",
    domain: "Business Development & Sales",
    subdomain: "Marketing",
    description: "Preparing slides and explaining hosting plans and server configurations to business decision makers.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["Keynote/Slides", "Pitching"],
    experiences: ["Hyperbare"]
  },
  {
    name: "Business Communication",
    domain: "Business Development & Sales",
    subdomain: "Marketing",
    description: "Writing clear corporate updates, emails, proposals, and handling stakeholder dialogues professionally.",
    level: "Advanced",
    years: 2,
    projects: [],
    tech: ["Professional emailing", "Proposals writing"],
    experiences: ["Hyperbare"]
  },
  {
    name: "Customer Relationship Management",
    domain: "Business Development & Sales",
    subdomain: "Client Success",
    description: "Managing accounts, verifying user happiness, resolving renewals, and supporting hardware upgrades.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["CRM systems", "Client relations"],
    experiences: ["Hyperbare"]
  },
  {
    name: "Technical Consulting",
    domain: "Business Development & Sales",
    subdomain: "Client Success",
    description: "Advising businesses on server setups, bandwidth requirements, security policies, and migration strategies.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["Infrastructure advising", "Migration planning"],
    experiences: ["Hyperbare"]
  },
  {
    name: "Solution Demonstrations",
    domain: "Business Development & Sales",
    subdomain: "Client Success",
    description: "Walking business prospects through control panel consoles and server dashboards to demonstrate features.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["Demos", "Console walkthroughs"],
    experiences: ["Hyperbare"]
  },
  {
    name: "Client Support",
    domain: "Business Development & Sales",
    subdomain: "Client Success",
    description: "Diagnosing server networking errors, resource limits, and resolving setup tickets for server accounts.",
    level: "Advanced",
    years: 1.5,
    projects: [],
    tech: ["Ticket systems", "Networking diagnostics"],
    experiences: ["Hyperbare"]
  },

  // ==========================================
  // 10. Leadership & Collaboration
  // ==========================================
  {
    name: "Cross-Functional Collaboration",
    domain: "Leadership & Collaboration",
    subdomain: "Teamwork",
    description: "Working effectively with engineers, designers, and sales reps to align system roadmaps with business goals.",
    level: "Advanced",
    years: 2,
    projects: [],
    tech: ["Team alignment", "Product sprints"],
    experiences: ["Cosavu"]
  },
  {
    name: "Remote Team Collaboration",
    domain: "Leadership & Collaboration",
    subdomain: "Teamwork",
    description: "Coordinating tasks, review sessions, and standup calls asynchronously across distant time zones.",
    level: "Advanced",
    years: 2,
    projects: [],
    tech: ["Slack", "Asynchronous updates"],
    experiences: ["Cosavu"]
  },
  {
    name: "Documentation",
    domain: "Leadership & Collaboration",
    subdomain: "Teamwork",
    description: "Authoring clean API guides, local setup procedures, and code architectures to help team onboarding.",
    level: "Advanced",
    years: 3,
    projects: [],
    tech: ["Markdown", "Wiki", "API docs"],
    experiences: ["Cosavu", "SyncLayer"]
  },
  {
    name: "Knowledge Sharing",
    domain: "Leadership & Collaboration",
    subdomain: "Teamwork",
    description: "Explaining complex technical processes and hosting reviews to distribute engineering insights within the team.",
    level: "Advanced",
    years: 2,
    projects: [],
    tech: ["Code walkthroughs", "Technical sharing"],
    experiences: ["Cosavu"]
  },
  {
    name: "Agile Mindset",
    domain: "Leadership & Collaboration",
    subdomain: "Teamwork",
    description: "Prioritizing iterative releases, adapting quickly to changes, and focusing on creating prompt user value.",
    level: "Advanced",
    years: 2,
    projects: ["stratos-edge"],
    tech: ["Sprints", "Scrum", "Continuous feedback"],
    experiences: ["Cosavu", "StratosEdge"]
  },
  {
    name: "Student Coordinator",
    domain: "Leadership & Collaboration",
    subdomain: "Leadership",
    description: "Representing training and placements campaigns for computer science cohorts at CMR Institute of Technology.",
    level: "Advanced",
    years: 3,
    projects: [],
    tech: ["Cohort management", "Placement coordination"],
    experiences: []
  },
  {
    name: "Community Coordination",
    domain: "Leadership & Collaboration",
    subdomain: "Leadership",
    description: "Organizing student events, coding challenges, industry guest panels, and student workshops.",
    level: "Advanced",
    years: 3,
    projects: [],
    tech: ["Event planning", "Public relations"],
    experiences: []
  },
  {
    name: "Team Communication",
    domain: "Leadership & Collaboration",
    subdomain: "Leadership",
    description: "Leading standups, resolving issues, and conveying goals clearly to keep team members aligned.",
    level: "Advanced",
    years: 3,
    projects: [],
    tech: ["Standups", "Team alignment"],
    experiences: ["Cosavu"]
  },
  {
    name: "Mentorship Support",
    domain: "Leadership & Collaboration",
    subdomain: "Leadership",
    description: "Helping peers learn frontend frameworks, debug database scripts, and prepare for placement interviews.",
    level: "Advanced",
    years: 2,
    projects: [],
    tech: ["Code reviews mentoring", "Interview prep"],
    experiences: []
  },
  {
    name: "Event Coordination",
    domain: "Leadership & Collaboration",
    subdomain: "Leadership",
    description: "Scoping schedules, securing spaces, coordinating guest entries, and executing logistics for academic programs.",
    level: "Advanced",
    years: 3,
    projects: [],
    tech: ["Logistics", "Scheduling"],
    experiences: []
  },

  // ==========================================
  // 11. Professional Skills
  // ==========================================
  {
    name: "Technical Communication",
    domain: "Professional Skills",
    subdomain: "Communication",
    description: "Conveying complex coding concepts, network parameters, or AI workflows clearly to non-technical stakeholders.",
    level: "Advanced",
    years: 3,
    projects: [],
    tech: ["Technical writing", "Presenting"],
    experiences: []
  },
  {
    name: "Presentation Skills",
    domain: "Professional Skills",
    subdomain: "Communication",
    description: "Structuring slide decks and explaining system blueprints to engage founders and client developers.",
    level: "Advanced",
    years: 3,
    projects: [],
    tech: ["Slides design", "Public speaking"],
    experiences: []
  },
  {
    name: "Documentation Writing",
    domain: "Professional Skills",
    subdomain: "Communication",
    description: "Authoring comprehensive, search-friendly system design guides, markdown manuals, and setup procedures.",
    level: "Advanced",
    years: 3,
    projects: [],
    tech: ["Technical manuals", "Markdown documentation"],
    experiences: []
  },
  {
    name: "Analytical Thinking",
    domain: "Professional Skills",
    subdomain: "Problem Solving",
    description: "Tracing errors back to system logic issues and analyzing data metrics to identify patterns.",
    level: "Advanced",
    years: 4,
    projects: [],
    tech: ["Data analytics", "Log analysis"],
    experiences: []
  },
  {
    name: "Root Cause Analysis",
    domain: "Professional Skills",
    subdomain: "Problem Solving",
    description: "Diagnosing the fundamental system or network issues causing anomalies rather than applying temporary patches.",
    level: "Advanced",
    years: 3.5,
    projects: [],
    tech: ["Diagnostics", "Error logs analysis"],
    experiences: []
  },
  {
    name: "Critical Thinking",
    domain: "Professional Skills",
    subdomain: "Problem Solving",
    description: "Evaluating architectural options to select frameworks or servers that balance cost, speed, and scaling limits.",
    level: "Advanced",
    years: 4,
    projects: [],
    tech: ["Systems comparison", "Scoping trade-offs"],
    experiences: []
  },
  {
    name: "Troubleshooting",
    domain: "Professional Skills",
    subdomain: "Problem Solving",
    description: "Methodically resolving runtime crashes, compiler errors, database outages, or deployment failures.",
    level: "Advanced",
    years: 4,
    projects: [],
    tech: ["System diagnostics", "Logs analysis"],
    experiences: []
  },
  {
    name: "Self Learning",
    domain: "Professional Skills",
    subdomain: "Productivity",
    description: "Independently researching, testing, and adopting new frameworks and developer tools to keep skills up-to-date.",
    level: "Advanced",
    years: 5,
    projects: [],
    tech: ["Researching", "Prototyping"],
    experiences: []
  },
  {
    name: "Time Management",
    domain: "Professional Skills",
    subdomain: "Productivity",
    description: "Scoping tasks, ranking features, and structuring daily sprints to meet deadlines without coding delays.",
    level: "Advanced",
    years: 4,
    projects: [],
    tech: ["Sprint tracking", "Prioritising tasks"],
    experiences: []
  },
  {
    name: "Adaptability",
    domain: "Professional Skills",
    subdomain: "Productivity",
    description: "Quickly learning new programming languages or client configurations to adapt to changing project directions.",
    level: "Advanced",
    years: 4,
    projects: [],
    tech: ["Flexible styling", "Multi-stack updates"],
    experiences: []
  },
  {
    name: "Fast Learning",
    domain: "Professional Skills",
    subdomain: "Productivity",
    description: "Acquiring a deep operational understanding of new programming models or complex systems environments in days.",
    level: "Advanced",
    years: 5,
    projects: [],
    tech: ["Fast prototyping", "Intense research"],
    experiences: []
  },
  {
    name: "Continuous Improvement",
    domain: "Professional Skills",
    subdomain: "Productivity",
    description: "Regularly refactoring personal workflows, code conventions, and configurations to build better software.",
    level: "Advanced",
    years: 5,
    projects: [],
    tech: ["Refactoring", "Workspace tuning"],
    experiences: []
  },

  // ==========================================
  // 12. Tools & Platforms
  // ==========================================
  {
    name: "VS Code",
    domain: "Tools & Platforms",
    subdomain: "Development Tools",
    description: "Primary visual editor, terminal environment, and extensions library used to write, test, and debug codebases daily.",
    level: "Advanced",
    years: 4,
    projects: ["stratos-edge"],
    tech: ["Git integration", "Keybindings", "Snippets"],
    experiences: []
  },
  {
    name: "IntelliJ IDEA",
    domain: "Tools & Platforms",
    subdomain: "Development Tools",
    description: "JetBrains Java integrated environment used to write and compile backend database APIs and class modules.",
    level: "Intermediate",
    years: 2.5,
    projects: [],
    tech: ["Java tools", "Maven integration"],
    experiences: []
  },
  {
    name: "Android Studio",
    domain: "Tools & Platforms",
    subdomain: "Development Tools",
    description: "Official workspace for Android app development, build testing, and layout emulator actions.",
    level: "Intermediate",
    years: 2,
    projects: [],
    tech: ["Gradle builds", "Emulator runs", "Android SDK"],
    experiences: []
  },
  {
    name: "Postman",
    domain: "Tools & Platforms",
    subdomain: "Development Tools",
    description: "API testing client used to dispatch, automate, and validate REST endpoint parameters and payloads.",
    level: "Advanced",
    years: 3,
    projects: [],
    tech: ["Collection tests", "Mock servers", "Environment keys"],
    experiences: []
  },
  {
    name: "Google Workspace",
    domain: "Tools & Platforms",
    subdomain: "Collaboration Tools",
    description: "Corporate cloud suite used to author spreadsheets, coordinate tasks, and schedule team calendar events.",
    level: "Advanced",
    years: 4,
    projects: [],
    tech: ["Google Sheets", "Google Docs"],
    experiences: []
  },
  {
    name: "Microsoft Office",
    domain: "Tools & Platforms",
    subdomain: "Collaboration Tools",
    description: "Office package containing Word, Excel, and PowerPoint used for writing technical project reports.",
    level: "Advanced",
    years: 4,
    projects: [],
    tech: ["Excel files", "Word docs", "Presentations"],
    experiences: []
  },
  {
    name: "Windows",
    domain: "Tools & Platforms",
    subdomain: "Operating Systems",
    description: "Primary desktop system environment, configured with Powershell and WSL, used for application engineering.",
    level: "Advanced",
    years: 5,
    projects: ["stratos-edge"],
    tech: ["Powershell", "WSL runtimes", "Hyper-V"],
    experiences: []
  },
  {
    name: "Linux",
    domain: "Tools & Platforms",
    subdomain: "Operating Systems",
    description: "Core operating system environment used to run web server daemons, Docker containers, and security monitors.",
    level: "Advanced",
    years: 3,
    projects: [],
    tech: ["Bash CLI", "SSH configs", "Syscalls"],
    experiences: ["SyncLayer", "Hyperbare"]
  },
  {
    name: "macOS",
    domain: "Tools & Platforms",
    subdomain: "Operating Systems",
    description: "Secondary developer operating system used to validate cross-platform responsiveness and layouts.",
    level: "Familiar",
    years: 1.5,
    projects: [],
    tech: ["Darwin shell", "Homebrew package manager"],
    experiences: []
  }
];
