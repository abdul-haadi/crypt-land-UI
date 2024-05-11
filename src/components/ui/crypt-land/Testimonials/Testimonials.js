import React from "react";
import "./Testimonials.css";

const Testimonials = ({ review, image, person, star }) => {
  return (
    <div className="testimonials-sect">
      <div className="testimonial-section">
        <div className="testimonial-review">{review}</div>
        <div className="testimonial-person">
            <div className="image">
            <img src={image}></img>
            </div>
          <div className="testimonial-detail">
          <div>{person}</div>
          <img src={star}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
