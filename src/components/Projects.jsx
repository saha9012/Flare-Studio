import { motion } from "framer-motion"
import { ArrowUpRight, Clock } from "lucide-react"
import { projects } from "../data/content"

function ProjectCard({ project, index }) {
  const isSoon = project.status === "soon" || !project.href
  const className =
    "group relative block overflow-hidden rounded-3xl glass transition-transform duration-500 " +
    (isSoon ? "cursor-default" : "hover:scale-[1.02]")

  const inner = (
    <>
      <div
        className={`relative flex h-56 items-end bg-gradient-to-br p-6 md:h-64 ${project.gradient}`}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.04\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-50" />
        {isSoon && (
          <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
            <Clock className="h-3.5 w-3.5 text-lime-300" />
            Скоро на GitHub
          </span>
        )}
        <div className="relative z-10 flex w-full items-end justify-between">
          <div>
            <p className="text-xs uppercase tracking-wider text-white/60">{project.category}</p>
            <h3 className="font-display mt-1 text-2xl font-bold md:text-3xl">{project.title}</h3>
          </div>
          <span
            className={`flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-all ${
              !isSoon && "group-hover:bg-white group-hover:text-black"
            }`}
          >
            {isSoon ? (
              <span className="font-display text-lg font-bold text-white/40">0{index + 1}</span>
            ) : (
              <ArrowUpRight className="h-5 w-5" />
            )}
          </span>
        </div>
      </div>
      <div className="p-6 md:p-8">
        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-white/50">{project.desc}</p>
          <span className="shrink-0 font-display text-sm text-white/30">{project.year}</span>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </>
  )

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      {isSoon ? (
        <article className={className}>{inner}</article>
      ) : (
        <a
          href={project.href}
          target="_blank"
          rel="noopener noreferrer"
          className={className}
        >
          {inner}
        </a>
      )}
    </motion.div>
  )
}

export default function Projects() {
  return (
    <section id="work" className="px-4 py-20 md:px-8 md:py-28">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-3xl"
        >
          <p className="text-sm uppercase tracking-widest text-lime-300">Кейсы</p>
          <h2 className="font-display mt-4 text-4xl font-bold md:text-5xl">
            Четыре проекта — <span className="italic text-white/40">четыре репозитория</span>
          </h2>
          <p className="mt-4 text-white/50">
            Каждый кейс — отдельный проект на GitHub. Здесь будут превью и ссылки, как только
            выложим работы в портфолио.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
