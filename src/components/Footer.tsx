import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] py-10 px-4" style={{ borderTop: "3px solid #FFE500" }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a href="#">
          <Image
            src="/logo.jpeg"
            alt="Service Payant Agency"
            width={64}
            height={64}
            className="rounded-full object-cover"
            style={{ border: "2px solid #C9A84C" }}
          />
        </a>

        {/* Tagline */}
        <p
          className="text-gray-400 text-sm text-center"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          © 2024 Service Payant Agency — Notre Mission, Votre Réussite !
        </p>

        {/* Social icons */}
        <div className="flex gap-4">
          {[
            { href: "https://facebook.com/servicepayant", label: "f", color: "#1877F2" },
            { href: "https://instagram.com/servicepayant", label: "ig", color: "#E1306C" },
            { href: "https://wa.me/212698668360", label: "wa", color: "#25D366" },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center text-white font-bold text-xs uppercase sketch-card"
              style={{ background: s.color, fontFamily: "'Space Grotesk', sans-serif" }}
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
