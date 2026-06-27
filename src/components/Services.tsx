"use client";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/translations";

export default function Services() {
  const { lang } = useLang();
  const tx = t[lang];

  const services = [
    { color: "#FF2D78", icon: "📊", title: tx.s1_title, desc: tx.s1_desc, rotate: "-1deg" },
    { color: "#2D6EFF", icon: "📣", title: tx.s2_title, desc: tx.s2_desc, rotate: "1.5deg" },
    { color: "#FF7A00", icon: "🎯", title: tx.s3_title, desc: tx.s3_desc, rotate: "-0.5deg" },
    { color: "#B8FF2E", icon: "🌐", title: tx.s4_title, desc: tx.s4_desc, rotate: "2deg" },
    { color: "#8B2DFF", icon: "✏️", title: tx.s5_title, desc: tx.s5_desc, rotate: "-1.5deg" },
    { color: "#00D4AA", icon: "🎬", title: tx.s6_title, desc: tx.s6_desc, rotate: "1deg" },
    { color: "#FFE500", icon: "📱", title: tx.s7_title, desc: tx.s7_desc, rotate: "-2deg" },
    { color: "#FF3B30", icon: "📈", title: tx.s8_title, desc: tx.s8_desc, rotate: "0.5deg" },
    { color: "#FF7A00", icon: "🎞️", title: tx.s9_title, desc: tx.s9_desc, rotate: "-1deg" },
    { color: "#2D6EFF", icon: "📸", title: tx.s10_title, desc: tx.s10_desc, rotate: "1.5deg" },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-[#F5F0E8]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
          <div>
            <span className="font-caveat text-2xl font-bold" style={{ fontFamily: "'Caveat', cursive", color: "#FF2D78" }}>
              {tx.services_eyebrow}
            </span>
            <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] mt-1" style={{ fontFamily: "'Syne', sans-serif" }}>
              {tx.services_title}
            </h2>
          </div>
          <p className="text-[#1A1A1A] max-w-sm text-base" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {tx.services_sub}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="sketch-card p-6 flex flex-col gap-3 cursor-default"
              style={{ background: s.color, transform: `rotate(${s.rotate})` }}
            >
              <span className="text-4xl">{s.icon}</span>
              <h3 className="font-bold text-lg text-[#1A1A1A] leading-tight" style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700 }}>
                {s.title}
              </h3>
              <p className="text-[#1A1A1A] text-sm leading-relaxed opacity-80" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
