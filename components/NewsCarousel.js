"use client";

import { useEffect, useRef, useState } from "react";

// Satu warna (biru): berita terbaru paling terang, makin lama makin pekat.
const STOPS = ["#eef4ff", "#a9c4ff"];

const toRgb = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
function colorAt(t) {
  const x = t * (STOPS.length - 1);
  const i = Math.min(Math.floor(x), STOPS.length - 2);
  const f = x - i;
  const a = toRgb(STOPS[i]);
  const b = toRgb(STOPS[i + 1]);
  return `rgb(${a.map((v, k) => Math.round(v + (b[k] - v) * f)).join(",")})`;
}

export default function NewsCarousel({ items }) {
  const track = useRef(null);
  const [edge, setEdge] = useState({ start: true, end: false });

  const update = () => {
    const el = track.current;
    if (!el) return;
    setEdge({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    });
  };

  useEffect(() => {
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const move = (dir) =>
    track.current.scrollBy({ left: dir * track.current.clientWidth * 0.8, behavior: "smooth" });

  return (
    <>
      <div className="section-head">
        <h2>latest news</h2>
        <div className="arrows">
          <button type="button" aria-label="Previous news" disabled={edge.start} onClick={() => move(-1)}>←</button>
          <button type="button" aria-label="Next news" disabled={edge.end} onClick={() => move(1)}>→</button>
        </div>
      </div>

      <div className="carousel" ref={track} onScroll={update}>
        {items.map((n, i) => (
          <article
            key={n.date}
            className="news-card"
            style={{ background: colorAt(items.length > 1 ? i / (items.length - 1) : 0) }}
          >
            <time>{n.date}{i === 0 && <span className="badge">new</span>}</time>
            <p>{n.text}</p>
          </article>
        ))}
      </div>
    </>
  );
}
