import type { ProjectCardProps } from '@/types/Projects';

const STATUS_CONFIG = {
  completed: { label: 'Completed', icon: 'bi-check-circle-fill', color: '#28a745' },
  'in-progress': { label: 'In Progress', icon: 'bi-arrow-repeat', color: '#fd7e14' },
  archived: { label: 'Archived', icon: 'bi-archive-fill', color: '#6c757d' },
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const status = STATUS_CONFIG[project.status];

  return (
    <div className="card h-100 shadow-sm border-0 position-relative overflow-hidden">
      <div
        className="position-absolute top-0 start-0 w-100"
        style={{
          height: '4px',
          background: project.featured ? 'var(--accent)' : 'var(--primary)',
        }}
      />

      <div className="card-body d-flex flex-column p-4">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span
            className="badge"
            style={{ backgroundColor: status.color, color: 'white', fontSize: '0.75rem' }}
          >
            <i className={`bi ${status.icon} me-1`}></i>
            {status.label}
          </span>
          {project.featured && (
            <span title="Featured project" style={{ color: 'var(--accent)' }}>
              <i className="bi bi-star-fill"></i>
            </span>
          )}
        </div>

        <h5 className="card-title mb-2 text-dark">{project.title}</h5>

        <p className="card-text text-muted flex-grow-1 mb-3">{project.description}</p>

        {project.highlights && project.highlights.length > 0 && (
          <ul className="mb-3 ps-3" style={{ fontSize: '0.85rem', color: 'var(--primary)' }}>
            {project.highlights.slice(0, 3).map((highlight, i) => (
              <li key={i}>{highlight}</li>
            ))}
          </ul>
        )}

        <div className="mb-3 d-flex flex-wrap gap-1">
          {project.techStack.map((tech) => (
            <span key={tech} className="skill-badge">
              {tech}
            </span>
          ))}
        </div>

        <div className="d-flex gap-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-primary d-flex align-items-center gap-1"
            >
              <i className="bi bi-github"></i>
              Code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm btn-accent d-flex align-items-center gap-1"
            >
              <i className="bi bi-box-arrow-up-right"></i>
              Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
