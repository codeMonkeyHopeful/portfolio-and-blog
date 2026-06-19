'use client';

import { ProjectCard } from '@/components/Projects';
import { PROJECTS } from '@/constants/projects';
import type { ProjectStatus } from '@/types/Projects';
import { useState } from 'react';

type Filter = 'all' | ProjectStatus;

const FILTERS: { label: string; value: Filter }[] = [
  { label: 'All', value: 'all' },
  { label: 'In Progress', value: 'in-progress' },
  { label: 'Completed', value: 'completed' },
  { label: 'Archived', value: 'archived' },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');

  const filtered = PROJECTS.filter(
    (p) => activeFilter === 'all' || p.status === activeFilter
  );

  return (
    <div className="container py-5">
      <div className="row mb-5">
        <div className="col-12 text-center">
          <h1 className="display-4 fw-bold mb-3">Projects</h1>
          <p className="lead text-secondary">
            Things I&apos;ve built, am building, or learned from
          </p>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-12 d-flex justify-content-center gap-2 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setActiveFilter(f.value)}
              className={
                activeFilter === f.value ? 'btn-primary' : 'btn-accent'
              }
              style={{
                borderRadius: '9999px',
                padding: '0.4rem 1.2rem',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {f.label}
              <span
                className="ms-2 badge"
                style={{
                  backgroundColor: 'rgba(0,0,0,0.15)',
                  color: 'inherit',
                  fontSize: '0.75rem',
                }}
              >
                {f.value === 'all'
                  ? PROJECTS.length
                  : PROJECTS.filter((p) => p.status === f.value).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="row g-4">
          {filtered.map((project) => (
            <div key={project.id} className="col-lg-4 col-md-6">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      ) : (
        <div className="col-12 text-center py-5">
          <i className="bi bi-folder2-open display-1 text-primary mb-3"></i>
          <h3>No projects here yet</h3>
          <p className="text-secondary">Check back soon.</p>
        </div>
      )}
    </div>
  );
}
