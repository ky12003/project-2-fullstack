import { useState } from 'react';
import ImageComp from './ImageComp'


import homeImg from './assets/images/home-img.png';
import homeImgB from './assets/images/home-img1.png';

import './App.css';


function App() {
  const [count, setCount] = useState(0)
  
  // console.log(imagePaths[0]);

  return (
    <>
      {/* header section starts  */}

      <header>

          <section className="flex">

              <a href="#" className="logo"><i className="fas fa-utensils"></i>food</a>

              <div id="menu-bar" className="fas fa-bars"></div>

              <nav className="navbar">
                  <a href="#home">home</a>
                  <a href="#speciality">speciality</a>
                  <a href="#popular">popular</a>
                  <a href="#gallery">gallery</a>
                  <a href="#review">review</a>
              
              </nav>

          </section>

      </header>

      {/* header section ends */}

      {/* home section starts  */}


      <div className="home-container">

          <section className="home" id="home">

              <div className="content">
                  <h3>UC Berkeley Food Ranking</h3>
                  <p>Explore top-rated eateries around UC Berkeley, from cozy cafes to gourmet delights, rated by students for authentic flavors and unique dining experiences.</p>
                  <a href="#" className="btn">discover now</a>
              </div>
          
              <div className="image">
                  <img src={homeImg} alt=""/>
              </div>
          
          </section>

      </div>
 
      {/* home section ends */}

      {/* speciality section starts  */}

      <section className="speciality" id="speciality">

          <h1 className="heading"> our <span>Ranking</span> </h1>

          <div className="box-container">

              <div className="box">
                  <ImageComp imageClass={"image"} folder={"s-imgs-b"} index={0}></ImageComp>
                  <div className="content">
                      <img src={homeImgB} alt=""/>
                      <h3>burger</h3>
                      <p>Dive into the heart of American cuisine with our selection of UC Berkeley's finest burgers. Each patty is a blend of quality and flavor, grilled to perfection and served with fresh, locally-sourced toppings.</p>
                  </div>
              </div>
              <div className="box">
                  <img className="image" src="images/s-img-2.jpg" alt=""/>
                  <div className="content">
                      <img src={"../assets/images/s-imgs-a/s-2.png"} alt=""/>
                      <h3>pizza</h3>
                      <p>Slice into Berkeley's best pizzas, where traditional methods meet innovative toppings. From classNameic Margheritas to adventurous flavor combinations, discover the pizzerias that students can't stop talking about.</p>
                  </div>
              </div>
              <div className="box">
                  <img className="image" src="images/s-img-3.jpg" alt=""/>
                  <div className="content">
                      <img src={"../assets/images/s-imgs-a/s-3.png"} alt=""/>
                      <h3>ice-cream</h3>
                      <p>Cool down with a scoop from Berkeley's best ice cream parlors. Artisanal flavors, classNameic cones, and everything in between—treat yourself to the creamiest delights near campus.</p>
                  </div>
              </div>
              <div className="box">
                  <img className="image" src="images/s-img-4.jpg" alt=""/>
                  <div className="content"/>
                      <img src={"../assets/images/s-imgs-a/s-4.png"} alt=""/>
                      <h3>drinks</h3>
                      <p>Refresh your palate with a variety of drinks ranked by Berkeley students. From energizing coffees to smoothie bliss, quench your thirst with the best sips in town.</p>
                  </div>
              </div>
              <div className="box">
                  <img className="image" src="images/s-img-5.jpg" alt=""/>
                  <div className="content">
                      <img src={"../assets/images/s-imgs-a/s-5.png"} alt=""/>
                      <h3>sweets</h3>
                      <p>Indulge in a slice of heaven with Berkeley's top-rated cakes. Whether you're after a rich chocolate layer cake or a light and fruity sponge, our guide has the sweetest spots around campus.</p>
                  </div>
              </div>
              <div className="box">
                  <img className="image" src="images/s-img-6.jpg" alt=""/>
                  <div className="content">
                      <img src={"../assets/images/s-imgs-a/s-6.png"} alt=""/>
                      <h3>breakfast</h3>
                      <p>Start your day the Berkeley way with breakfast spots that fuel the mind and satisfy the soul. From hearty omelets to organic acai bowls, find the perfect place to kickstart your morning.</p>
                  </div>
              </div>
      </section>
          {/* </div>

      </section>
*/}
      {/* speciality section ends */}

      {/* popular section starts  */}

{/*
      <section className="popular" id="popular">

          <h1 className="heading"> UC Berkeley <span>6 Best </span>Restaurants</h1>

          <div className="box-container">

              <div className="box">
                  
                  <img src="images/p-1.jpg" alt=""/>
                  <h3>Super Duper Burgers</h3>
                  <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                  </div>
                  <a href="#" className="btn">check now</a>
              </div>
              <div className="box">
                  
                  <img src="images/p-2.jpg" alt=""/>
                  <h3>U :Dessert Story</h3>
                  <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                  
                  </div>
                  <a href="#" className="btn">check now</a>
              </div>
              <div className="box">
              
                  <img src="images/p-3.jpg" alt=""/>
                  <h3>YiFang Taiwan Fruit Tea</h3>
                  <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                  
                  </div>
                  <a href="#" className="btn">check now</a>
              </div>
              <div className="box">
                  
                  <img src="images/p-4.jpg" alt=""/>
                  <h3>Noodle Dynasty</h3>
                  <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    
                  </div>
                  <a href="#" className="btn">check now</a>
              </div>
              <div className="box">
                  
                  <img src="images/p-5.jpg" alt=""/>
                  <h3>Sliver Pizzeria</h3>
                  <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                  </div>
                  <a href="#" className="btn">check now</a>
              </div>
              <div className="box">
                  
                  <img src="images/p-6.jpg" alt=""/>
                  <h3>top dog</h3> 
                  <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                  </div>
                  <a href="#" className="btn">check now</a>
              </div>

          </div>

      </section>
*/}
      {/* popular section ends */}



      {/* review section starts  */}
{/*
      <section className="review" id="review">

          <h1 className="heading">  food  <span> judges</span> </h1>

          <div className="box-container">

              <div className="box">
                  <img src="images/pic1.png" alt="">
                  <h3>Kenta</h3>
                  <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                  </div>
                  <p>Kenta brings a world-traveled palate to Berkeley's food scene. With a keen sense for spices and a love for sustainable dining, he searches for dishes that tell a story and leave a lasting impression.</p>
              </div>
              <div className="box">
                  <img src="images/pic2.png" alt="">
                  <h3>Luka</h3>
                  <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                  </div>
                  <p>Luka's culinary expertise is grounded in technique and tradition. A stickler for authenticity, he appreciates eateries that stay true to the roots of their dishes while adding a touch of local flair.</p>
              </div>
              <div className="box">
                  <img src="images/pic3.png" alt="">
                  <h3>Brain</h3>
                  <div className="stars">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                  </div>
                  <p>Brian's approach to food is all about innovation and experience. He champions restaurants that push the envelope with bold flavors and unexpected combinations.</p>
              </div>

          </div>

      </section>
*/}
      {/* review section ends */}


      {/* footer section  */}

{/*
      <footer className="footer">

          <section>

              <div className="share">
                  <a href="#" className="btn">facebook</a>
                  <a href="#" className="btn">twitter</a>
                  <a href="#" className="btn">instagram</a>
                  <a href="#" className="btn">pinterest</a>
                  <a href="#" className="btn">linkedin</a>
              </div>

          </section>

      </footer>
*/}
      {/* scroll top button  */}
      <a href="#home" className="fas fa-angle-up" id="scroll-top"></a>

      {/* loader  */}
      {/*
      <div className="loader-container">
          <img src="images/loader.gif" alt="">
      </div>


















*/}

      {/* custom js file link  */}
      {/* <script src="js/script.js"></script>  */}

    </>
  )
}

export default App
