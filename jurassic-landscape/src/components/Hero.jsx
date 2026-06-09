import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-end px-12 pb-20 relative overflow-hidden">
      {/* Background layers */}
      <div
        className="absolute inset-0"
        style={{
          background: `
          radial-gradient(ellipse at 70% 40%, rgba(45,74,45,0.35) 0%, transparent 60%),
          radial-gradient(ellipse at 20% 80%, rgba(26,46,26,0.5) 0%, transparent 50%),
          linear-gradient(160deg, #080c08 0%, #0d1a0d 40%, #111e11 60%, #080c08 100%)`,
        }}
      />

      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
          repeating-linear-gradient(0deg, transparent, transparent 80px, rgba(74,124,74,0.03) 80px, rgba(74,124,74,0.03) 81px),
          repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(74,124,74,0.03) 80px, rgba(74,124,74,0.03) 81px)`,
        }}
      />

      {/* Decorative leaf shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[
          {
            w: 300,
            h: 500,
            top: -100,
            right: "5%",
            rot: -20,
            delay: 0,
            opacity: 0.08,
          },
          {
            w: 200,
            h: 350,
            top: 50,
            right: "18%",
            rot: -35,
            delay: -2,
            opacity: 0.12,
          },
          {
            w: 400,
            h: 600,
            top: -200,
            right: "-5%",
            rot: -10,
            delay: -4,
            opacity: 0.15,
          },
          {
            w: 180,
            h: 300,
            top: 200,
            right: "28%",
            rot: -50,
            delay: -1,
            opacity: 0.08,
          },
        ].map((leaf, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: leaf.w,
              height: leaf.h,
              top: leaf.top,
              right: leaf.right,
              borderRadius: "0 80% 0 80%",
              background: `rgba(74,124,74,${leaf.opacity})`,
              transform: `rotate(${leaf.rot}deg)`,
              animation: `sway ${8 + i}s ease-in-out infinite`,
              animationDelay: `${leaf.delay}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div
          className="text-xs tracking-widest uppercase mb-4"
          style={{
            color: "var(--gold)",
            letterSpacing: "0.3em",
            animation: "fadeUp 0.8s forwards 0.3s",
            opacity: 0,
          }}
        >
          Landscape Design &amp; Installation · Est. 2005
        </div>

        <h1
          className="font-display leading-none text-white"
          style={{
            fontSize: "clamp(80px, 14vw, 180px)",
            lineHeight: 0.9,
            animation: "fadeUp 0.8s forwards 0.5s",
            opacity: 0,
          }}
        >
          WILD
          <br />
          <span style={{ color: "var(--leaf)" }}>BEAUTY</span>
          <span style={{ color: "var(--gold)" }}>.</span>
        </h1>

        <p
          className="font-serif italic mt-6 max-w-lg"
          style={{
            fontSize: "clamp(16px, 2vw, 22px)",
            lineHeight: 1.7,
            color: "rgba(240,234,216,0.65)",
            animation: "fadeUp 0.8s forwards 0.7s",
            opacity: 0,
          }}
        >
          We sculpt living spaces that command attention — where nature's raw
          power meets precise design craft.
        </p>

        <div
          className="flex gap-5 items-center mt-10"
          style={{
            animation: "fadeUp 0.8s forwards 0.9s",
            opacity: 0,
          }}
        >
          <Link to="/portfolio" className="btn-primary">
            View Our Work
          </Link>
          <a href="#services" className="btn-ghost">
            Explore Services <span>↓</span>
          </a>
        </div>
      </div>

      {/* Stats bar */}
      <div
        className="absolute bottom-20 right-12 flex flex-col gap-6 z-10"
        style={{
          animation: "fadeIn 1s forwards 1.2s",
          opacity: 0,
        }}
      >
        {[
          { num: "500+", label: "Projects Completed" },
          { num: "20", label: "Years Experience" },
          { num: "98%", label: "Client Satisfaction" },
        ].map(({ num, label }) => (
          <div key={label} className="text-right">
            <div
              className="font-display text-4xl"
              style={{ color: "var(--gold)", lineHeight: 1 }}
            >
              {num}
            </div>
            <div
              className="text-xs tracking-widest uppercase mt-1"
              style={{ color: "rgba(240,234,216,0.45)" }}
            >
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Vertical line accent */}
      <div
        className="absolute bottom-0 left-12 w-px h-28 z-10"
        style={{
          background:
            "linear-gradient(to bottom, rgba(200,168,75,0.6), transparent)",
          animation: "fadeIn 1s forwards 1.4s",
          opacity: 0,
        }}
      />

      <style>{`
        @keyframes fadeUp  { to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeIn  { to { opacity: 1; } }
        @keyframes sway    { 0%,100% { transform: rotate(-20deg); } 50% { transform: rotate(-23deg); } }
      `}</style>
    </section>
  );
}
