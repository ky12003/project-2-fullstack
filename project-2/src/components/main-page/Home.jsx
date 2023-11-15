import React from 'react'

import '../App.css'

const Home = () => {
    return (
        <>
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
        
        </>
    )
}

export default Home