// import Image from "next/image";
// import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container py-5">
      <h1>Code, Projects, and Career Moves</h1>
      <p className="lead">
        A blog and portfolio by <strong>Ryan Jasinski</strong>, documenting my
        work and job search journey.
      </p>
      <div className="mt-4">
        <Link href="/blog" className="btn btn-primary me-2">
          Read the Blog
        </Link>
        <Link href="/projects" className="btn btn-secondary">
          View Projects
        </Link>
      </div>
    </div>
  );
}
