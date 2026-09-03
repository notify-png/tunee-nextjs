import Link from "next/link";

/* Catches URLs that match no route at all, for every locale prefix. Next wraps
   this in the first root layout it finds, so it must NOT render its own
   <html>/<body> — doing so emits two <html> tags, the very bug the (en)/[lang]
   route-group split was made to fix. */

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
