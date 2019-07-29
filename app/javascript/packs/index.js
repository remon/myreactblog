import React from "react";
import ReactDOM from "react-dom";
import Header from "../components/Header";
import BodyContainer from "../components/BodyContainer";
import FooterSection from "../components/FooterSection";
import ContactSection from "../components/ContactSection";
import Alert from "react-s-alert";

class App extends React.Component {
  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };
  handleScroll = function(event) {
    var header = document.getElementById("main_menu");
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };
  render() {
    return (
      <React.Fragment>
        <Header />
        <BodyContainer />
        <ContactSection />
        <FooterSection />
        <Alert />
      </React.Fragment>
    );
  }
}
document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<App />, document.getElementById("root"));
});
