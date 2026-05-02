export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-sm uppercase tracking-widest text-[var(--color-muted)]">404</p>
        <h1 className="mt-2 font-display text-5xl">Page not found.</h1>
        <p className="mt-4 text-[var(--color-muted)]">
          The page you’re looking for may have moved.
        </p>
        <a href="/" className="mt-8 inline-block text-[var(--color-primary)] underline underline-offset-4">
          Back home →
        </a>
      </div>
    </section>
  )
}
