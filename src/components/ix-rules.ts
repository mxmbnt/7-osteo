/** Apparitions en fondu reprises des interactions IX3 de Presma (0,8 s, linéaire). */
export const REVEALS: { sel: string; on: 'load' | 'scroll' }[] = [
  { sel: '.hero-effect', on: 'load' },
  { sel: '.section-effect', on: 'scroll' },
  { sel: '.footer-top-content', on: 'scroll' },
  { sel: '.footer-bottom-content-wrapper', on: 'scroll' },
]

/** Éléments masqués avant l'exécution du JS (comme html.w-mod-js de Webflow) */
export const PRE_HIDE = [...REVEALS.map((r) => r.sel), '.section-title-center']
