import React from "react";

import ImageComp from "../ImageComp";

import "../App.css";

const Popular = () => {
  return (
    <>
      {/* popular section starts  */}

      <section className="popular" id="popular">
        <h1 className="heading">
          UC Berkeley <span>6 Best </span>Restaurants
        </h1>

        <div className="box-container">
          <div className="box">
            <ImageComp folder={"p-imgs"} index={0}></ImageComp>
            <h3>Super Duper Burgers</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <a href="#" className="btn">
              Our Review
            </a>
          </div>
          <div className="box">
            <ImageComp folder={"p-imgs"} index={1}></ImageComp>
            <h3>U :Dessert Story</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <a href="#" className="btn">
              Our Review
            </a>
          </div>
          <div className="box">
            <ImageComp folder={"p-imgs"} index={2}></ImageComp>
            <h3>YiFang Taiwan Fruit Tea</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <a href="#" className="btn">
              Our Review
            </a>
          </div>
          <div className="box">
            <ImageComp folder={"p-imgs"} index={3}></ImageComp>
            <h3>Noodle Dynasty</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <a href="#" className="btn">
              Our Review
            </a>
          </div>
          <div className="box">
            <ImageComp folder={"p-imgs"} index={4}></ImageComp>
            <h3>Sliver Pizzeria</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <a href="#" className="btn">
              Our Review
            </a>
          </div>
          <div className="box">
            <ImageComp folder={"p-imgs"} index={5}></ImageComp>
            <h3>top dog</h3>
            <div className="stars">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
            </div>
            <a href="#" className="btn">
              Our Review
            </a>
          </div>
        </div>
      </section>

      {/* popular section ends */}
    </>
  );
};

export default Popular;
