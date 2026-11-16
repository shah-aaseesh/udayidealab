import Link from "next/link";

export default function CTA({
  eyebrow = "Have a project in mind?",
  title = (
    <>
      Let’s create something <em>meaningful.</em>
    </>
  ),
  text = "A website, a campaign, a documentary or a training programme: if it is meant to change something for the better, we would like to help you make it.",
}: {
  eyebrow?: string;
  title?: React.ReactNode;
  text?: string;
}) {
  return (
    <section className="cta blue">
      <div className="container cta__inner">
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="h1">{title}</h2>
        </div>
        <div className="cta__side">
          <p>{text}</p>
          <div className="btn-row">
            <Link href="/contact" className="btn btn--light">
              Get in touch <span aria-hidden="true">↗</span>
            </Link>
            <Link href="/work" className="btn btn--outline">
              See our work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
