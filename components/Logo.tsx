import Image from "next/image";

export default function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  return (
    <Image
      className="logo"
      src={`/brand/uday-logo-${tone}.png`}
      alt="UDAY Idea Lab"
      width={900}
      height={228}
      priority
    />
  );
}
