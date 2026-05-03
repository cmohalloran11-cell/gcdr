"use client";

import { useEffect, useRef, useState } from "react";

/* -----------------------------------------------------------
   Reveal — wraps children in a div that fades + slides up
   when it scrolls into view. Uses IntersectionObserver.
   `as` lets you change the element so it doesn't break
   layout (e.g. inside flex parents that expect a specific
   tag).
   ----------------------------------------------------------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
  as = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "article" | "li" | "figure";
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  const Tag = as as keyof JSX.IntrinsicElements;
  return (
    // @ts-expect-error - dynamic tag w/ ref is fine here
    <Tag
      ref={ref}
      className={`reveal ${visible ? "reveal-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* -----------------------------------------------------------
   CountUp — animated tabular numeral that counts from 0
   to `to` once it's scrolled into view. Used for the stats
   in the Craft section.
   ----------------------------------------------------------- */
export function CountUp({
  to,
  suffix = "",
  duration = 1400,
  className = "",
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [val, setVal] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting || started.current) return;
          started.current = true;
          const start = performance.now();
          const tick = (now: number) => {
            const t = Math.min(1, (now - start) / duration);
            // ease-out cubic — settles softly, no overshoot
            const eased = 1 - Math.pow(1 - t, 3);
            setVal(Math.round(to * eased));
            if (t < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          obs.disconnect();
        });
      },
      { threshold: 0.4 },
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [to, duration]);

  return (
    <span ref={ref} className={`tnum ${className}`}>
      {val}
      {suffix}
    </span>
  );
}

/* -----------------------------------------------------------
   PaintGloss — a soft white gradient strip that sweeps
   diagonally across its container on hover. Used on the
   work cards: hover the photo and a "polish" of light
   skates across it, like light catching on glossy paint.
   ----------------------------------------------------------- */
export function PaintGloss({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`paint-gloss group ${className}`}>
      {children}
      <span aria-hidden className="paint-gloss-strip" />
    </div>
  );
}
