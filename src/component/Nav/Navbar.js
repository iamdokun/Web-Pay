import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import './navbar.css'
import {Link as LinkR} from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
import { animateScroll as scroll } from 'react-scroll'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)

        return () => window.removeEventListener('scroll', changeNav);
    },[])

    const toggleHome = () => {
        scroll.scrollToTop()
    }

    return (
      <header
        className={`${
          scrollNav ? "navbar-wrap scrollNav" : "navbar-wrap notScrollNav"
        }`}
      >
        <nav>
          <span className="logo">
            <LinkR to="/" className="logo-link" onClick={toggleHome}>
              Logo
            </LinkR>
          </span>
          <div className="mobile-icon" onClick={toggle}>
            <FaBars />
          </div>
          <ul className="menu-wrap">
            <li>
              <LinkS
                to="about"
                className="links"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-81}
                activeClass="active"
              >
                About
              </LinkS>
            </li>
            <li>
              <LinkS
                to="discover"
                className="links"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-81}
                activeClass="active"
              >
                Discover
              </LinkS>
            </li>
            <li>
              <LinkS
                to="services"
                className="links"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-81}
                activeClass="active"
              >
                Services
              </LinkS>
            </li>
            <li>
              <LinkS
                to="sign-up"
                className="links"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-81}
                activeClass="active"
              >
                Sign Up
              </LinkS>
            </li>
          </ul>
          <div className="nav-btn">
            <LinkR to="/SignIn" className="sign-in">
              Sign In
            </LinkR>
          </div>
        </nav>
      </header>
    );
}

export default Navbar
