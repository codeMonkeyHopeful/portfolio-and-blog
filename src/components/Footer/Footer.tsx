import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="text-center text-lg-start">
      <div className="container d-flex justify-content-center py-5">
        <button
          type="button"
          className="btn btn-primary btn-lg btn-floating mx-2"
        >
          <i className="bi bi-linkedin"></i>
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-floating mx-2"
        >
          <i className="bi bi-github"></i>
        </button>
        <button
          type="button"
          className="btn btn-primary btn-lg btn-floating mx-2"
        >
          <i className="bi bi-envelope-fill"></i>
        </button>
      </div>

      <div className="text-center text-white">
        <p>&copy; {new Date().getFullYear()} Ryan Jasinski</p>
      </div>
    </footer>
  );
};
