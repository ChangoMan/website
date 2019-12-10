import React from 'react';
import '../../css/global.css';
import Header from './header';

const Layout = ({
  location, title, children, fullscreenWidth,
}) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const header = <Header title={title} isRootPage={location.pathname === rootPath} />;

  return (
    <div className="overflow-x-hidden">
      <div
        className={`${fullscreenWidth ? '' : 'mx-auto max-w-5xl px-5'} py-10`}
      >
        <header className={fullscreenWidth && 'mx-auto max-w-5xl'}>{header}</header>
        <main>{children}</main>
        <footer className={`${fullscreenWidth ? 'mx-auto max-w-5xl' : ''} text-center`}>
          Anson Lichtfuss ©
          {' '}
          {new Date().getFullYear()}
        </footer>
      </div>
    </div>
  );
};

export default Layout;
