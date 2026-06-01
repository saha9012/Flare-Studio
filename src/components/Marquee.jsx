import { marqueeItems } from "../data/content"

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems]

  return (
    <section id="marquee" className="border-y border-white/5 py-6 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="mx-8 font-display text-2xl font-bold uppercase tracking-wider text-white/20 md:text-4xl"
          >
            {item}
            <span className="mx-8 text-cyan-400/60">✦</span>
          </span>
        ))}
      </div>
    </section>
  )
}
