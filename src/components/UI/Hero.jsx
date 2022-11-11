import React from 'react'
import '../../styles/hero.css'
import '../../App.css'


import lightImg from '../../images/home-page.jpg'

const Hero = () => {
  return (
    <section className="hero__section" id='home'>
        <div className="container">
            <div className="hero__wrapper">
                <div className="hero__content">
                    <div>
                        <h2>We're Creating Perfect</h2>
                        <h2>Digital Products To</h2>
                        <h2 className="highlight">Promote Your Brand</h2>
                    </div>
                    <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur qui expedita est autem, libero suscipit?</p>

                    <div className="hero__btns">
                        <button className="primary__btn">Get started Now</button>
                        <button className="secondary__btn">Discover More</button>
                    </div>
                </div>
                
                <div className="hero__img">
                    <img src={lightImg} 
                    alt="hero-img" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero