"use client";

import { Fragment, useRef } from "react";
import { flow } from "@/content/site";
import { clamp, ease, seg, usePinnedProgress } from "@/lib/scroll";
import { ArrowArt, ConnectArt, InputsArt, JudgmentArt, ResultArt } from "./illustrations/FlowArt";

const art = [InputsArt, ConnectArt, JudgmentArt, ResultArt];

/**
 * The four-step workflow. Scrolling down moves the track sideways,
 * holding on each step before sliding to the next. The page floods
 * with colour at the "Human judgment" step.
 */
export function FlowSection() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const count = useRef<HTMLSpanElement>(null);
  const n = flow.steps.length;

  usePinnedProgress(root, (p, reduced) => {
    const t = track.current;
    const el = root.current;
    if (!t || !el) return;
    const steps = t.querySelectorAll<HTMLElement>(".step");
    const max = Math.max(0, t.scrollWidth - window.innerWidth);
    const base = steps[0].offsetLeft;
    const stops = Array.from(steps, (s) => Math.min(max, s.offsetLeft - base));
    const f = seg(p, 0.04, 0.9) * (stops.length - 1);
    const i = Math.min(stops.length - 2, Math.floor(f));
    const held = ease(clamp((f - i - 0.3) / 0.55, 0, 1));
    const x = reduced ? 0 : stops[i] + (stops[i + 1] - stops[i]) * held;
    t.style.setProperty("--x", String(x));
    if (count.current) count.current.textContent = `${Math.min(n, Math.round(f) + 1)} of ${n}`;

    // flood timed to land as the flood step arrives
    const at = flow.floodAt / (n - 1);
    el.style.setProperty("--flood", reduced ? "0" : String(ease(seg(p, at * 0.86 - 0.2, at * 0.86))));
    const r = el.getBoundingClientRect();
    const flooded = !reduced && p > at * 0.86 - 0.1 && p < 1 && r.top <= 0 && r.bottom > 60;
    document.getElementById("bar")?.classList.toggle("on-sun", flooded);
  });

  return (
    <section ref={root} className="pin flow" id="flow" aria-labelledby="flow-h">
      <div className="stage">
        <div className="flood" />
        <div className="flow-head">
          <div className="in">
            <h2 id="flow-h" className="h-l">{flow.title}</h2>
            <span ref={count} className="count">1 of {n}</span>
          </div>
        </div>
        <div ref={track} className="track">
          {flow.steps.map((s, i) => {
            const Art = art[i];
            return (
              <Fragment key={s.title}>
                {i > 0 && (
                  <div className="arrow" aria-hidden="true">
                    <ArrowArt />
                  </div>
                )}
                <article className="step">
                  <Art />
                  <div>
                    <span className="n">{i + 1}</span>
                    <h3>{s.title}</h3>
                    <p>{s.body}</p>
                  </div>
                </article>
              </Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
