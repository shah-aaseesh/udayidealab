import type { Metadata } from "next";
import CTA from "@/components/CTA";
import PageHero from "@/components/PageHero";
import ProjectVisual from "@/components/ProjectVisual";
import { projects, services } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our work",
  description:
    "Selected projects from UDAY IdeaLab: websites, documentary film, design training and social media for organisations across Nepal.",
};

const intros: Record<string, { heading: React.ReactNode; text: string }> = {
  technology: {
    heading: (
      <>
        Digital spaces for <em>organisations and businesses.</em>
      </>
    ),
    text: "We design and develop websites that help organisations establish their digital presence, communicate their work and connect with their audiences.",
  },
  media: {
    heading: (
      <>
        Stories that <em>deserve to be told.</em>
      </>
    ),
    text: "We use visual storytelling to document experiences, highlight initiatives and share stories from communities and development projects.",
  },
  education: {
    heading: (
      <>
        Creative and digital skills, <em>made accessible.</em>
      </>
    ),
    text: "Practical learning and digital skills open new opportunities for young people.",
  },
  social: {
    heading: (
      <>
        Communication <em>that connects.</em>
      </>
    ),
    text: "We help organisations keep a consistent digital presence through design, content and social media.",
  },
};

// Order the work page by where the strongest projects are.
const order = ["technology", "media", "social", "education"];

export default function Work() {
  const numbered = order.flatMap((id) => projects.filter((p) => p.service === id));
  return (
    <>
      <PageHero
        eyebrow="Our work"
        title={
          <>
            Ideas, <em>brought to life.</em>
          </>
        }
        lead="Our work speaks through the projects we make and the organisations we make them with. Here is a selection across technology, film, social media and education."
      />

      <nav className="jump" aria-label="Work categories">
        <div className="container">
          {order.map((id) => {
            const s = services.find((x) => x.id === id)!;
            return (
              <a key={id} href={`#${id}`}>
                <span className="label">
                  {String(projects.filter((p) => p.service === id).length).padStart(2, "0")}
                </span>{" "}
                {s.short}
              </a>
            );
          })}
        </div>
      </nav>

      {order.map((id, gi) => {
        const s = services.find((x) => x.id === id)!;
        const group = projects.filter((p) => p.service === id);
        return (
          <section key={id} id={id} className={`section${gi % 2 ? " paper-2" : ""}`}>
            <div className="container">
              <div className="head">
                <div>
                  <p className="eyebrow">{s.title}</p>
                  <h2 className="h1">{intros[id].heading}</h2>
                </div>
                <p>{intros[id].text}</p>
              </div>

              <div className="projects">
                {group.map((p) => {
                  const count = numbered.indexOf(p) + 1;
                  return (
                    <article key={p.id} id={p.id} className="project">
                      <div className="project__visual">
                        {p.visual === "film" ? (
                          <div className="embed">
                            <iframe
                              src={`https://www.youtube-nocookie.com/embed/${p.visualMeta}`}
                              title={`${p.title}, ${p.client}`}
                              loading="lazy"
                              allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                            />
                          </div>
                        ) : (
                          <ProjectVisual project={p} />
                        )}
                      </div>
                      <div className="project__body">
                        <p className="label project__kind">
                          {String(count).padStart(2, "0")} / {p.kind}
                        </p>
                        <h3 className="h2">{p.title}</h3>
                        <p className="project__client">{p.client}</p>
                        <p>{p.summary}</p>
                        {p.body && <p>{p.body}</p>}
                        {p.facts && (
                          <dl className="facts">
                            {p.facts.map((f) => (
                              <div key={f.label}>
                                <dt className="label">{f.label}</dt>
                                <dd>{f.value}</dd>
                              </div>
                            ))}
                          </dl>
                        )}
                        {p.link && (
                          <a
                            className="btn btn--primary btn--sm"
                            href={p.link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {p.link.label} <span aria-hidden="true">↗</span>
                          </a>
                        )}
                        {p.note && <p className="label project__note">{p.note}</p>}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <CTA
        title={
          <>
            Every project <em>starts with an idea.</em>
          </>
        }
        text="Looking for a digital solution, creative content, a documentary or an educational initiative? We would love to collaborate."
      />
    </>
  );
}
