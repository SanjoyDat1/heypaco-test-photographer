import type { Config } from 'tailwindcss'

/**
 * With Tailwind v4 most config lives in CSS via `@theme` (see
 * styles/globals.css). This file exists so your IDE's Tailwind plugin
 * resolves class names inside .tsx files.
 */
const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
}

export default config
