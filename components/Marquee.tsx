export default function Marquee({
  items,
  reverse = false,
  start = 1,
  tone = "blue",
}: {
  items: string[];
  reverse?: boolean;
  start?: number;
  tone?: "blue" | "paper" | "peri";
}) {
  const row = (hidden: boolean) => (
    <ul className="ribbon__row" aria-hidden={hidden || undefined}>
      {items.map((item, i) => (
        <li key={item}>
          <span>{String(start + i).padStart(2, "0")}</span>
          {item}
        </li>
      ))}
    </ul>
  );
  return (
    <div className={`ribbon ribbon--${tone}${reverse ? " ribbon--reverse" : ""}`}>
      <div className="ribbon__track">
        {row(false)}
        {row(true)}
        {row(true)}
      </div>
    </div>
  );
}
