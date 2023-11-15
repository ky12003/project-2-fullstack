/*------
GENERAL IMPORTS
--------*/
import { useState } from 'react';

/*------
COMPONENT IMPORTS
--------*/
import ImageComp from './components/ImageComp'
import MainPage from './components/MainPage'
import Header from './components/Header'
// import SuperBurger from './components/SuperBurger'

/*------
MEDIA IMPORTS
--------*/
import homeImg from './assets/images/home-img.png';
// import homeImgB from './assets/images/home-img1.png';
// import loaderGif from './assets/images/loader.gif'


/*------
MISC IMPORTS
--------*/
import './App.css';


function App() {
  const [count, setCount] = useState(0)
  

  return (
    <>
        <Header></Header>
        <MainPage/>


      {/* footer section  */}


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

      {/* scroll top button  */}
      <a href="#home" className="fas fa-angle-up" id="scroll-top"></a>

      {/* loader  */}
      
      {/* <div className="loader-container">
          <img src={loaderGif} alt=""/>
      </div> */}





      {/* custom js file link  */}
      {/* <script src="js/script.js"></script>  */}

    </>
  )
}

export default App
