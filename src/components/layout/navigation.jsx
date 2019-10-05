/** @jsx jsx */
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'gatsby';
import { useState } from 'react';
import { jsx } from 'theme-ui';
import { rhythm } from '../../utils/typography';

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
      delayChildren: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { y: -20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { easeOut: 'linear', duration: 0.5} },
};


const Navigation = ({ title, isRootPage }) => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    <div className="nav-container">
      <AnimatePresence>
        {navOpen && (
          <motion.div
            className="nav-overlay"
            animate={{
              opacity: navOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="nav-links"
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                maxWidth: rhythm(48),
                padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
              }}
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
                    style={{
                      fontWeight: '300', textDecoration: 'none', color: '#fff', textTransform: 'uppercase', letterSpacing: '2px', fontSize: '3em',
                    }}
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="hamburger-menu" onClick={() => setNavOpen((navStatus) => !navStatus)}>
        <motion.div
          className="button-bars-before"
          animate={{
            background: navOpen ? ['#000', '#fff', '#fff'] : ['#fff', '#000', '#000'],
            y: navOpen ? [0, 10, 10, 10] : [10, 10, 10, 0],
            rotate: navOpen ? [0, 0, 0, '45deg'] : ['45deg', 0, 0, 0],
          }}
          transition={{ ease: 'linear', duration: 0.3 }}
        />
        <motion.div className="button-bars" animate={{ opacity: navOpen ? 0 : 1 }} />
        <motion.div
          className="button-bars-after"
          animate={{
            background: navOpen ? ['#000', '#fff', '#fff'] : ['#fff', '#000', '#000'],
            y: navOpen ? [0, -10, -10, -10] : [-10, -10, -10, 0],
            rotate: navOpen ? [0, 0, 0, '-45deg'] : ['45deg', 0, 0, 0],
          }}
          transition={{ ease: 'linear', duration: 0.3 }}
        />
      </div>
      <style jsx>
        {`
      .hamburger-menu {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        width: 28px;
        cursor: pointer;
        box-sizing: content-box;
        position: relative;
        z-index: 999;
      }
      .hamburger-menu :global(.button-bars) {
        display: block;
        width: 28px;
        height: 2px;
        background: black;
        border-radius: 3px;
        position: relative;
        transition: all 0.1s ease-in-out;
      }
      .hamburger-menu :global(.button-bars-before),
      .hamburger-menu :global(.button-bars-after) {
        width: 28px;
        height: 2px;
        background: black;
        border-radius: 3px;
        transition: all 0.1s ease-in-out;
      }
      .hamburger-menu :global(.button-bars-before) {
        margin-bottom: 8px;
      }
      .hamburger-menu :global(.button-bars-after) {
        margin-top: 8px;
      }
      .hamburger-menu:hover .button-bars {
      }
      .hamburger-menu:hover :global(.button-bars-before),
      .hamburger-menu:hover :global(.button-bars-after) {
        width: 28px;
      }
      .nav-container :global(.nav-overlay) {
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: #000;
        z-index: 999;
        opacity: 0.2;
      }
      .nav-container :global(.nav-links) {
        position: relative;
        z-index: 9999;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        color: #fff;
        margin-top: 4rem;
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
