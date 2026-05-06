import Image from "next/image";
import Link from "next/link";
import { Reveal, CountUp, PaintGloss } from "@/components/animated";

/* -----------------------------------------------------------
   Gulf Coast Dent Removal — single-page homepage
   Spring Hill, FL · Paintless Dent Repair · Since 2019
   Real photos sourced from the business's own Nextdoor page.
   ----------------------------------------------------------- */

const PHONE_DISPLAY = "(727) 243-4110";
const PHONE_HREF = "tel:+17272434110";

/* Real before/after pair — same vehicle type (white Toyota Sequoia
   rear quarter / panel). Sourced from the business's own posts. */
const WORK_PAIR = {
  before: {
    src: "/photos/work-1.jpeg",
    alt: "Rear quarter panel of a white Toyota Sequoia with a clear dent and scuffed paint, photographed in a residential driveway",
  },
  after: {
    src: "/photos/work-2.jpeg",
    alt: "The same rear quarter panel after paintless dent repair — smooth, factory paint preserved",
  },
};

const REPAIR_LIST = [
  "Door dings & dents",
  "Hail damage",
  "Fender, hood, and quarter panel dents",
  "Roof and trunk lid dents",
  "Truck bed rail damage",
  "Light surface damage — no paint required",
];

/* Real, lightly-trimmed customer quotes pulled from the
   business's Birdeye reviews (239 reviews, 5-star). */
const TESTIMONIALS = [
  {
    quote: "Incredibly quality workmanship. 100% of the dent is gone in minimal time.",
    by: "Jesse O. · Birdeye review",
  },
  {
    quote: "Miraculous. Took out about six dents from my car. Looks like new again.",
    by: "Michael B. · Birdeye review",
  },
];

