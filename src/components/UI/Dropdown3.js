import React, {useState} from 'react'
import {MenuItems3} from './MenuItems'
import {Link} from 'react-router-dom'
import '../../styles/dropdown.css'

function Dropdown() {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)


    return(
        <>
            <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
                {MenuItems3.map((item,index) => {
                    return (
                        <li key={index}>
                            <Link className={item.cname} to={item.path} onClick={()=>setClick(false)}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>


        </>
    )
        
}

export default Dropdown;