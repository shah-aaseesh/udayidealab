import Link from "next/link";
import { nav, site } from "@/lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="footer dark">
      <div className="container footer__bar">
        <Link href="/" aria-label="UDAY Idea Lab, home">
          <Logo />
        </Link>
        <nav aria-label="Footer">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact">Contact</Link>
        </nav>
        <span>
          {site.strapline} © 2026 {site.legalName}
        </span>
        <a href="#top">Back to the top ↑</a>
      </div>
    </footer>
  );
}
