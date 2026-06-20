"use client";

import React, { useState, useEffect } from "react";
import { AppStateProvider, useAppState } from "../context/AppStateContext";
import { Navbar } from "../components/Navbar";
import { AINavigator } from "../components/AINavigator";
import { portfolioData } from "../data/portfolio";
import { skillsData } from "../data/skillsData";
import { 
  VscMail, 
  VscLocation, 
  VscCloudDownload,
  VscChevronRight,
  VscCheck,
  VscLoading
} from "react-icons/vsc";

// Simple custom icons or importing safely
const GithubIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
    <path d="M9 18c-4.51 2-5-2-7-2"></path>
  </svg>
);

const LinkedinIcon = () => (
  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" className="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const PortfolioContent: React.FC = () => {
  const { language } = useAppState();
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  
  // Contact Form State
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setFormStatus("submitting");

    try {
      const response = await fetch("https://formsubmit.co/ajax/sammetaakhilsai@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`
        })
      });

      if (response.ok) {
        setFormStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setFormStatus("idle"), 4000);
      } else {
        setFormStatus("idle");
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      setFormStatus("idle");
      alert("An error occurred. Please check your network and try again.");
    }
  };

  // Skill Lookup for trace tooltip
  const getSkillUsage = (skillName: string) => {
    const found = skillsData.find(s => s.name.toLowerCase() === skillName.toLowerCase());
    if (found) {
      return {
        experiences: found.experiences || [],
        projects: found.projects || []
      };
    }
    return null;
  };

  // Structured Skill Domains from request
  const skillDomains = [
    {
      title: { en: "Artificial Intelligence", te: "కృత్రిమ మేధస్సు" },
      skills: ["AI Agents", "LLMs", "Prompt Engineering", "LangChain", "LangGraph", "Model Evaluation", "Dataset Engineering"]
    },
    {
      title: { en: "Full Stack Development", te: "ఫుల్ స్టాక్ డెవలప్‌మెంట్" },
      skills: ["React", "Next.js", "TypeScript", "Node.js", "FastAPI", "Firebase", "PostgreSQL"]
    },
    {
      title: { en: "Cyber Security", te: "సైబర్ సెక్యూరిటీ" },
      skills: ["Linux Security", "Threat Detection", "System Monitoring", "Cloud Security"]
    },
    {
      title: { en: "Business Development", te: "బిజినెస్ డెవలప్‌మెంట్" },
      skills: ["Client Onboarding", "B2B Sales", "Technical Consulting", "Stakeholder Management"]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* Main Container */}
      <main className="flex-1 max-w-5xl mx-auto px-6 md:px-12 py-12 md:py-20 w-full space-y-24 md:space-y-36">
        
        {/* ==========================================
           1. HERO SECTION (HOME)
           ========================================== */}
        <section id="home" className="pt-8 md:pt-16 space-y-8 select-text">
          <div className="space-y-3">
            <span className="font-mono text-xs md:text-sm text-[var(--accent-color)] font-semibold tracking-wider uppercase">
              {language === "en" ? "Available for opportunities" : "అవకాశాల కోసం సిద్ధంగా ఉన్నారు"}
            </span>
            <h1 className="font-headline font-extrabold text-4xl md:text-6xl tracking-tight text-[var(--fg-color)]">
              {language === "en" ? portfolioData.profile.name.en : portfolioData.profile.name.te}
            </h1>
            <p className="font-headline text-lg md:text-xl font-medium opacity-85 text-[var(--fg-muted)]">
              Software Engineer &bull; AI Engineer &bull; Full Stack Developer
            </p>
          </div>

          <p className="text-lg md:text-2xl font-light leading-relaxed max-w-3xl text-[var(--fg-color)]">
            "{language === "en" 
              ? "I build software, AI systems, and scalable digital products that solve real-world problems." 
              : "నేను వాస్తవ ప్రపంచ సమస్యలను పరిష్కరించే సాఫ్ట్‌వేర్, ఏఐ (AI) వ్యవస్థలు మరియు స్కేలబుల్ డిజిటల్ ఉత్పత్తులను నిర్మిస్తాను."}"
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 pt-2 font-mono text-xs">
            <button
              onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
              className="px-5 py-3 rounded-md bg-[var(--fg-color)] text-[var(--bg-color)] hover:opacity-90 font-bold transition-opacity cursor-pointer flex items-center gap-1.5"
            >
              <span>{language === "en" ? "View Experience" : "అనుభవం చూడండి"}</span>
              <VscChevronRight className="text-sm" />
            </button>
            
            <button
              onClick={() => document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" })}
              className="px-5 py-3 rounded-md border border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-[var(--card-hover)] transition-colors cursor-pointer text-[var(--fg-color)]"
            >
              {language === "en" ? "Open Resume" : "రెజ్యూమ్ తెరవండి"}
            </button>

            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-5 py-3 rounded-md border border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-[var(--card-hover)] transition-colors cursor-pointer text-[var(--fg-color)]"
            >
              {language === "en" ? "Contact Me" : "నన్ను సంప్రదించండి"}
            </button>
          </div>

          {/* Focus areas grid */}
          <div className="pt-8">
            <h3 className="font-mono text-xs opacity-50 uppercase tracking-widest mb-4">
              {language === "en" ? "Core focus areas" : "ప్రధాన దృష్టి విభాగాలు"}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { title: "Artificial Intelligence", tag: "AI Agents & LLMs" },
                { title: "Full Stack Development", tag: "React, Node, DBs" },
                { title: "Developer Tools", tag: "CLI & System APIs" },
                { title: "Cloud Technologies", tag: "AWS, Pipelines & VMs" }
              ].map((focus, i) => (
                <div 
                  key={i} 
                  className="p-4 border border-[var(--border-color)] bg-[var(--card-bg)] rounded-lg hover:border-[var(--accent-color)]/30 transition-all select-none"
                >
                  <p className="font-headline font-semibold text-xs md:text-sm text-[var(--fg-color)]">{focus.title}</p>
                  <p className="font-mono text-[9px] md:text-[10px] text-[var(--fg-muted)] mt-1">{focus.tag}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ==========================================
           2. EXPERIENCE SECTION
           ========================================== */}
        <section id="experience" className="space-y-10 scroll-mt-20">
          <div>
            <h2 className="font-headline font-bold text-2xl md:text-3xl tracking-tight text-[var(--fg-color)]">
              {language === "en" ? "Professional Experience" : "వృత్తిపరమైన అనుభవం"}
            </h2>
            <div className="w-12 h-1 bg-[var(--accent-color)] mt-2 rounded"></div>
          </div>

          {/* Timeline */}
          <div className="relative border-l border-[var(--border-color)] ml-3 pl-6 md:pl-8 space-y-12">
            {portfolioData.experience.map((exp, i) => (
              <div key={i} className="relative group">
                
                {/* Bullet node */}
                <div className="absolute -left-[31px] md:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 border-[var(--border-color)] bg-[var(--bg-color)] group-hover:border-[var(--accent-color)] transition-colors duration-150"></div>
                
                <div className="space-y-2">
                  {/* Title and duration */}
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-1">
                    <h3 className="font-headline font-bold text-lg text-[var(--fg-color)]">
                      {language === "en" ? exp.title.en : exp.title.te}
                    </h3>
                    <span className="font-mono text-xs text-[var(--fg-muted)] md:bg-[var(--card-bg)] md:px-2.5 md:py-1 md:border md:border-[var(--border-color)] md:rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  {/* Company */}
                  <p className="font-mono text-xs text-[var(--accent-color)] font-semibold uppercase tracking-wider">
                    {language === "en" ? exp.company.en : exp.company.te}
                  </p>

                  {/* Description */}
                  <p className="text-sm opacity-90 text-[var(--fg-color)] leading-relaxed">
                    {language === "en" ? exp.description.en : exp.description.te}
                  </p>

                  {/* Achievements */}
                  {exp.bullets && (
                    <ul className="space-y-1.5 pl-1 pt-1">
                      {exp.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-[var(--fg-muted)] leading-relaxed">
                          <span className="text-[var(--accent-color)] mt-1 font-bold">&bull;</span>
                          <span>{language === "en" ? bullet.en : bullet.te}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Technologies tags */}
                  {exp.tags && (
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {exp.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-0.5 border border-[var(--border-color)] bg-[var(--card-bg)] rounded text-[9px] font-mono text-[var(--fg-muted)] uppercase"
                        >
                          {tag.replace("#", "")}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
           3. SKILLS SECTION (HOVER TRACERS)
           ========================================== */}
        <section id="skills" className="space-y-10 scroll-mt-20">
          <div className="space-y-2">
            <h2 className="font-headline font-bold text-2xl md:text-3xl tracking-tight text-[var(--fg-color)]">
              {language === "en" ? "Skills & Expertise" : "నైపుణ్యాలు & నైపుణ్య సాధనాలు"}
            </h2>
            <p className="text-xs text-[var(--fg-muted)] font-mono max-w-xl">
              {language === "en" 
                ? "Hover over any skill tag to trace its professional integrations across projects and timelines." 
                : "ప్రాజెక్టులు మరియు అనుభవాల అంతటా దాని సమన్వయాన్ని తెలుసుకోవడానికి ఏదైనా నైపుణ్య టాగ్ పై మౌస్ ఉంచండి."}
            </p>
            <div className="w-12 h-1 bg-[var(--accent-color)] mt-2 rounded"></div>
          </div>

          {/* Grid of Domain Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
            {skillDomains.map((domain, i) => (
              <div 
                key={i}
                className="p-6 border border-[var(--border-color)] bg-[var(--card-bg)] rounded-xl space-y-4 hover:shadow-md transition-shadow relative"
              >
                <h3 className="font-headline font-bold text-base md:text-lg text-[var(--fg-color)] border-b border-[var(--border-color)] pb-2">
                  {language === "en" ? domain.title.en : domain.title.te}
                </h3>

                <div className="flex flex-wrap gap-2">
                  {domain.skills.map((skill, idx) => {
                    const usage = getSkillUsage(skill);
                    const isHovered = hoveredSkill === skill;
                    
                    return (
                      <div 
                        key={idx}
                        className="relative z-10"
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                      >
                        {/* Skill Tag */}
                        <span className="px-3 py-1.5 border border-[var(--border-color)] bg-[var(--bg-color)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] rounded-md text-[11px] font-mono transition-colors duration-150 cursor-help select-none block text-[var(--fg-color)]">
                          {skill}
                        </span>

                        {/* Custom Floating Hover Tooltip */}
                        {isHovered && usage && (usage.experiences.length > 0 || usage.projects.length > 0) && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-3 border border-[var(--border-color)] bg-[var(--tooltip-bg)] text-[var(--tooltip-fg)] shadow-xl rounded-md z-30 font-mono text-[9px] leading-tight space-y-2 pointer-events-none transition-all animate-fade-in">
                            <span className="font-bold border-b border-[var(--border-color)] pb-1 block opacity-75 uppercase tracking-wider">
                              Used In:
                            </span>
                            
                            {usage.experiences.length > 0 && (
                              <div>
                                <span className="opacity-50 text-[8px] block">Experiences:</span>
                                <ul className="list-disc pl-3 mt-0.5 space-y-0.5">
                                  {usage.experiences.map((exp, idx) => (
                                    <li key={idx}>{exp}</li>
                                  ))}
                                </ul>
                              </div>
                            )}

                            {usage.projects.length > 0 && (
                              <div className="pt-1">
                                <span className="opacity-50 text-[8px] block">Projects:</span>
                                <ul className="list-disc pl-3 mt-0.5 space-y-0.5">
                                  {usage.projects.map((proj, idx) => (
                                    <li key={idx} className="capitalize">{proj.replace("-", " ")}</li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ==========================================
           4. RESUME SECTION
           ========================================== */}
        <section id="resume" className="space-y-10 scroll-mt-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-headline font-bold text-2xl md:text-3xl tracking-tight text-[var(--fg-color)]">
                {language === "en" ? "Academic & Resume" : "విద్య & రెజ్యూమ్"}
              </h2>
              <div className="w-12 h-1 bg-[var(--accent-color)] mt-2 rounded"></div>
            </div>

            {/* Direct download trigger */}
            <a 
              href="https://drive.google.com/file/d/1jwx2O2Ui3nIVV9twaE9YZBnFamJFKzcX/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-[var(--border-color)] bg-[var(--card-bg)] hover:bg-[var(--card-hover)] hover:border-[var(--accent-color)] rounded font-mono text-xs text-[var(--fg-color)]"
            >
              <VscCloudDownload className="text-base" />
              <span>{language === "en" ? "Download PDF Resume" : "పీడీఎఫ్ రెజ్యూమ్ డౌన్‌లోడ్"}</span>
            </a>
          </div>

          {/* Double Grid: Education Details + PDF Embed */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left: Education & Certifications card details */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Education timeline info */}
              <div className="p-5 border border-[var(--border-color)] bg-[var(--card-bg)] rounded-xl space-y-4">
                <span className="font-mono text-[9px] uppercase tracking-wider opacity-60">Education</span>
                {portfolioData.education.map((edu, i) => (
                  <div key={i} className="space-y-2">
                    <p className="font-headline font-bold text-sm text-[var(--fg-color)]">
                      {language === "en" ? edu.degree.en : edu.degree.te}
                    </p>
                    <p className="font-mono text-[10px] text-[var(--accent-color)] font-semibold">
                      {language === "en" ? edu.institution.en : edu.institution.te} &bull; {edu.period}
                    </p>
                    {edu.details && (
                      <div className="space-y-1.5 pt-1 text-[10px] text-[var(--fg-muted)]">
                        {edu.details.map((d, idx) => {
                          const isBullet = d.en.trim().startsWith("-") || d.en.trim().startsWith("•") || d.en.startsWith("  ");
                          if (isBullet) {
                            return (
                              <p key={idx} className="pl-4 flex gap-1">
                                <span>&bull;</span>
                                <span>{language === "en" ? d.en.replace(/^\s*[-•]\s*/, "") : d.te.replace(/^\s*[-•]\s*/, "")}</span>
                              </p>
                            );
                          } else {
                            return (
                              <p key={idx} className="font-bold mt-2 text-[var(--fg-color)]">
                                {language === "en" ? d.en : d.te}
                              </p>
                            );
                          }
                        })}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Certifications Card */}
              <div className="p-5 border border-[var(--border-color)] bg-[var(--card-bg)] rounded-xl space-y-4">
                <span className="font-mono text-[9px] uppercase tracking-wider opacity-60">Certifications</span>
                <div className="space-y-3 font-mono text-[10px] text-[var(--fg-color)]">
                  {portfolioData.certifications.map((c, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <span className="text-[var(--accent-color)]">🏆</span>
                      <div>
                        <p className="font-bold">{language === "en" ? c.name.en : c.name.te}</p>
                        <p className="text-[9px] text-[var(--fg-muted)] mt-0.5">{c.issuer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right: Embedded PDF viewer */}
            <div className="lg:col-span-7">
              {/* Responsive embed wrapper */}
              <div className="border border-[var(--border-color)] rounded-xl overflow-hidden shadow-sm bg-[var(--card-bg)]">
                
                {/* PDF Frame (only render on larger viewports to save memory/space on mobile) */}
                <div className="hidden md:block">
                  <iframe
                    src="https://drive.google.com/file/d/1jwx2O2Ui3nIVV9twaE9YZBnFamJFKzcX/preview"
                    className="w-full h-[450px] border-none"
                    title="Akhil Sai Sammeta Resume"
                  />
                </div>

                {/* Mobile placeholder */}
                <div className="md:hidden p-8 text-center flex flex-col items-center justify-center gap-4">
                  <span className="text-4xl text-[var(--accent-color)]">📄</span>
                  <div className="space-y-1">
                    <p className="font-headline font-bold text-sm text-[var(--fg-color)]">Akhil_Sai_Sammeta_Resume.pdf</p>
                    <p className="font-mono text-[9px] text-[var(--fg-muted)]">PDF Format &bull; 138 KB</p>
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1jwx2O2Ui3nIVV9twaE9YZBnFamJFKzcX/view?usp=drive_link"
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-2 bg-[var(--accent-color)] text-[var(--bg-color)] rounded font-mono font-bold text-xs hover:opacity-90 transition-opacity"
                  >
                    Download Resume
                  </a>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* ==========================================
           5. CONTACT SECTION
           ========================================== */}
        <section id="contact" className="space-y-10 scroll-mt-20">
          <div>
            <h2 className="font-headline font-bold text-2xl md:text-3xl tracking-tight text-[var(--fg-color)]">
              {language === "en" ? "Get in Touch" : "సంప్రదించండి"}
            </h2>
            <div className="w-12 h-1 bg-[var(--accent-color)] mt-2 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Details panel */}
            <div className="md:col-span-5 space-y-6">
              
              <p className="text-sm opacity-80 text-[var(--fg-color)]">
                {language === "en"
                  ? "If you want to discuss a project, collaboration opportunities, or technical consulting, drop a message or connect through social platforms."
                  : "ప్రాజెక్ట్, సహకార అవకాశాలు లేదా సాంకేతిక సలహాల గురించి చర్చించాలనుకుంటే, సందేశం పంపండి లేదా సామాజిక వేదికల ద్వారా కనెక్ట్ అవ్వండి."}
              </p>

              <div className="space-y-3 font-mono text-xs text-[var(--fg-color)]">
                <div className="flex items-center gap-3">
                  <VscMail className="text-base text-[var(--accent-color)]" />
                  <a href={`mailto:${portfolioData.socials.email}`} className="hover:underline">
                    {portfolioData.socials.email}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <VscLocation className="text-base text-[var(--accent-color)]" />
                  <span>{language === "en" ? portfolioData.socials.location.en : portfolioData.socials.location.te}</span>
                </div>
              </div>

              {/* Social shortcuts */}
              <div className="flex gap-3 pt-2">
                <a
                  href={portfolioData.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] rounded-md text-[var(--fg-color)] transition-colors duration-150"
                  title="GitHub"
                >
                  <GithubIcon />
                </a>
                <a
                  href={portfolioData.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 border border-[var(--border-color)] bg-[var(--card-bg)] hover:border-[var(--accent-color)] hover:text-[var(--accent-color)] rounded-md text-[var(--fg-color)] transition-colors duration-150"
                  title="LinkedIn"
                >
                  <LinkedinIcon />
                </a>
              </div>

            </div>

            {/* Stripe-style Contact Form */}
            <div className="md:col-span-7 p-6 border border-[var(--border-color)] bg-[var(--card-bg)] rounded-xl">
              
              <form onSubmit={handleContactSubmit} className="space-y-4 font-mono text-xs">
                
                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase opacity-65 text-[var(--fg-color)]">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    disabled={formStatus === "submitting" || formStatus === "success"}
                    placeholder="Enter your name"
                    className="w-full px-3 py-2.5 border border-[var(--border-color)] bg-[var(--bg-color)] rounded outline-none focus:border-[var(--accent-color)] text-[var(--fg-color)] disabled:opacity-50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase opacity-65 text-[var(--fg-color)]">Email Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    disabled={formStatus === "submitting" || formStatus === "success"}
                    placeholder="name@company.com"
                    className="w-full px-3 py-2.5 border border-[var(--border-color)] bg-[var(--bg-color)] rounded outline-none focus:border-[var(--accent-color)] text-[var(--fg-color)] disabled:opacity-50"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] uppercase opacity-65 text-[var(--fg-color)]">Message</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    disabled={formStatus === "submitting" || formStatus === "success"}
                    placeholder="How can Akhil help you?"
                    className="w-full px-3 py-2.5 border border-[var(--border-color)] bg-[var(--bg-color)] rounded outline-none focus:border-[var(--accent-color)] text-[var(--fg-color)] disabled:opacity-50 resize-none"
                  />
                </div>

                {/* Submit state wrapper */}
                <button
                  type="submit"
                  disabled={formStatus !== "idle"}
                  className="w-full py-3 rounded bg-[var(--fg-color)] text-[var(--bg-color)] hover:opacity-90 transition-opacity font-bold cursor-pointer disabled:opacity-85 flex items-center justify-center gap-2"
                >
                  {formStatus === "submitting" && <VscLoading className="animate-spin text-sm" />}
                  {formStatus === "success" && <VscCheck className="text-sm text-emerald-500 font-bold" />}
                  <span>
                    {formStatus === "idle" && (language === "en" ? "Send Message" : "సందేశం పంపండి")}
                    {formStatus === "submitting" && (language === "en" ? "Transmitting..." : "పంపుతోంది...")}
                    {formStatus === "success" && (language === "en" ? "Message Transmitted!" : "సందేశం పంపబడింది!")}
                  </span>
                </button>

              </form>

            </div>

          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[var(--border-color)] py-8 font-mono text-[10px] text-center opacity-60 text-[var(--fg-color)]">
        &copy; {new Date().getFullYear()} Akhil Sai Sammeta &bull; Built with Next.js & Tailwind CSS
      </footer>

      {/* Floating website helper */}
      <AINavigator />
    </div>
  );
};

export default function Home() {
  return (
    <AppStateProvider>
      <PortfolioContent />
    </AppStateProvider>
  );
}
