"use client";

import React, { useState, useEffect } from "react";
import { useAppState, ThemeType } from "../context/AppStateContext";
import { VscMenu, VscClose, VscSymbolColor, VscGlobe } from "react-icons/vsc";

export const Navbar: React.FC = () => {
  const { theme, setTheme, language, setLanguage } = useAppState();
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isThemeMenuOpen, setIsThemeMenuOpen] = useState(false);

  const sections = ["home", "experience", "skills", "resume", "contact"];

  // Scroll spy to update active section link
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 160; // offset for navbar height
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const themeLabels: Record<ThemeType, string> = {
    "theme-dark": "Dark",
    "theme-light": "Light",
    "theme-sepia": "Sepia",
    "theme-green": "Retro Green"
  };

  const currentThemeLabel = themeLabels[theme] || "Dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-color)] glassmorphism theme-transition select-none">
      <div className="max-w-6xl mx-auto px-4 md:px-8 h-16 flex items-center justify-between">
        
        {/* Logo/Brand */}
        <div 
          onClick={() => handleNavClick("home")}
          className="font-headline font-bold text-base md:text-lg tracking-tight cursor-pointer hover:opacity-85 text-[var(--fg-color)]"
        >
          Akhil Sai Sammeta
        </div>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 font-mono text-xs">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => handleNavClick(sec)}
              className={`capitalize transition-colors cursor-pointer ${
                activeSection === sec
                  ? "text-[var(--accent-color)] font-semibold"
                  : "opacity-75 hover:opacity-100 text-[var(--fg-color)]"
              }`}
            >
              {sec}
            </button>
          ))}
        </nav>

        {/* Controls (Theme, Language, Mobile Menu) */}
        <div className="flex items-center gap-2">
          
          {/* Language Toggle */}
          <button
            onClick={() => setLanguage(language === "en" ? "te" : "en")}
            className="flex items-center gap-1.5 px-2 py-1.5 border border-[var(--border-color)] rounded bg-[var(--card-bg)] hover:bg-[var(--card-hover)] cursor-pointer text-[10px] md:text-xs font-mono text-[var(--fg-color)]"
            title="Switch Language"
          >
            <VscGlobe className="text-xs opacity-80" />
            <span>{language === "en" ? "EN" : "తె"}</span>
          </button>

          {/* Theme Dropdown Trigger */}
          <div className="relative">
            <button
              onClick={() => setIsThemeMenuOpen(!isThemeMenuOpen)}
              className="flex items-center gap-1.5 px-2 py-1.5 border border-[var(--border-color)] rounded bg-[var(--card-bg)] hover:bg-[var(--card-hover)] cursor-pointer text-[10px] md:text-xs font-mono text-[var(--fg-color)]"
            >
              <VscSymbolColor className="text-xs opacity-80" />
              <span className="hidden sm:inline">{currentThemeLabel}</span>
            </button>

            {isThemeMenuOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={() => setIsThemeMenuOpen(false)} />
                <div className="absolute right-0 mt-2 w-32 border border-[var(--border-color)] bg-[var(--card-bg)] shadow-md rounded py-1 z-20 font-mono text-[10px] md:text-xs text-[var(--fg-color)]">
                  {(Object.keys(themeLabels) as ThemeType[]).map((t) => (
                    <button
                      key={t}
                      onClick={() => {
                        setTheme(t);
                        setIsThemeMenuOpen(false);
                      }}
                      className={`w-full px-2.5 py-1.5 text-left hover:bg-[var(--card-hover)] cursor-pointer transition-colors ${
                        theme === t ? "text-[var(--accent-color)] font-bold" : ""
                      }`}
                    >
                      {themeLabels[t]}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 border border-[var(--border-color)] rounded hover:bg-[var(--card-hover)] cursor-pointer text-[var(--fg-color)]"
          >
            {isMobileMenuOpen ? <VscClose className="text-base" /> : <VscMenu className="text-base" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-[var(--border-color)] bg-[var(--bg-color)] px-4 py-4 space-y-3 font-mono text-xs">
          {sections.map((sec) => (
            <button
              key={sec}
              onClick={() => handleNavClick(sec)}
              className={`w-full text-left py-2 capitalize transition-colors cursor-pointer ${
                activeSection === sec
                  ? "text-[var(--accent-color)] font-semibold"
                  : "opacity-75 hover:opacity-100 text-[var(--fg-color)]"
              }`}
            >
              {sec}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
