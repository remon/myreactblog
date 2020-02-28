import React from 'react';

import { iconPath } from '../helpers/image_path';

class TopIntro extends React.Component {
  render() {
    return (
      <div className='page-container'>
        <div className='myimg-wrapper centery'>
          <img src={iconPath('./myimg.png')} className='myimg' />

          <p className='centery myp'>
            <a
              href='https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2020-02-15&ci=AWS00823947'
              target='blank'
            >
              AWS Certified Developer
            </a>
            , A full-Stack Web Developer from Egypt , I love coding , also I
            love teaching young people about web development
          </p>

          <div className='social-links'>
            <ul>
              <li>
                <a
                  href='https://www.certmetrics.com/amazon/public/badge.aspx?i=2&t=c&d=2020-02-15&ci=AWS00823947'
                  className='aws'
                >
                  <i className='fab fa-aws' />
                </a>
              </li>
              <li>
                <a
                  href='https://stackoverflow.com/users/2087775/remon-amin'
                  className='stk'
                >
                  <i className='fab fa-stack-overflow' />
                </a>
              </li>
              <li>
                <a href='https://github.com/remon'>
                  <i className='fab fa-github-square' />
                </a>
              </li>
              <li>
                <a href='https://twitter.com/Remon_Nasr1' className='twt'>
                  <i className='fab fa-twitter-square' />
                </a>
              </li>
              <li>
                <a href='https://www.instagram.com/remon_nasr1/' className='ig'>
                  <i className='fab fa-instagram' />
                </a>
              </li>
              <li>
                <a href='https://facebook.com/remon.a2000' className='fb'>
                  {' '}
                  <i className='fab fa-facebook-square' />
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
