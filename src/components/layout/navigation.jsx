import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'gatsby';
import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const navLinks = [
  {
    title: 'Home',
    path: '/'
  },
  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Blog',
    path: '/blog'
  }
];

const socialLinks = [
  {
    title: 'Instagram',
    icon: <FaInstagram />,
    path: '/test'
  },
  {
    title: 'Twitter',
    icon: <FaTwitter />,
    path: '/test'
  },
  {
    title: 'LinkedIn',
    icon: <FaLinkedin />,
    path: '/test'
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1
    }
  }
};

const verticalItem = {
  hidden: { y: -20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { easeOut: 'linear', duration: 0.5 } }
};

const horizontalItem = {
  hidden: { x: 20, opacity: 0 },
  show: { x: 0, opacity: 1, transition: { easeOut: 'linear', duration: 0.5 } }
};

const Navigation = ({ title, isRootPage }) => {
  const [navOpen, setNavOpen] = useState(false);
  console.log('⛱ navOpen:', navOpen);
  return (
    <div className="nav-container">
      <AnimatePresence>
        {navOpen && (
          <motion.div
            className="nav-overlay absolute top-0 left-0 w-screen h-screen bg-black z-10"
            animate={{
              opacity: navOpen ? 1 : 0
            }}
            transition={{ duration: 0.2 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="nav-links relative z-10 flex flex-col items-end color-white max-w-5xl mt-16 mx-auto py-10 px-5"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {navLinks.map(link => (
                <motion.div key={link.path} variants={verticalItem}>
                  <Link
                    to={link.path}
                    className="font-light text-white uppercase tracking-wider text-5xl font-display"
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              className="nav-links relative z-10 flex flex-row-reverse items-center justify-start color-white mt-2 h-8 max-w-5xl mx-auto py-10 px-5"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {socialLinks.map(link => (
                <motion.div
                  className="pl-8"
                  key={link.path}
                  variants={horizontalItem}
                >
                  <Link
                    to={link.path}
                    className="font-light text-white uppercase tracking-widest text-3xl"
                  >
                    {link.icon}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="hamburger-menu flex flex-col items-end cursor-pointer relative z-10 w-6"
        onClick={() => setNavOpen(navStatus => !navStatus)}
      >
        <motion.div
          className="button-bars-before w-6 bg-black rounded mb-2"
          animate={{
            background: navOpen ? '#fff' : '#000',
            y: navOpen ? 10 : 0,
            rotate: navOpen ? '45deg' : 0
          }}
          transition={{ ease: 'linear', duration: 0.3 }}
        />
        <motion.div
          className="button-bars block w-6 relative bg-black rounded"
          animate={{ opacity: navOpen ? 0 : 1 }}
        />
        <motion.div
          className="button-bars-after w-6 bg-black rounded mt-2"
          initial={{ y: 0 }}
          animate={{
            background: navOpen ? '#fff' : '#000',
            y: navOpen ? -10 : 0,
            rotate: navOpen ? '-45deg' : 0
          }}
          transition={{ ease: 'linear', duration: 0.3 }}
        />
      </div>
      <style jsx>
        {`
          .hamburger-menu :global(.button-bars) {
            height: 2px;
          }
          .hamburger-menu :global(.button-bars-before),
          .hamburger-menu :global(.button-bars-after) {
            height: 2px;
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
