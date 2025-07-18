import { FC } from "react";
import Link from "next/link";

const navLinks = [{}];

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

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="true"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">asdf</span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link href="/" className="nav-link active" aria-current="page">
                {"Home"}
              </Link>
            </li>
            <Link href="/" className="nav-link active" aria-current="page">
              {"Projects"}
            </Link>
            <li className="nav-item">
              <Link href="/" className="nav-link active" aria-current="page">
                {"Job Search Blog"}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
