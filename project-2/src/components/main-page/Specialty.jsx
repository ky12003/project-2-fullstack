import React from 'react'

import ImageComp from '../ImageComp'

import '../../App.css'

const Specialty = () => {
    return (
        <>
            {/* speciality section starts  */}

            <section className="speciality" id="speciality">

                <h1 className="heading"> our <span>Ranking</span> </h1>

                <div className="box-container">

                    <div className="box">
                        <ImageComp imageClass={"image"} folder={"s-imgs-b"} index={0}></ImageComp>
                        <div className="content">
                            <ImageComp folder={"s-imgs-a"} index={0}></ImageComp>
                            <h3>burger</h3>
                            <p>Dive into the heart of American cuisine with our selection of UC Berkeley's finest burgers. Each patty is a blend of quality and flavor, grilled to perfection and served with fresh, locally-sourced toppings.</p>
                        </div>
                    </div>

                    <div className="box">
                        <ImageComp imageClass={"image"} folder={"s-imgs-b"} index={1}></ImageComp>
                        <div className="content">
                            <ImageComp folder={"s-imgs-a"} index={1}></ImageComp>
                            <h3>pizza</h3>
                            <p>Slice into Berkeley's best pizzas, where traditional methods meet innovative toppings. From classNameic Margheritas to adventurous flavor combinations, discover the pizzerias that students can't stop talking about.</p>
                        </div>
                    </div>

                    <div className="box">
                        <ImageComp imageClass={"image"} folder={"s-imgs-b"} index={2}></ImageComp>
                        <div className="content">
                            <ImageComp folder={"s-imgs-a"} index={2}></ImageComp>
                            <h3>ice-cream</h3>
                            <p>Cool down with a scoop from Berkeley's best ice cream parlors. Artisanal flavors, classNameic cones, and everything in between—treat yourself to the creamiest delights near campus.</p>
                        </div>
                    </div>

                    <div className="box">
                        <ImageComp imageClass={"image"} folder={"s-imgs-b"} index={3}></ImageComp>
                        <div className="content">
                            <ImageComp folder={"s-imgs-a"} index={3}></ImageComp>
                            <h3>drinks</h3>
                            <p>Refresh your palate with a variety of drinks ranked by Berkeley students. From energizing coffees to smoothie bliss, quench your thirst with the best sips in town.</p>
                        </div>
                    </div>
                    
                    <div className="box">
                        <ImageComp imageClass={"image"} folder={"s-imgs-b"} index={4}></ImageComp>
                        <div className="content">
                            <ImageComp folder={"s-imgs-a"} index={4}></ImageComp>
                            <h3>sweets</h3>
                            <p>Indulge in a slice of heaven with Berkeley's top-rated cakes. Whether you're after a rich chocolate layer cake or a light and fruity sponge, our guide has the sweetest spots around campus.</p>
                        </div>
                    </div>
                    <div className="box">
                        <ImageComp imageClass={"image"} folder={"s-imgs-b"} index={5}></ImageComp>
                        <div className="content">
                            <ImageComp folder={"s-imgs-a"} index={5}></ImageComp>
                            <h3>breakfast</h3>
                            <p>Start your day the Berkeley way with breakfast spots that fuel the mind and satisfy the soul. From hearty omelets to organic acai bowls, find the perfect place to kickstart your morning.</p>
                        </div>
                    </div>

                </div>    
            </section>
            {/* speciality section ends */}
        </>
    )
}

export default Specialty