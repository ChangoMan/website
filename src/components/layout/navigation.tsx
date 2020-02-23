import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'gatsby';
import React, { useContext, useEffect, useState } from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import GlobalContext from '../../context/GlobalContext';
import Logo from '../assets/logo';

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
    path: '/1test'
  },
  {
    title: 'Twitter',
    icon: <FaTwitter />,
    path: '/t2est'
  },
  {
    title: 'LinkedIn',
    icon: <FaLinkedin />,
    path: '/t4est'
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

const Navigation = () => {
  const dispatch = useContext(GlobalContext.Dispatch);
  const { navOpen } = useContext(GlobalContext.State);
  const [animateNav, setAnimateNav] = useState(false);

  useEffect(() => {
    dispatch({ type: 'CLOSE_NAV' });
    setAnimateNav(true);
  }, [dispatch]);

  return (
    <div className="nav-container">
      <AnimatePresence initial={animateNav}>
        {navOpen && (
          <motion.div
            key="nav-overlay"
            className="nav-overlay absolute top-0 left-0 w-screen h-screen bg-black z-10  overflow-y-auto"
            enter={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              key="logo-background"
              className="logo-background fixed bottom-0 left-0 z-20 w-screen h-screen overflow-hidden opacity-50 pointer-events-none"
              initial={animateNav ? { opacity: 0, y: '50px' } : false}
              animate={{ opacity: 0.1, y: 0 }}
              exit={{ opacity: 0, y: '50px' }}
              transition={{ ease: [0.165, 0.84, 0.44, 1], duration: 1 }}
            >
              <Logo
                className="md:w-screen"
                style={{ maxWidth: '150vw', height: '150vh' }}
                strokeColor="#fff"
              />
            </motion.div>
            <motion.div
              key="nav-links"
              className="nav-links flex flex-col items-end color-white max-w-5xl mt-16 mx-auto py-10 px-5"
              variants={container}
              initial={animateNav ? 'hidden' : false}
              animate="show"
            >
              {navLinks.map(link => (
                <motion.div key={link.path} variants={verticalItem}>
                  <Link
                    to={link.path}
                    className="link font-black uppercase leading-tight text-white uppercase tracking-wider text-6xl font-display"
                    activeClassName="active"
                  >
                    {link.title}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              key="social-links"
              className="social-links flex flex-row-reverse items-center justify-start color-white mt-2 h-8 max-w-5xl mx-auto py-10 px-5"
              variants={container}
              initial={animateNav ? 'hidden' : false}
              animate="show"
            >
              {socialLinks.map(link => (
                <motion.div
                  className="pl-8"
                  key={link.path}
                  variants={horizontalItem}
                >
                  <a
                    href={link.path}
                    className="inline-block link font-light text-white uppercase tracking-widest text-3xl"
                  >
                    {link.icon}
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div
        className="hamburger-menu flex flex-col items-end cursor-pointer relative z-10 w-6"
        onClick={() => dispatch({ type: 'TOGGLE_NAV' })}
      >
        <motion.div
          className="button-bars-before w-6 rounded mb-2"
          initial={{
            backgroundColor: navOpen ? '#fff' : '#000',
            y: navOpen ? 10 : 0,
            rotate: navOpen ? '45deg' : 0
          }}
          animate={{
            backgroundColor: navOpen ? '#fff' : '#000',
            y: navOpen ? 10 : 0,
            rotate: navOpen ? '45deg' : 0
          }}
          transition={{ ease: 'linear', duration: animateNav ? 0.3 : 0 }}
        />
        <motion.div
          className="button-bars block w-6 relative bg-black rounded"
          initial={{ opacity: navOpen ? 0 : 1 }}
          animate={{ opacity: navOpen ? 0 : 1 }}
          transition={{ ease: 'linear', duration: animateNav ? 0.3 : 0 }}
        />
        <motion.div
          className="button-bars-after w-6 rounded mt-2"
          initial={{
            backgroundColor: navOpen ? '#fff' : '#000',
            y: navOpen ? -10 : 0,
            rotate: navOpen ? '-45deg' : 0
          }}
          animate={{
            backgroundColor: navOpen ? '#fff' : '#000',
            y: navOpen ? -10 : 0,
            rotate: navOpen ? '-45deg' : 0
          }}
          transition={{ ease: 'linear', duration: animateNav ? 0.3 : 0 }}
        />
      </div>
      <style jsx>
        {`
          .hamburger-menu :global(.button-bars-before),
          .hamburger-menu :global(.button-bars),
          .hamburger-menu :global(.button-bars-after) {
            height: 2px;
            transition: width 0.3s ease;
          }
          .hamburger-menu:hover :global(.button-bars-before),
          .hamburger-menu:hover :global(.button-bars),
          .hamburger-menu:hover :global(.button-bars-after) {
            width: 28px;
          }
          .nav-container :global(.nav-overlay) {
            opacity: 0.2;
          }
          .nav-container :global(.nav-links .link) {
            display: block;
            opacity: 1;
            transition: all 0.2s ease;
          }
          .nav-container :global(.nav-links .link.active) {
            pointer-events: none;
            position: relative;
          }
          .nav-container :global(.nav-links .link:after) {
            content: 'You are here.';
            position: absolute;
            top: 0;
            left: -5%;
            width: 110%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            text-shadow: none;
            font-size: 1rem;
            font-weight: normal;
            display: flex;
            justify-content: center;
            align-items: center;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.2s ease;
          }
          .nav-container :global(.nav-links .link.active:after) {
            opacity: 1;
          }
          .nav-container :global(.nav-links:hover .link) {
            opacity: 0.5;
          }
          .nav-container :global(.nav-links:hover .link.active) {
            opacity: 1;
          }
          .nav-container :global(.nav-links .link.active),
          .nav-container :global(.nav-links:hover .link:hover) {
            opacity: 1;
            color: #fff;
            text-shadow: 6px 6px #999, 12px 12px #444;
            transform: translateX(-12px);
          }
          .nav-container :global(.social-links .link) {
            opacity: 1;
            transform: scale(1);
            transition: all 0.2s ease;
          }
          .nav-container :global(.social-links:hover .link) {
            opacity: 0.5;
          }
          .nav-container :global(.social-links:hover .link:hover) {
            opacity: 1;
            transform: scale(1.25);
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
