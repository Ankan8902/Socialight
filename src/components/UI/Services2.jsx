import React from 'react'
import '../../styles/services2.css'
import webImg from '../../images/web-dev.jpg'

const Services2 = () => {
  return (
    <section className="web" id="web">
      <div className="web__img">
        <img src={webImg} alt="" />
      </div>

      <div className="web__top-content">
        {/* <h6 className="subtitle">Keep in touch</h6> */}
        <h2 className='highlight'>Web Development</h2>
      </div>

      <div className="container">
        <div className="web__wrapper">

          <div className="web__content">

            <h3 id='clients'>"We Provide Highly Customizable And User Centric Web Solutions"</h3>
            <p className="description web__content-desc">We deliver comprehensive Web services ranging from custom website design to Website Development of complex enterprise Web Applications</p>

            <p className="description web__content-desc">Our team of Web Developers and Professional Website Designers deliver high-quality web services that help clients to achieve business and online business inquiries.</p>

            <p className="description web__content-desc">We provide utmost quality in the Web Development in Ahmedabad, Gujarat, India. Our Android app development professionals help in meeting your demand through more effective and affordable solutions. The well-researched and integrated process followed by our app development company will help you distribute your free, commercial, or in-house applications in the market.</p>
          </div>

        </div>
      </div>
    </section>
    
  )
}

export default Services2