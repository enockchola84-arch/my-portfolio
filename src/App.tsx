
import { useEffect, useMemo, useState } from 'react';

// Discipline categories used for filtering case studies and slideshow slides
type DisciplineFilter =
  | 'All'
  | 'Front-End & UI/UX'
  | 'CCTV & Networking'
  | 'Media & IT';

// Full-viewport background slideshow item featuring computer and CCTV scenes
interface BackgroundSlide {
  id: string;
  label: string;
  categoryTag: string;
  caption: string;
  imageUrl: string;
  fallbackGradient: string;
}

// Data model for each portfolio case study and slideshow item
interface PortfolioCaseStudy {
  id: string;
  title: string;
  category: Exclude<DisciplineFilter, 'All'>;
  year: string;
  role: string;
  context: string;
  overview: string;
  challenge: string;
  execution: string;
  outcomes: string[];
  stack: string[];
  badgeBg: string;
  previewImageUrl: string;
}

// Core profile and contact metadata for Enock Chola
const PROFILE = {
  name: 'Enock Chola',
  headline:
    'IT Specialist, Front-End Developer, Media & Marketing Personnel & CCTV Networking Engineer',
  degree: 'B.Sc. in Computer Science (IT Business Management)',
  bio: 'Delivering responsive front-end interfaces and UI/UX systems, digital media and marketing campaigns, reliable IT support, and structured networking with CCTV installation.',
  email: 'enockchola84@gmail.com',
  phone: '0972305638',
  github: 'https://github.com/enockchola84-arch?tab=repositories',
};

// High-visibility full-page background slides featuring computer coding/hardware and CCTV/camera scenes
const BACKGROUND_SLIDES: BackgroundSlide[] = [
  {
    id: 'bg-computer-code-1',
    label: 'Computer Code Monitor',
    categoryTag: 'Computer & Front-End',
    caption: 'Software & UI Development — Code & Workstation Display',
    imageUrl:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1920&q=85',
    fallbackGradient:
      'radial-gradient(circle at 25% 25%, rgba(127, 29, 29, 0.72), #050505 70%)',
  },
  {
    id: 'bg-cctv-camera-1',
    label: 'Surveillance & CCTV Camera',
    categoryTag: 'CCTV & Surveillance',
    caption: 'CCTV Installation & Site Monitoring — Security Camera Hardware',
    imageUrl:
      'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1920&q=85',
    fallbackGradient:
      'radial-gradient(circle at 75% 20%, rgba(153, 27, 27, 0.72), #050505 70%)',
  },
  {
    id: 'bg-computer-workspace-2',
    label: 'Computer Laptop & System Setup',
    categoryTag: 'Computer & IT Systems',
    caption: 'IT Business Management & Web Engineering — Laptop & Terminal',
    imageUrl:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1920&q=85',
    fallbackGradient:
      'radial-gradient(circle at 50% 30%, rgba(69, 10, 10, 0.78), #050505 72%)',
  },
  {
    id: 'bg-cctv-network-2',
    label: 'Security & Network Infrastructure',
    categoryTag: 'CCTV & Networking',
    caption: 'Structured Networking & Surveillance — Hardware & Monitoring',
    imageUrl:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1920&q=85',
    fallbackGradient:
      'radial-gradient(circle at 30% 70%, rgba(127, 29, 29, 0.72), #050505 70%)',
  },
];

