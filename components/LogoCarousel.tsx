import Image from "next/image";
import Link from "next/link";
import type { Partner } from "@/lib/site";

export default function LogoCarousel({ partners }: { partners: Partner[] }) {
  // Repeat list across tracks to maintain seamless infinite loop with tight spacing
  const trackPartners = [...partners, ...partners];

  return (
    <div className="logo-carousel" aria-label="Our partners and collaborators">
      <div className="logo-carousel__mask">
        <div className="logo-carousel__track">
          {trackPartners.map((p, idx) => (
            <Link
              key={`${p.name}-${idx}`}
              href="/partners"
              className="logo-carousel__item"
              title={`${p.name} — ${p.sector}`}
            >
              <div className="logo-carousel__media">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={260}
                  height={80}
                  unoptimized
                  className="logo-carousel__img"
                />
              </div>
            </Link>
          ))}
        </div>
        <div className="logo-carousel__track" aria-hidden="true">
          {trackPartners.map((p, idx) => (
            <Link
              key={`dup-${p.name}-${idx}`}
              href="/partners"
              tabIndex={-1}
              className="logo-carousel__item"
              title={`${p.name} — ${p.sector}`}
            >
              <div className="logo-carousel__media">
                <Image
                  src={p.logo}
                  alt={p.name}
                  width={260}
                  height={80}
                  unoptimized
                  className="logo-carousel__img"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