export default function Page() {
  const year = new Date().getFullYear();

  return (
    <main className="min-h-screen bg-bone text-graphite">
      {/* -------------------- Top nav -------------------- */}
      <header className="fixed inset-x-0 top-0 z-40 bg-bone/85 backdrop-blur hairline-b">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 h-[68px] flex items-center justify-between">
          <Link
            href="#top"
            className="group flex items-baseline gap-3 text-ink hover:text-brass transition-colors"
          >
            <span className="font-display text-[1.05rem] tracking-tight font-medium">
              Gulf Coast Dent Removal
            </span>
            <span className="hidden sm:inline text-[0.62rem] caps text-ash">
              Spring Hill, FL
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-[0.7rem] caps text-slate">
            <a href="#about-pdr" className="uline hover:text-ink transition-colors">
              The Process
            </a>
            <a href="#work" className="uline hover:text-ink transition-colors">
              The Work
            </a>
            <a href="#craft" className="uline hover:text-ink transition-colors">
              The Craft
            </a>
            <a href="#repairs" className="uline hover:text-ink transition-colors">
              Repairs
            </a>
            <a
              href={PHONE_HREF}
              className="uline text-ink hover:text-brass transition-colors tnum"
            >
              {PHONE_DISPLAY}
            </a>
            <a
              href="#contact"
              className="text-umber uline hover:text-ink transition-colors"
            >
              Request a Quote
            </a>
          </nav>
          {/* Mobile-only phone CTA — large tap area (≥44×44) */}
          <a
            href={PHONE_HREF}
            aria-label="Call Gulf Coast Dent Removal"
            className="md:hidden inline-flex items-center justify-center min-h-[44px] min-w-[64px] -mr-2 px-3 text-[0.74rem] caps text-umber tnum hover:text-ink transition-colors"
          >
            Call
          </a>
        </div>
      </header>

      {/* -------------------- Hero -------------------- */}
      <section
        id="top"
        className="relative pt-[68px] min-h-[92vh] flex items-center overflow-hidden"
      >
        {/* Hero photograph: Rob's actual lit shop sign at night.
            Slow Ken-Burns drift via .hero-photo. */}
        <div className="absolute inset-0 pt-[68px] overflow-hidden">
          <div className="relative w-full h-full hero-photo">
            <Image
              src="/photos/cover.jpeg"
              alt="The illuminated 'Gulf Coast Dent Removal' shop sign at night, the brushed-metal panel catching the light"
              fill
              priority
              sizes="100vw"
              className="object-cover photo-tone"
            />
            {/* Warm wash to keep the photo quiet behind text */}
            <div className="absolute inset-0 bg-gradient-to-r from-bone via-bone/85 to-bone/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-bone via-transparent to-transparent" />
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10 w-full">
          <div className="max-w-2xl">
            {/* GCDR brand wordmark — Rob's actual logo (three muscle
                cars cut into the GCDR letterforms). Source is a
                proper transparent PNG cut from the Facebook upload,
                so it sits cleanly on the bone background with no
                rectangular artifact. Sized small so it reads as a
                brand mark, not a hero centerpiece — the editorial
                typography below still does the visual work. */}
            <Reveal>
              <div className="mb-6 inline-block">
                <Image
                  src="/photos/gcdr-wordmark.png"
                  alt="Gulf Coast Dent Removal — GCDR wordmark"
                  width={520}
                  height={200}
                  priority
                  className="h-14 sm:h-20 w-auto object-contain"
                />
              </div>
            </Reveal>
            <Reveal delay={150}>
              <p className="caps text-[0.7rem] text-umber mb-6">
                Paintless Dent Repair · Spring Hill, FL
              </p>
            </Reveal>

            {/* Headline gets the signature paint-sweep animation —
                a brass/white highlight glides across the type on
                load, like light catching on freshly polished paint. */}
            <h1 className="font-display text-[clamp(2.4rem,6vw,4.6rem)] leading-[1.02] tracking-[-0.02em] text-ink font-light">
              <span className="paint-sweep block">Dents removed.</span>
              <span className="paint-sweep paint-sweep-slow italic font-normal block">
                Paint preserved.
              </span>
              <span
                className="paint-sweep block"
                style={{ animationDelay: "1100ms" }}
              >
                No bodywork.
              </span>
            </h1>

            <Reveal delay={1400}>
              <p className="mt-8 max-w-md text-[1.02rem] leading-relaxed text-slate">
                A specialty trade. Door dings, hail damage, and panel dents
                shaped out by hand — without painting, fillers, or replacement
                parts. The original factory finish remains.
              </p>
            </Reveal>

            <Reveal delay={1600}>
              <div className="mt-10 flex flex-wrap items-center gap-6">
                <a
                  href="#contact"
                  className="cta-arrow inline-flex items-center gap-3 bg-ink text-bone px-7 py-4 text-[0.72rem] caps hover:bg-brass transition-colors"
                >
                  Request a Quote
                  <span aria-hidden>—</span>
                </a>
                <a
                  href={PHONE_HREF}
                  className="cta-arrow inline-flex items-center gap-3 px-4 py-4 text-[0.72rem] caps text-ink hover:text-umber transition-colors border-b border-rule tnum -mx-4"
                >
                  {PHONE_DISPLAY}
                  <span aria-hidden>—</span>
                </a>
              </div>
            </Reveal>

            <Reveal delay={1800}>
              <div className="mt-14 flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-8 text-[0.7rem] caps text-ash">
                <span>By Appointment</span>
                <span className="w-px h-3 bg-rule" />
                <span>Mobile Service</span>
                <span className="w-px h-3 bg-rule" />
                <span>Free Estimates</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------------------- What PDR Is -------------------- */}
      <section
        id="about-pdr"
        className="relative py-28 lg:py-40 bg-bone hairline-t"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <Reveal as="div" className="lg:col-span-4">
              <p className="caps text-[0.66rem] text-umber mb-5 tnum">
                01 — The Process
              </p>
              <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.08] tracking-[-0.01em] text-ink font-light">
                What paintless
                <br />
                dent repair is.
              </h2>
            </Reveal>

            <div className="lg:col-span-7 lg:col-start-6 space-y-7 text-[1.02rem] leading-[1.75] text-slate max-w-prose">
              <Reveal delay={120}>
                <p>
                  Paintless dent repair is a specialty technique. A dent is
                  worked out from behind the panel using purpose-built tools —
                  slowly, carefully, until the metal returns to its original
                  shape.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p>
                  Nothing is sanded. Nothing is filled. Nothing is repainted.
                  The original factory paint stays exactly as it was the day
                  the vehicle left the line.
                </p>
              </Reveal>
              <Reveal delay={360}>
                <p>
                  The result is faster than a body shop, less expensive than a
                  conventional repair, and — when the conditions are right —
                  indistinguishable from new.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- The Work -------------------- */}
      <section
        id="work"
        className="relative py-28 lg:py-40 bg-boneDeep hairline-t"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <Reveal>
            <div className="flex items-end justify-between mb-20">
              <div>
                <p className="caps text-[0.66rem] text-umber mb-5 tnum">
                  02 — The Work
                </p>
                <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.08] tracking-[-0.01em] text-ink font-light max-w-xl">
                  One panel,
                  <br />
                  <span className="italic">one repair.</span>
                </h2>
              </div>
              <p className="hidden md:block text-[0.85rem] text-ash max-w-xs text-right leading-relaxed">
                A recent quarter-panel job, plainly shown. The rest of the
                portfolio lives on Facebook and Birdeye.
              </p>
            </div>
          </Reveal>

          {/* Real before/after pair — large editorial layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <Reveal as="figure" className="space-y-5">
              <PaintGloss className="aspect-[3/4] bg-parchment">
                <Image
                  src={WORK_PAIR.before.src}
                  alt={WORK_PAIR.before.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover photo-tone"
                />
              </PaintGloss>
              <figcaption className="flex items-baseline gap-4">
                <span className="caps text-[0.62rem] text-umber tnum">
                  Before
                </span>
                <span className="font-serif italic text-[1rem] text-slate">
                  Rear quarter panel — paint scuffed, dent set in.
                </span>
              </figcaption>
            </Reveal>

            <Reveal as="figure" className="space-y-5" delay={180}>
              <PaintGloss className="aspect-[3/4] bg-parchment">
                <Image
                  src={WORK_PAIR.after.src}
                  alt={WORK_PAIR.after.alt}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover photo-tone"
                />
              </PaintGloss>
              <figcaption className="flex items-baseline gap-4">
                <span className="caps text-[0.62rem] text-umber tnum">
                  After
                </span>
                <span className="font-serif italic text-[1rem] text-slate">
                  Same panel, factory paint preserved. No bodywork.
                </span>
              </figcaption>
            </Reveal>
          </div>

          <Reveal delay={300}>
            <p className="mt-16 text-center font-serif italic text-[1.1rem] text-slate max-w-xl mx-auto leading-relaxed">
              &ldquo;Incredibly quality workmanship. 100% of the dent is gone
              in minimal time.&rdquo;
              <span className="block mt-3 caps text-[0.66rem] not-italic text-ash">
                — Jesse O. · Birdeye review
              </span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* -------------------- The Craft -------------------- */}
      <section
        id="craft"
        className="relative py-28 lg:py-40 bg-bone hairline-t"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <Reveal as="div" className="lg:col-span-5">
              <p className="caps text-[0.66rem] text-umber mb-5 tnum">
                03 — The Craft
              </p>
              <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.08] tracking-[-0.01em] text-ink font-light">
                Six years.
                <br />
                <span className="italic">One trade.</span>
              </h2>

              <div className="mt-12 grid grid-cols-2 gap-8 max-w-md">
                <div>
                  <p className="font-display text-[2.4rem] text-ink font-light leading-none stat-num">
                    <CountUp to={6} suffix="+" />
                  </p>
                  <p className="caps text-[0.62rem] text-ash mt-2">
                    Years specializing
                  </p>
                </div>
                <div>
                  <p className="font-display text-[2.4rem] text-ink font-light leading-none stat-num">
                    <CountUp to={239} duration={1800} />
                  </p>
                  <p className="caps text-[0.62rem] text-ash mt-2">
                    Five-star reviews
                  </p>
                </div>
              </div>
            </Reveal>

            <div className="lg:col-span-6 lg:col-start-7 space-y-7 text-[1.02rem] leading-[1.75] text-slate max-w-prose">
              <Reveal delay={120}>
                <p>
                  Rob Walsh has worked paintless dent repair out of Spring Hill,
                  Florida since 2019. Gulf Coast Dent Removal is the small,
                  appointment-only shop he runs from a home base on Montano
                  Avenue — and, as often as not, from the customer&rsquo;s
                  driveway.
                </p>
              </Reveal>
              <Reveal delay={240}>
                <p className="font-serif italic text-[1.08rem] text-ink">
                  &ldquo;If your paint isn&rsquo;t damaged, we have the tools
                  to remove the dent without conventional paint and body work.
                  Saving you time and money.&rdquo;
                  <span className="block mt-2 caps text-[0.66rem] not-italic text-ash">
                    — Rob Walsh
                  </span>
                </p>
              </Reveal>
              <Reveal delay={360}>
                <p>
                  Free estimates. Mobile service across Hernando and Pasco
                  counties. Most jobs finished in under two hours.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------- Testimonials -------------------- */}
      <section className="relative py-28 lg:py-36 bg-boneDeep hairline-t">
        <div className="mx-auto max-w-5xl px-6 lg:px-10">
          <Reveal>
            <p className="caps text-[0.66rem] text-umber mb-12 tnum text-center">
              04 — In Their Words
            </p>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.by} as="figure" delay={i * 160}>
                <div className="text-center md:text-left">
                  <blockquote className="font-display italic text-[1.4rem] md:text-[1.55rem] leading-[1.4] text-ink font-light">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-6 caps text-[0.62rem] text-ash">
                    — {t.by}
                  </figcaption>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* -------------------- What I Repair -------------------- */}
      <section
        id="repairs"
        className="relative py-28 lg:py-36 bg-bone hairline-t"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            <Reveal as="div" className="lg:col-span-4">
              <p className="caps text-[0.66rem] text-umber mb-5 tnum">
                05 — Repairs
              </p>
              <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.08] tracking-[-0.01em] text-ink font-light">
                What I repair.
              </h2>
              <p className="mt-6 text-[0.95rem] text-slate leading-relaxed max-w-sm">
                The work is paintless. If a job needs paint, fillers, or
                panel replacement, I&rsquo;ll tell you up front.
              </p>
            </Reveal>

            <ul className="lg:col-span-7 lg:col-start-6 space-y-5 text-[1.05rem] text-graphite">
              {REPAIR_LIST.map((item, i) => (
                <Reveal as="li" key={item} delay={i * 90}>
                  <span className="block tick hairline-b pb-5 font-display font-light text-[1.15rem] text-ink">
                    {item}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* -------------------- Get a Quote -------------------- */}
      <section
        id="contact"
        className="relative py-28 lg:py-40 bg-ink text-bone"
      >
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20">
            {/* Left — by-appointment context */}
            <Reveal as="div" className="lg:col-span-5">
              <p className="caps text-[0.66rem] text-umber mb-5 tnum">
                06 — Request a Quote
              </p>
              <h2 className="font-display text-[clamp(1.9rem,3.4vw,2.8rem)] leading-[1.08] tracking-[-0.01em] text-bone font-light">
                Free estimates.
                <br />
                <span className="italic text-bone/80">By appointment.</span>
              </h2>

              <div className="mt-10 space-y-6 text-[0.98rem] leading-[1.75] text-bone/75 max-w-sm">
                <p>
                  Send a few details and a photo if you have one. I&rsquo;ll
                  get back to you with a quote, usually the same day.
                </p>
                <p>
                  Mobile service across Hernando and Pasco counties. Most
                  jobs are finished in under two hours.
                </p>
              </div>

              <div className="mt-12 space-y-6 text-[0.86rem] text-bone/70">
                <div>
                  <p className="caps text-[0.6rem] text-brass mb-2">Phone</p>
                  <a
                    href={PHONE_HREF}
                    className="inline-block py-2 -my-2 font-display text-[1.15rem] text-bone hover:text-brass transition-colors tnum"
                  >
                    {PHONE_DISPLAY}
                  </a>
                </div>
                <div>
                  <p className="caps text-[0.6rem] text-brass mb-2">Email</p>
                  <a
                    href="mailto:Rwalsh008@gmail.com"
                    className="inline-block py-2 -my-2 hover:text-brass transition-colors"
                  >
                    Rwalsh008@gmail.com
                  </a>
                </div>
                <div>
                  <p className="caps text-[0.6rem] text-brass mb-2">Shop</p>
                  <p className="leading-relaxed">
                    4351 Montano Ave
                    <br />
                    Spring Hill, FL 34609
                  </p>
                  <p className="mt-2 text-bone/55 text-[0.78rem]">
                    By appointment only — please reach out before stopping
                    by.
                  </p>
                </div>
                <div>
                  <p className="caps text-[0.6rem] text-brass mb-2">Hours</p>
                  <p>Monday — Friday · 9am — 5pm</p>
                  <p className="text-bone/55 text-[0.78rem]">
                    Saturday by appointment · Closed Sunday
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Right — form */}
            <Reveal as="div" className="lg:col-span-6 lg:col-start-7" delay={150}>
              <form className="space-y-1" aria-label="Quote request form">
                <FormField label="Name" name="name" placeholder="Your name" />
                <FormField
                  label="Phone"
                  name="phone"
                  type="tel"
                  placeholder="(___) ___ — ____"
                />
                <FormField
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                />
                <FormField
                  label="Vehicle"
                  name="vehicle"
                  placeholder="Year, make, model · color"
                />

                <div className="pt-6">
                  <label
                    htmlFor="damage"
                    className="block caps text-[0.6rem] text-brass mb-3"
                  >
                    Brief description of the damage
                  </label>
                  <textarea
                    id="damage"
                    name="damage"
                    rows={4}
                    placeholder="Where the dent is, roughly how big, and how it happened — if you know."
                    className="w-full bg-transparent border-0 border-b border-bone/20 text-bone placeholder:text-bone/35 py-3 text-[0.95rem] focus:outline-none focus:border-brass transition-colors resize-none"
                  />
                </div>

                <div className="pt-10">
                  <button
                    type="button"
                    className="cta-arrow inline-flex items-center gap-3 bg-bone text-ink px-8 py-4 text-[0.72rem] caps hover:bg-brass hover:text-bone transition-colors"
                  >
                    Send Request
                    <span aria-hidden>—</span>
                  </button>
                  <p className="mt-5 text-[0.72rem] text-bone/45">
                    No obligation. I&rsquo;ll reply by email or phone within
                    one business day.
                  </p>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>

      {/* -------------------- Footer -------------------- */}
      <footer className="bg-ink text-bone/55 hairline-t border-bone/10">
        <div className="mx-auto max-w-6xl px-6 lg:px-10 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <p className="font-display text-bone text-[1rem] font-medium">
              Gulf Coast Dent Removal
            </p>
            <p className="text-[0.78rem]">
              Spring Hill, FL · By appointment only · Mobile service available
            </p>
          </div>
          <div className="flex items-center gap-6 text-[0.7rem] caps">
            <span>© {year} Gulf Coast Dent Removal Inc.</span>
            <span className="hidden md:inline w-px h-3 bg-bone/20" />
            <span className="text-bone/35">
              Site by{" "}
              <a
                href="https://websuitedigital.com"
                className="hover:text-brass transition-colors"
              >
                WebSuite Digital
              </a>
            </span>
          </div>
        </div>
      </footer>
    </main>
  );
}

/* -----------------------------------------------------------
   Simple labelled form field — caps label, hairline underline.
   Visual placeholder only; no submit handler.
   ----------------------------------------------------------- */
function FormField({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="pt-6">
      <label
        htmlFor={name}
        className="block caps text-[0.6rem] text-brass mb-3"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-transparent border-0 border-b border-bone/20 text-bone placeholder:text-bone/35 py-3 text-[0.95rem] focus:outline-none focus:border-brass transition-colors"
      />
    </div>
  );
}
