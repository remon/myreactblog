import React from "react";
import PropTypes from "prop-types";
import ContactForm from "../components/ContactForm";
import ContactRight from "../components/ContactRight";

class ContactSection extends React.Component {
  render() {
    return (
      <div id="contact" className="contact-section container">
        <div className="row">
          <ContactForm />
          <ContactRight />
        </div>
      </div>
    );
  }
}

export default ContactSection;
