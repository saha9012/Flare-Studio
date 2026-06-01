import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, MapPin } from "lucide-react"

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.06] to-transparent p-8 md:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-[80px]" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-fuchsia-500/20 blur-[80px]" />

          <div className="relative grid gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm uppercase tracking-widest text-cyan-400">Контакт</p>
              <h2 className="font-display mt-4 text-4xl font-bold md:text-5xl">
                Давайте сделаем что-то <span className="text-gradient-lime">легендарное</span>
              </h2>
              <p className="mt-4 text-white/50">
                Расскажите о проекте — ответим в течение 24 часов. Бриф, сроки, бюджет —
                всё обсудим без корпоративной бюрократии.
              </p>

              <ul className="mt-8 space-y-4">
                <li className="flex items-center gap-3 text-white/50">
                  <Mail className="h-5 w-5 text-cyan-400/80" />
                  <span>
                    <span className="text-white/30">email · </span>
                    your@email.com
                  </span>
                </li>
                <li className="flex items-center gap-3 text-white/50">
                  <MapPin className="h-5 w-5 text-fuchsia-400/80" />
                  <span>
                    <span className="text-white/30">telegram · </span>
                    @your_username
                  </span>
                </li>
              </ul>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              {submitted ? (
                <div className="flex h-full min-h-[280px] flex-col items-center justify-center rounded-2xl glass text-center">
                  <p className="font-display text-2xl font-bold text-gradient">Спасибо!</p>
                  <p className="mt-2 text-white/50">
                    Это демо-форма для портфолио. Подключите Formspree или свой API.
                  </p>
                </div>
              ) : (
                <>
                  <input
                    type="text"
                    required
                    placeholder="Имя / компания"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/30 outline-none transition-colors focus:border-cyan-400/50"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Email"
                    className="w-full rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/30 outline-none transition-colors focus:border-cyan-400/50"
                  />
                  <textarea
                    required
                    rows={4}
                    placeholder="О проекте: что нужно, сроки, референсы..."
                    className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-5 py-4 text-white placeholder:text-white/30 outline-none transition-colors focus:border-cyan-400/50"
                  />
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-white py-4 font-semibold text-black transition-transform hover:scale-[1.02]"
                  >
                    Отправить бриф
                    <Send className="h-4 w-4" />
                  </button>
                </>
              )}
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  )
}
