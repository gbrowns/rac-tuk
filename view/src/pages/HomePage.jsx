import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DATA } from '../utils/data';

import { Layout } from '../Layouts/Layout';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import {MdCall, MdEmail, MdMail} from 'react-icons/md';

import BannerImg from '../assets/rac-image.jpg';
import Image1 from '../assets/rac-image-1.jpg';
import Image2 from '../assets/rac-image-2.jpg';
import Image3 from '../assets/rac-image-3.jpg';
import RotaractLogo from '../assets/rotaract-logo-bg.png';

export const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [BannerImg, Image1, Image2, Image3];

  const currentPresident = DATA.leaders.filter(leader => leader.position === 'President')[0];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Layout>
      <section className="hero-section">
        <div className="left-section">
          <h4>No Upcoming Event:</h4>
          <h1>
            <span>Rotaract</span> Club of Technical Unversity of Kenya
          </h1>
          <button>Join Us Today</button>
        </div>
        <div className="right-section">
          <div className="icon-box">
            <BsChevronLeft className="icon" />
          </div>
          <img src={images[currentImage]} alt="banner-img" className="img" />
          <div className="icon-box">
            <BsChevronRight className="icon" />
          </div>
        </div>
      </section>
      <section className="about-section">
        <h1>Who are we?</h1>
        <div>
          <p>
            Rotaract is a global service organization for young adults aged 18 to 30, fostering community service,
            leadership development, and international understanding. Sponsored by Rotary International, Rotaract clubs
            operate in over 170 countries and engage in various local and global projects.
          </p>
          <p>
            Rotaract members collaborate on volunteer efforts, leadership training, and cultural exchange, instilling a
            sense of responsibility and a commitment to positive change. It serves as a stepping stone for young leaders
            dedicated to service.
          </p>
          <button>Learn More</button>
        </div>
      </section>

      <section className="pillar-section">
        <h1>Our pillars</h1>
        <div className="card-container">
          <div className="card-box">
            <h2>Community Service</h2>
          </div>
          <div className="card-box">
            <h2>Community Service</h2>
          </div>
          <div className="card-box">
            <h2>Community Service</h2>
          </div>
          <div className="card-box">
            <h2>Community Service</h2>
          </div>
          <div className="card-box">
            <h2>Community Service</h2>
          </div>
          <div className="card-box">
            <h2>Community Service</h2>
          </div>
        </div>
      </section>

      <section className="leader-section">
        <h1>Leadership</h1>
        <p>
          Rotaract promotes leadership development by giving members opportunities to lead projects and teams, fostering
          essential skills and ethical values. This experience equips young adults to be effective, responsible leaders
          in their communities and beyond.
        </p>
        <div className="leaders-container">
          <div className="top-tag">
            {
              currentPresident && (
                <>
                <div>
                  <h2>{currentPresident.name}</h2>
                  <span>{currentPresident.position}</span>
                  <p>{currentPresident.bio}</p>

                  <h4>Board Year {currentPresident.boardYear}</h4>

                  <button>
                    <MdMail className='icon'/>
                    Contact {currentPresident.name}
                  </button>
                </div>
                <img src={currentPresident.image} alt="image" width="100px" />
                </>
              )
            }
          </div>

          <div className="bottom-tags">
            <h1>Board Members</h1>
            <div className='table-container'>
              {
                DATA.leaders.slice(0,5).map(leader => {
                  if (leader.position === 'President') return null;
                  return (
                    <div className="table-row">
                      <div className="table-cell">
                        <img src={leader.image} alt="image" width="100px" data-text="Name here" />
                        {leader.name}
                      </div>
                      <div className="table-cell">{leader.position}</div>
                      {/* <div className="table-cell">{leader.boardYear}</div> */}
                      <div className="table-cell contact-cell"><MdMail className='icon'/></div>
                    </div>
                  )
                })
              }
            </div>
            <button>View more</button>
          </div>
        </div>
      </section>
      <section className="partner-section">
        <h1>Meet Our Partners</h1>
        <div>
          {
            DATA.partners.map(partner => (
              // <div className="partner-box">
              //   <img src={partner.logo} alt="logo" />
              //   <h2>{partner.name}</h2>
              //   <a href={partner.website} target="_blank" rel="noreferrer">
              //     Visit Website
              //   </a>
              // </div>
              <img src={partner.logo} alt={partner.name} />
            ))
          }
        </div>
      </section>
      <section className="gallery-section">
        <h1>Gallery & Moments</h1>

        <div className="content">
          <div className="left-content">
            <h2>One Love</h2>
            <p>
              Rotaract's "One Love" moments are the heartwarming highlights that remind us why this organization is
              truly special. These instances pulse with the energy of unity and camaraderie, as Rotaractors from around
              the world join hands to create positive change, deepening friendships and cultural understanding. These
              moments prove that Rotaract is more than just a club; it's a global movement of young leaders committed to
              making the world better.
            </p>
          </div>
          <div className="right-content">
            {
              DATA.gallery.slice(0,6).map((gallery, index) => (
                <div className={index === 0 || index === 3 ? `img-box img-double` : `img-box` }>
                  <img src={gallery.image} alt="image" width="100px" />
                  <div className="img-overlay">{gallery.title}</div>
                </div>
              ))
            }

          </div>
        </div>
      </section>
      <section className="event-section">
        <h1>Latest events</h1>
        <p></p>
        <div className="event-cards">
          {
            DATA.events.slice(0,3).map(event => (
              <div className="event-card">
                <img src={event.eventImg} alt="image" width="100px" />
                <div className="date-box">{event.date}</div>
                <div className="event-card-content">
                  <h2>{event.title}</h2>
                  <p>{event.description}</p>
                  <button>Read More</button>
                </div>
              </div>
            ))
          }
        </div>
        <div className="paginations">
          <button>Prev</button>
          <span>1</span>
          <span>2</span>
          <span>3</span>
          <button>Next</button>
        </div>
      </section>
    </Layout>
  );
};
