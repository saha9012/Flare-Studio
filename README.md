# FLARE — Digital Studio

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Motion-animations-ff0055)](https://www.framer.com/motion/)

> **Демо-лендинг цифровой студии FLARE** для портфолио на GitHub. Молодёжный tech-визуал, glass UI, плавные анимации и современный стек.

---

## Для заказчиков

Этот репозиторий — **живой пример** подхода к веб-проектам:

| Что вы увидите | Зачем это вам |
|----------------|---------------|
| **Современный UI** | Неон, градиенты, glassmorphism — визуал для Gen Z и tech-брендов |
| **Плавные анимации** | Framer Motion: появление блоков, hover, курсор |
| **Адаптив** | Телефон, планшет, десктоп |
| **Чистый код** | React-компоненты, контент вынесен в `content.js` |
| **Быстрая загрузка** | Vite + production build |

**FLARE** — вымышленная digital-студия: брендинг, сайты, соцсети и UI. Четыре кейса в блоке «Работы» будут вести на **отдельные репозитории** с полноценными проектами (подключаются по мере готовности).

---

## Превью

После деплоя добавьте ссылку на live-версию:

```text
https://ваш-username.github.io/flare-studio/
```

Скриншот Hero можно положить в `docs/preview.png` для карточки репозитория.

---

## Стек

- **React 19** — UI
- **Vite 8** — сборка
- **Tailwind CSS 4** — стили
- **Framer Motion** — анимации
- **Lucide React** — иконки

---

## Быстрый старт

```bash
git clone https://github.com/ВАШ_USERNAME/flare-studio.git
cd flare-studio
npm install
npm run dev
```

### Сборка

```bash
npm run build
npm run preview
```

---

## Структура

```text
src/
├── components/       # Секции лендинга
├── data/
│   └── content.js    # Бренд, услуги, кейсы (4 слота под репозитории)
├── App.jsx
└── index.css
```

### Подключение кейсов

В `src/data/content.js` для каждого из четырёх `projects` задайте:

```js
{
  id: "case-01",
  title: "Название проекта",
  category: "E-commerce · Web",
  year: "2025",
  desc: "Краткое описание",
  gradient: "from-cyan-500/30 via-violet-600/20 to-fuchsia-600/30",
  tags: ["React", "Tailwind"],
  href: "https://github.com/username/repo",
  status: "live", // уберите soon или поставьте status: "live"
}
```

При `href` карточка станет кликабельной ссылкой на репозиторий или демо.

---

## Деплой на GitHub Pages

Сайт: **https://saha9012.github.io/Flare-Studio/**

1. **Settings → Pages → Build and deployment → Source:** выберите **GitHub Actions** (не «Deploy from branch»).
2. При push в `main` workflow `.github/workflows/deploy-pages.yml` собирает `dist` и публикует его.
3. В `vite.config.js` уже задано `base: '/Flare-Studio/'` — путь должен совпадать с именем репозитория (регистр важен).

---

## Лицензия

MIT — используйте код с указанием авторства.
