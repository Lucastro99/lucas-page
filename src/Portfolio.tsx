import React, { useEffect, useRef, useState } from "react";
import {
  Smartphone,
  Code,
  MessageCircle,
  Zap,
  ArrowUpRight,
  ChevronDown,
  Target,
  TrendingUp,
  Layers,
  ArrowRight,
  GraduationCap,
  Briefcase,
  Award,
  Terminal,
  Database,
  Server,
  Cpu,
  Brain,
  Linkedin,
  Puzzle,
  Plug,
  FileText,
  Users,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import { CustomCursor, ScrollProgress, SkillBadge } from "./components/ui";
import { content, LANGS, type Content, type Lang } from "./content";

gsap.registerPlugin(ScrollTrigger);

const WHATSAPP = "https://wa.me/554491446929";
const LINKEDIN = "https://www.linkedin.com/in/lucastroo99";
const LANG_KEY = "portfolio-lang";
// Liga a secao de video quando os arquivos existirem em public/video.
const VIDEO_READY = false;

function initialLang(): Lang {
  try {
    const saved = localStorage.getItem(LANG_KEY);
    if (saved === "pt" || saved === "en") return saved;
  } catch {
    /* storage indisponivel: segue para o idioma do navegador */
  }
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

/* ═══════════════════════════════════════════════
   MONOGRAM
   ═══════════════════════════════════════════════ */
function Monogram() {
  return (
    <svg viewBox="0 0 40 40" fill="none" className="w-9 h-9 flex-shrink-0" aria-hidden="true">
      <rect x="0.5" y="0.5" width="39" height="39" rx="10.5" fill="#000" stroke="#fff" strokeOpacity="0.12" />
      <path d="M13 10v20h14" stroke="#fff" strokeWidth="5" strokeLinecap="square" />
      <rect x="23" y="10" width="5" height="5" rx="1" fill="#7C3AED" />
    </svg>
  );
}

/* ═══════════════════════════════════════════════
   LANGUAGE SWITCH
   ═══════════════════════════════════════════════ */
const FLAGS: Record<Lang, React.ReactNode> = {
  pt: (
    <svg viewBox="0 0 20 20" className="w-full h-full" aria-hidden="true">
      <rect width="20" height="20" fill="#009C3B" />
      <polygon points="10,3.4 17.6,10 10,16.6 2.4,10" fill="#FFDF00" />
      <circle cx="10" cy="10" r="3.3" fill="#002776" />
      <path d="M6.9 9.2c2.3-.5 4.6.1 6.3 1.6" fill="none" stroke="#fff" strokeWidth="0.7" />
    </svg>
  ),
  en: (
    <svg viewBox="0 0 20 20" className="w-full h-full" aria-hidden="true">
      <rect width="20" height="20" fill="#fff" />
      {[0, 2, 4, 6, 8, 10, 12].map((i) => (
        <rect key={i} y={(i * 20) / 13} width="20" height={20 / 13} fill="#B22234" />
      ))}
      <rect width="10.5" height={(7 * 20) / 13} fill="#3C3B6E" />
      {[2.2, 5.2, 8.2].map((x) =>
        [2.4, 5.4, 8.4].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="0.75" fill="#fff" />)
      )}
    </svg>
  ),
};

function LanguageSwitch({
  lang,
  onChange,
  label,
}: {
  lang: Lang;
  onChange: (lang: Lang) => void;
  label: string;
}) {
  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center gap-1 p-1 rounded-full border border-white/8 bg-white/[0.03]"
    >
      {LANGS.map((l) => {
        const active = l.code === lang;
        return (
          <button
            key={l.code}
            type="button"
            lang={l.code}
            title={l.name}
            aria-label={l.name}
            aria-pressed={active}
            onClick={() => onChange(l.code)}
            className={`hoverable flex items-center gap-1.5 pl-1 pr-2.5 py-1 rounded-full text-[11px] font-semibold tracking-[0.1em] transition-all duration-500 ${
              active
                ? "bg-white/10 text-white"
                : "text-white/35 hover:text-white/80"
            }`}
          >
            <span
              className={`block w-5 h-5 rounded-full overflow-hidden transition-all duration-500 ${
                active
                  ? "ring-2 ring-primary shadow-[0_0_16px_rgba(124,58,237,0.5)]"
                  : "opacity-50 grayscale-[40%] ring-1 ring-white/10"
              }`}
            >
              {FLAGS[l.code]}
            </span>
            {l.label}
          </button>
        );
      })}
    </div>
  );
}

