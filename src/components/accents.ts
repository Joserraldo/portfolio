import type { ProjectAccent } from '../data/content'

export const ACCENT: Record<
  ProjectAccent,
  { text: string; border: string; glow: string; chip: string }
> = {
  gold: {
    text: 'text-gold',
    border: 'hover:border-gold/60',
    glow: '',
    chip: 'border-gold/40 text-gold',
  },
  mint: {
    text: 'text-mint',
    border: 'hover:border-mint/60',
    glow: '',
    chip: 'border-mint/40 text-mint',
  },
  coral: {
    text: 'text-coral',
    border: 'hover:border-coral/60',
    glow: '',
    chip: 'border-coral/40 text-coral',
  },
  sky: {
    text: 'text-sky',
    border: 'hover:border-sky/60',
    glow: '',
    chip: 'border-sky/40 text-sky',
  },
  violet: {
    text: 'text-violet',
    border: 'hover:border-violet/60',
    glow: '',
    chip: 'border-violet/40 text-violet',
  },
  amber: {
    text: 'text-amber',
    border: 'hover:border-amber/60',
    glow: '',
    chip: 'border-amber/40 text-amber',
  },
}
