import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Layout } from '../Layouts/Layout';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

import BannerImg from '../assets/rac-image.jpg';
import Image1 from '../assets/rac-image-1.jpg';
import Image2 from '../assets/rac-image-2.jpg';
import Image3 from '../assets/rac-image-3.jpg';
import RotaractLogo from '../assets/rotaract-logo-bg.png';

export const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [BannerImg, Image1, Image2, Image3];

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
            <img src={Image1} alt="image" width="100px" />
            <div>
              <h2>John Doe</h2>
              <span>President</span>
              <p>John Doe is the current president of the club. He is a student at the Technical University of Kenya</p>

              <h4>Board Year 2023 - 2024</h4>
            </div>
          </div>

          <div className="bottom-tags">
            <h1>Board Members</h1>
            <div>
              <img src={Image1} alt="image" width="100px" data-text="Name here" />
              <img src={Image1} alt="image" width="100px" data-text="Name here" />
              <img src={Image1} alt="image" width="100px" data-text="Name here" />
              <img src={Image1} alt="image" width="100px" data-text="Name here" />
              <img src={Image1} alt="image" width="100px" data-text="Name here" />
              <img src={Image1} alt="image" width="100px" data-text="Name here" />
              <img src={Image1} alt="image" width="100px" data-text="Name here" />
              <img src={Image1} alt="image" width="100px" data-text="Name here" />
            </div>
          </div>
        </div>
      </section>
      <section className="partner-section">
        <h1>Meet Our Partners</h1>
        <div>
          <img src={RotaractLogo} alt="logo" />
          <img src={RotaractLogo} alt="logo" />
          <img src={RotaractLogo} alt="logo" />
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
            <div className="img-box img-double">
              <img src={Image1} alt="image" width="100px" />
              <div className="img-overlay">Board Installation</div>
            </div>
            <div className="img-box ">
              <img src={Image1} alt="image" width="100px" />
              <div className="img-overlay">RYLA 2023</div>
            </div>
            <div className="img-box">
              <img src={Image1} alt="image" width="100px" />
              <div className="img-overlay">RYLA 2023</div>
            </div>
            <div className="img-box img-double">
              <img src={Image1} alt="image" width="100px" />
              <div className="img-overlay">RYLA 2023</div>
            </div>
            <div className="img-box">
              <img src={Image1} alt="image" width="100px" />
              <div className="img-overlay">RYLA 2023</div>
            </div>
            <div className="img-box ">
              <img src={Image1} alt="image" width="100px" />
              <div className="img-overlay">RYLA 2023</div>
            </div>
          </div>
        </div>
      </section>
      <section className="event-section">
        <h1>Latest events</h1>
        <p></p>
        <div className="event-cards">
          <div className="event-card">
            <img src={Image1} alt="image" width="100px" />
            <div className="date-box">12 Aug 2023</div>
            <div className="event-card-content">
              <h2>Event Title</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatum.</p>
              <button>Read More</button>
            </div>
          </div>
          <div className="event-card">
            <img src={Image1} alt="image" width="100px" />
            <div className="date-box">12 Aug 2023</div>
            <div className="event-card-content">
              <h2>Event Title</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, voluptatum. </p>
              <button>Read More</button>
            </div>
          </div>
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
