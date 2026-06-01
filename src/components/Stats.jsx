import { motion } from "framer-motion"
import { stats } from "../data/content"

export default function Stats() {
  return (
    <section className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 md:items-end">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-widest text-cyan-400">Цифры</p>
          <h2 className="font-display mt-4 text-4xl font-bold md:text-5xl">
            Результаты, <span className="text-white/40">не обещания</span>
          </h2>
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-white/50 md:text-lg"
        >
          Мы не делаем «красивые картинки ради портфолио». Каждый проект — измеримый
          рост вовлечённости, конверсии и узнаваемости бренда.
        </motion.p>
      </div>

      <div className="mx-auto mt-14 grid max-w-7xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass group rounded-3xl p-6 transition-colors hover:border-cyan-400/30 md:p-8"
          >
            <p className="font-display text-4xl font-extrabold text-gradient md:text-5xl">
              {stat.value}
            </p>
            <p className="mt-2 text-sm text-white/45">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
