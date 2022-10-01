import React from 'react'
import "../../styles/work.css"

const workData = [
    {
        icon: 'ri-thunderstorms-line',
        title: 'Snappy Process',
        desc: "Our application process can be completed in minutes, not hours. Don't get stuck filling tedious forms"
    },

    {
        icon: 'ri-money-dollar-circle-line',
        title: 'Affordable Prices',
        desc: "We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible."
    },

    {
        icon: 'ri-walk-line',
        title: 'People First',
        desc: "Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered whwn you need it."
    },

]

const Work = () => {
  return (
    <section className="work" id='work'>
        <div className="container">
            <div className="work__top-content">
                <h6 className="subtitle">Our work</h6>
                <h2>We create visual messages and</h2>
                <h2 className="highlight">amazing brand startegies</h2>
            </div>
            
            <div className="work__item-wrapper">
                {
                    workData.map((item, index) => (
                        <div className="work__item" key={index}>
                            <span className="work__icon">
                                <i className={item.icon}></i>
                            </span>
                            <h3 className="work__title">{item.title}</h3>
                            <p className="description">
                                {item.desc}
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Work