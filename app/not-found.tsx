import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-hero dark">
      <span className="page-hero__glyph" aria-hidden="true">
        {"{ }"}
      </span>
      <div className="container">
        <p className="eyebrow">404 / Page not found</p>
        <h1 className="h1">
          This idea is not <em>here yet.</em>
        </h1>
        <p className="lead">
          The page you are looking for has moved or never existed. The rest of the lab is
          still open.
        </p>
        <div className="btn-row not-found__actions">
          <Link href="/" className="btn btn--primary">
            Back to home <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/work" className="btn btn--outline">
            See our work
          </Link>
        </div>
      </div>
    </section>
  );
}
