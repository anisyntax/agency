"use client";
import { useEffect, useRef, useState } from "react";
import { useLang } from "@/contexts/LanguageContext";
import { t } from "@/translations";

function useCountUp(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, start]);
  return count;
}

export default function Stats() {
  const { lang } = useLang();
  const tx = t[lang];
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const stats = [
    { value: 250, prefix: "+", suffix: "", label: tx.stats_label1, color: "#FF2D78", rotate: "-2deg" },
    { value: 300, prefix: "+", suffix: "%", label: tx.stats_label2, color: "#2D6EFF", rotate: "1deg" },
    { value: 25, prefix: "+", suffix: "K", label: tx.stats_label3, color: "#B8FF2E", rotate: "-1deg" },
    { value: 500, prefix: "+", suffix: "K", label: tx.stats_label4, color: "#8B2DFF", rotate: "1.5deg" },
  ];

  return (
    <section id="resultats" className="py-20 px-4 bg-[#1A1A1A]" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="font-caveat text-3xl font-bold" style={{ fontFamily: "'Caveat', cursive", color: "#FFE500" }}>
            {tx.stats_eyebrow}
          </span>
          <h2 className="font-syne text-4xl sm:text-5xl font-extrabold text-white mt-2" style={{ fontFamily: "'Syne', sans-serif" }}>
            {tx.stats_title}{" "}
            <span style={{ color: "#FF2D78" }}>{tx.stats_accent}</span>
          </h2>
          <p className="text-gray-400 mt-3 text-lg" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {tx.stats_sub}
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s) => (
            <StatCard key={s.label} stat={s} visible={visible} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat, visible }: { stat: { value: number; prefix: string; suffix: string; label: string; color: string; rotate: string }; visible: boolean }) {
  const count = useCountUp(stat.value, 2000, visible);
  return (
    <div className="sketch-card p-6 text-center" style={{ background: stat.color, transform: `rotate(${stat.rotate})` }}>
      <div className="text-4xl sm:text-5xl font-extrabold text-white" style={{ fontFamily: "'Syne', sans-serif" }}>
        {stat.prefix}{count}{stat.suffix}
      </div>
      <div className="text-white font-bold mt-2 text-sm" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
        {stat.label}
      </div>
    </div>
  );
}
