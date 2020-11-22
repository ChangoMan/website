import { Link } from 'gatsby';
import { styled } from 'linaria/react';
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

const NavLink = styled((props) => <Link {...props} />)`
  border-bottom: 2px solid white;
  transition: border 0.2s ease;

  &.active,
  &.active:hover {
    border-bottom: 2px solid black;
  }
  &:hover {
    border-bottom: 2px solid grey;
  }
`;

const Navigation = () => {
  return (
    <nav className="nav-container">
      <div className="nav-links flex items-end">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className="link leading-tight text-black text-xl font-display no-underline ml-6"
            activeClassName="active"
            partiallyActive={link.path !== ROOT_ROUTE}
          >
            {link.title}
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
