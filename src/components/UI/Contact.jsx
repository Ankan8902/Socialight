import React from 'react'
import '../../styles/contact.css'
import contactImg from '../../images/contact.jpg'

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact__top-content">
          <h6 className="subtitle">Keep in touch</h6>
          <h2>Let's talk about being your</h2>
          <h2 className="highlight">Own Boss!</h2>
      </div>

      <div className="container">
        <div className="contact__wrapper">

          <div className="contact__img">
            <img src={contactImg} alt="" />
          </div>

          <div className="contact__content">

            <h3 id='clients'>Contact Form</h3>

            <div className="newsletter__form">
              <input type="name" placeholder='Name' className='name'/>
              <input type="personal email" placeholder='Personal Email' className='pemail'/>
              <input type="buisness email" placeholder='Buisness Email' className='bemail'/>
              <input type="contact" placeholder='Contact No.' className='contact'/>
              <button className='secondary__btn' id='btn'>Submit</button>
            </div>


            <h3 id='clients'>Our Address</h3>
            <p className="description contact__content-desc">404, 4th floor, <br />Sigma legacy, Above Gallops Hyundai, <br />Panjarapol Circle, <br />IIM road, <br />Ahmedabad - 380015 <br />Contact No:- +91 XXXXXXXXXX</p>
            

          </div>

        </div>
      </div>
    </section>
  )
}

export default Contact