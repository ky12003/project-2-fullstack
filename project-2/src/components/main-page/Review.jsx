import React from "react";

import ImageComp from "../ImageComp";

import "../App.css";

const Review = () => {
  return (
    <>
      {/* review section starts  */}

      <section className="review" id="review">
        <h1 className="heading">
          
          food <span> judges</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <ImageComp folder={"pic-imgs"} index={0}></ImageComp>
            <h3>Kenta</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Kenta brings a world-traveled palate to Berkeley's food scene.
              With a keen sense for spices and a love for sustainable dining, he
              searches for dishes that tell a story and leave a lasting
              impression.
            </p>
          </div>
          <div className="box">
            <ImageComp folder={"pic-imgs"} index={1}></ImageComp>
            <h3>Luka</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <p>
              Luka's culinary expertise is grounded in technique and tradition.
              A stickler for authenticity, he appreciates eateries that stay
              true to the roots of their dishes while adding a touch of local
              flair.
            </p>
          </div>
          <div className="box">
            <ImageComp folder={"pic-imgs"} index={2}></ImageComp>
            <h3>Brain</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="far fa-star"></i>
            </div>
            <p>
              Brian's approach to food is all about innovation and experience.
              He champions restaurants that push the envelope with bold flavors
              and unexpected combinations.
            </p>
          </div>
        </div>
      </section>

      {/* review section ends */}
    </>
  );
};

export default Review;
