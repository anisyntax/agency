"use client";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/translations";

export default function WhyUs() {
  const { lang } = useLang();
  const tx = t[lang];

  const pillars = [
    { icon: "🎯", color: "#FF2D78", title: tx.why_title1, desc: tx.why_desc1, rotate: "1deg" },
    { icon: "👁", color: "#2D6EFF", title: tx.why_title2, desc: tx.why_desc2, rotate: "-1.5deg" },
    { icon: "⚙️", color: "#B8FF2E", title: tx.why_title3, desc: tx.why_desc3, rotate: "2deg" },
    { icon: "✅", color: "#8B2DFF", title: tx.why_title4, desc: tx.why_desc4, rotate: "-0.5deg" },
  ];

  return (
    <section className="py-20 px-4 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-[#1A1A1A]" style={{ fontFamily: "'Syne', sans-serif" }}>
            <span className="inline-block px-2" style={{ background: "#FFE500", transform: "rotate(-1deg)" }}>
              {tx.why_banner}
            </span>{" "}
            {tx.why_banner2}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div key={p.title} className="sketch-card p-6 bg-white flex flex-col gap-3" style={{ transform: `rotate(${p.rotate})` }}>
              <div className="w-14 h-14 flex items-center justify-center text-3xl sketch-card" style={{ background: p.color }}>
                {p.icon}
              </div>
              <h3 className="font-bold text-lg text-[#1A1A1A]" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
                {p.title}
              </h3>
              <p className="text-sm text-[#1A1A1A] opacity-70 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 sketch-card bg-[#1A1A1A] p-6 sm:p-10 text-center" style={{ transform: "rotate(-0.5deg)" }}>
          <p className="font-syne text-2xl sm:text-4xl font-extrabold text-white leading-snug" style={{ fontFamily: "'Syne', sans-serif" }}>
            {tx.why_banner}{" "}
            <span style={{ color: "#FF2D78" }}>{tx.why_banner2}</span>
          </p>
          <a href="#contact" className="sketch-btn inline-block mt-6 px-8 py-4 bg-[#FFE500] text-[#1A1A1A] text-lg">
            {tx.why_cta}
          </a>
        </div>
      </div>
    </section>
  );
}
