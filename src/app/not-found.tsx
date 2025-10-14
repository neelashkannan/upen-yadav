import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white text-text px-6">
      <div className="text-center space-y-4 max-w-xl">
        <h1 className="text-4xl font-bold">Page Not Found</h1>
        <p className="text-text-muted">
          The page you are looking for might have been moved or no longer exists.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-200"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
