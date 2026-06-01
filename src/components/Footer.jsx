import { Code2, Camera, AtSign, Share2 } from "lucide-react"

const socials = [
  { icon: Code2, href: "#", label: "GitHub" },
  { icon: Camera, href: "#", label: "Instagram" },
  { icon: AtSign, href: "#", label: "Twitter" },
  { icon: Share2, href: "#", label: "LinkedIn" },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-12 md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 md:flex-row">
        <div className="text-center md:text-left">
          <p className="font-display text-2xl font-bold">
            FL<span className="text-cyan-400">ARE</span>
          </p>
          <p className="mt-2 text-sm text-white/40">
            © {new Date().getFullYear()} Flare Studio · Portfolio demo on React
          </p>
        </div>

        <div className="flex gap-3">
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-xl glass text-white/60 transition-colors hover:text-cyan-400"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <p className="max-w-xs text-center text-xs text-white/30 md:text-right">
          Соцсети и ссылки — заглушки. Обновите перед публикацией.
        </p>
      </div>
    </footer>
  )
}
