import Image from "next/image";
import Link from "next/link";
import BraceMark from "@/components/BraceMark";
import ContactSection from "@/components/ContactSection";
import HeroVideo from "@/components/HeroVideo";
import LogoCarousel from "@/components/LogoCarousel";
import Marquee from "@/components/Marquee";
import ProjectVisual from "@/components/ProjectVisual";
import WorkGrid from "@/components/WorkGrid";
import { approach, partners, projects, services, values } from "@/lib/site";
import type { Project } from "@/lib/site";

const serviceTones = ["cream", "sky", "sage", "navy", "lilac", "ink"];

export default function Home() {
  const capabilities = services.flatMap((s) => s.capabilities);
  const third = Math.ceil(capabilities.length / 3);

  return (
    <>
      {/* Hero */}
      <section className="hero">
        <HeroVideo src="/hero.mp4" poster="/work/karkhana-documentary.jpg" />
        <div className="hero__glow" aria-hidden="true" />
        <span className="hero__corner hero__corner--tl" aria-hidden="true" />
        <span className="hero__corner hero__corner--br" aria-hidden="true" />
        <div className="container hero__inner">
          <h1 className="display">
            <span className="line">
              <span>Ideas into innovation.</span>
            </span>
            <span className="line">
              <span>
                Creativity into impact<span className="dot">.</span>
              </span>
            </span>
          </h1>
          <p className="hero__sub">
            Technology and creative communication <em>for social change.</em>
          </p>
          <div className="hero__actions">
            <a href="#work" className="btn btn--primary">
              Explore our work <span aria-hidden="true">↓</span>
            </a>
            <Link href="/contact" className="btn btn--outline-light">
              Discuss a project <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <p className="hero__credit label">
          From our documentary for Karkhana Samuha, Madhesh Province
        </p>
      </section>

      {/* The lab */}
      <section className="studio dark">
        <div className="container">
          <div className="studio__head">
            <span className="label studio__tag">01 / The Lab</span>
            <span className="label studio__subhead">Uday means sunrise · Every idea needs one</span>
          </div>

          <div className="studio__main">
            <div className="studio__intro">
              <p className="eyebrow">This is UDAY Idea Lab</p>
              <h2 className="studio__title">
                A lab of makers.
                <br />
                <em>Working for social change.</em>
              </h2>
              <div className="studio__pills">
                <span>Web &amp; Digital Platforms</span>
                <span>Branding &amp; Design</span>
                <span>Social Media</span>
                <span>Documentary Films</span>
                <span>Podcasts &amp; Audio</span>
                <span>Digital Skills</span>
              </div>
              <div className="studio__action">
                <Link href="/about" className="btn btn--outline-light">
                  Get to know us <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </div>

            <div className="studio__card">
              <div className="studio__card-emblem">
                <BraceMark />
              </div>
              <div className="studio__card-content">
                <p className="studio__lead">
                  We are a team of developers, designers, writers, filmmakers and trainers based in Nepal. We put technology and creative communication to work for NGOs, educational institutions, development projects and purpose-led businesses.
                </p>
                <p className="studio__desc">
                  From research, strategy and planning to final delivery, we manage the complete process under one connected team.
                </p>
              </div>
            </div>
          </div>

          <div className="usp">
            <div>
              <p className="eyebrow">Our difference</p>
              <h2 className="h2">
                One team,
                <br />
                <em>not three agencies.</em>
              </h2>
            </div>
            <p>
              Social change needs more than a good message. It needs a website people can find, a film they will watch, social media that keeps the work visible and skills that stay in the community. We keep technology, design, writing and production in one team, so your idea moves forward without being handed from one agency to the next.
            </p>
          </div>

          {/* Metrics / Impact Band */}
          <div className="metrics-grid">
            <div className="metric-card">
              <div className="metric-card__num">30<span>+</span></div>
              <div className="metric-card__title">Designers &amp; youth trained</div>
              <p className="metric-card__desc">Hands-on creative &amp; digital workshops across Nepal</p>
            </div>
            <div className="metric-card">
              <div className="metric-card__num">06</div>
              <div className="metric-card__title">Connected disciplines</div>
              <p className="metric-card__desc">Websites, social, branding, film, audio &amp; education</p>
            </div>
            <div className="metric-card">
              <div className="metric-card__num">100<span>%</span></div>
              <div className="metric-card__title">Purpose-driven work</div>
              <p className="metric-card__desc">Partnering with NGOs, institutions &amp; social changemakers</p>
            </div>
            <div className="metric-card">
              <div className="metric-card__num">Madhesh<span> &amp; beyond</span></div>
              <div className="metric-card__title">Provincial &amp; national reach</div>
              <p className="metric-card__desc">From community science to nationwide youth movements</p>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="flow dark">
        <div className="container flow__head">
          <div>
            <p className="eyebrow">From first idea to final delivery</p>
            <h2 className="h1">
              A whole lab
              <br />
              <em>behind every idea.</em>
            </h2>
          </div>
          <p>Swipe through the skills we bring to a project.</p>
        </div>
        <div className="flow__ribbons">
          <Marquee items={capabilities.slice(0, third)} tone="blue" />
          <Marquee
            items={capabilities.slice(third, third * 2)}
            start={third + 1}
            tone="paper"
            reverse
          />
          <Marquee items={capabilities.slice(third * 2)} start={third * 2 + 1} tone="peri" />
        </div>
        <div className="container flow__foot label">
          <span>{capabilities.length} capabilities · one connected process</span>
          <Link href="/services">The work moves forward ↗</Link>
        </div>
      </section>

      {/* Services */}
      <section className="services-band blue" id="services">
        <span className="services-band__glyph" aria-hidden="true">
          {"{"}
        </span>
        <div className="container">
          <div className="head">
            <div>
              <p className="eyebrow">Our services</p>
              <h2 className="h1">
                One creative team.
                <br />
                <em>Every part of your idea.</em>
              </h2>
            </div>
            <p>
              Websites, social media, design, writing, film, audio and training: planned,
              created and delivered for organisations creating change.
            </p>
          </div>

          <div className="svc-grid">
            {services.map((s, i) => {
              const cover =
                projects.find((p) => p.id === s.coverProject) ??
                ({ visual: s.coverVisual } as Project);
              return (
                <Link
                  key={s.id}
                  href={`/services#${s.id}`}
                  className={`svc svc--${serviceTones[i]}`}
                >
                  <div className="svc__top label">
                    <span>
                      {s.number} / {s.short}
                    </span>
                    <span aria-hidden="true">↗</span>
                  </div>
                  <div className="svc__body">
                    <div className="svc__frame">
                      <ProjectVisual project={cover} sizes="(max-width: 760px) 40vw, 18vw" />
                    </div>
                    <div>
                      <h3>{s.title}</h3>
                      <p>{s.summary}</p>
                      <span className="svc__link">
                        {s.promise} <span aria-hidden="true">↗</span>
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Work */}
      <section className="section" id="work">
        <div className="container">
          <div className="head">
            <div>
              <p className="eyebrow">Selected projects</p>
              <h2 className="h1">
                Made with purpose.
                <br />
                <em>Built to be used.</em>
              </h2>
            </div>
            <p>
              Websites, documentary film, social media and training, made with
              organisations working for change.
            </p>
          </div>
          <WorkGrid
            projects={projects}
            filters={services
              .filter((s) => projects.some((p) => p.service === s.id))
              .map((s) => ({ id: s.id, label: s.short }))}
          />
        </div>
      </section>

      {/* Partners */}
      <section className="section section--flush-top partners-wrap">
        <div className="container">
          <div className="clients__head">
            <p className="eyebrow">Partners &amp; collaborators</p>
            <h2 className="h1">
              Organisations we
              <br />
              <em>work with.</em>
            </h2>
          </div>
        </div>

        <LogoCarousel partners={partners} />

        <div className="container">
          <div className="clients__foot label">
            <span>Every partnership is a chance to learn, create and contribute.</span>
            <Link href="/partners">Meet our partners ↗</Link>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section paper-2" id="approach">
        <div className="container approach">
          <figure className="approach__photo">
            <Image
              src="/janakpur.png"
              alt="The Janakpur Literature Festival mobile website, built by UDAY Idea Lab"
              fill
              sizes="(max-width: 860px) 90vw, 40vw"
            />
            <figcaption className="label">Mobile experience · Website design</figcaption>
          </figure>
          <div>
            <p className="eyebrow">How we work</p>
            <h2 className="h1 h1--sm">
              From your idea
              <br />
              to real impact.
            </h2>
            <p className="approach__lead">
              We work with your team to understand the idea, the people it is for and what
              it should achieve. Then we choose the right mix of technology and creativity,
              build it and put it in front of the people it is meant for.
            </p>
            <div className="accordion">
              {approach.map((a, i) => (
                <details key={a.step} name="approach" open={i === 0}>
                  <summary>
                    <span className="label">0{i + 1}</span>
                    {a.step}
                    <span className="accordion__sign" aria-hidden="true" />
                  </summary>
                  <p>{a.text}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="head">
            <div>
              <p className="eyebrow">What we stand for</p>
              <h2 className="h1">
                The values
                <br />
                <em>behind the work.</em>
              </h2>
            </div>
            <p>
              Technology should solve real problems, creativity should make ideas easier to
              grasp, and communication should move people to act.
            </p>
          </div>
          <ul className="people">
            {values.map((v, i) => (
              <li key={v.name}>
                <span className="label">0{i + 1} / The lab</span>
                <h3>{v.name}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
