// src/types/Blog/index.ts

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  slug: string;
  excerpt?: string;
  readingTime?: number;
  published?: boolean;
  featuredImage?: string;
  metadata?: PostMetadata;
}

export interface PostMetadata {
  description?: string;
  keywords?: string[];
  category?: string;
  lastModified?: string;
  views?: number;
  likes?: number;
}

export interface BlogPostCardProps {
  post: BlogPost;
}

export interface PaginationInfo {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
  startIndex: number;
  endIndex: number;
}

export interface BlogSearchFilters {
  searchTerm: string;
  selectedTags: string[];
  dateRange?: {
    start: string;
    end: string;
  };
  author?: string;
  category?: string;
}

export interface BlogPageState {
  posts: BlogPost[];
  filteredPosts: BlogPost[];
  searchTerm: string;
  currentPage: number;
  loading: boolean;
  error: string | null;
  filters: BlogSearchFilters;
}

export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  pagination?: PaginationInfo;
}

export interface BlogPostsResponse extends ApiResponse<BlogPost[]> {
  pagination: PaginationInfo;
}

export interface TagInfo {
  name: string;
  count: number;
  color: string;
}

export interface AuthorInfo {
  name: string;
  avatar?: string;
  bio?: string;
  socialLinks?: {
    twitter?: string;
    github?: string;
    linkedin?: string;
    website?: string;
  };
}

// Utility types for form handling
export type BlogFormData = Omit<BlogPost, "id" | "readingTime">;

export type BlogPostStatus = "draft" | "published" | "archived";

export interface BlogPostForm {
  title: string;
  content: string;
  excerpt: string;
  tags: string[];
  author: string;
  status: BlogPostStatus;
  publishDate: string;
  featuredImage?: string;
  metadata: {
    description: string;
    keywords: string[];
    category: string;
  };
}

// Search and filtering types
export type SortOrder = "asc" | "desc";
export type SortBy = "date" | "title" | "author" | "readingTime" | "popularity";

export interface BlogSortOptions {
  sortBy: SortBy;
  sortOrder: SortOrder;
}

export interface BlogQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  tags?: string[];
  author?: string;
  category?: string;
  dateFrom?: string;
  dateTo?: string;
  sortBy?: SortBy;
  sortOrder?: SortOrder;
  status?: BlogPostStatus;
}

// Component prop types
export interface BlogPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showInfo?: boolean;
  totalPosts?: number;
  postsPerPage?: number;
}

export interface BlogSearchProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  placeholder?: string;
  showClearButton?: boolean;
  resultsCount?: number;
}

export interface BlogTagsProps {
  tags: TagInfo[];
  selectedTags: string[];
  onTagToggle: (tag: string) => void;
  maxTags?: number;
}

export interface BlogFiltersProps {
  filters: BlogSearchFilters;
  onFiltersChange: (filters: BlogSearchFilters) => void;
  availableTags: string[];
  availableAuthors: string[];
  availableCategories: string[];
}

// Error types
export interface BlogError {
  code: string;
  message: string;
  details?: string;
}

export type BlogErrorType =
  | "FETCH_ERROR"
  | "SEARCH_ERROR"
  | "PAGINATION_ERROR"
  | "POST_NOT_FOUND"
  | "INVALID_PARAMS";
