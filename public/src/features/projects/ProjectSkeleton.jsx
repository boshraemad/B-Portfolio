export default function ProjectSkeleton() {
  return Array.from({ length: 6 }).map((_, idx) => (
    <div
      key={idx}
      className="w-full animate-pulse rounded-2xl bg-white/5 backdrop-blur-lg shadow-lg p-3 text-white/80"
    >
      <div className="h-40 w-full bg-accent/40 rounded-md" />
      <div className="mt-4 h-5 w-1/2 bg-accent/60 rounded" />
      <div className="mt-3 flex items-center gap-2">
        {Array.from({ length: 6 }).map((__, tagIdx) => (
          <div
            key={tagIdx}
            className="h-6 w-12 bg-accent/40 rounded-sm"
          />
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3">
        <div className="h-6 w-6 bg-accent/40 rounded" />
        <div className="h-6 w-6 bg-accent/40 rounded" />
      </div>
    </div>
  ))
}
