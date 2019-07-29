import React from "react";
import ProjectItem from "../components/ProjectItem";
import Data from "../packs/data.json";
class Portifolio extends React.Component {
  render() {
    const projectItems = Data.map((item, index) => {
      return <ProjectItem item={item} key={index} />;
    });
    return (
      <div id="portifolio" className="inline_b">
        <div className="wmiya inline_b">
          <h2 className="hig"> My Work </h2>
        </div>
        {projectItems}
      </div>
    );
  }
}

export default Portifolio;
