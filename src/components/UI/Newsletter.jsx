import React from 'react'
import '../../styles/newsletter.css'

const Newsletter = () => {
  return (
    <section className="newsletter">
        <div className="container">
            <div className="newsletter__wrapper">
                <div className="newsletter__content">
                    <h6 className="subtitle">Let's Work</h6>
                    <h2>
                        Give us your valuable <span className="highlight">feedback</span> and explore the hidden ideas!
                    </h2>
                </div>

                <div className="newsletter__form">
                    <input type="name" placeholder='Name' className='name'/>
                    <input type="email" placeholder='Email' className='email'/>
                    <input type="feedback" placeholder='Feedback' className='feedback'/>
                    <button className='secondary__btn' id='btn'>Submit feedback</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter