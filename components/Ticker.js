/* Auto-scrolling row. items: [{src, w}] ; track is duplicated for a seamless loop */
export default function Ticker({ items, height, speed = 40, reverse = false, bottom = false, className = "" }) {
  const row = [...items, ...items];
  return (
    <div className={`ticker ${className}`}>
      <div
        className="ticker-track"
        style={{ animationDuration: `${speed}s`, animationDirection: reverse ? "reverse" : "normal", alignItems: bottom ? "flex-end" : "flex-start" }}
      >
        {row.map((it, i) => (
          <div className="ticker-item" key={i} style={{ width: it.w }} aria-hidden={i >= items.length}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={it.src} alt="" loading="lazy" style={height ? { height, width: "100%" } : undefined} />
          </div>
        ))}
      </div>
    </div>
  );
}
