import React from 'react'
import '../../styles/newsletter.css'

const Newsletter = () => {
  return (
    <section className="newsletter" id='contact'>
        <div className="container">
            {/* <div className="newsletter__wrapper">
                <div className="newsletter__content">
                    <h6 className="subtitle">Let's Work</h6>
                    <h2>
                        Give us your valuable <span className="highlight">feedback</span> and explore the hidden ideas!
                    </h2>
                </div>

                <div className="newsletter__form">
                    <input type="name" placeholder='Name' className='name'/>
                    <input type="personal email" placeholder='Personal Email' className='pemail'/>
                    <input type="buisness email" placeholder='Buisness Email' className='bemail'/>
                    <input type="contact" placeholder='Contact No.' className='contact'/>
                    <button className='secondary__btn' id='btn'>Submit</button>
                </div>
            </div> */}

            <div className="newsletter__top-content">
                <h6 className="subtitle">Let's Connect</h6>
                <h2>
                    Give us your valuable
                </h2>
                <h2 className='highlight'>Feedback</h2>
            </div>

            <div className="newsletter__form">
                <input type="name" placeholder='Name' className='name'/>
                <input type="buisness name" placeholder='Buisness Name' className='pemail'/>
                <input type="buisness email" placeholder='Buisness Email' className='bemail'/>
                <input type="contact" placeholder='Contact No.' className='contact'/>
            </div>
            <button className='secondary__btn' id='btn'>Submit</button>
        </div>
    </section>
  )
}

export default Newsletter