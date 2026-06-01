import { motion } from "framer-motion"
import { Zap, Globe, Smartphone, Palette } from "lucide-react"
import { services } from "../data/content"

const icons = {
  cyan: Zap,
  magenta: Globe,
  lime: Smartphone,
  violet: Palette,
}

const accentStyles = {
  cyan: "group-hover:border-cyan-400/40 group-hover:shadow-cyan-500/10",
  magenta: "group-hover:border-fuchsia-400/40 group-hover:shadow-fuchsia-500/10",
  lime: "group-hover:border-lime-300/40 group-hover:shadow-lime-400/10",
  violet: "group-hover:border-violet-400/40 group-hover:shadow-violet-500/10",
}

const iconColors = {
  cyan: "text-cyan-400 bg-cyan-400/10",
  magenta: "text-fuchsia-400 bg-fuchsia-400/10",
  lime: "text-lime-300 bg-lime-300/10",
  violet: "text-violet-400 bg-violet-400/10",
}

export default function Services() {
  return (
    <section id="services" className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <p className="text-sm uppercase tracking-widest text-fuchsia-400">Услуги</p>
            <h2 className="font-display mt-4 text-4xl font-bold md:text-5xl">
              Всё для <span className="text-gradient">digital-first</span> бренда
            </h2>
          </div>
          <p className="max-w-md text-white/50">
            От айдентики до продакшн-кода — одна команда, один вайб, без бесконечных
            согласований с подрядчиками.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:auto-rows-[minmax(200px,auto)]">
          {services.map((service, i) => {
            const Icon = icons[service.accent]
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className={`group glass relative overflow-hidden rounded-3xl p-6 transition-all duration-500 hover:shadow-2xl md:p-8 ${service.span} ${accentStyles[service.accent]}`}
              >
                <div
                  className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40"
                  style={{
                    background:
                      service.accent === "cyan"
                        ? "#00f0ff"
                        : service.accent === "magenta"
                          ? "#ff2d92"
                          : service.accent === "lime"
                            ? "#d4ff00"
                            : "#a78bfa",
                  }}
                />
                <div
                  className={`mb-5 inline-flex rounded-2xl p-3 ${iconColors[service.accent]}`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-xl font-bold md:text-2xl">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50 md:text-base">
                  {service.desc}
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