/* ═══════════════════════════════════════════════
   NAVBAR — always visible, fixed at the top
   ═══════════════════════════════════════════════ */
function Navbar({
  t,
  lang,
  onLangChange,
}: {
  t: Content;
  lang: Lang;
  onLangChange: (lang: Lang) => void;
}) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-3 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between gap-3 sm:gap-4">
        <a href="#" className="flex items-center gap-2.5 group hoverable flex-shrink-0">
          <Monogram />
          <span className="hidden sm:inline md:hidden lg:inline text-lg font-bold tracking-tight font-display">
            Lucas Castro
          </span>
        </a>

        <div className="hidden md:flex items-center gap-5 lg:gap-9">
          {t.nav.links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hoverable text-[11px] lg:text-[13px] text-white/50 hover:text-white transition-colors duration-500 uppercase tracking-[0.1em] lg:tracking-[0.15em] font-medium whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
          <LanguageSwitch lang={lang} onChange={onLangChange} label={t.nav.language} />
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="hoverable hidden sm:inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/8 text-white/50 hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-500"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={WHATSAPP}
            aria-label={t.nav.contact}
            className="hoverable btn-magnetic inline-flex items-center gap-2 px-3.5 lg:px-5 py-2.5 bg-primary text-white text-sm font-medium rounded-full hover:bg-primary/80 transition-all duration-500 hover:shadow-[0_0_40px_rgba(124,58,237,0.3)]"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden lg:inline">{t.nav.contact}</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

/* ═══════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════ */
const PANEL_ICONS = [
  <Brain className="h-8 w-8" />,
  <Puzzle className="h-8 w-8" />,
  <Plug className="h-8 w-8" />,
  <FileText className="h-8 w-8" />,
];

const STAT_ICONS = [
  <Briefcase className="h-4 w-4" />,
  <GraduationCap className="h-4 w-4" />,
  <Award className="h-4 w-4" />,
  <Zap className="h-4 w-4" />,
];

const HIGHLIGHT_ICONS = [
  <Database className="h-5 w-5" />,
  <GraduationCap className="h-5 w-5" />,
  <Award className="h-5 w-5" />,
];

const WHY_ICONS = [
  <Target className="h-5 w-5" />,
  <TrendingUp className="h-5 w-5" />,
  <Layers className="h-5 w-5" />,
  <Users className="h-5 w-5" />,
];

function PortfolioPage({
  t,
  lang,
  onLangChange,
}: {
  t: Content;
  lang: Lang;
  onLangChange: (lang: Lang) => void;
}) {
  const mainRef = useRef<HTMLDivElement>(null);

  /* ── Lenis smooth scroll ── */
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (x: number) => Math.min(1, 1.001 - Math.pow(2, -10 * x)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tickerFn = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tickerFn);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(tickerFn);
      lenis.destroy();
    };
  }, []);

  /* ── Hero ── */
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroPhotoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      if (heroPhotoRef.current) {
        tl.fromTo(
          heroPhotoRef.current,
          { opacity: 0, y: 40, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 1.4 },
          0.2
        );
      }

      tl.fromTo(
        ".hero-fade",
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1, stagger: 0.15 },
        0.3
      );

      if (heroTitleRef.current) {
        tl.fromTo(
          heroTitleRef.current.querySelectorAll(".word-inner"),
          { yPercent: 120, rotateX: -40 },
          { yPercent: 0, rotateX: 0, duration: 1.4, stagger: 0.08 },
          0.4
        );
      }

      if (heroRef.current) {
        gsap.to(heroRef.current, {
          yPercent: 20,
          opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.6,
          },
        });
      }
    }, mainRef);

    return () => ctx.revert();
  }, []);

  /* ── Horizontal scroll ── */
  const hScrollRef = useRef<HTMLDivElement>(null);
  const hTrackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = hTrackRef.current;
      const section = hScrollRef.current;
      if (!track || !section) return;

      const distance = () => track.scrollWidth - window.innerWidth;
      // Extra scroll after the last panel so it rests on screen before the pin releases.
      const hold = () => window.innerHeight * 0.6;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${distance() + hold()}`,
            scrub: 0.8,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        })
        .to(track, { x: () => -distance(), ease: "none", duration: () => distance() })
        .to({}, { duration: () => hold() });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  /* ── Statement + generic reveals ── */
  const statementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const words = statementRef.current?.querySelectorAll(".statement-word");
      if (words?.length) {
        gsap.fromTo(
          words,
          { opacity: 0.1 },
          {
            opacity: 1,
            stagger: 0.1,
            ease: "none",
            scrollTrigger: {
              trigger: statementRef.current,
              start: "top 70%",
              end: "bottom 40%",
              scrub: 0.5,
            },
          }
        );
      }

      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((el) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".gsap-reveal-stagger").forEach((container) => {
        gsap.fromTo(
          container.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: container, start: "top 85%", once: true },
          }
        );
      });
    }, mainRef);

    return () => ctx.revert();
  }, []);

  const total = String(t.work.panels.length).padStart(2, "0");

  const stack = [
    {
      icon: <Server className="h-5 w-5" />,
      title: t.stack.categories.backend,
      tag: t.stack.mainTag,
      skills: [
        { name: "Laravel", level: "expert" as const },
        { name: "PHP", level: "expert" as const },
        { name: "Python", level: "advanced" as const },
        { name: "Node.js", level: "advanced" as const },
        { name: "NestJS", level: "advanced" as const },
        { name: "Lumen", level: "advanced" as const },
        { name: "RabbitMQ", level: "intermediate" as const },
        { name: "Redis", level: "advanced" as const },
      ],
    },
    {
      icon: <Code className="h-5 w-5" />,
      title: t.stack.categories.frontend,
      skills: [
        { name: "Vue.js", level: "expert" as const },
        { name: "React", level: "expert" as const },
        { name: "Nuxt.js", level: "advanced" as const },
        { name: "Tailwind", level: "expert" as const },
        { name: "TypeScript", level: "advanced" as const },
        { name: "ShadCN", level: "intermediate" as const },
        { name: "Bootstrap", level: "advanced" as const },
      ],
    },
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: t.stack.categories.mobile,
      skills: [
        { name: "Flutter", level: "advanced" as const },
        { name: "React Native", level: "intermediate" as const },
        { name: "Cordova", level: "intermediate" as const },
        { name: "PWA", level: "advanced" as const },
      ],
    },
    {
      icon: <Cpu className="h-5 w-5" />,
      title: t.stack.categories.infra,
      skills: [
        { name: "AWS", level: "advanced" as const },
        { name: "Docker", level: "advanced" as const },
        { name: "GitHub", level: "expert" as const },
        { name: "GitLab", level: "advanced" as const },
        { name: "CI/CD", level: "advanced" as const },
      ],
    },
    {
      icon: <Terminal className="h-5 w-5" />,
      title: t.stack.categories.qa,
      skills: [
        { name: "PHPUnit", level: "advanced" as const },
        { name: "Cypress", level: "intermediate" as const },
        { name: "Jest", level: "intermediate" as const },
        { name: "TDD", level: "advanced" as const },
      ],
    },
    {
      icon: <Brain className="h-5 w-5" />,
      title: t.stack.categories.ai,
      skills: [
        { name: t.stack.generativeAi, level: "expert" as const },
        { name: "OpenAI API", level: "expert" as const },
        { name: "LangChain", level: "advanced" as const },
        { name: "RAG", level: "advanced" as const },
        { name: "Prompt Eng.", level: "expert" as const },
        { name: "n8n", level: "advanced" as const },
        { name: "Claude API", level: "advanced" as const },
        { name: "Claude Code", level: "expert" as const },
        { name: "Claude Design", level: "expert" as const },
        { name: "Python ML", level: "intermediate" as const },
      ],
    },
  ];

  return (
    <div ref={mainRef} className="min-h-screen bg-surface noise">
      <CustomCursor />
      <ScrollProgress />
      <Navbar t={t} lang={lang} onLangChange={onLangChange} />

      {/* ═══════ FLOATING ORBS ═══════ */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="orb absolute w-[700px] h-[700px] bg-primary/6 -top-64 -left-64 animate-pulse-glow" />
        <div className="orb absolute w-[500px] h-[500px] bg-violet-600/4 top-1/3 -right-48 animate-float-slow" />
        <div className="orb absolute w-[400px] h-[400px] bg-purple-700/3 bottom-1/4 left-1/3 animate-float" />
      </div>

      {/* ═══════════════════════════════════
           HERO
         ═══════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-28 pb-20 lg:pt-24 lg:pb-16">
        <div
          ref={heroRef}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center"
        >
          {/* Photo */}
          <div ref={heroPhotoRef} className="lg:col-span-5 lg:order-2 opacity-0">
            <div className="relative mx-auto w-full max-w-[220px] sm:max-w-[280px] lg:max-w-[420px]">
              <div className="absolute -inset-6 bg-primary/15 rounded-full blur-[80px] pointer-events-none" />
              <div className="relative overflow-hidden rounded-3xl gradient-border">
                <img
                  src="/lucas-hero.jpg"
                  alt={t.hero.photoAlt}
                  width={840}
                  height={1050}
                  className="w-full aspect-[4/5] object-cover object-top rounded-3xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-50 pointer-events-none" />
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass text-[12px] text-white/60 font-medium tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                  {t.hero.badge}
                </span>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="lg:col-span-7 lg:order-1 text-center lg:text-left">
            <p className="hero-fade opacity-0 text-primary text-[12px] font-medium uppercase tracking-[0.2em] mb-6">
              {t.hero.kicker}
            </p>

            <h1
              ref={heroTitleRef}
              className="font-display text-[clamp(2.4rem,5.4vw,4.75rem)] font-extrabold leading-[1.05] tracking-[-0.03em] mb-7"
            >
              {t.hero.title.split(" ").map((word, i) => (
                <span
                  key={i}
                  className="word inline-block mr-[0.28em] pb-[0.15em]"
                  style={{ perspective: "500px", clipPath: "inset(-10% -5% -15% -5%)" }}
                >
                  <span className="word-inner inline-block">{word}</span>
                </span>
              ))}
            </h1>

            <p className="hero-fade opacity-0 text-lg sm:text-xl text-white/40 max-w-2xl mx-auto lg:mx-0 mb-11 leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="hero-fade opacity-0 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a
                href={WHATSAPP}
                className="hoverable btn-magnetic inline-flex items-center justify-center gap-2.5 px-9 py-4 bg-primary text-white font-semibold rounded-full text-[15px] hover:shadow-[0_0_50px_rgba(124,58,237,0.4)] transition-all duration-500"
              >
                <MessageCircle className="h-5 w-5" />
                {t.hero.primaryCta}
              </a>
              <a
                href="#work"
                className="hoverable btn-magnetic inline-flex items-center justify-center gap-2.5 px-9 py-4 border border-white/8 text-white/70 font-semibold rounded-full text-[15px] hover:bg-white/5 hover:border-white/15 transition-all duration-500"
              >
                {t.hero.secondaryCta}
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 text-white/15">
            <div className="w-[1px] h-8 bg-gradient-to-b from-transparent to-white/20" />
            <ChevronDown className="h-3.5 w-3.5" />
          </div>
        </div>
      </section>

      {/* ═══════ MARQUEE ═══════ */}
      <div className="relative py-8 border-y border-white/[0.03] overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12">
          {[...Array(2)].map((_, si) => (
            <React.Fragment key={si}>
              {[
                "Laravel", "Vue.js", "React", "Python", "Node.js", "NestJS",
                "Flutter", "TypeScript", "Tailwind CSS", "PostgreSQL", "AWS",
                "Docker", "Redis", "RabbitMQ", "n8n", "OpenAI",
              ].map((tech, i) => (
                <span
                  key={`${si}-${i}`}
                  className="text-[13px] text-white/15 font-medium tracking-wide flex items-center gap-4"
                >
                  {tech}
                  <span className="w-1 h-1 rounded-full bg-primary/20" />
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ═══════════════════════════════════
           VIDEO
         ═══════════════════════════════════ */}
      {VIDEO_READY && (
      <section id="video" className="py-28 sm:py-36 relative">
        <div className="max-w-5xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-12">
            <span className="gsap-reveal text-primary text-[12px] font-medium uppercase tracking-[0.2em] block mb-4">
              {t.video.label}
            </span>
            <h2 className="gsap-reveal font-display text-4xl sm:text-5xl font-bold text-gradient-white pb-[0.14em] leading-tight mb-5">
              {t.video.title}
            </h2>
            <p className="gsap-reveal text-white/45 text-lg max-w-2xl mx-auto">{t.video.text}</p>
          </div>

          <div className="gsap-reveal relative">
            <div className="absolute -inset-8 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="relative rounded-3xl overflow-hidden gradient-border bg-black shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
              <video
                className="block w-full aspect-video bg-black"
                controls
                playsInline
                preload="none"
                poster={`/video/poster-${lang}.jpg`}
              >
                <source src={`/video/lucas-${lang}.webm`} type="video/webm" />
                <source src={`/video/lucas-${lang}.mp4`} type="video/mp4" />
                <track
                  kind="captions"
                  src={`/video/captions-${lang}.vtt`}
                  srcLang={lang === "pt" ? "pt-BR" : "en"}
                  label={t.video.captions}
                />
              </video>
            </div>
          </div>
        </div>
      </section>
      )}

      {/* ═══════════════════════════════════
           HOW I WORK — HORIZONTAL SCROLL
         ═══════════════════════════════════ */}
      <section id="work" ref={hScrollRef} className="relative overflow-hidden">
        <div ref={hTrackRef} className="flex items-stretch h-screen">
          <div className="flex-shrink-0 w-screen h-full flex items-center pt-16">
            <div className="max-w-3xl mx-auto px-6 sm:px-8">
              <span className="text-primary text-[12px] font-medium uppercase tracking-[0.2em] block mb-4">
                {t.work.label}
              </span>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gradient-white pb-[0.14em] leading-tight mb-6">
                {t.work.title}
              </h2>
              <p className="text-white/40 text-lg leading-relaxed max-w-xl">{t.work.text}</p>
              <div className="mt-10 flex items-center gap-3 text-white/25 text-sm">
                <span>{t.work.hint}</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>

          {t.work.panels.map((panel, i) => (
            <div key={i} className="flex-shrink-0 w-screen h-full flex items-center px-6 sm:px-8 pt-16">
              <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
                <div>
                  <span className="text-[11px] text-primary/80 font-mono uppercase tracking-[0.3em] mb-4 block">
                    {String(i + 1).padStart(2, "0")} / {total}
                  </span>
                  <div className="text-primary mb-5">{PANEL_ICONS[i]}</div>
                  <p className="text-[12px] text-white/35 uppercase tracking-[0.2em] font-medium mb-3">
                    {panel.subtitle}
                  </p>
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-[1.1] tracking-tight mb-6 text-white">
                    {panel.title}
                  </h3>
                  <p className="text-white/40 text-base sm:text-lg leading-relaxed max-w-md">
                    {panel.desc}
                  </p>
                </div>

                <div className="space-y-3 sm:space-y-4">
                  {panel.features.map((f, fi) => (
                    <div
                      key={fi}
                      className="glass-card rounded-2xl px-6 sm:px-7 py-4 sm:py-5 flex items-center gap-5 group"
                    >
                      <span className="text-[11px] text-accent/90 font-mono">0{fi + 1}</span>
                      <span className="text-white/60 font-medium text-[14px] sm:text-[15px] group-hover:text-white/90 transition-colors duration-500">
                        {f}
                      </span>
                      <ArrowUpRight className="h-4 w-4 text-white/10 ml-auto flex-shrink-0 group-hover:text-primary/60 transition-colors duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════════════════
           STATEMENT
         ═══════════════════════════════════ */}
      <section className="py-40 sm:py-52 relative">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 text-center" ref={statementRef}>
          <p className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.28] tracking-tight">
            {t.statement.split(" ").map((word, i) => (
              <span key={i} className="statement-word inline-block mr-[0.3em] opacity-10">
                {word}
              </span>
            ))}
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════
           RECENT PROJECTS
         ═══════════════════════════════════ */}
      <section id="projects" className="py-32 relative scroll-mt-10">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="mb-16 max-w-3xl">
            <span className="gsap-reveal text-primary text-[12px] font-medium uppercase tracking-[0.2em] block mb-4">
              {t.projects.label}
            </span>
            <h2 className="gsap-reveal font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gradient-white pb-[0.14em] leading-tight mb-6">
              {t.projects.title}
            </h2>
            <p className="gsap-reveal text-white/45 text-lg leading-relaxed">{t.projects.text}</p>
          </div>

          <div className="gsap-reveal-stagger grid md:grid-cols-2 xl:grid-cols-3 gap-5">
            {t.projects.items.map((project, i) => (
              <article
                key={i}
                className="glass-card rounded-2xl p-7 flex flex-col group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <span className="text-[11px] text-accent/80 font-mono uppercase tracking-[0.3em] mb-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="mb-6">
                  <div className="font-display text-3xl sm:text-[2rem] font-extrabold tracking-tight text-gradient leading-tight pb-[0.1em]">
                    {project.metric}
                  </div>
                  <div className="text-[12px] text-white/45 mt-1">{project.metricSub}</div>
                </div>
                <h3 className="text-[17px] font-semibold text-white leading-snug mb-3">
                  {project.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{project.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           ABOUT
         ═══════════════════════════════════ */}
      <section id="about" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/4 rounded-full blur-[180px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="mb-16">
            <span className="gsap-reveal text-primary text-[12px] font-medium uppercase tracking-[0.2em] block mb-4">
              {t.about.label}
            </span>
            <h2 className="gsap-reveal font-display text-4xl sm:text-5xl md:text-6xl font-bold text-gradient-white pb-[0.14em] leading-tight">
              {t.about.title}
            </h2>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-start mb-24">
            <div className="lg:col-span-3">
              <h3 className="gsap-reveal font-display text-3xl sm:text-4xl font-bold mb-2 text-white">
                {t.about.name}
              </h3>
              <p className="gsap-reveal text-primary font-medium mb-8 text-[15px]">{t.about.role}</p>

              <p className="gsap-reveal font-display text-2xl sm:text-3xl font-bold leading-snug tracking-tight text-gradient mb-8">
                {t.about.lead}
              </p>

              {t.about.bio.map((paragraph, i) => (
                <p key={i} className="gsap-reveal text-white/45 leading-[1.8] mb-5 text-base">
                  {paragraph}
                </p>
              ))}

              <div className="gsap-reveal flex flex-wrap gap-2.5 mt-9">
                {t.about.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 rounded-full text-[11px] font-medium border border-primary/20 text-primary/80 bg-primary/5 hover:bg-primary/10 hover:border-primary/30 transition-all duration-500 cursor-default"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 gsap-reveal-stagger grid grid-cols-2 gap-4">
              {t.about.stats.map((s, i) => (
                <div key={i} className="glass-card rounded-2xl p-6 text-center group">
                  <div className="text-primary mb-3 flex justify-center group-hover:scale-110 transition-transform duration-500">
                    {STAT_ICONS[i]}
                  </div>
                  <div className="text-sm font-semibold text-white mb-1">{s.label}</div>
                  <div className="text-[11px] text-white/35">{s.sub}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── STACK ── */}
          <div id="stack" className="mb-20 scroll-mt-28">
            <h3 className="gsap-reveal font-display text-2xl sm:text-3xl font-bold text-white mb-12 text-center">
              {t.stack.title}
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
              {stack.map((cat, ci) => (
                <div key={ci} className="gsap-reveal glass-card gradient-border rounded-2xl p-6 flex flex-col">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center text-primary">
                      {cat.icon}
                    </div>
                    <h4 className="font-semibold text-white text-[15px]">{cat.title}</h4>
                    {cat.tag && (
                      <span className="ml-auto text-[9px] uppercase tracking-[0.2em] text-primary/50 font-medium">
                        {cat.tag}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((s) => (
                      <SkillBadge key={s.name} name={s.name} level={s.level} />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── HIGHLIGHTS ── */}
          <div className="gsap-reveal-stagger grid sm:grid-cols-3 gap-5">
            {t.highlights.map((item, i) => (
              <div
                key={i}
                className="rounded-2xl p-7 group relative overflow-hidden bg-white/[0.02] border border-white/[0.04] hover:border-primary/20 transition-all duration-500"
              >
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary/15 transition-colors duration-500">
                    {HIGHLIGHT_ICONS[i]}
                  </div>
                  <span className="text-[9px] uppercase tracking-[0.2em] text-primary/60 font-medium px-2.5 py-1 rounded-full border border-primary/15">
                    {item.tag}
                  </span>
                </div>
                <h4 className="font-semibold text-white mb-2 text-[15px]">{item.title}</h4>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           PROCESS (SDD)
         ═══════════════════════════════════ */}
      <section id="process" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="text-center mb-20">
            <span className="gsap-reveal text-primary text-[12px] font-medium uppercase tracking-[0.2em] block mb-4">
              {t.process.label}
            </span>
            <h2 className="gsap-reveal font-display text-4xl sm:text-5xl font-bold text-gradient-white pb-[0.14em] mb-6 max-w-3xl mx-auto leading-tight">
              {t.process.title}
            </h2>
            <p className="gsap-reveal text-white/40 text-lg max-w-2xl mx-auto">{t.process.text}</p>
          </div>

          <div className="gsap-reveal-stagger grid sm:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
            {t.process.steps.map((step, i) => (
              <div key={i} className="glass-card rounded-2xl p-8 group relative overflow-hidden">
                <span className="absolute -top-3 right-5 font-display text-[5.5rem] font-extrabold leading-none text-white/[0.03] group-hover:text-primary/10 transition-colors duration-700 select-none">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[11px] text-primary/60 font-mono uppercase tracking-[0.3em] block mb-5">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-[17px] font-semibold mb-3 text-white">{step.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           WHAT I BRING
         ═══════════════════════════════════ */}
      <section className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="gsap-reveal text-primary text-[12px] font-medium uppercase tracking-[0.2em] block mb-4">
                {t.why.label}
              </span>
              <h2 className="gsap-reveal font-display text-4xl sm:text-5xl font-bold text-gradient-white pb-[0.14em] leading-tight mb-6">
                {t.why.title}
              </h2>
              <p className="gsap-reveal text-white/40 text-lg leading-relaxed">{t.why.text}</p>
            </div>

            <div className="gsap-reveal-stagger space-y-4">
              {t.why.items.map((item, i) => (
                <div key={i} className="glass-card rounded-2xl p-6 flex items-start gap-5 group">
                  <div className="w-11 h-11 rounded-xl bg-primary/8 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/15 group-hover:scale-110 transition-all duration-500">
                    {WHY_ICONS[i]}
                  </div>
                  <div>
                    <h3 className="text-[15px] font-semibold mb-1.5 text-white">{item.title}</h3>
                    <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           CTA
         ═══════════════════════════════════ */}
      <section id="contact" className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/6 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 text-center">
          <h2 className="gsap-reveal font-display text-4xl sm:text-5xl md:text-6xl font-bold mb-8 text-gradient-white pb-[0.14em] leading-tight">
            {t.cta.title}
          </h2>
          <p className="gsap-reveal text-white/40 text-lg mb-14 max-w-xl mx-auto">{t.cta.text}</p>
          <div className="gsap-reveal flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={WHATSAPP}
              className="hoverable btn-magnetic inline-flex items-center justify-center gap-2.5 px-10 py-5 bg-primary text-white font-semibold rounded-full text-lg hover:shadow-[0_0_60px_rgba(124,58,237,0.35)] transition-all duration-500"
            >
              <MessageCircle className="h-5 w-5" />
              {t.cta.button}
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
              className="hoverable btn-magnetic inline-flex items-center justify-center gap-2.5 px-10 py-5 border border-white/8 text-white/70 font-semibold rounded-full text-lg hover:bg-white/5 hover:border-white/15 transition-all duration-500"
            >
              <Linkedin className="h-5 w-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════
           FOOTER
         ═══════════════════════════════════ */}
      <footer className="border-t border-white/[0.03] py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-12">
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <Monogram />
                <span className="text-lg font-bold font-display">Lucas Castro</span>
              </div>
              <p className="text-white/60 text-sm leading-relaxed">{t.footer.tagline}</p>
            </div>

            <div>
              <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/40 mb-5">
                {t.footer.contact}
              </h3>
              <div className="space-y-3">
                <a
                  href={LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hoverable flex items-center gap-2.5 text-white/35 hover:text-white/70 transition-colors duration-500 text-sm"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
                <a
                  href={WHATSAPP}
                  className="hoverable flex items-center gap-2.5 text-white/35 hover:text-white/70 transition-colors duration-500 text-sm"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/[0.03] mt-14 pt-8">
            <p className="text-white/50 text-sm text-center sm:text-left">
              &copy; {new Date().getFullYear()} Lucas Castro. {t.footer.rights}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   ROOT — holds the language; remounts the page on change
   so every GSAP/ScrollTrigger measurement is rebuilt for the new text.
   ═══════════════════════════════════════════════ */
export default function Portfolio() {
  const [lang, setLang] = useState<Lang>(initialLang);
  const t = content[lang];

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
    document.title = t.meta.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", t.meta.description);
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch {
      /* storage indisponivel: a escolha vale so para esta visita */
    }
  }, [lang, t]);

  return <PortfolioPage key={lang} t={t} lang={lang} onLangChange={setLang} />;
}
