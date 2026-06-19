import { useState, useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import heroMine from "@/assets/hero-mine.jpg";
import newsCopper from "@/assets/news-copper.jpg";
import newsGold from "@/assets/news-gold.jpg";
import newsIron from "@/assets/news-iron.jpg";
import newsLithium from "@/assets/news-lithium.jpg";
import newsEngineer from "@/assets/news-engineer.jpg";
import newsExploration from "@/assets/news-exploration.jpg";
import newsDeal from "@/assets/news-deal.jpg";
import { ArrowUpRight, ArrowRight, Search, Menu, TrendingUp, TrendingDown, Play } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mining Intelligence" },
      { name: "description", content: "Editorial coverage of global mining: critical minerals, operations, deals, drilling results, and the people moving the earth." },
    ],
  }),
  component: Home,
});

const tickers = [
  { sym: "GOLD", px: "2,418.30", chg: "+0.84%", up: true },
  { sym: "COPPER", px: "4.51", chg: "+1.62%", up: true },
  { sym: "IRON ORE", px: "108.20", chg: "-0.42%", up: false },
  { sym: "LITHIUM", px: "13,950", chg: "+2.10%", up: true },
  { sym: "NICKEL", px: "16,840", chg: "-0.18%", up: false },
  { sym: "URANIUM", px: "84.75", chg: "+0.93%", up: true },
  { sym: "SILVER", px: "31.42", chg: "+1.24%", up: true },
];

const heroSlides = [
  {
    img: heroMine,
    tag: "Cover Story",
    issue: "Issue 412 · June 2026",
    title: "Inside the world's deepest open-pit: how a single mine bankrolls a copper supercycle.",
    desc: "Twelve months of reporting from the Atacama. Drilling logs, payroll envelopes, and the geopolitics of a metal we forgot to mine.",
    cta: "Read the long read",
    video: "Watch the 14-min documentary"
  },
  {
    img: newsCopper,
    tag: "Andes Push",
    issue: "Issue 412 · June 2026",
    title: "Redefining global supply: why South America's copper extraction holds the key.",
    desc: "A comprehensive investigation into infrastructure upgrades and deep-vein engineering across active Chilean deposits.",
    cta: "Read analysis",
    video: "Watch field interview"
  },
  {
    img: newsGold,
    tag: "Innovation",
    issue: "Issue 412 · June 2026",
    title: "Going autonomous: deep underground drilling powered by live telemetry data.",
    desc: "How major operations are removing operators from hazardous environments while increasing yield by up to thirty percent.",
    cta: "Explore tech",
    video: "Watch deep drill tour"
  }
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <TopBar />
      <Nav />
      <Hero />
      <NewsRow />
      <SponsorBanner label="The Mineral Wire" tagline="Critical minerals coverage, delivered weekly." />
      <CategorySection
        eyebrow="01 — Today on the desk"
        title="Mineral Wealth"
        items={[
          { tag: "Copper", img: newsCopper, title: "Andes copper push: Codelco lifts grade guidance ahead of Q3 print", meta: "By Imogen Walsh · 6 min read" },
          { tag: "Gold", img: newsGold, title: "Underground tonnage at Cadia returns as ventilation works complete", meta: "By Marcus Tan · 4 min read" },
          { tag: "Lithium", img: newsLithium, title: "Salar lithium expansion shows promise as evaporation rates rise 11%", meta: "By Priya Anand · 7 min read" },
          { tag: "Iron Ore", img: newsIron, title: "Pilbara haul records broken — autonomy program clocks 4.2bn tonnes", meta: "By Diego Romero · 5 min read" },
        ]}
        accent="mint"
      />
      <ThreeColumn />
      <SponsorBanner label="Pickaxe Quarterly" tagline="Field notes from the world's hardest jobs." />
      <DarkFeature />
      <TrendingGrid />
      <PromoCallout />
      <SponsorBanner label="The Mineral Wire" tagline="Six picks, every Friday. Sign up free." />
      <ProjectsRow />
      <BigImageFeature />
      <PairFeature />
      <ChartsBlock />
      <EventsCallout />
      <BrowseByCommodity />
      <PeopleAndOpinion />
      <ArchiveList />
      <Footer />
    </div>
  );
}

