import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { featuredBooks } from "@/data/books";
import { ArrowRight, BookOpen, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero with gradient background and glass overlay */}
        <section
          className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden px-4 pt-20"
          aria-labelledby="hero-heading"
        >
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-br from-violet-200/80 via-fuchsia-100/60 to-amber-100/70 dark:from-violet-950/60 dark:via-fuchsia-950/40 dark:to-amber-950/30"
            aria-hidden
          />
          <div
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(0.6_0.2_280_/_.25),transparent)] dark:bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,oklch(0.5_0.2_280_/_.3),transparent)]"
            aria-hidden
          />
          <div className="glass-strong mx-auto max-w-3xl rounded-3xl p-8 text-center shadow-2xl sm:p-12">
            <Badge
              variant="secondary"
              className="mb-4 border-white/20 bg-white/20 backdrop-blur-sm"
            >
              <Sparkles className="mr-1 size-3.5" aria-hidden />
              Your next read awaits
            </Badge>
            <h1
              id="hero-heading"
              className="font-serif font-bold tracking-tight text-foreground text-4xl sm:text-5xl md:text-6xl"
            >
              Discover stories that{" "}
              <span className="text-primary">move you</span>
            </h1>
            <p className="mt-4 text-muted-foreground text-lg sm:text-xl max-w-xl mx-auto">
              Curated books for every mood. From bestsellers to hidden gems—find
              your next favorite at Page & Spine.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button size="lg" className="gap-2" asChild>
                <Link href="/#books">
                  Browse Books
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 border-white/30 bg-white/10 hover:bg-white/20"
                asChild
              >
                <Link href="/blog">
                  <BookOpen className="size-4" aria-hidden />
                  Read the Blog
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Featured books */}
        <section
          id="books"
          className="relative border-t border-white/10 bg-gradient-to-b from-background to-muted/30 py-20 px-4"
          aria-labelledby="books-heading"
        >
          <div
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,oklch(0.7_0.15_300_/_.08),transparent)]"
            aria-hidden
          />
          <div className="mx-auto max-w-6xl">
            <h2
              id="books-heading"
              className="font-serif text-center font-bold text-3xl tracking-tight text-foreground sm:text-4xl"
            >
              Featured books
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-center text-muted-foreground">
              Hand-picked titles our readers can&apos;t stop talking about.
            </p>
            <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {featuredBooks.map((book) => (
                <li key={book.id}>
                  <Card className="glass h-full overflow-hidden border-white/15 transition-all hover:shadow-xl hover:border-white/25">
                    <div className="relative aspect-[3/4] w-full bg-gradient-to-br from-violet-300/40 to-fuchsia-300/40 dark:from-violet-800/50 dark:to-fuchsia-800/50">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <BookOpen
                          className="size-20 text-white/40"
                          aria-hidden
                        />
                      </div>
                      <Badge className="absolute right-3 top-3 border-white/20 bg-black/20 backdrop-blur-sm">
                        {book.category}
                      </Badge>
                    </div>
                    <CardHeader className="pb-2">
                      <CardTitle className="line-clamp-2 text-xl">
                        {book.title}
                      </CardTitle>
                      <CardDescription>{book.author}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="line-clamp-3 text-muted-foreground text-sm">
                        {book.description}
                      </p>
                      <p className="mt-2 font-semibold text-primary">
                        ${book.price.toFixed(2)}
                      </p>
                    </CardContent>
                    <CardFooter className="pt-0">
                      <Button className="w-full" asChild>
                        <Link href={`/#book-${book.id}`}>Add to cart</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 px-4" aria-labelledby="cta-heading">
          <div
            className="absolute inset-0 -z-10 bg-gradient-to-t from-violet-200/50 via-transparent to-transparent dark:from-violet-950/40"
            aria-hidden
          />
          <div className="glass-strong mx-auto max-w-2xl rounded-3xl p-8 text-center sm:p-12">
            <h2
              id="cta-heading"
              className="font-serif font-bold text-2xl text-foreground sm:text-3xl"
            >
              Join our community
            </h2>
            <p className="mt-2 text-muted-foreground">
              Get recommendations, early access to sales, and reading tips in
              your inbox.
            </p>
            <Button size="lg" className="mt-6" asChild>
              <Link href="/#books">Start exploring</Link>
            </Button>
          </div>
        </section>

        <footer className="border-t border-border py-8 px-4 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Page & Spine. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
