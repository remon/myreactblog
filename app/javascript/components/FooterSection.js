import React from "react";
import PropTypes from "prop-types";
class FooterSection extends React.Component {
  render() {
    return (
      <div className="footer">
        <div className="centery">
          &copy; Copyright {new Date().getFullYear()} Remon Nasr
        </div>
      </div>
    );
  }
}

export default FooterSection;
