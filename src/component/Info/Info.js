import React from 'react';
import './info.css';
import {Link} from 'react-scroll';

const Info = ({id, topLine, headLine, description, btnLable, primary, alt, lightBg, imgStart, lightText, darkText, dark, dark2, img}) => {
    return (
      <div
        className={`${
          lightBg ? "info-container lightBg" : "info-container darkBg"
        }`}
        id={id}
      >
        <div className="info-wrap">
          <div
            className={`${imgStart ? "info-row imgStart" : "info-row imgLast"}`}
          >
            <div className="info-col-1">
              <div className="info-text-wrap">
                <p className="top-line">{topLine}</p>
                <h1
                  className={`${
                    lightText
                      ? "info-heading lightText"
                      : "info-heading darkText"
                  }`}
                >
                  {headLine}
                </h1>
                <p
                  className={`${
                    darkText
                      ? "info-subtitle darkText"
                      : "info-subtitle subLight"
                  }`}
                >
                  {description}
                </p>
                <div className="info-btn-wrap">
                  <Link
                    className="info-btn"
                    to="home"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {btnLable}
                  </Link>
                </div>
              </div>
            </div>
            <div className="info-col-2">
              <div className="info-img-wrap">
                <img src={img} alt={alt} className="info-img" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Info
