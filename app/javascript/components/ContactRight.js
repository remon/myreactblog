import React from "react";
import PropTypes from "prop-types";
class ContactRight extends React.Component {
  render() {
    return (
      <div className="col-md-6 col-sm-12">
        <div className="right_contact">
          <div className="centery">
            <img src="/assets/env_color1.png" className="env_img" />
          </div>

          <div>
            <ul className="ul_contact">
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