// Curated case studies across networking/CCTV, front-end/UI, media/marketing, and IT operations
const CASE_STUDIES: PortfolioCaseStudy[] = [
  {
    id: 'cctv-net-grid',
    title: 'Multi-Zone CCTV Installation & Segmented Network',
    category: 'CCTV & Networking',
    year: '2026',
    role: 'IT Specialist & CCTV Networking Engineer',
    context: 'Commercial & Facility Security Infrastructure',
    overview:
      'End-to-end IP and analog CCTV camera deployment, structured cabling, and local network segmentation for continuous 24/7 facility monitoring.',
    challenge:
      'Blind spots, unstable links, and unorganized switch closets caused dropped video feeds and slow fault isolation.',
    execution:
      'Surveyed sightlines, routed clean structured cabling, isolated surveillance traffic on dedicated network segments, and configured NVR recording and remote viewing.',
    outcomes: [
      'Eliminated blind spots across entrances, perimeters, and critical operational areas',
      'Improved video feed stability and simplified network troubleshooting',
      'Provided clear port labeling and operational handover notes',
    ],
    stack: ['CCTV Installation', 'Structured Cabling', 'LAN / Network Setup', 'NVR & Remote Access'],
    badgeBg: '#dc2626',
    previewImageUrl:
      'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'fe-ui-portfolio-system',
    title: 'Responsive Front-End & UI/UX Case Study Platform',
    category: 'Front-End & UI/UX',
    year: '2026',
    role: 'Front-End Developer & UI/UX Designer',
    context: 'Web Applications & Digital Interfaces',
    overview:
      'Clean, fast React and TypeScript interface engineered for clear visual hierarchy, discipline filtering, and structured case study inspection.',
    challenge:
      'Visitors often miss key technical and creative strengths when layouts lack clear structure, visual contrast, and focused project breakdowns.',
    execution:
      'Designed high-contrast dark red and black components, responsive grids, automatic slideshow controls, and accessible case study modals.',
    outcomes: [
      'Instant filtering across Front-End & UI/UX, CCTV & Networking, and Media & IT work',
      'Clear challenge-to-outcome narratives in an interactive case study modal',
      'Responsive layout across mobile, tablet, and desktop viewports',
    ],
    stack: ['React', 'TypeScript', 'UI/UX Design', 'Tailwind CSS'],
    badgeBg: '#991b1b',
    previewImageUrl:
      'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'media-campaign-kit',
    title: 'Digital Media, Branding & Marketing Rollout',
    category: 'Media & IT',
    year: '2025',
    role: 'Media & Marketing Personnel + IT Specialist',
    context: 'Brand Visibility & Business Outreach',
    overview:
      'Cohesive visual media, promotional campaign messaging, and web touchpoints aligned with IT business management goals.',
    challenge:
      'Inconsistent promotional visuals and scattered service messaging reduced audience engagement and campaign clarity.',
    execution:
      'Standardized campaign visuals, structured service offers for target audiences, and aligned digital outreach with technical delivery schedules.',
    outcomes: [
      'Consistent visual identity across promotional channels and client presentations',
      'Clearer communication of technical and creative services to prospective clients',
      'Practical alignment between marketing campaigns and IT business operations',
    ],
    stack: ['Media & Marketing', 'Visual Campaigns', 'IT Business Management', 'Digital Outreach'],
    badgeBg: '#b91c1c',
    previewImageUrl:
      'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'it-ops-hardening',
    title: 'Enterprise IT Support & Network Reliability',
    category: 'CCTV & Networking',
    year: '2025',
    role: 'IT Specialist',
    context: 'Workplace IT Operations & Continuity',
    overview:
      'Proactive workstation support, router and switch maintenance, backup routines, and structured IT troubleshooting.',
    challenge:
      'Recurring network bottlenecks and inconsistent endpoint configurations interrupted daily operations.',
    execution:
      'Audited network hardware, standardized device setups, and established repeatable diagnostic and maintenance routines.',
    outcomes: [
      'Reduced downtime and faster resolution of routine IT and network faults',
      'More reliable day-to-day connectivity for staff and connected devices',
      'Stronger operational discipline grounded in IT business management',
    ],
    stack: ['IT Support', 'Network Administration', 'System Maintenance', 'IT Business Mgmt'],
    badgeBg: '#7f1d1d',
    previewImageUrl:
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
  },
];

// Available discipline filter tabs
const FILTERS: DisciplineFilter[] = [
  'All',
  'Front-End & UI/UX',
  'CCTV & Networking',
  'Media & IT',
];

// Automatic slideshow interval in milliseconds (5 seconds)
const SLIDESHOW_INTERVAL_MS = 5000;

/**
 * Main portfolio application component for Enock Chola with a black and dark red theme,
 * automatic slideshow with pause/resume and hover/modal pause behavior, filterable showcase grid,
 * case study modal, and footer.
 */
