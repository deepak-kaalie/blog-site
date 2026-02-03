// Re-export Velite posts for Next.js compatibility
import postsData from "../../.velite/posts.json";
import type { Post } from "../../.velite/index";

export const posts: Post[] = postsData as Post[];
export type { Post };
