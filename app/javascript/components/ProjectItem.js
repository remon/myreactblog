import React from "react";

const ProjectItem = ({ item }) => {
  return (
    <div className="sub_site_list">
      <a href={item.link} target="_blank">
        <img src={item.image} />

        <h5>{item.name}</h5>

        <p>{item.desc}</p>
        <ul>
          {item.techs.map((i, index) => {
            return <li key={index}>{i}</li>;
          })}
        </ul>
      </a>
    </div>
  );
};

export default ProjectItem;
