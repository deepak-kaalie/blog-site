import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BookOpen, Newspaper } from "lucide-react";

export function Header() {
  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-white/5 backdrop-blur-xl supports-[backdrop-filter]:bg-white/5"
      role="banner"
    >
      <nav
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-foreground transition-opacity hover:opacity-90"
        >
          <BookOpen className="size-6 text-primary" aria-hidden />
          <span>Page & Spine</span>
        </Link>
        <ul className="flex items-center gap-2">
          <li>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/" className="gap-1.5">
                Home
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/blog" className="gap-1.5">
                <Newspaper className="size-4" aria-hidden />
                Blog
              </Link>
            </Button>
          </li>
          <li>
            <Button size="sm" asChild>
              <Link href="/#books">Browse Books</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
