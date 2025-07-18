import { FC } from "react";
import Link from "next/link";

export const NavLinkHeader: FC = ({}) => {
  type NavLink = {
    text: string;
    href: string;
  };

  const headerLinkDetails: NavLink = {
    text: "My Coding Journey",
    href: "/",
  };

  return (
    <Link
      href={headerLinkDetails.href}
      className="nav-link active navbar-brand"
      aria-current="page"
    >
      {headerLinkDetails.text}
    </Link>
  );
};
