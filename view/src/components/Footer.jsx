import React from 'react';
import { Link } from 'react-router-dom';
import RotaractLogo from '../assets/rotaract-logo-bg.png';

import { MdOutlineDeveloperMode, MdOutlineSchool } from 'react-icons/md';

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="">
      <div className="top-section">
        <div className="footer-logo">
          <img src={RotaractLogo} alt="rotaract-logo" className="" />
          <p className="">
            Rotary Club of TUK was Chartered 10 years ago and continues to grow its membership. Our main goal being to
            execute Rotary International’s objectives in our world’s most persistent issues.
          </p>

          <div></div>
        </div>
        <div className="footer-navs">
          <div className="nav-group">
            <h3 className="">Site map</h3>
            <Link className="" to="/">
              Home
            </Link>
            <Link className="" to="/about-us">
              About Us
            </Link>
            <Link className="" to="/get-involved">
              Get Involved
            </Link>
            <Link className="" to="/events">
              Events
            </Link>
            <Link className="" to="/projects">
              Projects
            </Link>
            <Link className="" to="/donate">
              Donate
            </Link>
          </div>
          <div className="nav-group">
            <h3 className="">Committees</h3>
            <Link className="" to="/">
              Public Relations
            </Link>
            <Link className="" to="/">
              Proffessional development
            </Link>
            <Link className="" to="/">
              Community service
            </Link>
            <Link className="" to="/">
              Club Service
            </Link>
            <Link className="" to="/">
              Finance & Fundraising
            </Link>
            <Link className="" to="/">
              International Service
            </Link>
          </div>
          <div className="nav-group">
            <h3 className="">Resourses</h3>
            <Link className="" to="/">
              Rotary Grace
            </Link>
            <Link className="" to="/">
              Four way test
            </Link>
            <Link className="" to="/">
              Objectives
            </Link>
            <Link className="" to="/">
              Rotary handbook
            </Link>
          </div>
        </div>
      </div>
      <div className="bottom-section">
        <span>&copy; {year} Rotaract </span>
        <span className="">
          <MdOutlineSchool className="icon" />
          <a href="https://tukenya.ac.ke/" target="_">
            The Technical University of Kenya
          </a>
        </span>
        <span className="">
          <MdOutlineDeveloperMode className="icon" />
          <a href="https://github.com/gbrowns" target="_">
            codewithgbrown
          </a>
        </span>
      </div>
    </footer>
  );
};
