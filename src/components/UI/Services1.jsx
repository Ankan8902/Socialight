import React from 'react'
import '../../styles/services1.css'
import appImg from '../../images/app-dev.jpg'

const Services1 = () => {
  return (
    <section className="app" id="app">
      <div className="app__img">
        <img src={appImg} alt="" />
      </div>

      <div className="app__top-content">
        {/* <h6 className="subtitle">Keep in touch</h6> */}
        <h2 className='highlight'>Mobile App Development</h2>
      </div>

      <div className="container">
        <div className="app__wrapper">

          <div className="app__content">

            <h3 id='clients'>"We Deliver Mobility Solutions That Meet Your Business Needs."</h3>
            <p className="description app__content-desc">In this technological era, Android is the fastest growing mobile platform, due to which the demand for Android Developer for Android app development is increasing continuously.</p>

            <p className="description app__content-desc">It is very important that an expert team of a well-known Android Application Development company India is to be hired.</p>

            <p className="description app__content-desc">We provide utmost quality in the Mobile Application Development in Ahmedabad, Gujarat, India. Our Android app development professionals help in meeting your demand through more effective and affordable solutions. The well-researched and integrated process followed by our app development company will help you distribute your free, commercial, or in-house applications in the market.</p>

            


            
            

          </div>

        </div>
      </div>
    </section>
  )
}

export default Services1