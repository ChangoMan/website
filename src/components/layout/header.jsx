import React from 'react';
import { Link } from 'gatsby';

import { rhythm, scale } from '../../utils/typography';

const Header = ({ title, isRootPage }) => (
  <h1
    style={{
      ...scale(1.5),
      marginBottom: rhythm(1.5),
      marginTop: 0,
    }}
  >
    <Link
      style={{
        boxShadow: 'none',
        textDecoration: 'none',
        color: 'inherit',
      }}
      to="/"
    >
      {title}
    </Link>
  </h1>
);

export default Header;
