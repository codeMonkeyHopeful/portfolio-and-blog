import { FC } from "react";
import Link from "next/link";

type NavLink = {
  text: string;
  href: string;
};

type NavLinkItemProps = {
  linkDetail: NavLink;
};

export const NavLinkItem: FC<NavLinkItemProps> = ({ linkDetail }) => {
  return (
    <li className="nav-item">
      <Link
        href={linkDetail.href}
        className="nav-link active"
        aria-current="page"
      >
        {linkDetail.text}
      </Link>
    </li>
  );
};
