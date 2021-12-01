import React from 'react'
import { Link } from 'react-router-dom'
import {FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube} from 'react-icons/fa'
import './footer.css';
import { animateScroll as scroll } from 'react-scroll/modules';

const Footer = () => {

     const toggleHome = () => {
       scroll.scrollToTop();
     };
    return (
      <footer className="footer-container">
        <div className="footer-wrap">
          <div className="link-container">
            <div className="link-wrap">
              <div className="link-item">
                <h1 className="link-title">About Us</h1>
                <Link to="/SignIn" className="footer-link">
                  How it works
                </Link>
                <Link to="/SignIn" className="footer-link">
                  Testimonials
                </Link>
                <Link to="/SignIn" className="footer-link">
                  Investors
                </Link>
                <Link to="/SignIn" className="footer-link">
                  Careers
                </Link>
                <Link to="/SignIn" className="footer-link">
                  Term of Service
                </Link>
              </div>
              <div className="link-item">
                <h1 className="link-title">Videos</h1>
                <Link to="/SignIn" className="footer-link">
                  Submit Video
                </Link>
                <Link to="/SignIn" className="footer-link">
                  Ambassador
                </Link>
                <Link to="/SignIn" className="footer-link">
                  Influencer
                </Link>
                <Link to="/SignIn" className="footer-link">
                  Agency
                </Link>
              </div>
            </div>
            <div className="link-wrap">
              <div className="link-item">
                <h1 className="link-title">Contact Us</h1>
                <Link to="/SignIn" className="footer-link">
                  Contact
                </Link>
                <Link to="/SignIn" className="footer-link">
                  Support
                </Link>
                <Link to="/SignIn" className="footer-link">
                  Destination
                </Link>
                <Link to="/SignIn" className="footer-link">
                  Sponsorship
                </Link>
              </div>
              <div className="link-item">
                <h1 className="link-title">Social Media</h1>
                <Link to="/SignIn" className="footer-link">
                  Facebook
                </Link>
                <Link to="/SignIn" className="footer-link">
                  Youtube
                </Link>
                <Link to="/SignIn" className="footer-link">
                  Instagram
                </Link>
                <Link to="/SignIn" className="footer-link">
                  Twitter
                </Link>
              </div>
            </div>
          </div>
          <section className="social-media">
            <div className="social-media-wrap">
              <Link to='/' className="social-logo" onClick={toggleHome}>Logo</Link>
              <small className="reserve-right">
                Logo &copy; {new Date().getFullYear()} All rights reserved.
              </small>
              <div className="social-icon">
                <a
                  href="www.facebook.com"
                  target="_blank"
                  className="icon-link"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="www.intagram.com"
                  target="_blank"
                  className="icon-link"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="www.youtube.com"
                  target="_blank"
                  className="icon-link"
                  aria-label="Youtube"
                >
                  <FaYoutube />
                </a>
                <a
                  href="www.twitter.com"
                  target="_blank"
                  className="icon-link"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="www.linkedin.com"
                  target="_blank"
                  className="icon-link"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </section>
        </div>
      </footer>
    );
}

export default Footer
