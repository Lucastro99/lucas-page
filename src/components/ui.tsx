import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/* ═══════════════════════════════════════════════
   CUSTOM CURSOR
   ═══════════════════════════════════════════════ */
export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const addHover = () => cursor.classList.add("hovering");
    const removeHover = () => cursor.classList.remove("hovering");

    window.addEventListener("mousemove", moveCursor);
    document.querySelectorAll("a, button, .hoverable").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.querySelectorAll("a, button, .hoverable").forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return <div ref={cursorRef} className="custom-cursor hidden md:block" />;
}

/* ═══════════════════════════════════════════════
   SCROLL PROGRESS BAR
   ═══════════════════════════════════════════════ */
export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!barRef.current) return;

    // Wait a tick so ScrollTrigger pins are calculated (they add height to the page)
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
      gsap.to(barRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          start: 0,
          end: () => ScrollTrigger.maxScroll(window),
          scrub: 0.3,
        },
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={barRef}
      className="fixed top-0 left-0 right-0 h-[2px] scroll-progress z-[100]"
      style={{ transform: "scaleX(0)" }}
    />
  );
}

/* ═══════════════════════════════════════════════
   SKILL BADGE
   ═══════════════════════════════════════════════ */
export function SkillBadge({
  name,
  level,
}: {
  name: string;
  level: "expert" | "advanced" | "intermediate";
}) {
  const colors = {
    expert:
      "border-primary/40 text-primary bg-primary/8 skill-glow",
    advanced:
      "border-violet-400/25 text-violet-300/80 bg-violet-500/5 skill-glow",
    intermediate:
      "border-white/8 text-white/40 bg-white/3 skill-glow",
  };
  const dots = { expert: 3, advanced: 2, intermediate: 1 };

  return (
    <span
      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs font-medium border cursor-default transition-all duration-500 ${colors[level]}`}
    >
      {name}
      <span className="flex gap-0.5 ml-0.5">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className={`w-1 h-1 rounded-full transition-colors ${
              i < dots[level] ? "bg-current" : "bg-current/20"
            }`}
          />
        ))}
      </span>
    </span>
  );
}
