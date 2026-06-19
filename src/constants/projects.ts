import { Project } from '@/types/Projects';

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Portfolio & Blog',
    description:
      'Personal portfolio and blog site built with Next.js. Self-hosted via Docker on a home server behind Traefik reverse proxy.',
    techStack: ['Next.js', 'TypeScript', 'Bootstrap', 'Docker', 'Traefik'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    featured: true,
    status: 'in-progress',
    highlights: [
      'App Router with server and client components',
      'Self-hosted on home lab with SSL via Traefik',
      'Blog with search and pagination',
    ],
  },
  {
    id: 2,
    title: 'Home Lab',
    description:
      'Self-hosted development environment running on Ubuntu Server. Manages containers, reverse proxying, and internal services for personal projects.',
    techStack: ['Docker', 'Traefik', 'Ubuntu Server', 'Nginx', 'Portainer'],
    featured: true,
    status: 'in-progress',
    highlights: [
      "Automated SSL certificate renewal via Let's Encrypt",
      'Centralized logging and monitoring',
      'Internal DNS for local service discovery',
    ],
  },
  {
    id: 3,
    title: 'Project Name',
    description:
      'Short description of what this project does and what problem it solves.',
    techStack: ['React', 'Node.js', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    status: 'completed',
    highlights: [
      'Key feature or achievement',
      'Another highlight worth mentioning',
    ],
  },
  {
    id: 4,
    title: 'Project Name',
    description:
      'Short description of what this project does and what problem it solves.',
    techStack: ['TypeScript', 'Express', 'Redis'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    status: 'completed',
  },
];
