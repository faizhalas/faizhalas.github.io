import { people } from "@/data/site";
import PersonCard from "@/components/PersonCard";

export const metadata = { title: "People" };

export default function PeoplePage() {
  return (
    <div className="container page">
      <h1 className="page-title">people</h1>
      <p className="page-sub">— collaborators and co-authors.</p>
      <div className="people-grid">
        {people.map((p, i) => <PersonCard key={p.name} person={p} index={i} />)}
      </div>
    </div>
  );
}
