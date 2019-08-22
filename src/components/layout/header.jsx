/** @jsx jsx */
import { Link } from 'gatsby';
import { jsx } from 'theme-ui';
import { rhythm, scale } from '../../utils/typography';


const Header = ({ title, isRootPage }) => (
  <h1
    style={{
      ...scale(1.5),
      marginBottom: rhythm(1.5),
      marginTop: 0,
    }}
    sx={{
      // this uses the value from `theme.space[4]`
      padding: 4,
      // these use values from `theme.colors`
      color: 'background',
      backgroundColor: 'primary',
    }}
  >
    fun
    <Link
      style={{
        boxShadow: 'none',
        textDecoration: 'none',
      }}
      to="/"
    >
      {title}
    </Link>
  </h1>
);

export default Header;
