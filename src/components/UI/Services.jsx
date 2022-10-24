import React from 'react'
import '../../styles/services.css'
import { Link } from "react-router-dom";

const serviceData = [
    {
        icon: 'ri-apps-line',
        title: 'App Development',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo explicabo cupiditate illum molestiae, et porro. Molestiae quidem fuga repellendus?',
        btn: 'Read More',
        to: 'Services1',
        path: '/services1'
    },

    {
        icon: 'ri-code-s-slash-line',
        title: 'Web Design',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo explicabo cupiditate illum molestiae, et porro. Molestiae quidem fuga repellendus?',
        btn: 'Read More',
        to: 'Services2',
        path: '/services2'
    },

    // {
    //     icon: 'ri-landscape-line',
    //     title: 'Graphic Development',
    //     desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo explicabo cupiditate illum molestiae, et porro. Molestiae quidem fuga repellendus?'
    // },

    {
        icon: 'ri-rocket-line',
        title: 'Digital Marketing',
        desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nemo explicabo cupiditate illum molestiae, et porro. Molestiae quidem fuga repellendus?',
        btn: 'Read More',
        to: 'Services3',
        path: '/services3'
    },
]



const services = () => {
  return (
    <section className="service" id='service'>
        <div className="container">
            <div className="services__top-content">
                <h6 className="subtitle">Our Services</h6>
                <h2>Save time managing your buisness with</h2>
                <h2 className="highlight">our best services</h2>
            </div>
            
            <div className="service__item-wrapper">
                {
                    serviceData.map((item, index) => (
                        <div className="services__item" key={index}>
                            <span className="service__icon">
                                <i className={item.icon}></i>
                            </span>
                            <h3 className="service__title">{item.title}</h3>
                            <p className="description" id='desc'>
                                {item.desc}
                            </p>
                            <Link to={item.to} className="secondary__btn">
                                {item.btn}
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default services