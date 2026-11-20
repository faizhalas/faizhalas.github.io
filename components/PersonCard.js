import Avatar from "./Avatar";

export default function PersonCard({ person, index }) {
  const body = (
    <>
      <Avatar name={person.name} photo={person.photo} index={index} size="lg" />
      <h3>{person.name}</h3>
      {person.role && <p className="person-role">{person.role}</p>}
      {person.note && <p className="person-note">{person.note}</p>}
    </>
  );

  return person.href ? (
    <a className="person" href={person.href} target="_blank" rel="noreferrer">{body}</a>
  ) : (
    <div className="person">{body}</div>
  );
}
