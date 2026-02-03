export default function BlogLoading() {
  return (
    <main className="min-h-screen pt-20">
      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="mb-8 space-y-4">
          <div className="glass h-12 w-64 animate-pulse rounded-lg" />
          <div className="glass h-6 w-96 animate-pulse rounded-lg" />
        </div>
        <div className="space-y-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="glass animate-pulse rounded-xl p-6">
              <div className="mb-4 h-48 w-full rounded-lg bg-muted" />
              <div className="mb-2 h-6 w-3/4 rounded bg-muted" />
              <div className="mb-2 h-4 w-full rounded bg-muted" />
              <div className="h-4 w-2/3 rounded bg-muted" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
