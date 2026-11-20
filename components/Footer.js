import { links } from "@/data/site";
import { SocialIcon } from "./Icons";

// `color` = warna saat di-hover (default-nya abu-abu monoton)
const items = [
  { name: "github", label: "GitHub", href: links.github, color: "#181717" },
  { name: "linkedin", label: "LinkedIn", href: links.linkedin, color: "#0a66c2" },
  { name: "orcid", label: "ORCID", href: links.orcid, color: "#a6ce39" },
  { name: "scholar", label: "Google Scholar", href: links.scholar, color: "#4285f4" },
  { name: "scopus", label: "Scopus", href: links.scopus, color: "#e9711c" },
  { name: "mail", label: "Email", href: `mailto:${links.email}`, color: "#c1127f" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="social">
          {items.map((i) => (
            <li key={i.name}>
              <a href={i.href} target="_blank" rel="noreferrer" aria-label={i.label} title={i.label} style={{ "--c": i.color }}>
                <SocialIcon name={i.name} />
              </a>
            </li>
          ))}
        </ul>
        <hr className="footer-line" />
      </div>
    </footer>
  );
}
