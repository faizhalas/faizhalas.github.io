// Ikon sederhana (SVG inline, warna mengikuti currentColor).
const common = { viewBox: "0 0 24 24", width: 22, height: 22, "aria-hidden": true };
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.8, strokeLinecap: "round", strokeLinejoin: "round" };

export function SocialIcon({ name }) {
  switch (name) {
    case "github":
      return (
        <svg {...common} fill="currentColor">
          <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} fill="currentColor">
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
        </svg>
      );
    case "orcid":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="11" fill="currentColor" />
          <text x="12" y="16" textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff" fontFamily="sans-serif">iD</text>
        </svg>
      );
    case "scholar":
      return (
        <svg {...common} {...stroke}>
          <path d="M2 9l10-5 10 5-10 5-10-5Z" />
          <path d="M6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5" />
        </svg>
      );
    case "scopus":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="10.2" fill="none" stroke="currentColor" strokeWidth="1.8" />
          <text x="12" y="16.5" textAnchor="middle" fontSize="12" fontWeight="700" fill="currentColor" fontFamily="sans-serif">S</text>
        </svg>
      );
    default: // mail
      return (
        <svg {...common} {...stroke}>
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
  }
}

export function InterestIcon({ name }) {
  const p = { ...common, ...stroke, width: 36, height: 36 };
  switch (name) {
    case "library":
      return <svg {...p}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5v14Z" /><path d="M8 7h8M8 11h5" /></svg>;
    case "text":
      return <svg {...p}><path d="M4 6h16M4 12h10M4 18h14" /></svg>;
    case "researcher":
      return (
        <svg {...p}>
          <circle cx="10" cy="7" r="4" />
          <path d="M10.3 15H7a4 4 0 0 0-4 4v2" />
          <circle cx="17" cy="17" r="3" />
          <path d="m21 21-1.9-1.9" />
        </svg>
      );
    default: // open
      return <svg {...p}><rect x="5" y="11" width="14" height="9" rx="2" /><path d="M8 11V8a4 4 0 0 1 7.5-2" /></svg>;
  }
}
