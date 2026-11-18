import { site } from "@/content/site";

export function TopBar() {
  return (
    <header className="bar" id="bar">
      <div className="in">
        <b>{site.name}</b>
        <nav aria-label="Sections">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href}>
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
