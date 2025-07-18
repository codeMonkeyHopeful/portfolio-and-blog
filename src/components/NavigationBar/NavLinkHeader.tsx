import { FC } from "react";
import Link from "next/link";
import { NavLink } from "@/types/NavigationBar";

export const NavLinkHeader: FC = ({}) => {
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
