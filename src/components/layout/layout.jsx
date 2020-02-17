import React, { useContext } from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import GlobalContext from '../../context/GlobalContext';
import '../../css/global.css';
import Header from './header';

const Layout = ({ location, title, children, fullscreenWidth }) => {
  const { navOpen } = useContext(GlobalContext.State);
  const rootPath = `${__PATH_PREFIX__}/`;
  const header = (
    <Header title={title} isRootPage={location.pathname === rootPath} />
  );

  return (
    <div
      className={`overflow-x-hidden ${
        navOpen ? 'h-screen overflow-y-hidden' : ''
      }`}
    >
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
          } flex items-center justify-between text-center text-xl mt-8`}
        >
          <strong
            className="mr-6 opacity-25"
            title={`Anson Lichtfuss © ${new Date().getFullYear()}`}
          >
            ©
          </strong>
          <span className="flex">
            <a
              className="ml-6 transition-opacity duration-200 opacity-25 hover:opacity-100"
              href="#"
            >
              <FaLinkedin />
            </a>
            <a
              className="ml-3 transition-opacity duration-200 opacity-25 hover:opacity-100"
              href="#"
            >
              <FaTwitter />
            </a>
            <a
              className="ml-3 transition-opacity duration-200 opacity-25 hover:opacity-100"
              href="#"
            >
              <FaInstagram />
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
