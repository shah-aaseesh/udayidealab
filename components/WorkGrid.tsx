"use client";

import Link from "next/link";
import { useState } from "react";
import type { Project } from "@/lib/site";
import ProjectVisual from "./ProjectVisual";

export default function WorkGrid({
  projects,
  filters,
}: {
  projects: Project[];
  filters: { id: string; label: string }[];
}) {
  const [active, setActive] = useState("all");
  const shown = active === "all" ? projects : projects.filter((p) => p.service === active);

  return (
    <>
      <div className="tabs" role="group" aria-label="Filter projects">
        <button type="button" aria-pressed={active === "all"} onClick={() => setActive("all")}>
          All work <sup>{String(projects.length).padStart(2, "0")}</sup>
        </button>
        {filters.map((f) => (
          <button
            key={f.id}
            type="button"
            aria-pressed={active === f.id}
            onClick={() => setActive(f.id)}
          >
            {f.label}
          </button>
        ))}
      </div>
      <p className="label work__count">
        {String(shown.length).padStart(2, "0")} projects / many ways to bring an idea to life
      </p>

      <div className="work-grid">
        {shown.map((p, i) => (
          <Link key={p.id} href={`/work#${p.id}`} className="work-card">
            <ProjectVisual
              project={p}
              sizes={i === 0 ? "(max-width: 860px) 100vw, 70vw" : "(max-width: 760px) 100vw, 50vw"}
            />
            <span className="work-card__arrow" aria-hidden="true">
              ↗
            </span>
            <span className="work-card__client label">{p.client}</span>
            <span className="work-card__text">
              <span className="label">
                {String(i + 1).padStart(2, "0")} / Selected work
              </span>
              <strong>{p.title}</strong>
              <small>{p.kind}</small>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
}
