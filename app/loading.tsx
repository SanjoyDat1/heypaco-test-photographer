export default function Loading() {
  return (
    <main className="flex min-h-[50vh] flex-col items-center justify-center gap-4 px-6">
      <div
        className="h-10 w-10 animate-spin rounded-full border-2 border-[var(--color-border)] border-t-[var(--color-primary)]"
        aria-hidden
      />
      <p className="font-mono text-xs uppercase tracking-[0.25em] text-[var(--color-muted)]">Loading</p>
    </main>
  )
}
