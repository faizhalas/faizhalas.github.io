import { publications } from "@/data/site";
import PublicationCard from "@/components/PublicationCard";

export const metadata = { title: "Publications" };

export default function PublicationsPage() {
  const byYear = [...publications]
    .sort((a, b) => b.year - a.year)
    .reduce((acc, p) => {
      (acc[p.year] ||= []).push(p);
      return acc;
    }, {});
  const years = Object.keys(byYear).sort((a, b) => b - a);

  return (
    <div className="container narrow page">
      <h1 className="page-title">publications</h1>
      {years.map((y) => (
        <section key={y}>
          <h2 className="year">{y}</h2>
          {byYear[y].map((p) => <PublicationCard key={p.title} pub={p} />)}
        </section>
      ))}
    </div>
  );
}
