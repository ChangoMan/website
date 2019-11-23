import React from 'react';
import '../../css/global.css';
import Header from './header';

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const header = <Header title={title} isRootPage={location.pathname === rootPath} />;

  return (
    <div
      className="mx-auto max-w-6xl py-10 px-5"
    >
      <header>{header}</header>
      <main>{children}</main>
      <footer className="text-center">
        Anson Lichtfuss ©
        {' '}
        {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default Layout;
