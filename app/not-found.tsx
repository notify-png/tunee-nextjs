import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center">
        <h1 className="font-heading text-4xl font-bold text-foreground mb-4">Page Not Found</h1>
        <p className="font-body text-muted-foreground mb-8">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 rounded-full font-body text-sm font-medium text-white transition-all duration-200 hover:opacity-90"
          style={{ background: "var(--gradient-cta)" }}
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
