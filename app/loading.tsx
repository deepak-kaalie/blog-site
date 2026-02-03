export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="glass-strong rounded-2xl p-8">
        <div className="flex flex-col items-center gap-4">
          <div className="size-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    </div>
  );
}
