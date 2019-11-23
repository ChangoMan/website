import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'gatsby';
import React, { useState } from 'react';

const navLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'About',
    path: '/about',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: -20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { easeOut: 'linear', duration: 0.5 } },
};


const Navigation = ({ title, isRootPage }) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="nav-container">
      <AnimatePresence>
        {navOpen && (
          <motion.div
            className="nav-overlay absolute top-0 left-0 w-screen h-screen bg-black z-10"
            animate={{
              opacity: navOpen ? 1 : 0,
            }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="nav-links relative z-10 flex flex-col items-end color-white mt-16 max-w-6xl mx-auto py-10 px-5"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {navLinks.map((link) => (
                <motion.div
                  key={link.path}
                  variants={item}
                >
                  <Link
                    to={link.path}
                    className="font-light text-white uppercase tracking-widest text-5xl"
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hamburger-menu flex flex-col items-end cursor-pointer relative z-10 w-6" onClick={() => setNavOpen((navStatus) => !navStatus)}>
        <motion.div
          className="button-bars-before w-6 bg-black rounded mb-2"
          animate={{
            background: navOpen ? ['#000', '#fff', '#fff', '#fff', '#fff'] : ['#fff', '#000', '#000', '#000', '#000'],
            y: navOpen ? [0, 10, 10, 10] : [10, 10, 10, 0],
            rotate: navOpen ? [0, 0, 0, 0, '45deg'] : ['45deg', 0, 0, 0, 0],
          }}
          transition={{ ease: 'linear', duration: 0.3 }}
        />
        <motion.div className="button-bars block w-6 relative bg-black rounded" animate={{ opacity: navOpen ? 0 : 1 }} />
        <motion.div
          className="button-bars-after w-6 bg-black rounded mt-2"
          animate={{
            background: navOpen ? ['#000', '#fff', '#fff', '#fff', '#fff'] : ['#fff', '#000', '#000', '#000', '#000'],
            y: navOpen ? [0, -10, -10, -10] : [-10, -10, -10, 0],
            rotate: navOpen ? [0, 0, 0, 0, '-45deg'] : ['45deg', 0, 0, 0, 0],
          }}
          transition={{ ease: 'linear', duration: 0.3 }}
        />
      </div>
      <style jsx>
        {`
      .hamburger-menu :global(.button-bars) {
        height: 2px;
        transition: all 0.1s ease-in-out;
      }
      .hamburger-menu :global(.button-bars-before),
      .hamburger-menu :global(.button-bars-after) {
        height: 2px;
        transition: all 0.1s ease-in-out;
      }
      .hamburger-menu:hover :global(.button-bars-before),
      .hamburger-menu:hover :global(.button-bars-after) {
        width: 28px;
      }
      .nav-container :global(.nav-overlay) {
        opacity: 0.2;
      }
    `}
      </style>
      <style jsx>
        {`
      .hamburger-menu :global(.button-bars-before) {
        width: ${navOpen ? '28px' : '26px'};
      }
      .hamburger-menu :global(.button-bars-after) {
        width: ${navOpen ? '28px' : '22px'};
      }
    `}
      </style>
    </div>
  );
};

export default Navigation;
