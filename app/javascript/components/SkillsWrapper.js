import React from "react";

class SkillsWrapper extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      animate: false
    };
  }
  componentDidMount() {
    requestAnimationFrame(() => {
      this.setState({ animate: true });
    });
  }

  render() {
    const style = {
      width: this.state.animate ? this.props.level + "%" : 0,
      transition: "all 2s"
    };
    return (
      <div className="skills-wrapper relative">
        <span className="skill-name">{this.props.name}</span>
        <div className="skills-bar" style={style} />
      </div>
    );
  }
}

export default SkillsWrapper;