function TopBar() {
  return (
    <div className="border-b border-border bg-onyx text-onyx-foreground">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .ticker-marquee-wrapper {
          display: flex;
          width: max-content;
          animation: marqueeScroll 35s linear infinite;
        }
        .ticker-marquee-wrapper:hover {
          animation-play-state: paused;
        }
      `}} />
      <div className="mx-auto flex max-w-[1400px] items-center gap-6 overflow-hidden px-6 py-2 text-xs">
        <span className="eyebrow shrink-0 text-amber">LIVE · COMMODITIES</span>
        <div className="flex-1 overflow-hidden">
          <div className="ticker-marquee-wrapper">
            <div className="flex gap-8 shrink-0 pr-8">
              {tickers.map((t, idx) => (
                <div key={`t1-${idx}`} className="flex shrink-0 items-center gap-2">
                  <span className="text-onyx-foreground/60">{t.sym}</span>
                  <span className="font-medium">{t.px}</span>
                  <span className={t.up ? "text-mint" : "text-copper"}>
                    {t.up ? <TrendingUp className="inline h-3 w-3" /> : <TrendingDown className="inline h-3 w-3" />} {t.chg}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex gap-8 shrink-0 pr-8" aria-hidden="true">
              {tickers.map((t, idx) => (
                <div key={`t2-${idx}`} className="flex shrink-0 items-center gap-2">
                  <span className="text-onyx-foreground/60">{t.sym}</span>
                  <span className="font-medium">{t.px}</span>
                  <span className={t.up ? "text-mint" : "text-copper"}>
                    {t.up ? <TrendingUp className="inline h-3 w-3" /> : <TrendingDown className="inline h-3 w-3" />} {t.chg}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Nav() {
  const links = ["Mineral Wealth", "Operations", "Exploration", "Markets", "Deals", "People", "Events", "Reports"];
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5">
        <a href="/" className="flex items-center gap-3">
          <img 
            src="https://mining.com.au/wp-content/uploads/2025/10/mining-logo-2.svg" 
            alt="Mining Logo" 
            className="h-8 w-auto brightness-0"
          />
          <span className="eyebrow hidden md:inline">Est. 1998</span>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map(l => (
            <a key={l} href="#" className="editorial-link text-sm font-medium text-foreground/80 hover:text-foreground">
              {l}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button aria-label="Search" className="grid h-9 w-9 place-items-center rounded-full border border-border hover:bg-muted">
            <Search className="h-4 w-4" />
          </button>
          <a href="#subscribe" className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:bg-copper md:inline-flex">
            Subscribe
          </a>
          <button aria-label="Menu" className="grid h-9 w-9 place-items-center rounded-full border border-border lg:hidden">
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-6 px-6 py-10 lg:py-14">
        <div className="col-span-12 lg:col-span-8">
          <div className="group relative aspect-[16/10] overflow-hidden rounded-xl bg-muted">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 via-onyx/30 to-transparent" />
                <div className="absolute left-0 right-0 bottom-0 p-8 lg:p-12 text-onyx-foreground">
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-copper px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-copper-foreground">
                      {slide.tag}
                    </span>
                    <span className="eyebrow text-onyx-foreground/70">
                      {slide.issue}
                    </span>
                  </div>
                  <h1 className="mt-5 max-w-3xl font-display text-3xl font-medium leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
                    {slide.title}
                  </h1>
                  <p className="mt-5 max-w-xl text-sm text-onyx-foreground/80 md:text-base">
                    {slide.desc}
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-full bg-mint px-5 py-3 text-sm font-medium text-mint-foreground hover:bg-mint/90"
                    >
                      {slide.cta} <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 text-sm font-medium text-onyx-foreground hover:text-mint"
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-full bg-onyx-foreground/15">
                        <Play className="h-3.5 w-3.5" />
                      </span>
                      {slide.video}
                    </a>
                  </div>
                </div>
              </div>
            ))}
            
            <div className="absolute bottom-4 right-6 lg:bottom-6 lg:right-10 z-20 flex gap-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "w-6 bg-mint" : "w-1.5 bg-white/40"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <aside className="col-span-12 flex flex-col gap-6 lg:col-span-4">
          <div className="rounded-xl border border-border bg-card p-6">
            <p className="eyebrow">Editor's Desk</p>
            <p className="mt-3 font-display text-xl leading-snug">
              "Critical minerals aren't critical because they're rare. They're critical because nobody wants to live next to where they come from."
            </p>
            <p className="mt-4 text-xs text-muted-foreground">— Helen Marchetti, Editor in Chief</p>
          </div>

          <ul className="divide-y divide-border rounded-xl border border-border bg-card">
            {[
              { n: "01", t: "BHP and Anglo restart talks — this time on smelter logistics, not price." },
              { n: "02", t: "DRC cobalt export ban: refiners brace for a 90-day inventory cliff." },
              { n: "03", t: "First Quantum's Cobre Panama returns with a leaner ESG scorecard." },
              { n: "04", t: "Argentina's lithium triangle adds two new offtake partners overnight." },
            ].map(i => (
              <li key={i.n}>
                <a href="#" className="flex items-start gap-4 p-5 hover:bg-muted">
                  <span className="ticker w-6 text-xs text-copper">{i.n}</span>
                  <span className="text-sm leading-snug">{i.t}</span>
                  <ArrowRight className="ml-auto mt-1 h-4 w-4 shrink-0 opacity-40" />
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

function NewsCard({ img, tag, title, meta, dark }: { img: string; tag: string; title: string; meta: string; dark?: boolean }) {
  return (
    <a href="#" className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
        <img src={img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground">{tag}</span>
      </div>
      <h3 className={`mt-4 font-display text-lg font-medium leading-snug group-hover:text-copper ${dark ? "text-onyx-foreground" : ""}`}>
        {title}
      </h3>
      <p className={`mt-2 text-xs ${dark ? "text-onyx-foreground/60" : "text-muted-foreground"}`}>{meta}</p>
    </a>
  );
}

function SectionHeader({ eyebrow, title, link = "View all" }: { eyebrow: string; title: string; link?: string }) {
  return (
    <div className="mb-8 flex items-end justify-between gap-6">
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 font-display text-3xl font-medium tracking-tight md:text-4xl">{title}</h2>
      </div>
      <a href="#" className="hidden items-center gap-1 text-sm font-medium text-copper hover:underline md:inline-flex">
        {link} <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
}

function NewsRow() {
  const items = [
    { img: newsEngineer, tag: "Operations", title: "How a single shift supervisor cut downtime by 28% at Mount Whaleback", meta: "5 min read" },
    { img: newsExploration, tag: "Exploration", title: "Pilbara drillers strike high-grade hematite in unmapped tenement", meta: "3 min read" },
    { img: newsDeal, tag: "Deals", title: "A $4.1bn handshake: the inside story of the Newcrest-Newmont closer", meta: "9 min read" },
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-16">
        <SectionHeader eyebrow="Briefings" title="On the wire today" />
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((i, k) => <NewsCard key={k} {...i} />)}
        </div>
      </div>
    </section>
  );
}

function SponsorBanner({ label, tagline }: { label: string; tagline: string }) {
  return (
    <section className="border-b border-border bg-onyx text-onyx-foreground">
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-4 px-6 py-5 md:flex-row">
        <div className="flex items-center gap-4">
          <span className="grid h-10 w-10 place-items-center rounded-full bg-copper text-xs font-bold tracking-widest text-copper-foreground">L&L</span>
          <div>
            <p className="font-display text-lg leading-tight">{label}</p>
            <p className="text-xs text-onyx-foreground/60">{tagline}</p>
          </div>
        </div>
        <form className="flex w-full max-w-md items-center gap-2 md:w-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 rounded-full border border-onyx-foreground/20 bg-onyx-foreground/5 px-4 py-2.5 text-sm placeholder:text-onyx-foreground/40 focus:outline-none focus:ring-2 focus:ring-copper"
          />
          <button className="rounded-full bg-mint px-5 py-2.5 text-sm font-medium text-mint-foreground hover:bg-mint/90">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

function CategorySection({ eyebrow, title, items, accent }: {
  eyebrow: string; title: string; items: { tag: string; img: string; title: string; meta: string }[]; accent?: "mint" | "none";
}) {
  return (
    <section className={accent === "mint" ? "border-b border-border bg-mint text-mint-foreground" : "border-b border-border"}>
      <div className="mx-auto max-w-[1400px] px-6 py-16">
        <SectionHeader eyebrow={eyebrow} title={title} />
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((i, k) => <NewsCard key={k} {...i} />)}
        </div>
        <div className="mt-12 flex justify-center">
          <a href="#" className="rounded-full border border-mint-foreground/30 px-6 py-3 text-sm font-medium hover:bg-mint-foreground hover:text-mint">
            More Mineral Wealth →
          </a>
        </div>
      </div>
    </section>
  );
}

function ThreeColumn() {
  const cols = [
    { tag: "Field Diary", img: newsExploration, title: "Six weeks on the rig: drilling in 47°C heat for a 0.4% intercept", body: "Our reporter embedded with a junior explorer in the Tanami. What surfaced wasn't gold — it was the labour math of modern exploration." },
    { tag: "Operations", img: newsGold, title: "The lift cage broke at 1,200 metres. Here's what happened next.", body: "An incident report read like a thriller. We rebuilt the night minute-by-minute from interviews with all seven survivors." },
    { tag: "Economics", img: newsIron, title: "Why iron ore's floor keeps rising — and what's underneath it", body: "Strip ratios, swap lines, and the Chinese stimulus everyone keeps mispricing. A clear-eyed primer for the next 18 months." },
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-16">
        <SectionHeader eyebrow="02 — The long form" title="Reads worth a coffee" />
        <div className="grid gap-10 lg:grid-cols-3">
          {cols.map((c, k) => (
            <article key={k} className="group">
              <div className="relative aspect-[5/4] overflow-hidden rounded-lg bg-muted">
                <img src={c.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="eyebrow mt-5 text-copper">{c.tag}</p>
              <h3 className="mt-3 font-display text-2xl leading-tight group-hover:text-copper">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
              <a href="#" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-foreground editorial-link">
                Continue reading <ArrowUpRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function DarkFeature() {
  const items = [
    { img: newsLithium, tag: "Critical Minerals", title: "Lithium's quiet majority: brine producers eating the market share", meta: "Markets · 8 min" },
    { img: newsExploration, tag: "Discovery", title: "A junior, a helicopter, and a 4-kilometre anomaly nobody mapped", meta: "Exploration · 6 min" },
    { img: newsCopper, tag: "Refining", title: "Smelter capacity is the new bottleneck — and Indonesia just bought all of it", meta: "Markets · 7 min" },
    { img: newsEngineer, tag: "People", title: "The shift engineer who keeps a billion-dollar truck fleet on time", meta: "Profile · 5 min" },
  ];
  return (
    <section className="border-b border-border bg-onyx text-onyx-foreground">
      <div className="mx-auto max-w-[1400px] px-6 py-20">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-amber">03 — After hours</p>
            <h2 className="mt-3 font-display text-4xl font-medium tracking-tight">The night desk</h2>
          </div>
          <a href="#" className="hidden items-center gap-1 text-sm font-medium text-mint hover:underline md:inline-flex">
            View all <ArrowRight className="h-4 w-4" />
          </a>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {items.map((i, k) => <NewsCard key={k} {...i} dark />)}
        </div>
      </div>
    </section>
  );
}

function TrendingGrid() {
  const items = [
    { img: newsGold, tag: "Gold", title: "Newmont's Boddington gives up grade, picks up volume" },
    { img: newsCopper, tag: "Copper", title: "Glencore Mt Isa: a smelter's last stand or a strategic reset?" },
    { img: newsIron, tag: "Iron Ore", title: "Roy Hill quietly trials hydrogen-blend haul trucks" },
    { img: newsLithium, tag: "Lithium", title: "Pilbara Minerals locks in a five-year offtake with LG" },
    { img: newsDeal, tag: "Deals", title: "The South32 spin-off everyone forgot is finally about to land" },
    { img: newsExploration, tag: "Exploration", title: "REE drillers move on the West Arunta — three names to watch" },
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-16">
        <SectionHeader eyebrow="Trending today" title="What the floor is reading" />
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((i, k) => (
            <a key={k} href="#" className="group flex gap-4">
              <div className="relative h-28 w-32 shrink-0 overflow-hidden rounded-md bg-muted">
                <img src={i.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="flex flex-1 flex-col">
                <span className="eyebrow text-copper">{i.tag}</span>
                <h3 className="mt-2 font-display text-base leading-snug group-hover:text-copper">{i.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function PromoCallout() {
  return (
    <section className="border-b border-border bg-mint text-mint-foreground">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8 px-6 py-20">
        <div className="col-span-12 lg:col-span-7">
          <p className="eyebrow">Special report · drops July 14</p>
          <h2 className="mt-4 font-display text-5xl font-medium leading-[1.05] tracking-tight md:text-6xl">
            Full-stack exploration: <span className="italic">how juniors are out-spending the majors per metre.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed">
            A 120-page report with ground-truth interviews from 38 sites across four continents. Pre-order now and the first chapter lands in your inbox tonight.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#" className="inline-flex items-center gap-2 rounded-full bg-onyx px-6 py-3 text-sm font-medium text-onyx-foreground hover:bg-foreground">
              Pre-order · $89 <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#" className="text-sm font-medium underline underline-offset-4">See the chapter list</a>
          </div>
        </div>
        <div className="col-span-12 grid grid-cols-3 gap-4 lg:col-span-5">
          <div className="col-span-2 rounded-xl bg-mint-foreground p-6 text-mint">
            <p className="ticker text-xs opacity-70">38</p>
            <p className="mt-2 font-display text-3xl leading-tight">sites visited across 4 continents</p>
          </div>
          <div className="rounded-xl bg-onyx p-6 text-onyx-foreground">
            <p className="ticker text-xs opacity-70">$1.2bn</p>
            <p className="mt-2 font-display text-xl leading-tight">spent by juniors in 2025</p>
          </div>
          <div className="rounded-xl bg-copper p-6 text-copper-foreground">
            <p className="ticker text-xs opacity-80">14</p>
            <p className="mt-2 font-display text-xl leading-tight">commodities benchmarked</p>
          </div>
          <div className="col-span-2 rounded-xl border border-mint-foreground/30 p-6">
            <p className="ticker text-xs opacity-70">120 pages · 47 charts · 31 interviews</p>
            <p className="mt-2 font-display text-xl leading-tight">The most rigorous exploration audit we've ever shipped.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsRow() {
  const items = [
    { img: newsExploration, tag: "Pilbara, AU", title: "Mt Crawford: the access road that became a copper story" },
    { img: newsGold, tag: "Nunavut, CA", title: "Back River gold pours first dore — at -34°C" },
    { img: newsLithium, tag: "Salta, AR", title: "Sal de Vida ramps to 40,000 tpa as ponds mature" },
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-16">
        <SectionHeader eyebrow="04 — On the ground" title="Project dispatches" />
        <div className="grid gap-8 md:grid-cols-3">
          {items.map((i, k) => <NewsCard key={k} {...i} meta="Field dispatch · 6 min" />)}
        </div>
      </div>
    </section>
  );
}

function BigImageFeature() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="relative aspect-[21/9] overflow-hidden rounded-xl">
          <img src={newsExploration} alt="Aerial of remote outback exploration" loading="lazy" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-onyx/85 via-onyx/40 to-transparent" />
          <div className="absolute inset-y-0 left-0 flex w-full max-w-2xl flex-col justify-center p-10 text-onyx-foreground lg:p-16">
            <p className="eyebrow text-amber">Documentary series</p>
            <h2 className="mt-4 font-display text-3xl font-medium leading-tight md:text-5xl">
              Red Earth, White Paper — six episodes from the world's most under-reported tenements.
            </h2>
            <p className="mt-6 max-w-md text-sm text-onyx-foreground/80">
              We rode with the drillers, paid the camp cooks, and asked the questions analysts can't. Streaming now for subscribers.
            </p>
            <a href="#" className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-mint px-5 py-3 text-sm font-medium text-mint-foreground">
              Start episode 01 <Play className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function PairFeature() {
  const items = [
    { img: newsGold, tag: "Safety", title: "A near-miss at 800m: what the incident review actually changed", body: "Twelve recommendations. Four were adopted within the week. We tracked what happened to the other eight." },
    { img: newsDeal, tag: "M&A", title: "The merger nobody priced in — and three more like it queueing up", body: "Inside the boardroom telemetry: who's talking to whom, and why bankers are quietly rebuilding their commodity desks." },
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-16 md:grid-cols-2">
        {items.map((c, k) => (
          <article key={k} className="group">
            <div className="relative aspect-[3/2] overflow-hidden rounded-lg bg-muted">
              <img src={c.img} alt="" loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <p className="eyebrow mt-5 text-copper">{c.tag}</p>
            <h3 className="mt-3 font-display text-2xl leading-tight group-hover:text-copper">{c.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function ChartsBlock() {
  const rows = [
    { name: "Gold spot", px: "$2,418.30", chg: "+0.84", up: true, spark: "M0 28 L20 22 L40 25 L60 18 L80 20 L100 12 L120 14 L140 8" },
    { name: "Copper LME", px: "$4.51/lb", chg: "+1.62", up: true, spark: "M0 22 L20 24 L40 18 L60 16 L80 12 L100 14 L120 9 L140 6" },
    { name: "Iron ore 62%", px: "$108.20/t", chg: "-0.42", up: false, spark: "M0 12 L20 14 L40 11 L60 18 L80 20 L100 24 L120 22 L140 26" },
  ];
  return (
    <section className="border-b border-border bg-onyx text-onyx-foreground">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8 px-6 py-20">
        <div className="col-span-12 lg:col-span-8">
          <p className="eyebrow text-amber">05 — Markets</p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight">Commodity board</h2>
          <div className="mt-8 divide-y divide-onyx-foreground/15 rounded-xl border border-onyx-foreground/15">
            {rows.map(r => (
              <div key={r.name} className="grid grid-cols-12 items-center gap-4 p-5">
                <div className="col-span-4">
                  <p className="font-display text-xl">{r.name}</p>
                  <p className="text-xs text-onyx-foreground/60">Last update · 30s ago</p>
                </div>
                <div className="col-span-4">
                  <svg viewBox="0 0 140 32" className="h-10 w-full">
                    <path d={r.spark} fill="none" stroke={r.up ? "oklch(0.88 0.05 165)" : "oklch(0.62 0.14 45)"} strokeWidth="1.5" />
                  </svg>
                </div>
                <div className="col-span-2 ticker text-right">{r.px}</div>
                <div className={`col-span-2 ticker text-right ${r.up ? "text-mint" : "text-copper"}`}>{r.chg}%</div>
              </div>
            ))}
          </div>
        </div>
        <aside className="col-span-12 flex flex-col gap-4 lg:col-span-4">
          <div className="rounded-xl border border-onyx-foreground/15 p-6">
            <p className="eyebrow text-amber">Newsroom take</p>
            <p className="mt-3 font-display text-xl leading-tight">"The copper trade isn't a squeeze. It's a slow, methodical re-pricing of what an electric grid actually weighs."</p>
            <p className="mt-4 text-xs text-onyx-foreground/60">— Friday roundtable, June 16</p>
          </div>
          <a href="#" className="rounded-xl bg-mint p-6 text-mint-foreground hover:bg-mint/90">
            <p className="eyebrow">Pro subscribers</p>
            <p className="mt-2 font-display text-xl leading-tight">Open the full board with historical spreads, FX overlays, and inventory feeds. <ArrowUpRight className="ml-1 inline h-4 w-4" /></p>
          </a>
        </aside>
      </div>
    </section>
  );
}

function EventsCallout() {
  const events = [
    { date: "JUL 14", city: "Perth", title: "Diggers & Dealers — what's actually closing this year" },
    { date: "AUG 03", city: "Toronto", title: "PDAC midyear: junior financing roundtable (invite-only)" },
    { date: "SEP 21", city: "Santiago", title: "Cesco Copper Week — our editor moderates the smelter panel" },
  ];
  return (
    <section className="border-b border-border bg-mint text-mint-foreground">
      <div className="mx-auto grid max-w-[1400px] grid-cols-12 gap-8 px-6 py-16">
        <div className="col-span-12 lg:col-span-4">
          <p className="eyebrow">Calendar</p>
          <h2 className="mt-3 font-display text-4xl font-medium tracking-tight">Where we'll be</h2>
          <p className="mt-4 text-sm leading-relaxed">Three trips on the desk's calendar this quarter. Email the editor if you'd like a coffee on the ground.</p>
        </div>
        <ul className="col-span-12 divide-y divide-mint-foreground/20 lg:col-span-8">
          {events.map(e => (
            <li key={e.title} className="grid grid-cols-12 items-center gap-4 py-6">
              <div className="col-span-3 md:col-span-2">
                <p className="ticker text-2xl font-medium">{e.date}</p>
                <p className="eyebrow">{e.city}</p>
              </div>
              <p className="col-span-7 font-display text-xl leading-tight md:col-span-8">{e.title}</p>
              <a href="#" className="col-span-2 justify-self-end rounded-full border border-mint-foreground/40 px-4 py-2 text-xs font-medium hover:bg-mint-foreground hover:text-mint">RSVP</a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function BrowseByCommodity() {
  const items = [
    { name: "Copper", img: newsCopper },
    { name: "Gold", img: newsGold },
    { name: "Iron Ore", img: newsIron },
    { name: "Lithium", img: newsLithium },
    { name: "Nickel", img: newsExploration },
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-16">
        <SectionHeader eyebrow="By commodity" title="Browse the desks" />
        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {items.map(i => (
            <a key={i.name} href="#" className="group relative aspect-[3/4] overflow-hidden rounded-lg">
              <img src={i.img} alt={i.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="font-display text-xl text-onyx-foreground">{i.name}</p>
                <p className="text-xs text-onyx-foreground/70">View desk →</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function PeopleAndOpinion() {
  return (
    <section className="border-b border-border">
      <div className="mx-auto grid max-w-[1400px] gap-10 px-6 py-16 md:grid-cols-2">
        <article className="group">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <img src={newsEngineer} alt="" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <p className="eyebrow mt-5 text-copper">Profile</p>
          <h3 className="mt-3 font-display text-3xl leading-tight">The 27-year-old running a billion-dollar haul fleet from a caravan.</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            Mei Lin doesn't believe in dashboards. She believes in walking the pit before sunrise. We followed her for a week.
          </p>
        </article>
        <article className="group">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
            <img src={newsDeal} alt="" loading="lazy" className="h-full w-full object-cover" />
          </div>
          <p className="eyebrow mt-5 text-copper">Opinion</p>
          <h3 className="mt-3 font-display text-3xl leading-tight">Mining's ESG fatigue is a feature, not a bug. Don't waste it.</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            The scorecards became theatre. The room is finally quiet enough to talk about the trade-offs that actually matter.
          </p>
        </article>
      </div>
    </section>
  );
}

function ArchiveList() {
  const items = [
    "Indonesia approves third smelter complex — what it means for nickel pricing",
    "Why royalty companies just had their best month in three years",
    "Coal's quiet renaissance: who's buying, who's selling, and at what spread",
    "A geologist's case for spending less on satellites and more on outcrops",
    "Tailings regulation in Brazil: the next 18 months are the dangerous ones",
    "Diamond auctions resume in Antwerp after a six-month buyer's strike",
    "Hydrogen haul truck trial: the numbers from quarter one are not what you'd think",
    "Why labour shortages are pushing automation faster than analysts modelled",
  ];
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1400px] px-6 py-16">
        <SectionHeader eyebrow="From the archive" title="Recent reporting" />
        <ul className="divide-y divide-border">
          {items.map((t, k) => (
            <li key={k}>
              <a href="#" className="grid grid-cols-12 items-center gap-4 py-5 hover:bg-muted">
                <span className="ticker col-span-1 text-xs text-copper">{String(k + 1).padStart(2, "0")}</span>
                <span className="col-span-9 font-display text-lg leading-snug md:col-span-10">{t}</span>
                <span className="col-span-2 hidden text-right text-xs text-muted-foreground md:block md:col-span-1">{4 + k} min</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-onyx text-onyx-foreground">
      <div className="mx-auto max-w-[1400px] px-6 py-16">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <img 
              src="https://mining.com.au/wp-content/uploads/2025/10/mining-logo-2.svg" 
              alt="Mining Logo" 
              className="h-10 w-auto brightness-0 invert"
            />
            <p className="mt-4 max-w-sm text-sm text-onyx-foreground/70">
              Independent editorial coverage of global mining. No native ads. No reprint deals. Reader-supported since 1998.
            </p>
            <form className="mt-6 flex max-w-sm items-center gap-2">
              <input type="email" placeholder="Editor's weekly →" className="flex-1 rounded-full border border-onyx-foreground/20 bg-transparent px-4 py-2.5 text-sm placeholder:text-onyx-foreground/40 focus:outline-none focus:ring-2 focus:ring-copper" />
              <button className="rounded-full bg-mint px-4 py-2.5 text-sm font-medium text-mint-foreground">Join</button>
            </form>
          </div>
          {[
            { h: "Desks", l: ["Mineral Wealth", "Operations", "Exploration", "Markets", "People"] },
            { h: "Editorial", l: ["About", "Editors", "Standards", "Corrections", "Contact"] },
            { h: "Pro subscription", l: ["Pro subscription", "Reports", "Events", "Pickaxe Quarterly", "RSS"] },
            { h: "Legal", l: ["Privacy", "Terms", "Ethics", "Press", "Careers"] },
          ].map(c => (
            <div key={c.h} className="md:col-span-2">
              <p className="eyebrow text-amber">{c.h}</p>
              <ul className="mt-4 space-y-2 text-sm">
                {c.l.map(x => (
                  <li key={x}><a href="#" className="text-onyx-foreground/80 hover:text-mint">{x}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-onyx-foreground/15 pt-8 text-xs text-onyx-foreground/60 md:flex-row md:items-center">
          <p>© 2026 Mining.com.au Editorial Co. — Printed (digitally) in Perth, London, and Toronto.</p>
          <p className="ticker">v2.6 · Issue 412</p>
        </div>
      </div>
    </footer>
  );
}