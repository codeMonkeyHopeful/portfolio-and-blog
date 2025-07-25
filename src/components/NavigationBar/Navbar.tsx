import { FC } from 'react';
import { NavLinkItem, NavLinkHeader } from '@/components/NavigationBar/index';
import { NavLink } from '@/types/NavigationBar';

const linkList: NavLink[] = [
  {
    text: 'Home',
    href: '/',
  },
  {
    text: 'About Me',
    href: '/me',
  },
  {
    text: 'Projects',
    href: '/projects',
  },
  {
    text: 'Job Search Blog',
    href: '/blog',
  },
];

export const Navbar: FC = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top  bg-navbar">
      <div className="container-fluid">
        <NavLinkHeader />
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
