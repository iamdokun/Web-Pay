import React from 'react'
import './sidebar.css'
import { FaTimes } from "react-icons/fa";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <aside
      className={`${isOpen ? "side-bar-wrap isOpen" : "side-bar-wrap isClose"}`}
      onClick={toggle}
    >
      <div className="icon-wrap" onClick={toggle}>
        <FaTimes className="close-icon" />
      </div>
      <ul className="sidebar-menu">
        <li>
          <LinkS to="about" className="side-links" onClick={toggle}>
            About
          </LinkS>
        </li>
        <li>
          <LinkS to="discover" className="side-links" onClick={toggle}>
            Discover
          </LinkS>
        </li>
        <li>
          <LinkS to="services" className="side-links" onClick={toggle}>
            Services
          </LinkS>
        </li>
        <li>
          <LinkS to="sign-up" className="side-links" onClick={toggle}>
            Sign Up
          </LinkS>
        </li>
      </ul>
      <div className="side-btn">
        <LinkR to="/SignIn" className="side-sign-in">
          Sign In
        </LinkR>
      </div>
    </aside>
  );
};

export default SideBar

