import Link from "next/link";
import { profile, news, publications, interests, links } from "@/data/site";
import PublicationCard from "@/components/PublicationCard";
import Avatar from "@/components/Avatar";
import NewsCarousel from "@/components/NewsCarousel";
import { InterestIcon } from "@/components/Icons";

export default function Home() {
  const featured = publications.filter((p) => p.featured);

  return (
    <>
      {/* HERO: nama di kiri, foto bulat di kanan */}
      <section className="hero">
        <div className="blob b1" /><div className="blob b2" /><div className="blob b3" />
        <div className="container hero-inner">
          <div className="hero-text">
            <h1>{profile.name.toLowerCase()}</h1>
            <p className="hero-sub">{profile.intro}</p>
          </div>
          <Avatar name={profile.name} photo={profile.photo} size="xl" />
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="quote container">
        <blockquote>{profile.about[0]}</blockquote>
      </section>

      {/* PUBLICATIONS */}
      <section id="publications" className="section container">
        <div className="section-head">
          <h2>selected publications</h2>
          <Link href="/publications/" className="text-link">explore all publications</Link>
        </div>
        {featured.map((p) => <PublicationCard key={p.title} pub={p} />)}
      </section>

      {/* INTERESTS */}
      <section className="section container">
        <h2>interests</h2>
        <div className="areas">
          {interests.map((a) => (
            <div className="area" key={a.title}>
              <h3>{a.title}</h3>
              <InterestIcon name={a.icon} />
            </div>
          ))}
        </div>
      </section>

      {/* LATEST NEWS */}
      <section className="section container">
        <NewsCarousel items={news} />
      </section>

      {/* CTA */}
      <section className="container">
        <div className="cta">
          <h2>— let's work together.</h2>
          <p>Good research is built side by side: shared effort, shared credit.</p>
          <a className="btn btn-dark" href={`mailto:${links.email}`}>contact me</a>
        </div>
      </section>
    </>
  );
}
