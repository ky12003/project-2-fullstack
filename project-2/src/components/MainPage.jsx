import React from "react";

import Home from './main-page/Home'
import Popular from './main-page/Popular'
import Review from './main-page/Review'
import Specialty from './main-page/Specialty'


// import "../App.css";

const MainPage = () => {
    return (
        <>
            <Home/>
            <Specialty/>
            <Popular/>
            <Review/>
        </>
    )
}

export default MainPage