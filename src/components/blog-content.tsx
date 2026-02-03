interface BlogContentProps {
  content: string;
  images?: string[];
}

export function BlogContent({ content, images = [] }: BlogContentProps) {
  const paragraphs = content.split("\n\n");

  // Process content and determine where to insert images
  const processedContent: Array<{
    type: "heading" | "paragraph" | "image";
    level?: number;
    text?: string;
    imageIndex?: number;
    key: string;
  }> = [];

  let imageIndex = 0;
  let lastHeadingIndex = -1;
  let paraCountSinceHeading = 0;

  paragraphs.forEach((paragraph, i) => {
    if (paragraph.startsWith("#")) {
      // Check if we should insert an image before this heading
      if (
        images.length > 0 &&
        imageIndex < images.length &&
        lastHeadingIndex >= 0 &&
        paraCountSinceHeading >= 3
      ) {
        processedContent.push({
          type: "image",
          imageIndex: imageIndex++,
          key: `img-${imageIndex - 1}`,
        });
        paraCountSinceHeading = 0;
      }

      const level = paragraph.match(/^#+/)?.[0].length || 1;
      const text = paragraph.replace(/^#+\s*/, "");

      processedContent.push({
        type: "heading",
        level,
        text,
        key: `heading-${i}`,
      });

      lastHeadingIndex = i;
      paraCountSinceHeading = 0;
    } else if (paragraph.trim()) {
      processedContent.push({
        type: "paragraph",
        text: paragraph,
        key: `para-${i}`,
      });
      paraCountSinceHeading++;
    }
  });

  return (
    <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none">
      {processedContent.map((item) => {
        if (item.type === "heading") {
          const HeadingTag =
            `h${Math.min(item.level || 2, 6)}` as keyof JSX.IntrinsicElements;
          return (
            <HeadingTag
              key={item.key}
              className={`font-serif font-bold text-foreground mt-8 mb-4 ${
                item.level === 1
                  ? "text-3xl sm:text-4xl"
                  : item.level === 2
                    ? "text-2xl sm:text-3xl"
                    : item.level === 3
                      ? "text-xl sm:text-2xl"
                      : "text-lg sm:text-xl"
              }`}
            >
              {item.text}
            </HeadingTag>
          );
        }

        if (item.type === "image" && item.imageIndex !== undefined) {
          const image = images[item.imageIndex];
          if (!image) return null;

          const imageName =
            image
              .split("/")
              .pop()
              ?.replace(/\.[^/.]+$/, "") || "Image";
          return (
            <figure key={item.key} className="my-8">
              <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-violet-300/40 to-fuchsia-300/40 dark:from-violet-800/50 dark:to-fuchsia-800/50">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/40 text-sm">{imageName}</span>
                </div>
              </div>
              <figcaption className="mt-2 text-center text-muted-foreground text-sm italic">
                {imageName.replace(/-/g, " ")}
              </figcaption>
            </figure>
          );
        }

        if (item.type === "paragraph") {
          return (
            <p
              key={item.key}
              className="mb-4 leading-relaxed text-foreground/90"
            >
              {item.text}
            </p>
          );
        }

        return null;
      })}

      {/* Add remaining images at the end if any */}
      {imageIndex < images.length && (
        <div className="mt-8 space-y-8">
          {images.slice(imageIndex).map((image, idx) => {
            const imageName =
              image
                .split("/")
                .pop()
                ?.replace(/\.[^/.]+$/, "") || "Image";
            return (
              <figure key={`end-${idx}`}>
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-violet-300/40 to-fuchsia-300/40 dark:from-violet-800/50 dark:to-fuchsia-800/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/40 text-sm">{imageName}</span>
                  </div>
                </div>
                <figcaption className="mt-2 text-center text-muted-foreground text-sm italic">
                  {imageName.replace(/-/g, " ")}
                </figcaption>
              </figure>
            );
          })}
        </div>
      )}
    </div>
  );
}
