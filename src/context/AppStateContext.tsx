"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { portfolioData } from "../data/portfolio";

export type ThemeType = "theme-dark" | "theme-light" | "theme-sepia" | "theme-green";
export type LangType = "en" | "te";

export interface ChatMessage {
  sender: "user" | "assistant";
  text: string;
}

interface AppStateContextProps {
  theme: ThemeType;
  setTheme: (theme: ThemeType) => void;
  language: LangType;
  setLanguage: (lang: LangType) => void;
  chatHistory: ChatMessage[];
  sendChatQuery: (query: string) => void;
}

const AppStateContext = createContext<AppStateContextProps | undefined>(undefined);

export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeType>("theme-dark");
  const [language, setLanguageState] = useState<LangType>("en");

  // Chat/Helper interface
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>([
    {
      sender: "assistant",
      text: "👋 Hello! I am Akhil's website assistant. Ask me to navigate to any section, download the resume, or toggle themes!"
    }
  ]);

  // Set initial theme in document body
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const setTheme = (newTheme: ThemeType) => {
    setThemeState(newTheme);
  };

  const setLanguage = (lang: LangType) => {
    setLanguageState(lang);
  };

  // Helper smooth scroller
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      return true;
    }
    return false;
  };

  // Modern Navigation Helper command parser
  const sendChatQuery = (query: string) => {
    const userMsg = query.trim().toLowerCase();
    const newHistory = [...chatHistory, { sender: "user" as const, text: query }];
    setChatHistory(newHistory);

    let assistantResponse = "";

    if (userMsg.includes("help")) {
      assistantResponse = "I can help you navigate. Try typing:\n- 'go to experience'\n- 'go to skills'\n- 'go to resume'\n- 'go to contact'\n- 'theme light'\n- 'theme dark'\n- 'download resume'\n- 'telugu' or 'english'";
    } else if (userMsg.includes("experience") || userMsg.includes("work")) {
      const scrolled = scrollToSection("experience");
      assistantResponse = scrolled ? "Scrolling to Experience..." : "Experience section not found.";
    } else if (userMsg.includes("skill") || userMsg.includes("tech")) {
      const scrolled = scrollToSection("skills");
      assistantResponse = scrolled ? "Scrolling to Skills..." : "Skills section not found.";
    } else if (userMsg.includes("resume") || userMsg.includes("cv")) {
      const scrolled = scrollToSection("resume");
      assistantResponse = scrolled ? "Scrolling to Resume section..." : "Resume section not found.";
    } else if (userMsg.includes("contact") || userMsg.includes("email") || userMsg.includes("message")) {
      const scrolled = scrollToSection("contact");
      assistantResponse = scrolled ? "Scrolling to Contact..." : "Contact section not found.";
    } else if (userMsg.includes("home") || userMsg.includes("hero") || userMsg.includes("top")) {
      const scrolled = scrollToSection("home");
      assistantResponse = scrolled ? "Scrolling to Top..." : "Home section not found.";
    } else if (userMsg.includes("download")) {
      assistantResponse = "Opening Google Drive resume link...";
      window.open("https://drive.google.com/file/d/1jwx2O2Ui3nIVV9twaE9YZBnFamJFKzcX/view?usp=drive_link", "_blank");
    } else if (userMsg.includes("github")) {
      assistantResponse = "Opening Akhil's GitHub...";
      window.open(portfolioData.socials.github, "_blank");
    } else if (userMsg.includes("linkedin")) {
      assistantResponse = "Opening Akhil's LinkedIn...";
      window.open(portfolioData.socials.linkedin, "_blank");
    } else if (userMsg.includes("telugu") || userMsg.includes("te")) {
      setLanguage("te");
      assistantResponse = "భాషను తెలుగులోకి మార్చాము.";
    } else if (userMsg.includes("english") || userMsg.includes("en")) {
      setLanguage("en");
      assistantResponse = "Switched language to English.";
    } else if (userMsg.includes("theme")) {
      if (userMsg.includes("dark")) {
        setTheme("theme-dark");
        assistantResponse = "Switched to Dark Theme.";
      } else if (userMsg.includes("light")) {
        setTheme("theme-light");
        assistantResponse = "Switched to Light Theme.";
      } else if (userMsg.includes("sepia")) {
        setTheme("theme-sepia");
        assistantResponse = "Switched to Sepia Theme.";
      } else if (userMsg.includes("green") || userMsg.includes("terminal")) {
        setTheme("theme-green");
        assistantResponse = "Switched to Retro Green Theme.";
      } else {
        assistantResponse = "Available themes: dark, light, sepia, green.";
      }
    } else {
      assistantResponse = "I can guide you. Try: 'go to skills', 'theme light', 'download resume', or 'go to contact'.";
    }

    setTimeout(() => {
      setChatHistory((prev) => [...prev, { sender: "assistant", text: assistantResponse }]);
    }, 450);
  };

  return (
    <AppStateContext.Provider
      value={{
        theme,
        setTheme,
        language,
        setLanguage,
        chatHistory,
        sendChatQuery
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within AppStateProvider");
  }
  return context;
};