export function App() {
  const [activeFilter, setActiveFilter] = useState<DisciplineFilter>('All');
  const [selectedStudy, setSelectedStudy] = useState<PortfolioCaseStudy | null>(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [bgSlideIndex, setBgSlideIndex] = useState(0);
  const [failedImages, setFailedImages] = useState<Record<string, boolean>>({});
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHoveringSlideshow, setIsHoveringSlideshow] = useState(false);

  const markImageFailed = (key: string) => {
    setFailedImages((prev) => (prev[key] ? prev : { ...prev, [key]: true }));
  };

  // Filter case studies based on the active discipline filter
  const visibleStudies = useMemo(() => {
    try {
      if (activeFilter === 'All') return CASE_STUDIES;
      return CASE_STUDIES.filter((item) => item.category === activeFilter);
    } catch {
      return CASE_STUDIES;
    }
  }, [activeFilter]);

  // Reset to first slide when filter changes
  useEffect(() => {
    setSlideIndex(0);
  }, [activeFilter]);
  // Automatic slideshow timer: advances both full-page computer/CCTV background and spotlight deck
  useEffect(() => {
    if (
      !isAutoPlaying ||
      isHoveringSlideshow ||
      selectedStudy !== null ||
      (visibleStudies.length <= 1 && BACKGROUND_SLIDES.length <= 1)
    ) {
      return;
    }

    const timerId = window.setInterval(() => {
      setBgSlideIndex((prev) => (prev + 1) % BACKGROUND_SLIDES.length);
      if (visibleStudies.length > 1) {
        setSlideIndex((prev) => (prev + 1) % visibleStudies.length);
      }
    }, SLIDESHOW_INTERVAL_MS);

    return () => window.clearInterval(timerId);
  }, [isAutoPlaying, isHoveringSlideshow, selectedStudy, visibleStudies.length]);

  // Allow Escape key to close the case study modal
  useEffect(() => {
    if (!selectedStudy) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedStudy(null);
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [selectedStudy]);

  const totalSlides = visibleStudies.length;
  const activeSlide = visibleStudies[slideIndex] ?? visibleStudies[0];
  const activeBgSlide = BACKGROUND_SLIDES[bgSlideIndex] ?? BACKGROUND_SLIDES[0];

  const handlePrevSlide = () => {
    setBgSlideIndex((prev) =>
      prev <= 0 ? BACKGROUND_SLIDES.length - 1 : prev - 1
    );
    if (totalSlides > 1) {
      setSlideIndex((prev) => (prev <= 0 ? totalSlides - 1 : prev - 1));
    }
  };

  const handleNextSlide = () => {
    setBgSlideIndex((prev) => (prev + 1) % BACKGROUND_SLIDES.length);
    if (totalSlides > 1) {
      setSlideIndex((prev) => (prev + 1) % totalSlides);
    }
  };

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#050505] text-zinc-100 antialiased selection:bg-[#dc2626] selection:text-white">
      {/* Full-Viewport Automatic Background Slideshow (Computer & CCTV Scenes) */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden bg-[#050505]"
      >
        {BACKGROUND_SLIDES.map((bgSlide, idx) => {
          const isCurrentBg = idx === bgSlideIndex;
          const imgBroken = Boolean(failedImages[bgSlide.id]);

          return (
            <div
              key={bgSlide.id}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                isCurrentBg ? 'scale-100 opacity-65' : 'scale-105 opacity-0'
              }`}
              style={{ background: bgSlide.fallbackGradient }}
            >
              {!imgBroken && (
                <img
                  src={bgSlide.imageUrl}
                  alt=""
                  onError={() => markImageFailed(bgSlide.id)}
                  className="h-full w-full object-cover object-center contrast-110 brightness-95"
                />
              )}
            </div>
          );
        })}

        {/* Dark Red & Black Atmospheric Wash tuned for high image visibility + crisp text contrast */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(5,5,5,0.52) 0%, rgba(20,5,7,0.44) 45%, rgba(5,5,5,0.68) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at 50% 20%, rgba(127,29,29,0.22) 0%, rgba(5,5,5,0.58) 85%)',
          }}
        />
      </div>

      {/* Foreground Content Layer */}
      <div className="relative z-10">
        {/* 1. Sticky Header with Name, Degree, Nav Links, and GitHub Button */}
        <header className="sticky top-0 z-30 border-b border-red-900/80 bg-[#050505]/85 backdrop-blur-md">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6">
            <div>
              <a href="#top" className="text-lg font-bold tracking-tight text-white">
                {PROFILE.name}
              </a>
              <p className="text-xs text-red-300/90">{PROFILE.degree}</p>
            </div>

            <nav
              aria-label="Primary navigation"
              className="flex flex-wrap items-center gap-4 text-sm font-medium text-zinc-200 sm:gap-6"
            >
              <a href="#slideshow" className="transition hover:text-red-400">
                Slideshow
              </a>
              <a href="#projects" className="transition hover:text-red-400">
                Projects
              </a>
              <a href="#contact" className="transition hover:text-red-400">
                Contact
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-red-700/80 bg-[#450a0a]/80 px-3.5 py-1.5 font-semibold text-white transition hover:border-red-500 hover:bg-[#dc2626]"
              >
                GitHub
              </a>
            </nav>
          </div>
        </header>

        <main id="top" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          {/* 2. Hero Section */}
          <section className="border-b border-red-950/80 py-12 sm:py-16">
            <div className="rounded-2xl border border-red-900/60 bg-[#050505]/75 p-6 backdrop-blur-xs sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-red-800/80 bg-[#140507]/90 px-3.5 py-1 text-xs font-semibold tracking-wider text-red-300 uppercase">
                <span className="h-2 w-2 rounded-full bg-[#ef4444]" aria-hidden="true" />
                {PROFILE.degree}
              </div>

              <h1 className="mt-4 max-w-4xl text-3xl font-bold tracking-tight text-white sm:text-5xl">
                {PROFILE.headline}
              </h1>

              <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-200 sm:text-lg">
                {PROFILE.bio}
              </p>

              {/* Active Full-Page Background Scene Indicator */}
              {activeBgSlide && (
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-red-900/60 bg-[#140507]/80 px-4 py-2.5 text-xs">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-semibold tracking-wider text-red-400 uppercase">
                      Live Page Backdrop:
                    </span>
                    <span className="rounded bg-[#7f1d1d]/70 px-2 py-0.5 font-semibold text-red-100">
                      {activeBgSlide.categoryTag}
                    </span>
                    <span className="text-zinc-300">{activeBgSlide.caption}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    {BACKGROUND_SLIDES.map((bg, i) => (
                      <button
                        key={bg.id}
                        type="button"
                        onClick={() => setBgSlideIndex(i)}
                        aria-label={`Show background scene ${i + 1}: ${bg.label}`}
                        className={`h-2 rounded-full transition-all ${
                          i === bgSlideIndex
                            ? 'w-6 bg-[#ef4444]'
                            : 'w-2 bg-zinc-700 hover:bg-red-700'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              )}

              <div className="mt-7 flex flex-wrap items-center gap-3">
                <a
                  href="#projects"
                  className="rounded-xl bg-[#dc2626] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b91c1c]"
                >
                  View Projects
                </a>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="rounded-xl border border-red-800/80 bg-[#09090b]/85 px-5 py-2.5 text-sm font-medium text-zinc-100 transition hover:border-red-500 hover:text-red-300"
                >
                  {PROFILE.email}
                </a>
                <a
                  href={`tel:${PROFILE.phone}`}
                  className="rounded-xl border border-red-900/80 bg-[#09090b]/85 px-4 py-2.5 text-sm font-medium text-zinc-200 transition hover:border-red-600"
                >
                  Phone: {PROFILE.phone}
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-red-800/80 bg-[#09090b]/85 px-4 py-2.5 text-sm font-medium text-red-300 transition hover:border-red-500 hover:text-white"
                >
                  GitHub Repositories
                </a>
              </div>
            </div>
          </section>

          {/* 3. Automatic Sliding Slideshow Section */}
          <section
            id="slideshow"
            aria-labelledby="slideshow-heading"
            onMouseEnter={() => setIsHoveringSlideshow(true)}
            onMouseLeave={() => setIsHoveringSlideshow(false)}
            className="py-12"
          >
            <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-red-950/80 bg-[#050505]/75 p-4 backdrop-blur-xs sm:px-6">
              <div>
                <div className="flex flex-wrap items-center gap-2.5">
                  <h2 id="slideshow-heading" className="text-2xl font-bold tracking-tight text-white">
                    Automatic Project &amp; Backdrop Slideshow
                  </h2>
                  <span className="rounded-full border border-red-800/80 bg-[#140507] px-2.5 py-0.5 text-xs font-medium text-red-300">
                    {selectedStudy
                      ? 'Paused (Modal Open)'
                      : isHoveringSlideshow
                      ? 'Paused (Hover)'
                      : isAutoPlaying
                      ? 'Auto-Sliding (5s)'
                      : 'Paused'}
                  </span>
                </div>
                <p className="mt-1 text-sm text-zinc-300">
                  Full-page computer &amp; CCTV scenes and featured case studies slide automatically every 5 seconds.
                </p>
              </div>

              {totalSlides > 0 && (
                <div className="flex flex-wrap items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAutoPlaying((prev) => !prev)}
                    className={`rounded-lg border px-3.5 py-2 text-xs font-semibold transition ${
                      isAutoPlaying
                        ? 'border-red-700/80 bg-[#450a0a]/80 text-red-100 hover:bg-[#7f1d1d]'
                        : 'border-red-600 bg-[#dc2626] text-white hover:bg-[#b91c1c]'
                    }`}
                  >
                    {isAutoPlaying ? 'Pause Auto-Play' : 'Resume Auto-Play'}
                  </button>

                  {totalSlides > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={handlePrevSlide}
                        aria-label="Previous slide"
                        className="rounded-lg border border-red-900 bg-[#09090b]/90 px-3.5 py-2 text-xs font-semibold text-zinc-200 transition hover:border-red-500 hover:text-white"
                      >
                        Prev
                      </button>
                      <span className="px-2 text-xs font-semibold text-zinc-200">
                        {slideIndex + 1} / {totalSlides}
                      </span>
                      <button
                        type="button"
                        onClick={handleNextSlide}
                        aria-label="Next slide"
                        className="rounded-lg border border-red-900 bg-[#09090b]/90 px-3.5 py-2 text-xs font-semibold text-zinc-200 transition hover:border-red-500 hover:text-white"
                      >
                        Next
                      </button>
                    </>
                  )}
                </div>
              )}
            </div>

            {activeSlide && (
              <div className="mt-6 overflow-hidden rounded-2xl border border-red-900/75 bg-[#09090b]/82 shadow-2xl shadow-red-950/30 backdrop-blur-xs">
                <div
                  className="flex transition-transform duration-700 ease-in-out"
                  style={{ transform: `translateX(-${slideIndex * 100}%)` }}
                >
                  {visibleStudies.map((study) => (
                    <div
                      key={study.id}
                      className="grid w-full shrink-0 gap-6 p-6 sm:p-8 lg:grid-cols-12 lg:items-center"
                    >
                      <div className="space-y-4 lg:col-span-5">
                        <div className="relative overflow-hidden rounded-xl border border-red-900/70 bg-[#140507]">
                          {!failedImages[`preview-${study.id}`] ? (
                            <img
                              src={study.previewImageUrl}
                              alt={`${study.title} visual preview`}
                              onError={() => markImageFailed(`preview-${study.id}`)}
                              className="h-52 w-full object-cover object-center"
                            />
                          ) : (
                            <div className="flex h-52 w-full items-center justify-center bg-gradient-to-br from-[#450a0a] via-[#140507] to-[#050505] p-4 text-center text-sm font-semibold text-red-200">
                              {study.category}
                            </div>
                          )}
                          <div className="flex items-center justify-between border-t border-red-950 bg-[#050505]/90 px-3 py-2 text-xs text-zinc-300">
                            <span className="font-semibold text-red-400">{study.category}</span>
                            <span>{study.year}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4 lg:col-span-4">
                        <div className="flex flex-wrap items-center gap-2 text-xs">
                          <span
                            className="rounded-full px-3 py-1 font-semibold text-white"
                            style={{ backgroundColor: study.badgeBg }}
                          >
                            {study.category}
                          </span>
                          <span className="text-zinc-300">{study.context}</span>
                        </div>

                        <h3 className="text-2xl font-bold text-white">{study.title}</h3>
                        <p className="text-sm leading-relaxed text-zinc-200">{study.overview}</p>

                        <div className="flex flex-wrap gap-2 pt-1">
                          {study.stack.map((tag) => (
                            <span
                              key={tag}
                              className="rounded-md border border-red-900/80 bg-[#050505]/90 px-2.5 py-1 text-xs font-medium text-red-200"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="flex flex-col justify-between gap-4 rounded-xl border border-red-900/80 bg-[#050505]/90 p-5 lg:col-span-3">
                        <div>
                          <p className="text-xs font-semibold tracking-wider text-red-400 uppercase">
                            Role &amp; Focus
                          </p>
                          <p className="mt-1.5 text-sm font-semibold text-white">{study.role}</p>

                          <p className="mt-3 text-xs font-semibold tracking-wider text-red-400 uppercase">
                            Primary Outcome
                          </p>
                          <p className="mt-1.5 text-sm text-zinc-300">{study.outcomes[0]}</p>
                        </div>

                        <button
                          type="button"
                          onClick={() => setSelectedStudy(study)}
                          className="mt-2 w-full rounded-lg bg-[#dc2626] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#b91c1c]"
                        >
                          Open Full Case Study
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Slide Indicator Dots */}
                {totalSlides > 1 && (
                  <div className="flex items-center justify-center gap-2 border-t border-red-950/90 bg-[#050505]/90 py-3.5">
                    {visibleStudies.map((item, idx) => (
                      <button
                        key={item.id}
                        type="button"
                        aria-label={`Go to slide ${idx + 1}: ${item.title}`}
                        onClick={() => setSlideIndex(idx)}
                        className={`h-2.5 rounded-full transition-all ${
                          idx === slideIndex
                            ? 'w-8 bg-[#dc2626]'
                            : 'w-2.5 bg-zinc-700 hover:bg-red-700'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            )}
          </section>

          {/* 4. Filterable Project Showcase Grid */}
          <section id="projects" aria-labelledby="projects-heading" className="pt-6">
            <div className="flex flex-col justify-between gap-4 rounded-2xl border border-red-950/80 bg-[#050505]/75 p-4 backdrop-blur-xs md:flex-row md:items-end sm:px-6">
              <div>
                <h2 id="projects-heading" className="text-2xl font-bold tracking-tight text-white">
                  Project Showcase Grid
                </h2>
                <p className="mt-1 text-sm text-zinc-300">
                  Filter by specialty or select any project card to inspect the full case study.
                </p>
              </div>

              <div className="flex flex-wrap gap-2" role="tablist" aria-label="Filter projects">
                {FILTERS.map((filter) => {
                  const active = activeFilter === filter;
                  return (
                    <button
                      key={filter}
                      type="button"
                      role="tab"
                      aria-selected={active}
                      onClick={() => setActiveFilter(filter)}
                      className={`rounded-full px-4 py-1.5 text-xs font-semibold transition ${
                        active
                          ? 'bg-[#dc2626] text-white'
                          : 'border border-red-900/80 bg-[#09090b]/90 text-zinc-200 hover:border-red-600 hover:text-white'
                      }`}
                    >
                      {filter}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {visibleStudies.map((study, idx) => (
                <article
                  key={study.id}
                  className="flex flex-col justify-between overflow-hidden rounded-2xl border border-red-900/75 bg-[#09090b]/82 backdrop-blur-xs transition hover:border-red-600"
                >
                  <div>
                    {!failedImages[`card-${study.id}`] && (
                      <div className="h-40 w-full overflow-hidden border-b border-red-950 bg-[#140507]">
                        <img
                          src={study.previewImageUrl}
                          alt={study.title}
                          onError={() => markImageFailed(`card-${study.id}`)}
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    )}

                    <div className="p-6 pb-0">
                      <div className="flex items-center justify-between gap-2 text-xs text-zinc-300">
                        <span className="inline-flex items-center gap-2 font-semibold text-red-300">
                          <span
                            className="h-2.5 w-2.5 rounded-full"
                            style={{ backgroundColor: study.badgeBg }}
                            aria-hidden="true"
                          />
                          {study.category}
                        </span>
                        <span>{study.year}</span>
                      </div>

                      <h3 className="mt-3 text-xl font-bold text-white">{study.title}</h3>
                      <p className="mt-1 text-xs font-semibold text-red-400">{study.role}</p>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-200">{study.overview}</p>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-red-950/80 p-6 pt-4">
                    <div className="flex flex-wrap gap-1.5">
                      {study.stack.map((tech) => (
                        <span
                          key={tech}
                          className="rounded border border-red-900/70 bg-[#050505]/90 px-2.5 py-1 text-xs text-zinc-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={() => {
                          setSlideIndex(idx);
                          setSelectedStudy(study);
                        }}
                        className="text-sm font-semibold text-red-400 transition hover:text-red-300"
                      >
                        View Case Study -&gt;
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          {/* 5. Dark Red and Black Footer */}
          <footer
            id="contact"
            className="mt-16 rounded-2xl border border-red-800/80 bg-gradient-to-br from-[#09090b]/90 via-[#140507]/85 to-[#450a0a]/75 p-6 backdrop-blur-xs sm:p-8"
          >
            <div className="grid gap-6 md:grid-cols-3">
              <div>
                <p className="text-xs font-semibold tracking-wider text-red-400 uppercase">
                  Profile &amp; Education
                </p>
                <h3 className="mt-2 text-lg font-bold text-white">{PROFILE.name}</h3>
                <p className="mt-1 text-sm text-zinc-200">{PROFILE.degree}</p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-wider text-red-400 uppercase">
                  Direct Contact
                </p>
                <p className="mt-2 text-sm text-zinc-100">
                  Email:{' '}
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="underline hover:text-red-300"
                  >
                    {PROFILE.email}
                  </a>
                </p>
                <p className="mt-1 text-sm text-zinc-100">
                  Phone:{' '}
                  <a
                    href={`tel:${PROFILE.phone}`}
                    className="underline hover:text-red-300"
                  >
                    {PROFILE.phone}
                  </a>
                </p>
              </div>

              <div>
                <p className="text-xs font-semibold tracking-wider text-red-400 uppercase">
                  Repositories &amp; Work
                </p>
                <p className="mt-2 text-sm text-zinc-200">
                  Browse code and technical projects on GitHub:
                </p>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 inline-block text-sm font-semibold text-red-400 underline hover:text-red-300"
                >
                  github.com/enockchola84-arch
                </a>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Case Study Detail Modal */}
      {selectedStudy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xs"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-study-title"
          onClick={() => setSelectedStudy(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-red-800/80 bg-[#09090b] p-6 text-zinc-100 shadow-2xl shadow-red-950/50 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-red-950 pb-5">
              <div>
                <span
                  className="inline-block rounded-full px-3 py-1 text-xs font-semibold text-white"
                  style={{ backgroundColor: selectedStudy.badgeBg }}
                >
                  {selectedStudy.category} • {selectedStudy.year}
                </span>
                <h2 id="modal-study-title" className="mt-3 text-2xl font-bold text-white">
                  {selectedStudy.title}
                </h2>
                <p className="mt-1 text-sm text-zinc-300">
                  {selectedStudy.role} — {selectedStudy.context}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setSelectedStudy(null)}
                className="rounded-lg border border-red-900 bg-[#140507] px-3.5 py-1.5 text-sm font-medium text-zinc-200 transition hover:border-red-500 hover:text-white"
              >
                Close
              </button>
            </div>

            <div className="mt-6 space-y-5 text-sm leading-relaxed text-zinc-200">
              {!failedImages[`modal-${selectedStudy.id}`] && (
                <div className="h-44 w-full overflow-hidden rounded-xl border border-red-900/70 bg-[#140507]">
                  <img
                    src={selectedStudy.previewImageUrl}
                    alt={selectedStudy.title}
                    onError={() => markImageFailed(`modal-${selectedStudy.id}`)}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
              )}

              <p className="text-base text-white">{selectedStudy.overview}</p>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-red-950 bg-[#050505]/90 p-4">
                  <h3 className="text-xs font-semibold tracking-wider text-red-400 uppercase">
                    Challenge
                  </h3>
                  <p className="mt-2 text-zinc-200">{selectedStudy.challenge}</p>
                </div>

                <div className="rounded-xl border border-red-950 bg-[#050505]/90 p-4">
                  <h3 className="text-xs font-semibold tracking-wider text-red-400 uppercase">
                    Execution
                  </h3>
                  <p className="mt-2 text-zinc-200">{selectedStudy.execution}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xs font-semibold tracking-wider text-red-400 uppercase">
                  Key Outcomes
                </h3>
                <ul className="mt-2.5 list-disc space-y-1.5 pl-5 text-zinc-200">
                  {selectedStudy.outcomes.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-semibold tracking-wider text-red-400 uppercase">
                  Stack &amp; Competencies
                </h3>
                <div className="mt-2 flex flex-wrap gap-2">
                  {selectedStudy.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-red-900/70 bg-[#050505] px-2.5 py-1 text-xs font-medium text-red-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
