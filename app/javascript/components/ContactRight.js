import React from 'react';
import { iconPath } from '../helpers/image_path';

class ContactRight extends React.Component {
  render() {
    return (
      <div className='col-md-6 col-sm-12'>
        <div className='right_contact'>
          <div className='centery'>
            <img src={iconPath('./env_color1.png')} className='env_img' />
          </div>

          <div>
            <ul className='ul_contact'>
              <li> You can send me an email to info@remon.info </li>

              <li> Whatsapp +201063206700 </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactRight;
