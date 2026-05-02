import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge a list of Tailwind class values. Dedupes conflicts (e.g. you
 * can pass `cn('p-2', condition && 'p-4')` and the last wins).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}
