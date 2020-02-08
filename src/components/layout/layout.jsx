import React from 'react';
import '../../css/global.css';
import Header from './header';

const Layout = ({ location, title, children, fullscreenWidth }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const header = (
    <Header title={title} isRootPage={location.pathname === rootPath} />
  );

  return (
    <div className="overflow-x-hidden">
      <div
        className={`${
          fullscreenWidth ? '' : 'mx-auto max-w-5xl px-5'
        } py-5 flex flex-col min-h-screen justify-between`}
      >
        <header className={fullscreenWidth && 'mx-auto max-w-5xl'}>
          {header}
        </header>
        <main>{children}</main>
        <footer
          className={`${
            fullscreenWidth ? 'mx-auto max-w-5xl' : ''
          } text-center text-xl opacity-25 mt-8`}
          title={`Anson Lichtfuss © ${new Date().getFullYear()}`}
        >
          <strong>©</strong>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
