import React from 'react'
import "../../styles/about.css"

import aboutImg from '../../images/about-us.jpg'

const chooseData = [
    {
        icon: 'ri-wifi-line',
        title: 'First working process',
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia aspernatur harum necessitatibus architecto fugiat dicta culpa iusto"
    },

    {
        icon: 'ri-team-line',
        title: 'Dedicated team',
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia aspernatur harum necessitatibus architecto fugiat dicta culpa iusto"
    },

    {
        icon: 'ri-customer-service-2-line',
        title: '24/7 Hours support',
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia aspernatur harum necessitatibus architecto fugiat dicta culpa iusto"
    },
]

const About = () => {
  return (
    <section className="about" id="about">
        <div className="container">
            <div className="about__wrapper">
                <div className="about__content">
                    <h6 className="subtitle" id='subtitle'>About us</h6>
                    <h2 id='clients'>Specialist in providing clients on</h2>
                    <h2 className="highlight" id='challenges'> financial challenges</h2>
                    <p className="description about__content-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab beatae magni, ad tempora blanditiis, cupiditate rerum accusamus, saepe officiis adipisci veniam dignissimos inventore ut ipsam! Corrupti nesciunt veniam velit ratione!</p>

                    <div className="choose__item-wrapper">
                        {
                            chooseData.map((item, index) => (
                                <div className="choose__us-item" key={index}>
                                    <span className="choose__us-icon">
                                        <i class={item.icon}></i>
                                    </span>
                                    <div>
                                        <h4 className="choose__us-title">{item.title}</h4>
                                        <p className="description">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className="about__img">
                    <img src={aboutImg} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default About