import { motion } from "framer-motion"
import { processSteps } from "../data/content"

export default function Process() {
  return (
    <section id="process" className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm uppercase tracking-widest text-violet-400">Процесс</p>
          <h2 className="font-display mt-4 text-4xl font-bold md:text-5xl">
            От идеи до релиза — <span className="text-gradient">4 шага</span>
          </h2>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-8 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-400/50 via-fuchsia-500/30 to-transparent md:left-1/2 md:block" />

          <div className="space-y-8 md:space-y-0">
            {processSteps.map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex flex-col gap-6 md:flex-row md:items-center md:gap-12 ${
                  i % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`md:w-1/2 ${i % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                  <span className="font-display text-6xl font-extrabold text-white/5 md:text-8xl">
                    {item.step}
                  </span>
                  <h3 className="font-display -mt-8 text-2xl font-bold md:-mt-12 md:text-3xl">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-white/50">{item.desc}</p>
                </div>

                <div className="hidden md:flex md:w-1/2 md:justify-center">
                  <div className="relative z-10 flex h-4 w-4 items-center justify-center">
                    <span className="absolute h-8 w-8 animate-pulse-glow rounded-full bg-cyan-400/30" />
                    <span className="relative h-3 w-3 rounded-full bg-cyan-400" />
                  </div>
                </div>

                <div className="md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
