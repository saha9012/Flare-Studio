export const brand = {
  name: "FLARE",
  fullName: "Flare Studio",
  tagline: "Digital studio for brands that dare",
}

export const navLinks = [
  { href: "#work", label: "Кейсы" },
  { href: "#services", label: "Услуги" },
  { href: "#process", label: "Процесс" },
  { href: "#contact", label: "Контакт" },
]

export const stats = [
  { value: "48+", label: "запущенных проектов" },
  { value: "2.4M", label: "охват в соцсетях" },
  { value: "98%", label: "клиентов возвращаются" },
  { value: "14", label: "наград & фичеров" },
]

export const services = [
  {
    title: "Brand & Identity",
    desc: "Визуальный язык, который цепляет с первого скролла — лого, гайдлайны, motion-брендинг.",
    tags: ["Figma", "Motion", "3D"],
    span: "col-span-1 md:col-span-2 row-span-1",
    accent: "cyan",
  },
  {
    title: "Web Experience",
    desc: "Сайты и лендинги на React — быстрые, интерактивные, с wow-эффектом.",
    tags: ["React", "Vite", "GSAP"],
    span: "col-span-1 row-span-1",
    accent: "magenta",
  },
  {
    title: "Social & Content",
    desc: "Креативы для TikTok, Reels и Telegram — форматы, которые залетают в ленту.",
    tags: ["Reels", "UGC", "Ads"],
    span: "col-span-1 row-span-1",
    accent: "lime",
  },
  {
    title: "Product UI",
    desc: "Интерфейсы приложений и SaaS — от прототипа до pixel-perfect в коде.",
    tags: ["UI/UX", "Design System"],
    span: "col-span-1 md:col-span-2 row-span-1",
    accent: "violet",
  },
]

/** Четыре кейса — каждый живёт в отдельном репозитории; сюда подставите href и данные позже */
export const projects = [
  {
    id: "case-01",
    title: "Кейс #1",
    category: "Portfolio · Web",
    year: "—",
    desc: "Отдельный проект на GitHub — название, стек и ссылку добавим после релиза репозитория.",
    gradient: "from-cyan-500/30 via-violet-600/20 to-fuchsia-600/30",
    tags: ["Скоро", "React"],
    href: null,
    status: "soon",
  },
  {
    id: "case-02",
    title: "Кейс #2",
    category: "Portfolio · Web",
    year: "—",
    desc: "Второй кейс портфолио — полноценный лендинг или приложение в своём репо.",
    gradient: "from-lime-400/25 via-emerald-500/15 to-cyan-500/25",
    tags: ["Скоро"],
    href: null,
    status: "soon",
  },
  {
    id: "case-03",
    title: "Кейс #3",
    category: "Portfolio · UI",
    year: "—",
    desc: "Третий кейс — подключим превью и ссылку на репозиторий, когда проект будет готов.",
    gradient: "from-fuchsia-500/30 via-purple-600/20 to-indigo-500/30",
    tags: ["Скоро"],
    href: null,
    status: "soon",
  },
  {
    id: "case-04",
    title: "Кейс #4",
    category: "Portfolio · Brand",
    year: "—",
    desc: "Четвёртый кейс — завершим цепочку из четырёх проектов в отдельных репозиториях.",
    gradient: "from-amber-400/20 via-orange-500/15 to-rose-500/25",
    tags: ["Скоро"],
    href: null,
    status: "soon",
  },
]

export const processSteps = [
  {
    step: "01",
    title: "Discovery",
    desc: "Вникаем в аудиторию, конкурентов и vibe бренда. Без воды — только инсайты.",
  },
  {
    step: "02",
    title: "Concept",
    desc: "Moodboards, wireframes, прототип. Согласуем направление до пикселей.",
  },
  {
    step: "03",
    title: "Build",
    desc: "Дизайн + код параллельно. React, motion, performance с первого дня.",
  },
  {
    step: "04",
    title: "Launch",
    desc: "Деплой, аналитика, A/B. Поддержка после релиза — мы не пропадаем.",
  },
]

export const marqueeItems = [
  "FLARE STUDIO",
  "BRAND IDENTITY",
  "REACT APPS",
  "MOTION DESIGN",
  "SOCIAL CREATIVE",
  "UI/UX",
  "GEN Z MARKETING",
  "PERFORMANCE FIRST",
]
