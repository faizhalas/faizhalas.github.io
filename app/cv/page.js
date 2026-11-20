import { cv, profile, links } from "@/data/site";
import PrintButton from "@/components/PrintButton";

export const metadata = { title: "CV" };

export default function CvPage() {
  return (
    <div className="container narrow page">
      {/* Kop yang hanya muncul saat dicetak / disimpan sebagai PDF */}
      <div className="print-only cv-header">
        <h1>{profile.name}</h1>
        <p>{profile.tagline} · {links.email}</p>
      </div>

      <div className="section-head">
        <h1 className="page-title no-print">curriculum vitae</h1>
        <PrintButton />
      </div>

      {cv.sections.map((s) => (
        <section key={s.title} className="cv-section">
          <h2>{s.title.toLowerCase()}</h2>
          <ul className="cv-list">
            {s.items.map((i) => (
              <li key={i.role}>
                <strong>{i.role}</strong>
                <em>{i.years}</em>
                <span>{i.org}</span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
