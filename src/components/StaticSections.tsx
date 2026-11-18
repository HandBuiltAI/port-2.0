import { contact, notes, site, specs, work } from "@/content/site";
import { CopyEmail } from "./CopyEmail";
import { WaveArt } from "./illustrations/FlowArt";

export function SpecsCallout() {
  return (
    <section className="specs" id="specs" aria-labelledby="specs-h">
      <div className="in row">
        <div>
          <span className="sticker dark">{specs.tag}</span>
          <h2 id="specs-h" className="h-l" style={{ marginTop: 18 }}>{specs.title}</h2>
        </div>
        <div>
          <p className="lede">{specs.body}</p>
          <a className="btn" href={specs.url} target="_blank" rel="noopener">{specs.cta}</a>
        </div>
      </div>
    </section>
  );
}

export function WorkTeaser() {
  return (
    <section className="work" id="work" aria-labelledby="work-h">
      <div className="in">
        <h2 id="work-h" className="h-l">{work.title}</h2>
        {work.cases.map((c) => (
          <div className="case" key={c.name}>
            <span className="yr">{c.year}</span>
            <div>
              <h3>{c.name}</h3>
              <p>{c.line}</p>
            </div>
            <span className="sticker">{work.soon}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export function NotesOnNow() {
  return (
    <section className="notes" id="notes" aria-labelledby="notes-h">
      <div className="in">
        <h2 id="notes-h" className="h-l">{notes.title}</h2>
        <ul>
          {notes.entries.map((e) => (
            <li key={e.text}>
              <time dateTime={e.date}>{e.label}</time>
              <p>{e.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-h">
      <div className="in">
        <div className="row">
          <div>
            <h2 id="contact-h" className="h-xl">{contact.title}</h2>
            <div className="links">
              <CopyEmail email={site.email} />
              <a className="btn ghost" href={site.linkedin} target="_blank" rel="noopener">LinkedIn</a>
              {site.resumeUrl ? (
                <a className="btn ghost" href={site.resumeUrl}>Résumé</a>
              ) : (
                <span className="btn ghost pending">Résumé soon</span>
              )}
            </div>
          </div>
          <WaveArt className="wave" />
        </div>
        <footer>
          <span>{site.name}, {site.city}</span>
          <span>humanbuiltai.work</span>
        </footer>
      </div>
    </section>
  );
}
