// Precision vector brand emblem for UDAY IdeaLab ({ < })
export default function BraceMark({ className = "" }: { className?: string }) {
  return (
    <div className={`brace-mark ${className}`} aria-hidden="true">
      <svg
        className="brace-mark__svg"
        viewBox="0 0 360 220"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="braceGrad" x1="60" y1="35" x2="300" y2="185" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4f75ff" />
            <stop offset="50%" stopColor="#254cfa" />
            <stop offset="100%" stopColor="#1536b8" />
          </linearGradient>
          <linearGradient id="chevronGrad" x1="165" y1="83" x2="195" y2="137" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#5ae2ff" />
            <stop offset="100%" stopColor="#1aa3e8" />
          </linearGradient>
          <radialGradient id="coreGlow" cx="180" cy="110" r="90" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgba(37, 76, 250, 0.3)" />
            <stop offset="60%" stopColor="rgba(21, 54, 184, 0.08)" />
            <stop offset="100%" stopColor="transparent" />
          </radialGradient>
          <filter id="markGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Ambient Core Radial Glow */}
        <circle cx="180" cy="110" r="85" fill="url(#coreGlow)" />

        {/* Refined Geometric Orbital Framework */}
        <g className="brace-mark__orbit">
          <circle
            cx="180"
            cy="110"
            r="100"
            stroke="rgba(120, 147, 255, 0.22)"
            strokeWidth="1.2"
            strokeDasharray="4 6"
          />
          <circle
            cx="180"
            cy="110"
            r="70"
            stroke="rgba(120, 147, 255, 0.12)"
            strokeWidth="1"
            strokeDasharray="2 4"
          />
        </g>

        {/* Precision Crosshair Marks */}
        <g stroke="rgba(120, 147, 255, 0.4)" strokeWidth="1.2" strokeLinecap="round">
          <line x1="180" y1="4" x2="180" y2="14" />
          <line x1="180" y1="206" x2="180" y2="216" />
          <line x1="74" y1="110" x2="84" y2="110" />
          <line x1="276" y1="110" x2="286" y2="110" />
        </g>

        {/* Left Curly Bracket */}
        <path
          d="M 125 40 C 100 40, 90 50, 90 75 L 90 94 C 90 105, 80 110, 68 110 C 80 110, 90 115, 90 126 L 90 145 C 90 170, 100 180, 125 180"
          stroke="url(#braceGrad)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="brace-mark__bracket brace-mark__bracket--left"
        />

        {/* Brand Chevron Motif */}
        <path
          d="M 194 83 L 166 110 L 194 137"
          stroke="url(#chevronGrad)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          filter="url(#markGlow)"
          className="brace-mark__chevron"
        />

        {/* Right Curly Bracket */}
        <path
          d="M 235 40 C 260 40, 270 50, 270 75 L 270 94 C 270 105, 280 110, 292 110 C 280 110, 270 115, 270 126 L 270 145 C 270 170, 260 180, 235 180"
          stroke="url(#braceGrad)"
          strokeWidth="16"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="brace-mark__bracket brace-mark__bracket--right"
        />
      </svg>

      <div className="brace-mark__meta">
        <span className="label">UDAY IDEA LAB</span>
        <span className="brace-mark__dot">●</span>
        <span className="label">IDEAS INTO INNOVATION</span>
      </div>
    </div>
  );
}
