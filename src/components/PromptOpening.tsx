"use client";

import { useRef } from "react";
import { opening, site } from "@/content/site";
import { ease, seg, usePinnedProgress } from "@/lib/scroll";

/**
 * Opening: a prompt types itself out, a generic AI bio appears,
 * gets crossed out, and Scott's line replaces it.
 */
export function PromptOpening() {
  const root = useRef<HTMLElement>(null);
  const typed = useRef<HTMLSpanElement>(null);
  const generic = useRef<HTMLDivElement>(null);
  const tag = useRef<HTMLSpanElement>(null);
  const headline = useRef<HTMLHeadingElement>(null);
  const who = useRef<HTMLParagraphElement>(null);
  const hint = useRef<HTMLDivElement>(null);

  usePinnedProgress(root, (p) => {
    const text = opening.prompt;
    if (typed.current) typed.current.textContent = text.slice(0, Math.round(text.length * seg(p, 0.02, 0.28)));
    if (generic.current) {
      generic.current.style.opacity = String(seg(p, 0.3, 0.38));
      generic.current.style.setProperty("--s", String(ease(seg(p, 0.46, 0.6))));
      generic.current.style.color = p > 0.55 ? "#A5A39C" : "";
    }
    if (tag.current) tag.current.style.opacity = String(seg(p, 0.42, 0.46));
    headline.current?.style.setProperty("--r", String(ease(seg(p, 0.6, 0.8))));
    if (who.current) who.current.style.opacity = String(seg(p, 0.8, 0.9));
    if (hint.current) hint.current.style.opacity = String(1 - seg(p, 0, 0.06));
  });

  return (
    <section ref={root} className="pin opening" id="top" aria-labelledby="opening-h">
      <div className="stage">
        <div className="in stack">
          <div className="prompt" role="img" aria-label={`A prompt that reads: ${opening.prompt}`}>
            <span className="typed" aria-hidden="true">
              <span ref={typed} />
              <span className="caret" />
            </span>
            <span className="send" aria-hidden="true">↑</span>
          </div>
          <div className="answer">
            <div ref={generic} className="generic" style={{ opacity: 0 }}>
              {opening.genericDraft}
              <i className="x" style={{ top: "20%" }} />
              <i className="x" style={{ top: "52%", ["--rot" as string]: "1.2deg" }} />
              <i className="x" style={{ top: "84%", ["--rot" as string]: "-1deg" }} />
            </div>
            <span ref={tag} className="sticker" style={{ opacity: 0, justifySelf: "start" }}>
              {opening.draftTag}
            </span>
          </div>
          <h1 ref={headline} id="opening-h" className="fix reveal">
            {opening.headline}
          </h1>
          <p ref={who} className="who" style={{ opacity: 0, margin: 0 }}>
            {site.name}, {site.role}
          </p>
        </div>
        <div ref={hint} className="hint" aria-hidden="true">
          Scroll <i />
        </div>
      </div>
    </section>
  );
}
