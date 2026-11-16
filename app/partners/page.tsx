import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTA from "@/components/CTA";
import PageHero from "@/components/PageHero";
import { partners, projects } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our partners",
  description:
    "UDAY IdeaLab works with organisations in tourism, youth leadership, education, community development and healthcare.",
};

export default function Partners() {
  return (
    <>
      <PageHero
        eyebrow="Our partners"
        title={
          <>
            Good work is
            <br />
            <em>shared work.</em>
          </>
        }
        lead="We work alongside organisations creating change in their communities. Every partnership is a chance to learn, create and contribute to something meaningful."
      />

      <section className="section">
        <div className="container">
          <div className="head">
            <div>
              <p className="eyebrow">Proud to be associated with</p>
              <h2 className="h1">
                Six partners.
                <br />
                <em>Six sectors.</em>
              </h2>
            </div>
            <p>
              Our collaborations span tourism, youth leadership, education, community
              development and healthcare.
            </p>
          </div>

          <ul className="partner-list">
            {partners.map((p, i) => {
              const work = projects.filter((x) => x.client === p.name);
              return (
                <li key={p.name}>
                  <span className={`partner-list__logo client--${p.tone}`}>
                    <Image src={p.logo} alt="" fill sizes="200px" />
                  </span>
                  <div>
                    <p className="label">
                      0{i + 1} — {p.sector}
                    </p>
                    <h3>{p.name}</h3>
                  </div>
                  <div className="partner-list__work">
                    {work.map((w) => (
                      <Link key={w.id} href={`/work#${w.id}`} className="ulink">
                        {w.kind} <span aria-hidden="true">↗</span>
                      </Link>
                    ))}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <CTA
        eyebrow="Partner with us"
        title={
          <>
            Working on something that matters? <em>Let’s do it together.</em>
          </>
        }
        text="We are always open to collaborations with organisations and institutions that want to build, tell or teach something worthwhile."
      />
    </>
  );
}
