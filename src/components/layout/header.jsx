import { Link } from 'gatsby';
import React from 'react';
import Logo from '../logo';
import Navigation from './navigation';

const Header = ({ title, isRootPage }) => (
  <div className="flex items-center justify-between mb-10">
    <h1
      className="m-0 pb-0 font-display flex items-center justify-between text-lg"
    >
      <Logo style={{ width: '55px', height: '55px' }} strokeWidth={5} />
      <Link
        to="/"
        className="ml-4 font-light text-black uppercase tracking-widest"
      >
        {/* {title} */}
        <strong className="font-semibold">Anson</strong>
        {' '}
        Lichtfuss
      </Link>
    </h1>
    <Navigation />
  </div>
);

export default Header;
