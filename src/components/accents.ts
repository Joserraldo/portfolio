import type { ProjectAccent } from '../data/content'

export const ACCENT: Record<
  ProjectAccent,
  { text: string; border: string; glow: string; chip: string }
> = {
  gold: {
    text: 'text-gold',
    border: 'hover:border-gold/60',
    glow: 'group-hover:shadow-[0_0_45px_-12px_rgba(217,164,65,0.45)]',
    chip: 'border-gold/40 text-gold',
  },
  mint: {
    text: 'text-mint',
    border: 'hover:border-mint/60',
    glow: 'group-hover:shadow-[0_0_45px_-12px_rgba(92,203,156,0.45)]',
    chip: 'border-mint/40 text-mint',
  },
  coral: {
    text: 'text-coral',
    border: 'hover:border-coral/60',
    glow: 'group-hover:shadow-[0_0_45px_-12px_rgba(229,99,111,0.45)]',
    chip: 'border-coral/40 text-coral',
  },
  sky: {
    text: 'text-sky',
    border: 'hover:border-sky/60',
    glow: 'group-hover:shadow-[0_0_45px_-12px_rgba(97,175,239,0.45)]',
    chip: 'border-sky/40 text-sky',
  },
  violet: {
    text: 'text-violet',
    border: 'hover:border-violet/60',
    glow: 'group-hover:shadow-[0_0_45px_-12px_rgba(198,120,221,0.45)]',
    chip: 'border-violet/40 text-violet',
  },
  amber: {
    text: 'text-amber',
    border: 'hover:border-amber/60',
    glow: 'group-hover:shadow-[0_0_45px_-12px_rgba(229,160,76,0.45)]',
    chip: 'border-amber/40 text-amber',
  },
}
