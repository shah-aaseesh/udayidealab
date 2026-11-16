import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import PageHero from "@/components/PageHero";
import { projects, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our services",
  description:
    "Websites and digital platforms, branding and content writing, social media management, documentary films and photography, podcasts and multimedia, and digital education.",
};

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our core services"
        title={
          <>
            Six services. <em>One connected team.</em>
          </>
        }
        lead="Websites, social media, design and writing, documentary film, podcasts and training for organisations creating social change. We manage each project from the first brief to final delivery."
      />

      <nav className="jump" aria-label="Services">
        <div className="container">
          {services.map((s) => (
            <a key={s.id} href={`#${s.id}`}>
              <span className="label">{s.number}</span> {s.short}
            </a>
          ))}
        </div>
      </nav>

      {services.map((s, i) => {
        const related = projects.filter((p) => p.service === s.id);
        return (
          <section
            key={s.id}
            id={s.id}
            className={`section service-detail${i % 2 ? " paper-2" : ""}`}
          >
            <div className="container split">
              <div>
                <p className="eyebrow">
                  {s.number} / {s.short}
                </p>
                <h2 className="h1">{s.title}</h2>
                <p className="serif-line">{s.promise}</p>
              </div>
              <div>
                <p className="lead">{s.summary}</p>
                <p>{s.detail}</p>

                <p className="eyebrow eyebrow--spaced">What we can do for you</p>
                <ul className="caps">
                  {s.capabilities.map((c, n) => (
                    <li key={c}>
                      <span className="label">{String(n + 1).padStart(2, "0")}</span>
                      {c}
                    </li>
                  ))}
                </ul>

                {related.length > 0 && (
                  <>
                    <p className="eyebrow eyebrow--spaced">Related work</p>
                    <ul className="related">
                      {related.map((p) => (
                        <li key={p.id}>
                          <Link href={`/work#${p.id}`}>
                            <span>
                              {p.title}
                              <small>{p.client}</small>
                            </span>
                            <span aria-hidden="true">↗</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            </div>
          </section>
        );
      })}

      <CTA
        title={
          <>
            Let’s build something <em>meaningful together.</em>
          </>
        }
        text="Whether you need a website, a social media partner, a documentary, a podcast or a training programme, we are ready to explore it with you."
      />
    </>
  );
}
