import ContactForm from "./ContactForm";
import { services, site } from "@/lib/site";

export default function ContactSection({ heading = "h2" }: { heading?: "h1" | "h2" }) {
  const H = heading;
  return (
    <section className="contact dark" id="contact">
      <span className="contact__glyph" aria-hidden="true">
        {"}"}
      </span>
      <div className="container">
        <div className="contact__grid">
          <div>
            <p className="eyebrow">Discuss a project</p>
            <H className="h1">
              Tell us about
              <br />
              your idea. <span className="arrow">↗</span>
            </H>
          </div>
          <ContactForm
            email={site.email}
            recipients={site.formRecipients}
            topics={services.map((s) => s.title)}
          />
        </div>

        <div className="contact__row">
          {site.email ? (
            <a className="ulink" href={`mailto:${site.email}`}>
              {site.email} <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span>
              <span className="label">Email</span> To be announced
            </span>
          )}
          {site.phone ? (
            <a className="ulink" href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>
              {site.phone} <span aria-hidden="true">↗</span>
            </a>
          ) : (
            <span>
              <span className="label">Phone</span> To be announced
            </span>
          )}
          <p>
            {site.address || `Based in ${site.location}`} · Working with NGOs, institutions,
            development projects and purpose-led businesses.
          </p>
        </div>
      </div>
    </section>
  );
}
