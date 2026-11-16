import type { Metadata } from "next";
import ContactSection from "@/components/ContactSection";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Have an idea? Tell UDAY IdeaLab about your project, campaign, documentary or training programme.",
};

export default function Contact() {
  const details = [
    { label: "Company", value: site.legalName },
    { label: "Email", value: site.email, href: site.email && `mailto:${site.email}` },
    {
      label: "Phone",
      value: site.phone,
      href: site.phone && `tel:${site.phone.replace(/[^+\d]/g, "")}`,
    },
    { label: "Address", value: site.address },
  ];

  return (
    <>
      <div className="contact-page">
        <ContactSection heading="h1" />
      </div>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Work with us</p>
            <h2 className="h1 h1--sm">
              Have an idea?
              <br />
              <em>Let’s make it happen.</em>
            </h2>
          </div>
          <div>
            <p className="lead">
              A business looking for digital solutions, an organisation planning a campaign,
              an institution exploring a training programme or an individual with a creative
              project: we would love to hear from you.
            </p>
            <dl className="contact-details">
              {details.map((d) => (
                <div key={d.label}>
                  <dt className="label">{d.label}</dt>
                  <dd>
                    {d.value ? (
                      d.href ? (
                        <a href={d.href}>{d.value}</a>
                      ) : (
                        d.value
                      )
                    ) : (
                      <span className="muted">To be announced</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
