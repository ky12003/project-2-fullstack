/*------
GENERAL IMPORTS
--------*/
import { useState } from 'react';

/*------
LOCAL COMPONENT IMPORTS
--------*/
import ImageComp from './components/ImageComp'
import MainPage from './components/MainPage'
import Header from './components/Header'
import Footer from './components/Footer'
import SuperBurger from './components/SuperBurger'
import Yifang from './components/Yifang'


/*------
EXTERNAL COMPONENT IMPORTS
--------*/
import { Routes, Route } from 'react-router-dom'

/*------
MEDIA IMPORTS
--------*/
// import homeImgB from './assets/images/home-img1.png';
// import loaderGif from './assets/images/loader.gif'


/*------
MISC IMPORTS
--------*/
import './App.css';


function App() {
//   const [count, setCount] = useState(0)
  

  return (
    <>
        <Header/>
        <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/SuperBurger' element={<SuperBurger/>}/>
            <Route path='/Yifang' element={<Yifang/>}/>
        </Routes>
        <Footer/>
        


      {/* scroll top button  */}
      {/* <a href="#home" className="fas fa-angle-up" id="scroll-top"></a> */}

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
