"use client";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/translations";

export default function Hero() {
  const { lang } = useLang();
  const tx = t[lang];

  return (
    <section className="relative overflow-hidden bg-[#F5F0E8] pt-16 pb-20 px-4">
      <div className="absolute top-10 right-10 w-64 h-64 rounded-full opacity-20 pointer-events-none" style={{ background: "#FF2D78" }} />
      <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-15 pointer-events-none" style={{ background: "#2D6EFF" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <span
              className="inline-block sketch-card bg-[#FFE500] px-4 py-1 text-sm font-bold mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif", transform: "rotate(-1deg)" }}
            >
              {tx.hero_badge}
            </span>
            <h1
              className="font-syne text-5xl sm:text-6xl font-extrabold leading-tight text-[#1A1A1A]"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              {tx.hero_title1}{" "}
              <span style={{ color: "#FF2D78" }}>{tx.hero_title2}</span>
              <br />
              {tx.hero_title3}
            </h1>
          </div>

          <div className="max-w-sm">
            <p className="text-lg text-[#1A1A1A] font-medium mb-6" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {tx.hero_sub}{" "}
              <span style={{ fontFamily: "'Caveat', cursive", color: "#2D6EFF", fontSize: "1.3rem", fontWeight: 700 }}>
                {tx.hero_sub_accent}
              </span>
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="sketch-btn px-6 py-3 bg-[#1A1A1A] text-white text-base">
                {tx.hero_btn1}
              </a>
              <a href="#services" className="sketch-btn px-6 py-3 bg-[#B8FF2E] text-[#1A1A1A] text-base">
                {tx.hero_btn2}
              </a>
            </div>
          </div>
        </div>

        {/* Cards row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { color: "#FF2D78", label: tx.hero_card1, icon: "🎯", rotate: "-1deg" },
            { color: "#2D6EFF", label: tx.hero_card2, icon: "⚡", rotate: "1.5deg" },
            { color: "#B8FF2E", label: tx.hero_card3, icon: "💰", rotate: "-1.5deg" },
            { color: "#8B2DFF", label: tx.hero_card4, icon: "📈", rotate: "1deg" },
          ].map((item) => (
            <div
              key={item.label}
              className="sketch-card p-5 flex flex-col items-start gap-2"
              style={{ background: item.color, transform: `rotate(${item.rotate})` }}
            >
              <span className="text-4xl">{item.icon}</span>
              <span className="text-white font-bold text-sm leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
