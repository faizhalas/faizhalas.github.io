"use client";

import { useId, useState } from "react";

export default function PublicationCard({ pub }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <article className="pub">
      <p className="pub-meta">{pub.venue} · {pub.date}</p>
      <h3>{pub.title}</h3>
      <p className="pub-authors">{pub.authors}</p>

      <div className="pub-links">
        {pub.abstract && (
          <button
            type="button"
            className="chip chip-toggle"
            aria-expanded={open}
            aria-controls={id}
            onClick={() => setOpen(!open)}
          >
            {open ? "hide abstract" : "read abstract"}
          </button>
        )}
        {pub.links.map((l) => (
          <a key={l.label} className="chip" href={l.href} target="_blank" rel="noreferrer">
            {l.label.toLowerCase()}
          </a>
        ))}
      </div>

      {pub.abstract && open && (
        <p id={id} className="pub-abstract">{pub.abstract}</p>
      )}
    </article>
  );
}
