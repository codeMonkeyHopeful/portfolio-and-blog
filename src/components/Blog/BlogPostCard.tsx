import Link from "next/link";
import type { BlogPostCardProps } from "@/types/Blog";

export const BlogPostCard = ({ post }: BlogPostCardProps) => {
  // Helper function to format date
  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  // Helper function to truncate content
  const truncateContent = (
    content: string,
    maxLength: number = 150
  ): string => {
    if (content.length <= maxLength) return content;
    return content.substring(0, maxLength).trim() + "...";
  };

  // Helper function to estimate reading time
  const getReadingTime = (content: string): number => {
    const wordsPerMinute = 200;
    const wordCount = content.split(" ").length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    return readingTime;
  };

  return (
    <div className="card h-100 shadow-sm border-0 position-relative overflow-hidden">
      {/* Optional: Add a colored top border based on first tag */}
      <div
        className="position-absolute top-0 start-0 w-100"
        style={{
          height: "4px",
          background: getTagColor(post.tags[0] || "default"),
        }}
      ></div>

      <div className="card-body d-flex flex-column p-4">
        {/* Post Meta */}
        <div className="d-flex justify-content-between align-items-center mb-3">
          <small className="text-muted">
            <i className="bi bi-calendar3 me-1"></i>
            {formatDate(post.date)}
          </small>
          <small className="text-muted">
            <i className="bi bi-clock me-1"></i>
            {getReadingTime(post.content)} min read
          </small>
        </div>

        {/* Post Title */}
        <h5 className="card-title mb-3">
          <Link
            href={`/blog/${post.slug}`}
            className="text-decoration-none text-dark stretched-link"
          >
            {post.title}
          </Link>
        </h5>

        {/* Post Content Preview */}
        <p className="card-text text-muted flex-grow-1 mb-3">
          {truncateContent(post.content)}
        </p>

        {/* Tags */}
        <div className="mb-3">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="badge me-1 mb-1"
              style={{
                backgroundColor: getTagColor(tag),
                color: "white",
                fontSize: "0.75rem",
              }}
            >
              {tag}
            </span>
          ))}
          {post.tags.length > 3 && (
            <span className="badge bg-light text-muted">
              +{post.tags.length - 3} more
            </span>
          )}
        </div>

        {/* Author */}
        <div className="d-flex align-items-center">
          <div
            className="bg-primary rounded-circle d-flex align-items-center justify-content-center me-2"
            style={{ width: "32px", height: "32px" }}
          >
            <span className="text-white fw-bold small">
              {post.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <small className="text-muted">
            By <strong>{post.author}</strong>
          </small>
        </div>
      </div>

      {/* Hover Effect Overlay */}
      <div className="card-img-overlay d-flex align-items-center justify-content-center opacity-0 bg-primary bg-opacity-10 transition-all">
        <div className="text-center">
          <i className="bi bi-arrow-right-circle text-primary fs-2"></i>
          <p className="text-primary fw-bold mb-0 mt-2">Read More</p>
        </div>
      </div>
    </div>
  );
};

// Helper function to generate consistent colors for tags
function getTagColor(tag: string): string {
  const colors = [
    "#007bff", // Primary blue
    "#6c757d", // Secondary gray
    "#28a745", // Success green
    "#dc3545", // Danger red
    "#ffc107", // Warning yellow
    "#17a2b8", // Info cyan
    "#6f42c1", // Purple
    "#e83e8c", // Pink
    "#20c997", // Teal
    "#fd7e14", // Orange
  ];

  // Generate a simple hash from the tag name
  let hash = 0;
  for (let i = 0; i < tag.length; i++) {
    const char = tag.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  // Use the hash to pick a color
  return colors[Math.abs(hash) % colors.length];
}
