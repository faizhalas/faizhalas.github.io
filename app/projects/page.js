import { projects } from "@/data/site";

export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  return (
    <div className="container page">
      <h1 className="page-title">projects</h1>
      <div className="grid">
        {projects.map((p) => (
          <article className="card" key={p.title}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tags">
              {p.tags.map((t) => <span key={t} className="tag">{t.toLowerCase()}</span>)}
            </div>
            <div className="card-links">
              {p.href && <a className="btn btn-dark btn-sm" href={p.href} target="_blank" rel="noreferrer">visit</a>}
              {p.repo && <a className="btn btn-light btn-sm" href={p.repo} target="_blank" rel="noreferrer">code</a>}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
