import React, {useState} from 'react';
import './hero.css';
import {Link as LinkS} from 'react-scroll'
import {MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md'
import Video from '../../videos/video.mp4'

const Hero = () => {
    const [hover, setHover] = useState(false);
    const hoverHandler = () => {
        setHover(!hover)
    }
    return (
      <div className="hero-wrap">
        <div className="banner">
          <video
            autoPlay
            loop
            muted
            src={Video}
            type="video/mp4"
            className="video"
          ></video>
        </div>
        <div className="hero-content">
          <h1>Virtual Banking Made Easy</h1>
          <p>
            Sign up for a new accout today and receive $250 in credit towards
            your next payment
          </p>
          <div className="hero-btn-wrap">
            <LinkS to="" className="hero-btn" onMouseEnter={hoverHandler} onMouseLeave={hoverHandler}>
              Get Started{" "}
              {hover ? (
                <MdArrowForward className="arrow-forward" />
              ) : (
                <MdKeyboardArrowRight className="arrow-right" />
              )}{" "}
            </LinkS>
          </div>
        </div>
      </div>
    );
}

export default Hero

// 