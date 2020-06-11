import { Link } from 'gatsby';
import React from 'react';
import Logo from '../assets/logo';
import Navigation from './navigation';

const Header = () => (
  <div className="flex items-center justify-between relative z-50">
    <span className="m-0 pb-0 font-display flex items-center justify-between text-lg">
      <Logo style={{ width: '55px', height: '55px' }} strokeWidth={5} />
      <Link
        to="/"
        className="ml-4 font-light text-black uppercase tracking-widest no-underline hidden sm:inline"
      >
        {/* {title} */}
        <strong className="font-semibold">Anson</strong> Lichtfuss
      </Link>
    </span>
    <Navigation />
  </div>
);

export default Header;
