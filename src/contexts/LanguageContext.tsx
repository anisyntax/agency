"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type Lang = "fr" | "darija";

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "fr", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("fr");
  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div dir={lang === "darija" ? "rtl" : "ltr"}>{children}</div>
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}
