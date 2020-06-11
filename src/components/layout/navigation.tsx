import { Link } from 'gatsby';
import React from 'react';

const ROOT_ROUTE = '/';

const navLinks = [
  {
    title: 'Home',
    path: ROOT_ROUTE,
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
];

const Navigation = () => {
  return (
    <nav className="nav-container">
      <div className="nav-links flex items-end">
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="link leading-tight text-black text-xl font-display no-underline ml-6"
            activeClassName="active"
            partiallyActive={link.path !== ROOT_ROUTE}
          >
            {link.title}
          </Link>
        ))}
      </div>

      <style jsx>
        {`
          .nav-container :global(.nav-links .link) {
            border-bottom: 2px solid white;
            transition: border 0.2s ease;
          }
          .nav-container :global(.nav-links .link.active),
          .nav-container :global(.nav-links .link.active:hover) {
            border-bottom: 2px solid black;
          }
          .nav-container :global(.nav-links .link:hover) {
            border-bottom: 2px solid grey;
          }
        `}
      </style>
    </nav>
  );
};

export default Navigation;
