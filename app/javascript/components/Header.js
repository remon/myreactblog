import React from 'react';
import ReactDOM from 'react-dom';

import { animateScroll as scroll } from 'react-scroll';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = e => {
    e.preventDefault();
    const node = ReactDOM.findDOMNode(e.target),
      el = document.getElementById(node.getAttribute('data-slug')),
      mainMenuheight = document.getElementById('main_menu').offsetHeight,
      position = el.offsetTop - mainMenuheight - 10;

    scroll.scrollTo(position);
  };
  render() {
    return (
      <div id='main_menu'>
        <ul id='one_page_menu' className='main_nav'>
          <li>
            <a href='/'>Home</a>
          </li>
          <li>
            <a href='#' data-slug='skills' onClick={this.handleClick}>
              Skills
            </a>
          </li>
          <li>
            <a href='#' data-slug='portifolio' onClick={this.handleClick}>
              Work
            </a>
          </li>
          <li>
            <a href='#' data-slug='contact' onClick={this.handleClick}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    );
  }
}
export default Header;
