"use client";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/translations";

export default function SocialAds() {
  const { lang } = useLang();
  const tx = t[lang];

  const socialMetrics = [
    { color: "#FF2D78", icon: "👥", value: "+25K", label: tx.sm_m1 },
    { color: "#2D6EFF", icon: "❤️", value: "+135%", label: tx.sm_m2 },
    { color: "#B8FF2E", icon: "📡", value: "+500K", label: tx.sm_m3 },
    { color: "#8B2DFF", icon: "👁", value: "1.2M", label: tx.sm_m4 },
  ];

  const adsMetrics = [
    { color: "#FF7A00", value: "+320%", label: tx.ads_m1 },
    { color: "#2D6EFF", value: "+250K", label: tx.ads_m2 },
    { color: "#FF2D78", value: "+18.5K", label: tx.ads_m3 },
    { color: "#00D4AA", value: "-40%", label: tx.ads_m4 },
  ];

  const smFeatures = [
    { icon: "🗺️", text: tx.sm_f1 },
    { icon: "✍️", text: tx.sm_f2 },
    { icon: "📅", text: tx.sm_f3 },
    { icon: "📊", text: tx.sm_f4 },
  ];

  const adsFeatures = [
    { icon: "🎯", text: tx.ads_f1 },
    { icon: "📈", text: tx.ads_f2 },
    { icon: "💵", text: tx.ads_f3 },
    { icon: "🔁", text: tx.ads_f4 },
  ];

  return (
    <>
      {/* Social Media */}
      <section className="py-20 px-4 bg-[#F5F0E8]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span
                className="inline-block sketch-card bg-[#8B2DFF] text-white px-4 py-1 text-sm font-bold mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif", transform: "rotate(-1deg)" }}
              >
                {tx.sm_badge}
              </span>
              <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-[#1A1A1A] leading-tight mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                {tx.sm_title1}{" "}
                <span style={{ color: "#8B2DFF" }}>{tx.sm_title2}</span>{" "}
                {tx.sm_title3}
              </h2>
              <p className="text-[#1A1A1A] opacity-70 text-lg mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {tx.sm_sub}
              </p>
              <div className="flex flex-col gap-3">
                {smFeatures.map((f) => (
                  <div key={f.text} className="flex items-start gap-3">
                    <span className="text-2xl">{f.icon}</span>
                    <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-[#1A1A1A]">{f.text}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 sketch-card bg-[#8B2DFF] p-5 inline-block" style={{ transform: "rotate(-0.5deg)" }}>
                <p className="text-white font-bold text-lg" style={{ fontFamily: "'Syne', sans-serif" }}>
                  {tx.sm_mission}{" "}
                  <span className="text-[#FFE500]">{tx.sm_mission2}</span>
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              {socialMetrics.map((m, i) => (
                <div
                  key={m.label}
                  className="sketch-card p-6 text-center"
                  style={{ background: m.color, transform: `rotate(${i % 2 === 0 ? "1.5deg" : "-1deg"})` }}
                >
                  <div className="text-3xl mb-2">{m.icon}</div>
                  <div className="text-3xl font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>{m.value}</div>
                  <div className="text-white font-bold text-sm mt-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{m.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Ads */}
      <section className="py-20 px-4 bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="grid grid-cols-2 gap-5">
              {adsMetrics.map((m, i) => (
                <div
                  key={m.label}
                  className="sketch-card p-6 text-center"
                  style={{ background: m.color, transform: `rotate(${i % 2 === 0 ? "-1.5deg" : "1deg"})` }}
                >
                  <div className="text-3xl font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>{m.value}</div>
                  <div className="text-white font-bold text-sm mt-1" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>{m.label}</div>
                </div>
              ))}
            </div>
            <div>
              <span
                className="inline-block sketch-card bg-[#FF7A00] text-white px-4 py-1 text-sm font-bold mb-6"
                style={{ fontFamily: "'Space Grotesk', sans-serif", transform: "rotate(1deg)" }}
              >
                {tx.ads_badge}
              </span>
              <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-4" style={{ fontFamily: "'Syne', sans-serif" }}>
                {tx.ads_title1}{" "}
                <span style={{ color: "#FF7A00" }}>{tx.ads_title2}</span>{" "}
                {tx.ads_title3}
              </h2>
              <p className="text-gray-400 text-lg mb-8" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                {tx.ads_sub}
              </p>
              <div className="flex flex-col gap-3">
                {adsFeatures.map((f) => (
                  <div key={f.text} className="flex items-start gap-3">
                    <span className="text-2xl">{f.icon}</span>
                    <p style={{ fontFamily: "'DM Sans', sans-serif" }} className="text-gray-300">{f.text}</p>
                  </div>
                ))}
              </div>
              <a href="#contact" className="sketch-btn inline-block mt-8 px-7 py-4 bg-[#FF7A00] text-white text-lg">
                {tx.ads_cta}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
