import { motion } from "framer-motion"
import { ArrowDown, Sparkles, Play } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center px-4 pt-28 pb-20 md:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 backdrop-blur-sm"
        >
          <Sparkles className="h-4 w-4 text-lime-300" />
          <span>Flare Studio · Est. 2024</span>
          <span className="h-1 w-1 rounded-full bg-cyan-400" />
          <span className="text-cyan-300">Available for Q2</span>
        </motion.div>

        <h1 className="font-display max-w-5xl text-[clamp(2.75rem,8vw,6.5rem)] font-extrabold leading-[0.95] tracking-tight">
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Создаём цифровой
          </motion.span>
          <motion.span
            className="block text-gradient"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
          >
            опыт, который
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            хочется <span className="text-gradient-lime italic">шерить</span>
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.85 }}
          className="mt-8 max-w-xl text-lg text-white/55 md:text-xl"
        >
          FLARE — студия для брендов, которые говорят на языке Gen Z: смелый визуал,
          React-разработка и motion, который не отпускает.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 px-8 py-4 font-semibold text-black transition-transform hover:scale-[1.03] glow-cyan"
          >
            Смотреть кейсы
            <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <button
            type="button"
            className="inline-flex items-center gap-3 rounded-full glass px-6 py-4 text-sm font-medium text-white/90 transition-colors hover:bg-white/10"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
              <Play className="h-4 w-4 fill-white text-white" />
            </span>
            Showreel 2025
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {[
            { label: "Клиенты", value: "30+" },
            { label: "Страны", value: "6" },
            { label: "Awwwards", value: "3×" },
            { label: "Средний NPS", value: "9.4" },
          ].map((item) => (
            <div key={item.label} className="glass rounded-2xl p-4 md:p-5">
              <p className="font-display text-2xl font-bold md:text-3xl">{item.value}</p>
              <p className="mt-1 text-xs text-white/45 md:text-sm">{item.label}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <a href="#marquee" className="flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="h-4 w-4" />
        </a>
      </motion.div>

      <div className="pointer-events-none absolute right-4 top-1/3 hidden lg:block animate-float">
        <div className="glass glow-magenta rotate-6 rounded-3xl p-6 w-56">
          <p className="text-xs uppercase tracking-wider text-fuchsia-300">Portfolio</p>
          <p className="font-display mt-2 text-lg font-bold">Кейс #1</p>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-fuchsia-500"
              initial={{ width: "0%" }}
              animate={{ width: "35%" }}
              transition={{ delay: 1.5, duration: 1.2 }}
            />
          </div>
          <p className="mt-2 text-xs text-white/40">скоро на GitHub</p>
        </div>
      </div>
    </section>
  )
}
