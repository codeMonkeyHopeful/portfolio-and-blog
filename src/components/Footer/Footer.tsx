import { FC } from 'react';

export const Footer: FC = () => {
  return (
    <footer className="text-center text-lg-start">
      <div className="container d-flex justify-content-center py-5">
        <a href="https://www.linkedin.com/in/ryanjasinski/" target="_blank">
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
          >
            <i className="bi bi-linkedin"></i>
          </button>
        </a>
        <a href="https://github.com/codeMonkeyHopeful" target="_blank">
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
          >
            <i className="bi bi-github"></i>
          </button>
        </a>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&su=Emailing%20About%20Your%20Website&to=ryan@ryan-jasinski.com"
          target="_blank"
        >
          <button
            type="button"
            className="btn btn-primary btn-lg btn-floating mx-2"
          >
            <i className="bi bi-envelope-fill"></i>
          </button>
        </a>
      </div>
      <div className="text-center text-white">
        <p>&copy; {new Date().getFullYear()} Ryan Jasinski</p>
      </div>
    </footer>
  );
};
