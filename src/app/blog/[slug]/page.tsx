import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Header } from "@/components/header";
import { BlogContent } from "@/components/blog-content";
import { getBlogBySlug, blogPosts } from "@/data/blog";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import type { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return { title: "Post not found" };
  return {
    title: `${post.title} | Page & Spine Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 pb-16">
        <article className="mx-auto max-w-3xl px-4">
          <Button
            variant="ghost"
            size="sm"
            className="mb-8 -ml-2 gap-1"
            asChild
          >
            <Link href="/blog">
              <ArrowLeft className="size-4" aria-hidden />
              Back to blog
            </Link>
          </Button>

          <div className="glass-strong rounded-2xl p-6 sm:p-10">
            <Badge
              variant="secondary"
              className="mb-4 border-white/20 bg-white/10 backdrop-blur-sm"
            >
              {post.category}
            </Badge>
            <h1 className="font-serif font-bold tracking-tight text-foreground text-3xl sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-2 text-muted-foreground text-lg">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-muted-foreground text-sm">
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
            </div>

            {/* Hero image */}
            {post.image && (
              <figure className="my-8 -mx-6 sm:-mx-10">
                <div className="relative aspect-video w-full overflow-hidden bg-gradient-to-br from-violet-300/40 to-fuchsia-300/40 dark:from-violet-800/50 dark:to-fuchsia-800/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/40 text-sm">
                      {post.image
                        .split("/")
                        .pop()
                        ?.replace(/\.[^/.]+$/, "") || "Featured Image"}
                    </span>
                  </div>
                </div>
              </figure>
            )}

            <BlogContent content={post.content} images={post.images} />
          </div>
        </article>
      </main>
    </>
  );
}
