import React from 'react'
import '../../styles/services3.css'
import digitalImg from '../../images/digital.jpg'

const Services3 = () => {
  return (
    <section className="digital" id="digital">
      <div className="digital__img">
        <img src={digitalImg} alt="" />
      </div>

      <div className="digital__top-content">
        {/* <h6 className="subtitle">Keep in touch</h6> */}
        <h2 className='highlight'>Digital Marketing</h2>
      </div>

      <div className="container">
        <div className="digital__wrapper">

          <div className="digital__content">

            <h3 id='clients'>"Result Driven Social Media Marketing To Grow Brand Engagement Presence And Traffic"</h3>
            <p className="description digital__content-desc">Socialight has specialized team which is designed to give you that cutting edge look that defines and exemplifies your brand and give your brand the next horizon to grow digitally. We believe in not just understanding your brand but making it more powerful than ever.</p>

            <p className="description digital__content-desc">Whether your business is a start-up requiring hands-on marketing talent, or an established company not delivering on your brand’s promise, we have the Marketing Solutions for you.</p>

            <p className="description digital__content-desc">We provide utmost quality in the Digital Marketing in Ahmedabad, Gujarat, India. Our Android app development professionals help in meeting your demand through more effective and affordable solutions. The well-researched and integrated process followed by our app development company will help you distribute your free, commercial, or in-house applications in the market.</p>
          </div>

        </div>
      </div>
    </section>
    
  )
}

export default Services3