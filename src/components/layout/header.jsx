import { Link } from 'gatsby';
import React from 'react';
import { rhythm, scale } from '../../utils/typography';
import Logo from '../logo';
import Navigation from './navigation';

const Header = ({ title, isRootPage }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: rhythm(1.5),
  }}
  >

    <h1
      style={{
        ...scale(0.25),
        marginTop: 0,
        marginBottom: 0,
        paddingBottom: 0,
        fontFamily: 'Work Sans',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Logo style={{ width: '65px', height: '65px' }} strokeWidth={5} />
      <Link
        to="/"
        style={{
          fontWeight: '300', textDecoration: 'none', color: 'black', textTransform: 'uppercase', letterSpacing: '2px', marginLeft: '1rem',
        }}
      >
        {/* {title} */}
        <strong style={{ fontWeight: '600' }}>Anson</strong>
        {' '}
        Lichtfuss
      </Link>
    </h1>
    <Navigation />
  </div>
);

export default Header;
