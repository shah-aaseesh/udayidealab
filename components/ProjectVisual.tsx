import Image from "next/image";
import type { Project } from "@/lib/site";

// Project cover. Uses the project's image when it has one, otherwise a drawn cover.
// To replace a drawn cover, add an `image` to the project in lib/site.ts.
export default function ProjectVisual({
  project,
  sizes = "(max-width: 860px) 100vw, 50vw",
}: {
  project: Project;
  sizes?: string;
}) {
  // Website projects: the screenshot sits in a browser window on a coloured ground,
  // which keeps the card's title area clear.
  if (project.image && project.visual === "browser") {
    return (
      <div className="pv pv--site" aria-hidden="true">
        <div className="pv__window">
          <div className="pv__bar">
            <i />
            <i />
            <i />
            <span>{project.visualMeta}</span>
          </div>
          <div className="pv__shot">
            <Image src={project.image} alt="" fill sizes={sizes} />
          </div>
        </div>
      </div>
    );
  }

  if (project.image) {
    return (
      <div className="pv pv--image" aria-hidden="true">
        <Image src={project.image} alt="" fill sizes={sizes} />
      </div>
    );
  }

  switch (project.visual) {
    case "reel":
      return (
        <div className="pv pv--reel" aria-hidden="true">
          <div className="pv__phone pv__phone--back" />
          <div className="pv__phone">
            <div className="pv__notch" />
            <div className="pv__phone-screen">
              <span className="pv__play">▶</span>
              <div className="pv__reel-stats">
                <span>♥ 2.8k</span>
                <span>💬 142</span>
              </div>
            </div>
          </div>
        </div>
      );
    case "numbers":
      return (
        <div className="pv pv--numbers" aria-hidden="true">
          {project.facts?.map((f) => (
            <div key={f.label}>
              <strong>{f.value}</strong>
              <span className="label">{f.label}</span>
            </div>
          ))}
        </div>
      );
    case "posts":
      return (
        <div className="pv pv--posts" aria-hidden="true">
          <div className="pv__social-mock">
            <div className="pv__social-header">
              <span className="pv__social-avatar" />
              <div className="pv__social-user">
                <strong>@janakpurlitfest</strong>
                <small>Literature &amp; Culture</small>
              </div>
              <span className="pv__social-badge">✓</span>
            </div>
            <div className="pv__social-body">
              <div className="pv__social-grid">
                {["Aa", "", "{ }", "", "#", ""].map((glyph, i) => (
                  <span key={i}>{glyph}</span>
                ))}
              </div>
            </div>
            <div className="pv__social-footer">
              <span>♥ 1,248</span>
              <span>↗ Share</span>
            </div>
          </div>
        </div>
      );
    case "type":
      return (
        <div className="pv pv--type" aria-hidden="true">
          <div className="pv__specimen-tag">BRAND SPECIMEN / 02</div>
          <div className="pv__specimen-hero">
            <strong>Aa</strong>
            <span className="pv__specimen-serif">Rr</span>
          </div>
          <div className="pv__swatches">
            <span style={{ background: "var(--electric)" }} />
            <span style={{ background: "var(--peri)" }} />
            <span style={{ background: "var(--sky)" }} />
            <span style={{ background: "var(--ink)" }} />
          </div>
          <div className="pv__type-lines">
            <span />
            <span />
            <span className="short" />
          </div>
        </div>
      );
    case "wave":
      return (
        <div className="pv pv--wave" aria-hidden="true">
          <div className="pv__wave-meta">
            <span className="pv__live-pill">REC ● 48kHz</span>
            <span className="pv__wave-channel">Audio / Podcast Studio</span>
          </div>
          <div className="pv__wave-bars">
            {[34, 62, 88, 54, 100, 70, 42, 78, 50, 92, 60, 30].map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="pv__wave-foot">
            <span className="pv__wave-time">02:45 / 18:30</span>
            <span className="pv__wave-eq">Stereo Master</span>
          </div>
        </div>
      );
    default:
      return (
        <div className="pv pv--learn" aria-hidden="true">
          <div className="pv__terminal-bar">
            <div className="pv__dots">
              <i />
              <i />
              <i />
            </div>
            <span>workshop.terminal</span>
          </div>
          <div className="pv__terminal-content">
            <span className="pv__code-comment">{"// Community Skills Initiative"}</span>
            <div className="pv__code-block">
              <span className="pv__kw">workshop</span>.<span className="pv__fn">start</span>&#40;&#123;
              <br />
              &nbsp;&nbsp;location: <span className="pv__str">&quot;Madhesh&quot;</span>,
              <br />
              &nbsp;&nbsp;curriculum: [<span className="pv__str">&quot;code&quot;</span>, <span className="pv__str">&quot;design&quot;</span>]
              <br />
              &#125;&#41;;
            </div>
            <div className="pv__terminal-badge">
              <span>● Interactive Learning</span>
            </div>
          </div>
        </div>
      );
  }
}
