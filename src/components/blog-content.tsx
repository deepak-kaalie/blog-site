interface BlogContentProps {
  content: string;
  images?: string[];
}

export function BlogContent({ content, images = [] }: BlogContentProps) {
  // Velite converts markdown to HTML
  // We'll render the HTML and insert images strategically
  let imageIndex = 0;

  // Count headings to determine where to insert images
  const headingMatches = content.matchAll(/<h([1-6])[^>]*>(.*?)<\/h[1-6]>/g);
  const headings = Array.from(headingMatches);

  // Insert images after every 3rd heading
  const imageInsertionPoints = new Set<number>();
  headings.forEach((_, index) => {
    if ((index + 1) % 3 === 0 && imageIndex < (images?.length || 0)) {
      imageInsertionPoints.add(index);
      imageIndex++;
    }
  });

  // Reset for rendering
  imageIndex = 0;
  let currentHeadingIndex = -1;

  return (
    <div className="prose prose-neutral dark:prose-invert prose-lg max-w-none [&_h1]:font-serif [&_h1]:text-3xl [&_h1]:sm:text-4xl [&_h1]:font-bold [&_h1]:mt-8 [&_h1]:mb-4 [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-bold [&_h2]:mt-8 [&_h2]:mb-4 [&_h3]:font-serif [&_h3]:text-xl [&_h3]:sm:text-2xl [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:mb-4 [&_p]:leading-relaxed [&_p]:text-foreground/90">
      {/* Split content by headings to insert images */}
      {content.split(/(<h[1-6][^>]*>.*?<\/h[1-6]>)/g).map((part, i) => {
        const isHeading = /^<h[1-6]/.test(part);
        const shouldInsertImage =
          isHeading && imageInsertionPoints.has(currentHeadingIndex + 1);

        if (isHeading) {
          currentHeadingIndex++;
        }

        return (
          <div key={i}>
            {shouldInsertImage && imageIndex < (images?.length || 0) && (
              <figure className="my-8">
                <div className="relative aspect-video w-full overflow-hidden rounded-lg bg-gradient-to-br from-violet-300/40 to-fuchsia-300/40 dark:from-violet-800/50 dark:to-fuchsia-800/50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/40 text-sm">
                      {images?.[imageIndex]
                        ?.split("/")
                        .pop()
                        ?.replace(/\.[^/.]+$/, "") || "Image"}
                    </span>
                  </div>
                </div>
                <figcaption className="mt-2 text-center text-muted-foreground text-sm italic">
                  {images?.[imageIndex]
                    ?.split("/")
                    .pop()
                    ?.replace(/\.[^/.]+$/, "")
                    .replace(/-/g, " ") || ""}
                </figcaption>
              </figure>
            )}
            {shouldInsertImage && imageIndex++}

            {/* Render HTML content */}
            <div dangerouslySetInnerHTML={{ __html: part }} />
          </div>
        );
      })}

      {/* Add remaining images at the end if any */}
      {imageIndex < (images?.length || 0) && (
        <div className="mt-8 space-y-8">
          {images?.slice(imageIndex).map((image, idx) => {
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
