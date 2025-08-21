import { ProjectsList } from '@/components/Projects';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects',
  description: "Pojects I've worked on.",
};

const Projects = ({}) => {
  return <ProjectsList />;
};

export default Projects;
