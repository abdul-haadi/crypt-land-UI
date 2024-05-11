import React from "react";
import arrow from "./arrow.png";
import "./featureList.css";
import arrow1 from "./arrow1.png";

const FeatureList = ({ title, description, index }) => {
  console.log(title);
  return (
    <div
      className="feature-list-content"
      style={{ color: index == 1 ? "white" : "black", background: index == 1 ? "#1668E8" : "#F7F7F7" }}
    >
      <div className="circle-arrow">
        <img
          src={index == 1 ? arrow : arrow1}
          style={{ background: index == 1 ? "#1668E8" : "#F7F7F7" }}
        ></img>
      </div>
      <div className="feature-list-title">{title}</div>
      <div className="feature-list-desc">{description}</div>
    </div>
  );
};

export default FeatureList;
