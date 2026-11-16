import type { Metadata } from "next";
import Link from "next/link";
import CTA from "@/components/CTA";
import PageHero from "@/components/PageHero";
import { approach, values } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "UDAY IdeaLab is a technology and creative communication company in Nepal, working with organisations creating social change.",
};

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About UDAY IdeaLab"
        title={
          <>
            Technology and creativity, <em>working for social change.</em>
          </>
        }
        lead="We are a technology and creative communication company from Nepal. We help organisations that are working for change to build, tell and teach."
      />

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Who we are</p>
            <h2 className="h2">
              Technology should solve real problems. Creativity should make ideas easier to
              grasp. <em>Communication should bring people closer.</em>
            </h2>
          </div>
          <div>
            <p className="lead">
              UDAY IdeaLab Pvt. Ltd. works with businesses, organisations, educational
              institutions, development projects and individuals to build practical digital
              solutions and creative communication.
            </p>
            <p>
              Our work covers websites and digital platforms, IT consulting, branding and
              graphic design, content writing, social media management, documentary films,
              photography, podcasts and multimedia, digital education and social impact
              communication.
            </p>
            <p>
              That range is deliberate. A new website needs a brand worth showing. A
              programme needs a story people will watch. A campaign needs a platform to
              live on. By keeping these skills in one team, we help clients build their
              digital presence, communicate their work and create solutions of lasting
              value.
            </p>
            <Link href="/services" className="link">
              See what we do <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section blue">
        <div className="container duo">
          <article >
            <p className="eyebrow">Our vision</p>
            <p className="h2">
              To be the place where technology, creativity and innovation come together to
              create <em>meaningful solutions and positive impact.</em>
            </p>
          </article>
          <article >
            <p className="eyebrow">Our mission</p>
            <p className="h2">
              To empower people and organisations with accessible, practical and creative
              solutions in <em>technology, design, education and communication.</em>
            </p>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Our values</p>
          <h2 className="h1">
            Five things <em>we hold to.</em>
          </h2>
          <ul className="values">
            {values.map((v, i) => (
              <li key={v.name} >
                <span className="label">0{i + 1}</span>
                <h3>{v.name}</h3>
                <p>{v.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section paper-2">
        <div className="container">
          <p className="eyebrow">Our approach</p>
          <h2 className="h1">
            Understand. Create. Communicate. <em>Impact.</em>
          </h2>
          <p className="lead narrow">
            From a simple idea to a complete project, we work closely with clients and
            partners to find the right approach, build a practical solution and communicate
            it well.
          </p>
          <ol className="steps">
            {approach.map((a, i) => (
              <li key={a.step} >
                <span className="label">0{i + 1}</span>
                <h3>{a.step}</h3>
                <p>{a.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CTA />
    </>
  );
}
