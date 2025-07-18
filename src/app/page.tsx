import Link from "next/link";

export const metadata = {
  title: "Ryan Jasinski",
  description: "Posts about coding, projects, and job search.",
};

export default function Home() {
  return (
    <div className="container py-5">
      <h1>Code, Projects, and Career Moves</h1>
      <p className="lead">
        A blog and portfolio by <strong>Ryan Jasinski</strong>, documenting my
        work and job search journey.
      </p>
      <div className="mt-4">
        <Link href="/projects" className="btn btn-primary me-2">
          View Projects
        </Link>
        <Link href="/blog" className="btn btn-primary me-2">
          Read the Blog
        </Link>
      </div>
    </div>
  );
}
