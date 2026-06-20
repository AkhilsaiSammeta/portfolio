"use client";

import React, { useState, useRef, useEffect } from "react";
import { useAppState } from "../context/AppStateContext";
import { VscCommentDiscussion, VscClose, VscSend } from "react-icons/vsc";

export const AINavigator: React.FC = () => {
  const { chatHistory, sendChatQuery } = useAppState();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatHistory, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    sendChatQuery(query);
    setQuery("");
  };

  const handleQuickAction = (actionText: string) => {
    sendChatQuery(actionText);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-mono select-none text-xs text-[var(--fg-color)]">
      
      {/* Floating Assist Panel */}
      {isOpen && (
        <div className="w-80 max-w-[calc(100vw-2rem)] border border-[var(--border-color)] bg-[var(--card-bg)] shadow-xl rounded-lg overflow-hidden flex flex-col mb-3 theme-transition">
          
          {/* Header */}
          <div className="px-4 py-3 border-b border-[var(--border-color)] flex items-center justify-between bg-[var(--card-hover)]">
            <span className="font-bold tracking-tight">Assistant</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-[var(--border-color)] rounded cursor-pointer"
            >
              <VscClose className="text-base" />
            </button>
          </div>

          {/* Chat message logs */}
          <div className="flex-1 p-4 max-h-48 overflow-y-auto space-y-3 scrollbar-thin">
            {chatHistory.map((msg, i) => (
              <div 
                key={i} 
                className={`p-2 rounded text-[10px] md:text-[11px] leading-relaxed max-w-[85%] ${
                  msg.sender === "user"
                    ? "bg-[var(--accent-color)] text-[var(--bg-color)] ml-auto"
                    : "bg-[var(--card-hover)] border border-[var(--border-color)]"
                }`}
              >
                <p className="whitespace-pre-line">{msg.text}</p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Shortcuts Grid */}
          <div className="px-4 pb-2 pt-1 border-t border-[var(--border-color)]/50">
            <span className="text-[9px] opacity-50 block mb-1">Quick Actions</span>
            <div className="grid grid-cols-2 gap-1 text-[9px] md:text-[10px]">
              <button 
                onClick={() => handleQuickAction("go to experience")}
                className="py-1 border border-[var(--border-color)] rounded text-center bg-[var(--card-hover)] hover:border-[var(--accent-color)] cursor-pointer text-[var(--fg-color)]"
              >
                🗺️ Go to Experience
              </button>
              <button 
                onClick={() => handleQuickAction("go to skills")}
                className="py-1 border border-[var(--border-color)] rounded text-center bg-[var(--card-hover)] hover:border-[var(--accent-color)] cursor-pointer text-[var(--fg-color)]"
              >
                🛠️ Go to Skills
              </button>
              <button 
                onClick={() => handleQuickAction("go to resume")}
                className="py-1 border border-[var(--border-color)] rounded text-center bg-[var(--card-hover)] hover:border-[var(--accent-color)] cursor-pointer text-[var(--fg-color)]"
              >
                📄 Go to Resume
              </button>
              <button 
                onClick={() => handleQuickAction("download resume")}
                className="py-1 border border-[var(--border-color)] rounded text-center bg-[var(--card-hover)] hover:border-[var(--accent-color)] cursor-pointer text-[var(--fg-color)]"
              >
                📥 Download Resume
              </button>
              <button 
                onClick={() => handleQuickAction("theme light")}
                className="py-1 border border-[var(--border-color)] rounded text-center bg-[var(--card-hover)] hover:border-[var(--accent-color)] cursor-pointer text-[var(--fg-color)]"
              >
                🎨 Light Theme
              </button>
              <button 
                onClick={() => handleQuickAction("theme dark")}
                className="py-1 border border-[var(--border-color)] rounded text-center bg-[var(--card-hover)] hover:border-[var(--accent-color)] cursor-pointer text-[var(--fg-color)]"
              >
                🎨 Dark Theme
              </button>
            </div>
          </div>

          {/* TextInput form */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-[var(--border-color)] flex gap-2">
            <input
              type="text"
              placeholder="Type a command (e.g. go to skills)..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-[var(--bg-color)] border border-[var(--border-color)] rounded px-2 py-1.5 outline-none text-[10px] md:text-[11px] focus:border-[var(--accent-color)] text-[var(--fg-color)]"
            />
            <button 
              type="submit" 
              className="p-1.5 border border-[var(--border-color)] bg-[var(--accent-color)] text-[var(--bg-color)] rounded hover:opacity-95 cursor-pointer flex items-center justify-center"
            >
              <VscSend />
            </button>
          </form>

        </div>
      )}

      {/* Floating Circular Bubble Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center w-10 h-10 border border-[var(--border-color)] bg-[var(--card-bg)] rounded-full hover:border-[var(--accent-color)] shadow-lg cursor-pointer hover:scale-105 active:scale-95 transition-all text-[var(--fg-color)]"
        title="Open Assistant"
      >
        {isOpen ? <VscClose className="text-lg" /> : <VscCommentDiscussion className="text-lg" />}
      </button>

    </div>
  );
};
