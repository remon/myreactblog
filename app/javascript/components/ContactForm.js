import React from "react";
import axios from "axios";
import Alert from "react-s-alert";
class ContactForm extends React.Component {
  state = {
    email: "",
    body: ""
  };
  handleChangeEmail = e => {
    this.setState({
      email: e.target.value
    });
  };
  handleChangeMsg = e => {
    this.setState({
      body: e.target.value
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/contacts.json", { contact: this.state })
      .then(res => {
        Alert.success(res.data.content, {
          position: "top",
          effect: "bouncyflip",
          timeout: 5000
        });
        this.setState({
          body: "",
          email: ""
        });
      })
      .catch(err => {
        Alert.error(
          "There is an error while sending your message , try again",
          {
            position: "top",
            effect: "bouncyflip",
            timeout: 5000
          }
        );
      });
    //TODO send the msg
  };
  render() {
    return (
      <div className="col-md-6 col-sm-12">
        <div className="col-md-12">
          <div className="wmiya inline_b">
            <h2 className="hig"> Contact Me </h2>
          </div>
          <div className="contact_form col-md-12">
            <form
              className="form-horizontal center"
              onSubmit={this.handleSubmit}
            >
              <div className="form-group">
                <label className="col-md-4 control-label">Your Email:</label>
                <div className="col-md-12">
                  <input
                    value={this.state.email}
                    onChange={this.handleChangeEmail}
                    className="form-control"
                    required="required"
                    type="email"
                  />
                </div>
              </div>
              <div className="form-group">
                <label className="col-md-4 control-label">Your Message</label>
                <div className="col-md-12">
                  <textarea
                    value={this.state.body}
                    onChange={this.handleChangeMsg}
                    className="form-control"
                    required="required"
                    rows="4"
                  />
                </div>
              </div>
              <div className="wmiya centery">
                <input
                  className="btn btn-lg btn-primary"
                  name="commit"
                  type="submit"
                  value="Send Message"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactForm;
