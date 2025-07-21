'use client';

import { useState, useEffect } from 'react';
import { BlogPostCard } from '@/components/Blog';
import type { BlogPost, BlogPageState } from '@/types/Blog';

export default function BlogPage() {
  // State for blog functionality
  const [state, setState] = useState<BlogPageState>({
    posts: [],
    filteredPosts: [],
    searchTerm: '',
    currentPage: 1,
    loading: true,
    error: null,
    filters: {
      searchTerm: '',
      selectedTags: [],
    },
  });

  // Pagination settings
  const POSTS_PER_PAGE = 6;

  // Mock data - replace with actual API call later
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 500));

        const mockPosts: BlogPost[] = [
          {
            id: 1,
            title: 'Getting Started with Next.js 13',
            content:
              'Exploring the new App Router and Server Components in Next.js 13. This is a comprehensive guide covering all the new features and how to migrate from the Pages Router.',
            date: '2024-07-15',
            author: 'Ryan Jasinski',
            tags: ['nextjs', 'react', 'webdev'],
            slug: 'getting-started-nextjs-13',
          },
          {
            id: 2,
            title: 'Building a Home Lab for Development',
            content:
              'Setting up a complete development environment with Traefik, Docker, and self-hosted services. Perfect for learning DevOps and hosting your own projects.',
            date: '2024-07-10',
            author: 'Ryan Jasinski',
            tags: ['homelab', 'docker', 'devops'],
            slug: 'building-home-lab',
          },
          {
            id: 3,
            title: 'Job Hunt Chronicles: Week 3',
            content:
              'Reflections on the software engineering job search process, including interview experiences, technical challenges, and lessons learned along the way.',
            date: '2024-07-05',
            author: 'Ryan Jasinski',
            tags: ['career', 'job-search', 'software-engineering'],
            slug: 'job-hunt-week-3',
          },
          {
            id: 4,
            title: 'CSS Grid vs Flexbox: When to Use What',
            content:
              'A practical guide to choosing between CSS Grid and Flexbox for different layout scenarios. Includes real-world examples and best practices.',
            date: '2024-06-28',
            author: 'Ryan Jasinski',
            tags: ['css', 'frontend', 'layout'],
            slug: 'css-grid-vs-flexbox',
          },
          {
            id: 5,
            title: 'Optimizing React Performance',
            content:
              'Deep dive into React performance optimization techniques including memo, useMemo, useCallback, and component structure best practices.',
            date: '2024-06-20',
            author: 'Ryan Jasinski',
            tags: ['react', 'performance', 'optimization'],
            slug: 'optimizing-react-performance',
          },
          {
            id: 6,
            title: 'Database Design Fundamentals',
            content:
              'Essential principles of database design, normalization, and when to break the rules. Covers both SQL and NoSQL approaches.',
            date: '2024-06-15',
            author: 'Ryan Jasinski',
            tags: ['database', 'sql', 'design'],
            slug: 'database-design-fundamentals',
          },
          {
            id: 7,
            title: 'Deploying with Docker and Traefik',
            content:
              'Complete guide to deploying applications using Docker containers and Traefik reverse proxy, including SSL certificate management.',
            date: '2024-06-10',
            author: 'Ryan Jasinski',
            tags: ['docker', 'traefik', 'deployment'],
            slug: 'deploying-docker-traefik',
          },
        ];

        setState((prev) => ({
          ...prev,
          posts: mockPosts,
          filteredPosts: mockPosts,
          loading: false,
        }));
      } catch (error) {
        setState((prev) => ({
          ...prev,
          loading: false,
          error: 'Failed to load blog posts',
        }));
      }
    };

    fetchPosts();
  }, []);

  // Handle search
  useEffect(() => {
    if (state.searchTerm.trim() === '') {
      setState((prev) => ({
        ...prev,
        filteredPosts: prev.posts,
        currentPage: 1,
      }));
    } else {
      const filtered = state.posts.filter(
        (post) =>
          post.title.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          post.content.toLowerCase().includes(state.searchTerm.toLowerCase()) ||
          post.tags.some((tag) =>
            tag.toLowerCase().includes(state.searchTerm.toLowerCase())
          )
      );
      setState((prev) => ({
        ...prev,
        filteredPosts: filtered,
        currentPage: 1,
      }));
    }
  }, [state.searchTerm, state.posts]);

  // Calculate pagination
  const totalPages = Math.ceil(state.filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (state.currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = state.filteredPosts.slice(
    startIndex,
    startIndex + POSTS_PER_PAGE
  );

  // Handle page change
  const handlePageChange = (pageNumber: number) => {
    setState((prev) => ({ ...prev, currentPage: pageNumber }));
    // Scroll to top of blog section
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle search change
  const handleSearchChange = (searchTerm: string) => {
    setState((prev) => ({ ...prev, searchTerm }));
  };

  // Handle search clear
  const handleSearchClear = () => {
    setState((prev) => ({ ...prev, searchTerm: '' }));
  };

  // Generate pagination numbers
  const getPaginationNumbers = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (state.currentPage <= 3) {
        for (let i = 1; i <= 4; i++) pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      } else if (state.currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - 3; i <= totalPages; i++) pages.push(i);
      } else {
        pages.push(1);
        pages.push('...');
        for (let i = state.currentPage - 1; i <= state.currentPage + 1; i++)
          pages.push(i);
        pages.push('...');
        pages.push(totalPages);
      }
    }

    return pages;
  };

  if (state.loading) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p className="mt-3">Loading blog posts...</p>
          </div>
        </div>
      </div>
    );
  }

  if (state.error) {
    return (
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <div className="alert alert-danger">
              <h4>Error Loading Posts</h4>
              <p>{state.error}</p>
              <button
                className="btn btn-primary"
                onClick={() => window.location.reload()}
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      {/* Header Section */}
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4 fw-bold mb-3">Blog</h1>
          <p className="lead text-secondary">
            Thoughts on software development, career moves, and technical
            adventures
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="row mb-4">
        <div className="col-lg-6 mx-auto">
          <div className="input-group input-group-lg">
            <span className="input-group-text btn-primary">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control bg-search"
              placeholder="Search posts, tags, or content..."
              value={state.searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
            />
            {state.searchTerm && (
              <button
                className="btn-primary btn-outline-secondary"
                type="button"
                onClick={handleSearchClear}
              >
                <i className="bi bi-x-lg"></i>
              </button>
            )}
          </div>
          {state.searchTerm && (
            <small className="text-secondary mt-2 d-block">
              Found {state.filteredPosts.length} post
              {state.filteredPosts.length !== 1 ? 's' : ''} for &ldquo;
              {state.searchTerm}&rdquo;
            </small>
          )}
        </div>
      </div>

      {/* Posts Grid */}
      {currentPosts.length > 0 ? (
        <>
          <div className="row g-4 mb-5">
            {currentPosts.map((post) => (
              <div key={post.id} className="col-lg-4 col-md-6">
                <BlogPostCard post={post} />
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="row">
              <div className="col-12">
                <nav aria-label="Blog pagination">
                  <ul className="pagination pagination-lg justify-content-center btn">
                    <li
                      className={`page-item ${
                        state.currentPage === 1 ? 'disabled' : ''
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(state.currentPage - 1)}
                        disabled={state.currentPage === 1}
                      >
                        <i className="bi bi-chevron-left"></i>
                      </button>
                    </li>

                    {getPaginationNumbers().map((page, index) => (
                      <li
                        key={index}
                        className={`page-item ${
                          page === state.currentPage ? 'active' : ''
                        } ${page === '...' ? 'disabled' : ''}`}
                      >
                        {page === '...' ? (
                          <span className="page-link">...</span>
                        ) : (
                          <button
                            className="page-link"
                            onClick={() => handlePageChange(page as number)}
                          >
                            {page}
                          </button>
                        )}
                      </li>
                    ))}

                    <li
                      className={`page-item ${
                        state.currentPage === totalPages ? 'disabled' : ''
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => handlePageChange(state.currentPage + 1)}
                        disabled={state.currentPage === totalPages}
                      >
                        <i className="bi bi-chevron-right"></i>
                      </button>
                    </li>
                  </ul>
                </nav>

                <div className="text-center text-secondary">
                  <small>
                    Showing {startIndex + 1}-
                    {Math.min(
                      startIndex + POSTS_PER_PAGE,
                      state.filteredPosts.length
                    )}{' '}
                    of {state.filteredPosts.length} posts
                  </small>
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        /* No Results */
        <div className="row">
          <div className="col-12 text-center">
            <div className="py-5">
              <i className="bi bi-search display-1 text-primary mb-3"></i>
              <h3>No posts found</h3>
              <p className="text-primary">
                {state.searchTerm
                  ? `No posts match your search for "${state.searchTerm}". Try different keywords.`
                  : 'No blog posts available yet. Check back soon!'}
              </p>
              {state.searchTerm && (
                <button className="btn btn-primary" onClick={handleSearchClear}>
                  Clear Search
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
