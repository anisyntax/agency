"use client";
import { useState } from "react";
import Image from "next/image";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/translations";

export default function Navbar() {
  const { lang, setLang } = useLang();
  const tx = t[lang];
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#services", label: tx.nav_services },
    { href: "#resultats", label: tx.nav_results },
    { href: "#contact", label: tx.nav_contact },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#F5F0E8]" style={{ borderBottom: "3px solid #1A1A1A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo.jpeg"
            alt="Service Payant Agency"
            width={52}
            height={52}
            className="rounded-full object-cover"
            style={{ border: "2px solid #C9A84C", boxShadow: "0 0 0 1px #1A1A1A" }}
            priority
          />
        </a>

        {/* Desktop links + lang toggle */}
        <div className="hidden md:flex items-center gap-5">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-bold text-[#1A1A1A] hover:underline decoration-wavy underline-offset-4 text-sm"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {l.label}
            </a>
          ))}

          {/* Language toggle */}
          <div className="flex items-center sketch-card overflow-hidden" style={{ padding: 0 }}>
            <button
              onClick={() => setLang("fr")}
              className="px-3 py-1.5 text-sm font-bold transition-colors"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: lang === "fr" ? "#2D6EFF" : "transparent",
                color: lang === "fr" ? "white" : "#1A1A1A",
                borderRight: "3px solid #1A1A1A",
              }}
            >
              FR
            </button>
            <button
              onClick={() => setLang("darija")}
              className="px-3 py-1.5 text-sm font-bold transition-colors"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: lang === "darija" ? "#FF2D78" : "transparent",
                color: lang === "darija" ? "white" : "#1A1A1A",
              }}
            >
              دارجة
            </button>
          </div>

          <a href="#contact" className="sketch-btn px-5 py-2 bg-[#FF2D78] text-white text-sm">
            {tx.nav_cta}
          </a>
        </div>

        {/* Mobile: lang toggle + hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <div className="flex items-center sketch-card overflow-hidden" style={{ padding: 0 }}>
            <button
              onClick={() => setLang("fr")}
              className="px-2.5 py-1 text-xs font-bold transition-colors"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: lang === "fr" ? "#2D6EFF" : "transparent",
                color: lang === "fr" ? "white" : "#1A1A1A",
                borderRight: "3px solid #1A1A1A",
              }}
            >
              FR
            </button>
            <button
              onClick={() => setLang("darija")}
              className="px-2.5 py-1 text-xs font-bold transition-colors"
              style={{
                fontFamily: "'Space Grotesk', sans-serif",
                background: lang === "darija" ? "#FF2D78" : "transparent",
                color: lang === "darija" ? "white" : "#1A1A1A",
              }}
            >
              دارجة
            </button>
          </div>
          <button
            className="flex flex-col gap-1.5 p-1"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            <span className="block w-6 bg-[#1A1A1A]" style={{ height: 3 }} />
            <span className="block w-6 bg-[#1A1A1A]" style={{ height: 3 }} />
            <span className="block w-6 bg-[#1A1A1A]" style={{ height: 3 }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-4 px-6 pb-6 pt-3" style={{ borderTop: "3px solid #1A1A1A" }}>
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-bold text-xl text-[#1A1A1A]"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="sketch-btn px-5 py-3 bg-[#FF2D78] text-white text-center"
            onClick={() => setOpen(false)}
          >
            {tx.nav_cta}
          </a>
        </div>
      )}
    </nav>
  );
}
