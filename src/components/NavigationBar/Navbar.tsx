import { FC } from "react";
import { NavLinkItem } from "@/components/NavigationBar/index";

type NavLink = {
  text: string;
  href: string;
};

const linkList: NavLink[] = [
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
        {/* <Link
          href="/"
          className="nav-link active navbar-brand"
          aria-current="page"
        >
          {"My Coding Journey"}
        </Link> */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {linkList.map((val, dex) => {
              return <NavLinkItem key={dex} linkDetail={val} />;
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};
