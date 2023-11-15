import React from 'react'

import '../App.css'

const Header = () => {
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
        
        </>
    )
}

export default Header