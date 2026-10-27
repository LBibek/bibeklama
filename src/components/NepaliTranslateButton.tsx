"use client";

import React, { useState, useEffect } from "react";
import { Languages, Loader2 } from "lucide-react";

declare global {
  interface Window {
    google?: any;
    googleTranslateElementInit?: () => void;
  }
}

export function NepaliTranslateButton({
  className = "",
  variant = "pill",
}: {
  className?: string;
  variant?: "pill" | "compact" | "footer";
}) {
  const [isNepali, setIsNepali] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // 1. Check existing cookie or localStorage
    const hasNepaliCookie = document.cookie.includes("googtrans=/en/ne");
    const preferredLang = typeof window !== "undefined" ? localStorage.getItem("preferred_lang") : null;
    if (hasNepaliCookie || preferredLang === "ne") {
      setIsNepali(true);
    }

    // 2. Setup Google Translate script if not already initialized
    if (typeof window !== "undefined" && !document.getElementById("google-translate-script")) {
      window.googleTranslateElementInit = () => {
        if (window.google?.translate?.TranslateElement) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "ne,en",
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
              autoDisplay: false,
            },
            "google_translate_element"
          );
        }
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const setCookie = (value: string) => {
    const hostname = window.location.hostname;
    document.cookie = `googtrans=${value}; path=/;`;
    if (hostname !== "localhost") {
      document.cookie = `googtrans=${value}; path=/; domain=${hostname};`;
      document.cookie = `googtrans=${value}; path=/; domain=.${hostname};`;
    }
  };

  const clearCookie = () => {
    const hostname = window.location.hostname;
    const past = "expires=Thu, 01 Jan 1970 00:00:00 UTC;";
    document.cookie = `googtrans=/en/en; path=/;`;
    document.cookie = `googtrans=; ${past} path=/;`;
    if (hostname !== "localhost") {
      document.cookie = `googtrans=; ${past} path=/; domain=${hostname};`;
      document.cookie = `googtrans=; ${past} path=/; domain=.${hostname};`;
    }
  };

  const toggleLanguage = () => {
    setIsLoading(true);

    if (!isNepali) {
      // Switch to Nepali
      setCookie("/en/ne");
      localStorage.setItem("preferred_lang", "ne");

      const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (select) {
        select.value = "ne";
        select.dispatchEvent(new Event("change"));
        setTimeout(() => {
          setIsNepali(true);
          setIsLoading(false);
        }, 500);
      } else {
        // If Google Translate element is still initializing, wait briefly and trigger or reload
        setTimeout(() => {
          const retrySelect = document.querySelector<HTMLSelectElement>(".goog-te-combo");
          if (retrySelect) {
            retrySelect.value = "ne";
            retrySelect.dispatchEvent(new Event("change"));
            setIsNepali(true);
            setIsLoading(false);
          } else {
            window.location.reload();
          }
        }, 500);
      }
    } else {
      // Revert to English
      clearCookie();
      localStorage.setItem("preferred_lang", "en");

      const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
      if (select) {
        select.value = "en";
        select.dispatchEvent(new Event("change"));
      }

      // Reloading ensures complete reset of Google Translate DOM modifications
      setTimeout(() => {
        window.location.reload();
      }, 200);
    }
  };

  if (!mounted) {
    return (
      <button
        type="button"
        disabled
        className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 bg-neutral-900/60 text-neutral-400 opacity-60 ${className}`}
      >
        <span className="text-xs">🇳🇵</span>
        <span className="hidden sm:inline">नेपाली</span>
      </button>
    );
  }

  if (variant === "footer") {
    return (
      <button
        type="button"
        onClick={toggleLanguage}
        disabled={isLoading}
        title={
          isNepali
            ? "मूल अङ्ग्रेजीमा फर्कनुहोस् (Switch to English)"
            : "वेबसाइटलाई नेपालीमा अनुवाद गर्नुहोस् (Translate to Nepali)"
        }
        className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
          isNepali
            ? "bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/20"
            : "bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-cyan-400 border border-white/5"
        } ${className}`}
      >
        {isLoading ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400" />
        ) : (
          <Languages className="w-3.5 h-3.5" />
        )}
        <span>{isNepali ? "🇬🇧 English मा फर्कनुहोस्" : "🇳🇵 नेपालीमा अनुवाद"}</span>
      </button>
    );
  }

  return (
    <>
      {/* Hidden container for Google Translate element */}
      <div id="google_translate_element" className="hidden" aria-hidden="true" />

      <button
        type="button"
        onClick={toggleLanguage}
        disabled={isLoading}
        title={
          isNepali
            ? "मूल अङ्ग्रेजीमा फर्कनुहोस् (Switch back to English)"
            : "वेबसाइटलाई नेपालीमा अनुवाद गर्नुहोस् (Translate to Nepali)"
        }
        aria-label={
          isNepali ? "Switch back to English" : "Translate website to Nepali"
        }
        className={`group relative inline-flex items-center gap-1.5 px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 active:scale-95 ${
          isNepali
            ? "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 hover:from-emerald-500/30 hover:to-teal-500/30 text-emerald-300 border border-emerald-500/40 shadow-sm shadow-emerald-500/10"
            : "bg-neutral-900/90 hover:bg-neutral-800/90 text-neutral-200 border border-white/15 hover:border-cyan-400/40 shadow-sm shadow-black/40 hover:text-cyan-300"
        } ${className}`}
      >
        {isLoading ? (
          <Loader2 className="w-3.5 h-3.5 animate-spin text-cyan-400" />
        ) : (
          <Languages
            className={`w-3.5 h-3.5 transition-transform duration-300 group-hover:scale-110 ${
              isNepali ? "text-emerald-400" : "text-cyan-400"
            }`}
          />
        )}

        <span className="flex items-center gap-1">
          <span className="text-xs" role="img" aria-label={isNepali ? "UK Flag" : "Nepal Flag"}>
            {isNepali ? "🇬🇧" : "🇳🇵"}
          </span>
          <span className="tracking-tight text-[11px] sm:text-xs">
            {isNepali ? "English" : "नेपाली"}
          </span>
        </span>
      </button>
    </>
  );
}
