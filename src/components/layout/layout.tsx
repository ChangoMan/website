import InstagramIcon from '@icons-pack/react-simple-icons/lib/components/Instagram';
import LinkedinIcon from '@icons-pack/react-simple-icons/lib/components/Linkedin';
import TwitterIcon from '@icons-pack/react-simple-icons/lib/components/Twitter';
import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import '../../css/global.css';
import Breadcrumbs, { Props as BreadcrumbsProps } from './breadcrumbs';
import Header from './header';

interface Props extends BreadcrumbsProps {
  children: object;
  fullscreenWidth?: boolean;
}

const Layout = ({ children, fullscreenWidth, crumbs }: Props) => {
  const { navOpen } = useContext(GlobalContext.State);
  const header = <Header />;

  return (
    <div className={`${navOpen ? 'h-screen overflow-y-hidden' : ''}`}>
      <div
        className={`${
          fullscreenWidth ? '' : 'mx-auto max-w-5xl px-5'
        } py-5 flex flex-col min-h-screen justify-between`}
      >
        <header className={fullscreenWidth ? 'mx-auto max-w-5xl' : ''}>
          {header}
          {crumbs && <Breadcrumbs crumbs={crumbs} />}
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
              className="ml-6 transition-text duration-200 hover:text-black text-gray-500"
              href="https://www.linkedin.com/in/anson-lichtfuss-3401b6128"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedinIcon size={18} />
            </a>
            <a
              className="ml-3 transition-text duration-200 hover:text-black text-gray-500"
              href="https://twitter.com/ansonlichtfuss"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon size={18} />
            </a>
            <a
              className="ml-3 transition-text duration-200 hover:text-black text-gray-500"
              href="https://www.instagram.com/ansonlichtfuss/"
              target="_blank"
              rel="noreferrer"
            >
              <InstagramIcon size={18} />
            </a>
          </span>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
