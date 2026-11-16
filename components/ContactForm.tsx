"use client";

import { useState } from "react";

// Opens the visitor's email app with the enquiry filled in. No backend needed.
// To collect enquiries on the server instead, replace onSubmit with a Server Action
// or a form service, and keep the same fields.
export default function ContactForm({
  email,
  recipients,
  topics,
}: {
  email?: string;
  recipients?: string[];
  topics: string[];
}) {
  const [status, setStatus] = useState<"idle" | "opened" | "no-email">("idle");
  const targetEmails = recipients && recipients.length > 0 ? recipients : email ? [email] : [];

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (targetEmails.length === 0) {
      setStatus("no-email");
      return;
    }
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();
    const subject = `Project enquiry from ${get("name")}${
      get("organisation") ? ` (${get("organisation")})` : ""
    }`;
    const body = [
      `Name: ${get("name")}`,
      `Organisation: ${get("organisation") || "-"}`,
      `Email: ${get("email")}`,
      `Interested in: ${get("topic")}`,
      `Timeline: ${get("timeline") || "-"}`,
      "",
      get("message"),
    ].join("\n");
    const to = targetEmails.join(",");
    window.location.href = `mailto:${to}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    setStatus("opened");
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="form__head">
        <strong>Tell us what you need.</strong>
        <p>Share a brief or a few details about your project.</p>
      </div>
      <div className="form__row">
        <label>
          Your name
          <input name="name" type="text" autoComplete="name" required />
        </label>
        <label>
          Organisation
          <input name="organisation" type="text" autoComplete="organization" />
        </label>
      </div>
      <div className="form__row">
        <label>
          Email address
          <input name="email" type="email" autoComplete="email" required />
        </label>
        <label>
          Timeline
          <input name="timeline" type="text" placeholder="e.g. within two months" />
        </label>
      </div>
      <label>
        What do you need?
        <select name="topic" defaultValue={topics[0]}>
          {topics.map((t) => (
            <option key={t}>{t}</option>
          ))}
          <option>Something else</option>
        </select>
      </label>
      <label>
        What are you planning?
        <textarea
          name="message"
          rows={4}
          placeholder="The idea, who it is for and what you want it to achieve"
          required
        />
      </label>
      <button type="submit" className="btn btn--primary">
        Send enquiry <span aria-hidden="true">↗</span>
      </button>
      <p className="form__status" role="status">
        {status === "opened" &&
          "Your email app should now be open with the enquiry ready to send."}
        {status === "no-email" &&
          "Our contact email is being set up. Please check back shortly."}
      </p>
    </form>
  );
}
