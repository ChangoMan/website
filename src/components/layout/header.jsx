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
      justifyContent: 'space-between'
    }}
    sx={{
    }}
  >
    <div style={{ display: 'flex', alignItems: 'center' }}>

      <Logo style={{ width: '65px', height: '65px' }} strokeWidth={5} />
      <Link
        to="/"
        style={{ fontWeight: '300', textDecoration: 'none', color: 'black', textTransform: 'uppercase', letterSpacing: '2px', marginLeft: '1rem' }}
      >
        {/* {title} */}
        <strong style={{ fontWeight: '600' }}>Anson</strong> Lichtfuss
    </Link>
    </div>
    <div className="hamburger-menu-button">
      <div className="button-bars"></div>
    </div>
    <style jsx>{`
      .hamburger-menu-button {
        display: block;
        width: 28px;
        height: 13px;
        padding-top: 11px;
        cursor: pointer;
        box-sizing: content-box;
      }
      .button-bars {
        display: block;
        width: 28px;
        height: 3px;
        background: black;
        border-radius: 3px;
        position: relative;
        transition: all 0.4s ease-in-out;
      }
      .button-bars:before,
      .button-bars:after {
        content: '';
        position: absolute;
        right: 0;
        width: 28px;
        height: 3px;
        background: black;
        border-radius: 3px;
        transition: all 0.4s ease-in-out;
      }
      .button-bars:before {
        top: -10px;
        width: 26px;
      }
      .button-bars:after {
        top: 10px;
        width: 22px;
      }
      .hamburger-menu-button:hover .button-bars {
      }
      .hamburger-menu-button:hover .button-bars:before,
      .hamburger-menu-button:hover .button-bars:after {
        width: 28px;
      }

    `}</style>
  </h1>
);

export default Header;
