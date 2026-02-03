"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { AlertCircle, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass-strong mx-auto max-w-md rounded-2xl p-8 text-center">
        <AlertCircle className="mx-auto mb-4 size-12 text-destructive" />
        <h1 className="font-serif mb-2 text-2xl font-bold text-foreground">
          Something went wrong!
        </h1>
        <p className="mb-6 text-muted-foreground">
          {error.message || "An unexpected error occurred. Please try again."}
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Button onClick={reset} variant="default">
            Try again
          </Button>
          <Button variant="outline" asChild>
            <Link href="/">
              <Home className="mr-2 size-4" />
              Go home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
