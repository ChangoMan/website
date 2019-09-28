/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import { rhythm, scale } from '../../utils/typography';
import Logo from '../logo';

const Header = ({ title, isRootPage }) => (
  <h1
    style={{
      ...scale(0.25),
      marginBottom: rhythm(1.5),
      marginTop: 0,
      fontFamily: 'Work Sans',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
    sx={{
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center' }}>

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
    </div>
    <div className="navigation-links">
      <Link
        to="/blog"
        style={{
          fontWeight: '300', textDecoration: 'none', color: 'black', textTransform: 'uppercase', letterSpacing: '2px',
        }}
      >
        Blog
      </Link>
      <Link
        to="/about"
        style={{
          fontWeight: '300', textDecoration: 'none', color: 'black', textTransform: 'uppercase', letterSpacing: '2px', marginLeft: '2rem',
        }}
      >
        About
      </Link>
    </div>
    <style jsx>
      {`


    `}

    </style>
  </h1>
);

export default Header;
