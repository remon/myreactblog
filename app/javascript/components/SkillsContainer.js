import React from "react";
import SkillsWrapper from "../components/SkillsWrapper";

class SkillsContainer extends React.Component {
  render() {
    const mySkills1 = [
      { level: 80, name: "Ruby" },
      { level: 90, name: "JavaScript" },
      { level: 90, name: "jQuery/AJAX" },
      { level: 60, name: "Python" },
      { level: 70, name: "Docker" },
      { level: 80, name: "Redis" },
      { level: 70, name: "CI/CD" },
      { level: 80, name: "HTML/CSS" }
    ];
    const mySkills2 = [
      { level: 90, name: "Ruby On Rails" },
      { level: 80, name: "NodeJs" },
      { level: 80, name: "React" },
      { level: 80, name: "Bootstrap" },
      { level: 80, name: "TDD/Rspec" },
      { level: 80, name: "MongoDB" },
      { level: 90, name: "Git" },
      { level: 80, name: "Heroku" }
    ];
    const leftSkills = mySkills1.map((item, index) => {
      return <SkillsWrapper name={item.name} level={item.level} key={index} />;
    });
    const rightSkills = mySkills2.map((item, index) => {
      return <SkillsWrapper name={item.name} level={item.level} key={index} />;
    });
    return (
      <div className=" skills-container" id="skills">
        <div className="wmiya inline_b">
          <h2 className="hig"> My Skills </h2>
        </div>
        <div className="col skills-main">
          <div className="row">
            <div className="col-md-6 col-sm-12">{leftSkills}</div>
            <div className="col-md-6 col-sm-12">{rightSkills}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SkillsContainer;
