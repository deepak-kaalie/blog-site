import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass-strong mx-auto max-w-md rounded-2xl p-8 text-center">
        <BookOpen className="mx-auto mb-4 size-16 text-muted-foreground" />
        <h1 className="font-serif mb-2 text-4xl font-bold text-foreground">
          404
        </h1>
        <h2 className="mb-4 text-xl font-semibold text-foreground">
          Page Not Found
        </h2>
        <p className="mb-6 text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button asChild>
            <Link href="/">
              <Home className="mr-2 size-4" />
              Go home
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/blog">Browse blog</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
