import type { Variants } from 'framer-motion'

export const EASE: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98]

export const fadeUp: Variants = {
  hidden: { y: 18 }, // sin fundido: el contenido se lee aunque la animación no corra
  show: { y: 0, transition: { duration: 0.45, ease: EASE } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: EASE } },
}

export const stagger = (delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: delay } },
})

export const viewport = { once: true, margin: '-64px' } as const
