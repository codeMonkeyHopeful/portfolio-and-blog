import { FC } from "react";
import Link from "next/link";

const navLinks = [
  {
    text: "Home",
    href: "/",
  },
  {
    text: "Projects",
    href: "/projects",
  },
  {
    text: "Job Search Blog",
    href: "/blog",
  },
];

export const Navbar: FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link
          href="/"
          className="nav-link active navbar-brand"
          aria-current="page"
        >
          {"My Coding Journey"}
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="nav-link active" aria-current="page">
                {"Home"}
              </Link>
            </li>
            <Link
              href="/projects"
              className="nav-link active"
              aria-current="page"
            >
              {"Projects"}
            </Link>
            <li className="nav-item">
              <Link
                href="/blog"
                className="nav-link active"
                aria-current="page"
              >
                {"Job Search Blog"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
