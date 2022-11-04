import React, {useState} from 'react'
import {Button} from '../UI/Button'
import {Link} from 'react-router-dom'
import '../header/header.css'
import Dropdown from '../UI/Dropdown'
import Dropdown2 from '../UI/Dropdown2'
import Dropdown3 from '../UI/Dropdown3'


const Navbar = () => {
    const [click, setClick] = useState(false);
    const [dropdown,setDropdown]=useState(false);
    const [dropdown2,setDropdown2]=useState(false);
    const [dropdown3,setDropdown3]=useState(false);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter =() => {
        if(window.innerWidth <960) {
            setDropdown(false);
        } else{
            setDropdown(true);
        }
    };

    const onMouseenter =() => {
        if(window.innerWidth <960) {
            setDropdown2(false);
        } else{
            setDropdown2(true);
        }
    };

    const onmouseEnter =() => {
        if(window.innerWidth <960) {
            setDropdown3(false);
        } else{
            setDropdown3(true);
        }
    };

    const onMouseLeave =() => {
        if(window.innerWidth <960) {
            setDropdown(false);
        } else{
            setDropdown(false);
        }
    };

    const onMouseleave =() => {
        if(window.innerWidth <960) {
            setDropdown2(false);
        } else{
            setDropdown2(false);
        }
    };

    const onmouseLeave =() => {
        if(window.innerWidth <960) {
            setDropdown3(false);
        } else{
            setDropdown3(false);
        }
    };

    return (
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>
                Socialight <i className='fab fa-firstdraft' />
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />

            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/About' className='nav-links' onClick={closeMobileMenu}>
                        About
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/Review' className='nav-links' onClick={closeMobileMenu}>
                        Review Accelaration
                    </Link>
                </li>

                <li className='nav-item' onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                    <Link to='/digital' className='nav-links' onClick={closeMobileMenu}>
                        Digital Marketing <i className='fas fa-caret-down' />
                    </Link>
                    {dropdown && <Dropdown />}
                </li>

                <li className='nav-item' onMouseEnter={onMouseenter} onMouseLeave={onMouseleave}>
                    <Link to='/itservices' className='nav-links' onClick={closeMobileMenu}>
                        IT Services <i className='fas fa-caret-down' />
                    </Link>
                    {dropdown2 && <Dropdown2 />}
                </li>

                <li className='nav-item' onMouseEnter={onmouseEnter} onMouseLeave={onmouseLeave}>
                    <Link to='/recruitment' className='nav-links' onClick={closeMobileMenu}>
                        Recruitment <i className='fas fa-caret-down' />
                    </Link>
                    {dropdown3 && <Dropdown3 />}
                </li>

                <li className='nav-item'>
                    <Link to='/faq' className='nav-links' onClick={closeMobileMenu}>
                        FAQ
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                        Contact us
                    </Link>
                </li>

                <li className='nav-item'>
                    <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Get a quote
                    </Link>
                </li>

            </ul>
            <Button/>
        </nav>

        


  )
}

export default Navbar