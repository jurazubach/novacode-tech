import { useEffect, useRef, useState } from "react";
import type { StackItem } from "../data/stack";

function Chip({ item }: { item: StackItem }) {
  return (
    <span className="chip chip-sm">
      {item.Icon ? (
        <item.Icon className="chip-icon" aria-hidden />
      ) : (
        <span className="chip-mono" aria-hidden>{item.mono}</span>
      )}
      <span>{item.name}</span>
    </span>
  );
}

/**
 * Horizontal strip of tech chips. If the chips overflow one line, the strip
 * turns into a seamless marquee (duplicated track, paused on hover). Falls
 * back to a static, horizontally-scrollable row under reduced-motion.
 */
export function StackMarquee({ items }: { items: StackItem[] }) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const wrap = wrapRef.current;
    const track = trackRef.current;
    if (!wrap || !track) return;
    const check = () => {
      // single-set width: track holds 1 copy until scroll kicks in, 2 after.
      const oneSet = track.scrollWidth / (scroll ? 2 : 1);
      if (oneSet > wrap.clientWidth + 4) setScroll(true);
    };
    check();
    const ro = new ResizeObserver(check);
    ro.observe(wrap);
    return () => ro.disconnect();
  }, [items, scroll]);

  return (
    <div className={`marquee${scroll ? " is-scrolling" : ""}`} ref={wrapRef}>
      <div className="marquee-track" ref={trackRef}>
        {items.map((it) => (
          <Chip item={it} key={it.name} />
        ))}
        {scroll &&
          items.map((it) => <Chip item={it} key={`dup-${it.name}`} />)}
      </div>
    </div>
  );
}
