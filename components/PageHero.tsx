export default function PageHero({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
}) {
  return (
    <section className="page-hero dark">
      <span className="page-hero__glyph" aria-hidden="true">
        {"{ }"}
      </span>
      <div className="container">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="h1">{title}</h1>
        <p className="lead">{lead}</p>
      </div>
    </section>
  );
}
