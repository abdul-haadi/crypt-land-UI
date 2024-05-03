import React from "react";
import "./PricingCard.css";

const PricingCard = ({ name, price, detail, featureList, index }) => {
  console.log(index)
  return (
    <div className="pricing-card-section">
      <div className="pricing-card-content">
        <div className="plan-name" style={{color: index == 0 ? "#000000" : "#A3DC2F"}}>{name}</div>
        <div className="plan-price">{price}</div>
        <div className="plan-detail">{detail}</div>
        <div className="plan-features">
          {featureList.map((val, index) => {
            return <span key={index}>{val}</span>;
          })}
        </div>
      </div>
      <div className="p-btn">
        <button className="plan-btn">Select Plan</button>
      </div>
    </div>
  );
};

export default PricingCard;
