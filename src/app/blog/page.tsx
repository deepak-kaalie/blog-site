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
import { blogPosts } from "@/data/blog";
import { ArrowRight, Calendar, Clock, Newspaper } from "lucide-react";

export const metadata = {
  title: "Blog | Page & Spine",
  description:
    "Reading tips, book recommendations, and stories from the world of books.",
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section
          className="relative border-b border-white/10 bg-gradient-to-b from-muted/20 to-background py-16 px-4"
          aria-labelledby="blog-heading"
        >
          <div
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,oklch(0.6_0.15_280_/_.12),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,oklch(0.45_0.15_280_/_.2),transparent)]"
            aria-hidden
          />
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              variant="secondary"
              className="mb-4 border-white/20 bg-white/10 backdrop-blur-sm"
            >
              <Newspaper className="mr-1 size-3.5" aria-hidden />
              From the blog
            </Badge>
            <h1
              id="blog-heading"
              className="font-serif font-bold tracking-tight text-foreground text-4xl sm:text-5xl"
            >
              Stories about books
            </h1>
            <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
              Recommendations, habits, and ideas for readers. Updated regularly.
            </p>
          </div>
        </section>

        <section className="py-12 px-4" aria-label="Blog posts">
          <ul className="mx-auto grid max-w-4xl gap-8">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <Card className="glass overflow-hidden border-white/15 transition-all hover:shadow-xl hover:border-white/25">
                  <div className="grid gap-6 sm:grid-cols-[280px_1fr]">
                    <div className="relative aspect-video w-full bg-gradient-to-br from-violet-400/30 to-fuchsia-400/30 dark:from-violet-700/40 dark:to-fuchsia-700/40 sm:aspect-square">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Newspaper
                          className="size-16 text-white/30"
                          aria-hidden
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-between p-6 sm:py-6 sm:pr-6">
                      <div>
                        <Badge
                          variant="secondary"
                          className="mb-2 border-white/15 bg-white/10"
                        >
                          {post.category}
                        </Badge>
                        <CardHeader className="relative p-0">
                          <CardTitle className="text-xl sm:text-2xl">
                            <Link
                              href={`/blog/${post.slug}`}
                              className="hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded"
                            >
                              {post.title}
                            </Link>
                          </CardTitle>
                          <CardDescription className="mt-1 line-clamp-2">
                            {post.excerpt}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="mt-4 flex flex-wrap items-center gap-4 text-muted-foreground text-sm p-0">
                          <span className="flex items-center gap-1">
                            <Calendar className="size-4" aria-hidden />
                            {new Date(post.date).toLocaleDateString("en-US", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="size-4" aria-hidden />
                            {post.readTime} min read
                          </span>
                          <span>{post.author}</span>
                        </CardContent>
                      </div>
                      <CardFooter className="mt-4 p-0">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="w-fit gap-1"
                          asChild
                        >
                          <Link href={`/blog/${post.slug}`}>
                            Read more
                            <ArrowRight className="size-4" aria-hidden />
                          </Link>
                        </Button>
                      </CardFooter>
                    </div>
                  </div>
                </Card>
              </li>
            ))}
          </ul>
        </section>

        <footer className="border-t border-border py-8 px-4 text-center text-muted-foreground text-sm">
          <p>© {new Date().getFullYear()} Page & Spine. All rights reserved.</p>
        </footer>
      </main>
    </>
  );
}
