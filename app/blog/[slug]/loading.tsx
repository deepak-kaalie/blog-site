export default function BlogPostLoading() {
  return (
    <main className="min-h-screen pt-20 pb-16">
      <article className="mx-auto max-w-3xl px-4">
        <div className="mb-8 h-8 w-32 animate-pulse rounded bg-muted" />
        <div className="glass-strong animate-pulse rounded-2xl p-6 sm:p-10">
          <div className="mb-4 h-6 w-24 rounded bg-muted" />
          <div className="mb-4 h-10 w-full rounded bg-muted" />
          <div className="mb-6 h-6 w-3/4 rounded bg-muted" />
          <div className="mb-8 h-64 w-full rounded-lg bg-muted" />
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-4 w-full rounded bg-muted" />
            ))}
          </div>
        </div>
      </article>
    </main>
  );
}
