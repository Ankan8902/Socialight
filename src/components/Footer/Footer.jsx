import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
// import {MenuItems} from '../UI/MenuItems'




const Footer = () => {

  return (
    <>
        <footer>
            <div className="container padding">
                <div className="box logo">
                <Link to='/' className='footer-logo'>
                Socialight <i className='fab fa-firstdraft' />
                </Link>
                <div>Grow with us</div>
                <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <i className="fab fa-facebook-f icon"></i>
                <i className="fab fa-instagram icon"></i>
                <i className="fab fa-twitter icon"></i>
                </div>
                <div className="box link">
                    <h3>Explore</h3>
                    <ul>
                        <li>
                            <Link to='/About'>
                                About us
                            </Link>
                        </li>
                        <li>Marketing</li>
                        <li>Analytics</li>
                        <li>Commerce</li>
                    </ul>
                </div>
                <div className="box link">
                    <h3>Quick Links</h3>
                    <ul>
                        <li>
                            <Link to='/contact'>
                                Contact us
                            </Link>
                        </li>
                        <li>
                            <Link to='/faq'>
                                FAQ
                            </Link>
                        </li>
                        <li>Privacy Policy</li>
                        <li>Terms</li>
                    </ul>
                </div>
                <div className="box link">
                    <h3>Services</h3>
                    <ul>
                        <li>
                            <Link to='/website'>
                                Website
                            </Link>
                        </li>
                        <li>
                            <Link to='/app'>
                                App
                            </Link>
                        </li>
                        <li>
                            <Link to='/CRM'>
                                CRM
                            </Link>
                        </li>
                        <li>
                            <Link to='/POS'>
                                POS
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="box last">
                    <h3>Have a Questions?</h3>
                    <ul>
                        <li>
                            <i className="fa fa-map"></i>
                            203 Fake ST. Mount View , san francisio california ,USA
                        </li>
                        <li>
                            <i className="fa fa-phone-alt"></i>
                            +123 456 7897
                        </li>
                        <li>
                            <i className="fa fa-paper-plane"></i>
                            example@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
        <div className="legal">
            <p>Copyright @2022 All rights reserved | Terms and Conditions</p>
        </div>

    </>
  )
}

export default Footer