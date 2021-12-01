import React from 'react'
import './services.css'
import icon1 from '../../images/svg-4.svg'
import icon2 from '../../images/svg-5.svg'
import icon3 from '../../images/svg-6.svg'

const Services = () => {
    return (
        <div className='service-container' id='services'>
            <h1 className='services-title'>Our Services</h1>
            <div className="services-wrap">
                <div className="services-card">
                    <img src={icon1} alt="" className="services-img" />
                    <h2>Reduce expenses</h2>
                    <p>We help reduce your fee, and increase your overall revenue.</p>
                </div>
                <div className="services-card">
                    <img src={icon2} alt="" className="services-img" />
                    <h2>Virtual Offices</h2>
                    <p>You can access online anywhere in the world.</p>
                </div>
                <div className="services-card">
                    <img src={icon3} alt="" className="services-img" />
                    <h2>Premium Benefits</h2>
                    <p>Unlock our membership card to return 5% cash back.</p>
                </div>
            </div>
        </div>
    )
}

export default Services
