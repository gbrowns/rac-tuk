import React from 'react';
import useWindowSize from '../hooks/useWindowSize';
import useToggleNav from '../hooks/useToggleNav';
import { Link } from 'react-router-dom';
import { BsInstagram, BsTwitter, BsTiktok } from 'react-icons/bs';
import { RiMenu3Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

import RotaractLogo from '../assets/rotaract-logo-bg.png';
import { isRouteActive } from '../utils/routerUtils';

export const Navbar = () => {
  const { width } = useWindowSize();
  const { toggle, toggleNavbar } = useToggleNav();

  return (
    <header>
      <img src={RotaractLogo} alt="rotaract-logo" className="" />

      <nav>
        <Link className={isRouteActive('/') ? 'active' : null} to="/">
          Home
        </Link>
        <Link className={isRouteActive('/about-us') ? 'active' : null} to="/about-us">
          About Us
        </Link>
        <Link className={isRouteActive('/gallery') ? 'active' : null} to="/gallery">
          Gallery
        </Link>
        <Link className={isRouteActive('/get-involved') ? 'active' : null} to="/get-involved">
          Get Involved
        </Link>
        <Link className={isRouteActive('/events') ? 'active' : null} to="/events">
          Events
        </Link>
      </nav>

      {width >= 768 && (
        <>
          <BsInstagram className="icon" />
          <BsTwitter className="icon" />
          <Link className="join-btn" to="/donate">
            Join Us
          </Link>
        </>
      )}

      {width < 768 && <RiMenu3Line onClick={toggleNavbar} className="icon" />}

      {toggle && (
        <div className="mobile-nav">
          <AiOutlineClose onClick={toggleNavbar} className="icon close" />

          <Link className={isRouteActive('/') ? 'active' : null} to="/">
            Home
          </Link>
          <Link className={isRouteActive('/about-us') ? 'active' : null} to="/about-us">
            About Us
          </Link>
          <Link className={isRouteActive('/gallery') ? 'active' : null} to="/gallery">
            Gallery
          </Link>
          <Link className={isRouteActive('/get-involved') ? 'active' : null} to="/get-involved">
            Get Involved
          </Link>
          <Link className={isRouteActive('/events') ? 'active' : null} to="/events">
            Events
          </Link>

          <Link className="join-btn" to="/donate">
            Join Us
          </Link>

          <div className="icons">
            <BsInstagram className="icon" />
            <BsTiktok className="icon" />
            <BsTwitter className="icon" />
          </div>

          <div className="copyright">
            <p>
              &copy; Rotaract Club of{' '}
              <a href="https://tukenya.ac.ke/" target="_">
                TU-Kenya
              </a>
            </p>
          </div>
        </div>
      )}
    </header>
  );
};
