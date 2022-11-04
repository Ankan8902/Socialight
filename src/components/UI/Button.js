import React from 'react';
import '../../styles/button.css';
import { Link } from 'react-router-dom';

export function Button()  {
  return (
    <Link to='sign-up'>
        <button className='btn'>Get a Quote</button>
    </Link>
  )
}

export default Button