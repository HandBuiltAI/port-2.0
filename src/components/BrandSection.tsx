"use client";

import { useRef } from "react";
import { brand } from "@/content/site";
import { seg, usePinnedProgress } from "@/lib/scroll";

/**
 * "The brand system is the brief." The for-agents files switch on one at a time
 * and the phone screen goes from a generic draft to an on-brand one.
 */
export function BrandSection() {
  const root = useRef<HTMLElement>(null);
  const files = useRef<HTMLUListElement>(null);
  const screen = useRef<HTMLDivElement>(null);
  const title = useRef<HTMLDivElement>(null);
  const sub = useRef<HTMLSpanElement>(null);
  const cta = useRef<HTMLDivElement>(null);
  const tag = useRef<HTMLSpanElement>(null);
  const total = brand.forAgents.length;

  usePinnedProgress(root, (p, reduced) => {
    const k = reduced ? total : Math.floor(seg(p, 0.08, 0.9) * (total + 1));
    const items = files.current?.querySelectorAll("li") ?? [];
    items.forEach((li, i) => li.classList.toggle("on", i < k));
    const on = (key: string) => brand.forAgents.findIndex((f) => f.key === key) < k;
    const s = screen.current;
    if (!s) return;
    s.classList.toggle("tokens", on("tokens"));
    s.classList.toggle("guard", on("guard"));
    s.classList.toggle("comps", on("comps"));
    const voice = on("voice");
    if (title.current) title.current.textContent = voice ? brand.screen.brandTitle : brand.screen.genericTitle;
    if (sub.current) sub.current.textContent = voice ? brand.screen.brandSub : brand.screen.genericSub;
    if (cta.current) cta.current.textContent = on("comps") ? "I’m here" : voice ? "I’m on my way" : "Claim";
    if (tag.current) tag.current.textContent = k >= total ? "On brand" : k === 0 ? "Generic" : "Getting there";
  });

  return (
    <section ref={root} className="pin brand" id="brand" aria-labelledby="brand-h">
      <div className="stage">
        <div className="in grid">
          <div>
            <h2 id="brand-h" className="h-l">{brand.title}</h2>
            <p className="brief">{brand.brief}</p>
            <div className="folders">
              <div className="folder people">
                <h4>brand/for-people</h4>
                <ul>
                  {brand.forPeople.map((f) => (
                    <li key={f}><span className="dot" />{f}</li>
                  ))}
                </ul>
              </div>
              <div className="folder agents">
                <h4>brand/for-agents</h4>
                <ul ref={files}>
                  {brand.forAgents.map((f) => (
                    <li key={f.key}>
                      <span className="dot" />
                      <span>{f.file}<small>{f.note}</small></span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="brand-foot">
              <span className="sticker">Made-up brand</span> {brand.disclaimer}
            </div>
          </div>
          <div className="phone" role="img" aria-label="Phone mockup of the order ready screen, changing from generic to on-brand">
            <div ref={screen} className="screen">
              <div ref={title} className="t">{brand.screen.genericTitle}</div>
              <div className="code">
                <span ref={sub}>{brand.screen.genericSub}</span>
                <b>{brand.screen.code}</b>
                <span>{brand.screen.order}</span>
              </div>
              <div className="swap">{brand.screen.swap}</div>
              <div className="promo">{brand.screen.promo} <span>Claim</span></div>
              <div className="rate">{brand.screen.rate}</div>
              <div ref={cta} className="cta">Claim</div>
            </div>
            <span ref={tag} className="sticker">Generic</span>
          </div>
        </div>
      </div>
    </section>
  );
}
