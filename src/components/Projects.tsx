import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion'
import { ExternalLink, Rocket } from 'lucide-react'
import type { MouseEvent, ReactNode } from 'react'
import { projects, copy } from '../data/content'
import { useLang } from '../i18n/lang'
import type { Project } from '../data/content'
import { fadeUp, stagger, viewport } from './motion'

function Tilt({ children, className }: { children: ReactNode; className?: string }) {
  const reduce = useReducedMotion()
  const mx = useMotionValue(0.5)
  const my = useMotionValue(0.5)
  const spring = { stiffness: 170, damping: 16 }
  const rotateX = useSpring(useTransform(my, [0, 1], [6, -6]), spring)
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), spring)

  function onMove(e: MouseEvent<HTMLElement>) {
    if (reduce) return
    const r = e.currentTarget.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width)
    my.set((e.clientY - r.top) / r.height)
  }
  function onLeave() {
    mx.set(0.5)
    my.set(0.5)
  }

  return (
    <div style={{ perspective: 900 }} className={className}>
      <motion.article
        variants={fadeUp}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        style={reduce ? undefined : { rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group h-full rounded-xl border border-edge bg-panel/60 p-6 transition-colors hover:border-gold/50"
      >
        {children}
      </motion.article>
    </div>
  )
}

function Card({ p }: { p: Project }) {
  const { t } = useLang()
  const isSite = p.featured === true

  return (
    <Tilt className={isSite ? 'sm:col-span-2' : undefined}>
      <div className="flex items-start justify-between gap-3">
        <h3 className={`font-semibold ${isSite ? 'text-xl text-gold' : 'text-base text-snow'}`}>
          {p.name}
        </h3>
        {isSite && (
          <span className="inline-flex items-center gap-1 rounded-full border border-gold/40 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-gold">
            <Rocket size={11} aria-hidden /> {t(copy.projects.flagship)}
          </span>
        )}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-fog">{t(p.blurb)}</p>
      <div className="mt-5 flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-wider text-mint">{p.tech}</span>
        <a
          href={p.url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-fog transition-colors group-hover:text-gold"
        >
          <ExternalLink size={13} aria-hidden />
          {t(isSite ? copy.projects.visit : copy.projects.viewCode)}
        </a>
      </div>
    </Tilt>
  )
}

export default function Projects() {
  const { t } = useLang()

  return (
    <section id="projects" className="scroll-mt-24 border-t border-edge/40 bg-panel/40">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <motion.header variants={stagger()} initial="hidden" whileInView="show" viewport={viewport}>
          <motion.p variants={fadeUp} className="font-mono text-xs uppercase tracking-[0.22em] text-gold">
            03 — projects
          </motion.p>
          <motion.h2 variants={fadeUp} className="mt-3 text-3xl font-bold tracking-tight text-snow sm:text-4xl">
            {t(copy.projects.title)}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-fog">
            {t(copy.projects.lead)}
          </motion.p>
        </motion.header>

        <motion.div
          variants={stagger(0.05)}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
        >
          {projects.map((p) => (
            <Card key={p.name} p={p} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
