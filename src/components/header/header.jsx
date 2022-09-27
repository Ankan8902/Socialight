import React from "react";

import './header.css';

const nav__links =[
    {
        path:'#home',
        display:'Home'
    },

    {
        path:'#about us',
        display:'About us'
    },

    {
        path:'#services',
        display:'Services'
    },

    {
        path:'#pricing',
        display:'Pricing'
    },

    {
        path:'#contact us',
        display:'Contact us'
    },
]

const Header = ({theme, toggleTheme}) => {
    return (
        <header className="header">
            <div className="container">
                <div className="nacv__wrapper">
                    <div className="nav__wrapper">
                        <div className="logo">
                            <h2>Socialight</h2>
            
                        </div>

                        {/* ================navigation==================*/}
                        <div className="navigation">
                            <ul className="menu">
                                {nav__links.map((item,index) => (
                                    <li className='menu__item'>
                                        <a href={item.path} className="menu__link">
                                            {item.display}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* =================== light mode =====================*/}
                        <div className="light__mode">
                            <span onClick={toggleTheme}>
                                {theme === 'lightTheme' ? (
                                    <span>
                                        <i class="ri-moon-line"></i>Dark
                                    </span>
                                ) : (
                                    <span>
                                        <i class="ri-sun-line"></i>Light
                                    </span>
                                )}
                            </span>
                            <span>
                                <i className="ri-sun-line"></i> Light Mode
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header