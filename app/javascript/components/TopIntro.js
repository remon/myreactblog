import React from "react";
import PropTypes from "prop-types";
class TopIntro extends React.Component {
  render() {
    return (
      <div className="page-container">
        <div className="myimg-wrapper centery">
          <img src="/assets/myimg.png" className="myimg" />

          <p className="centery myp">
            A full-Stack Web Developer from Egypt , I love coding , also I love
            teaching young people about web development
          </p>

          <div className="social-links">
            <ul>
              <li>
                <a
                  href="https://stackoverflow.com/users/2087775/remon-amin"
                  className="stk"
                >
                  <i className="fab fa-stack-overflow" />
                </a>
              </li>
              <li>
                <a href="https://github.com/remon">
                  <i className="fab fa-github-square" />
                </a>
              </li>
              <li>
                <a href="https://twitter.com/Remon_Nasr1" className="twt">
                  <i className="fab fa-twitter-square" />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/remon_nasr1/" className="ig">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li>
                <a href="https://facebook.com/remon.a2000" className="fb">
                  {" "}
                  <i className="fab fa-facebook-square" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default TopIntro;
