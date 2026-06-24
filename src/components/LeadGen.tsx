"use client";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/translations";

export default function LeadGen() {
  const { lang } = useLang();
  const tx = t[lang];

  const steps = [
    { color: "#FF2D78", icon: "🎯", title: tx.lead_step1, desc: tx.lead_step1_desc },
    { color: "#2D6EFF", icon: "🧲", title: tx.lead_step2, desc: tx.lead_step2_desc },
    { color: "#FF7A00", icon: "🔄", title: tx.lead_step3, desc: tx.lead_step3_desc },
    { color: "#00D4AA", icon: "🤝", title: tx.lead_step4, desc: tx.lead_step4_desc },
  ];

  const badges = [
    { color: "#B8FF2E", text: tx.lead_b1 },
    { color: "#FF2D78", text: tx.lead_b2 },
    { color: "#2D6EFF", text: tx.lead_b3 },
    { color: "#8B2DFF", text: tx.lead_b4 },
  ];

  return (
    <section className="py-20 px-4 bg-[#1A1A1A]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <span
              className="inline-block sketch-card bg-[#FF7A00] text-white px-4 py-1 text-sm font-bold mb-6"
              style={{ fontFamily: "'Space Grotesk', sans-serif", transform: "rotate(-1deg)" }}
            >
              {tx.lead_badge}
            </span>
            <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
              {tx.lead_title1}{" "}
              <span style={{ color: "#FF7A00" }}>{tx.lead_title2}</span>{" "}
              {tx.lead_title3}
            </h2>
            <p className="text-gray-400 text-lg mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
              {tx.lead_sub}
            </p>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {badges.map((b) => (
                <div
                  key={b.text}
                  className="sketch-card px-4 py-3 text-[#1A1A1A] font-bold text-sm text-center"
                  style={{ background: b.color, fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}
                >
                  {b.text}
                </div>
              ))}
            </div>
            <div className="sketch-card bg-[#FF7A00] px-6 py-4 inline-block" style={{ transform: "rotate(0.5deg)" }}>
              <p className="text-white font-extrabold text-xl" style={{ fontFamily: "'Syne', sans-serif" }}>
                {tx.lead_tagline}{" "}
                <span className="text-[#FFE500]">{tx.lead_tagline2}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="sketch-card p-5 flex items-center gap-4"
                style={{ background: s.color, transform: `rotate(${i % 2 === 0 ? "-1deg" : "1deg"})` }}
              >
                <span className="text-4xl">{s.icon}</span>
                <div>
                  <p className="text-white font-bold text-lg" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
                    {s.title}
                  </p>
                  <p className="text-white opacity-80 text-sm" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                    {s.desc}
                  </p>
                </div>
                <span className="ml-auto text-white font-bold text-2xl opacity-50" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
