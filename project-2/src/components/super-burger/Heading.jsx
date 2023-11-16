import React from 'react'

import ImageComp from '../ImageComp'

import '../../Articles.css'

const Heading = () => {
    return (
        <>
        {/* home section starts  */}


        <div className="______">

            <section className="______" id="______">

                <div className="______">
                    <h3>Super Burger: a very super burger</h3>
                    <ImageComp folder={"i-imgs"} index={0} class="main-img"/>
                    <a href="#" className="btn">check their website!</a>
                </div>

            </section>

        </div>

        {/* home section ends */}
        
        </>
    )
}

export default Heading