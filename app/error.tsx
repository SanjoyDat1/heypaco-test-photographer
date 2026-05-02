'use client'

export default function Error({
  error: _error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center gap-6 px-6">
      <p className="font-display text-2xl text-balance text-[var(--color-fg)]">Something went wrong.</p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-medium text-[var(--color-fg)] transition hover:bg-[var(--color-bg)]"
      >
        Try again
      </button>
    </main>
  )
}
