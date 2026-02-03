import { defineConfig, s } from "velite";

export default defineConfig({
  root: ".",
  collections: {
    posts: {
      name: "Post",
      pattern: "content/blog/**/*.md",
      schema: s.object({
        title: s.string().max(200),
        slug: s.slug(),
        excerpt: s.string().max(500),
        date: s.isodate(),
        author: s.string(),
        readTime: s.number().int().positive(),
        category: s.string(),
        image: s.string().optional(),
        images: s.array(s.string()).optional(),
        content: s.markdown(),
      }),
    },
  },
});
