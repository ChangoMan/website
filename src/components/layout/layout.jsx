import React from 'react';
import { rhythm } from '../../utils/typography';
import Header from './header';


const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const header = <Header title={title} isRootPage={location.pathname === rootPath} />;

  return (
    <div
      style={{
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: rhythm(48),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer style={{ textAlign: 'center' }}>
        Anson Lichtfuss ©
        {' '}
        {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Layout;
