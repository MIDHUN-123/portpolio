import React from 'react'
import { FaMoon,FaSun } from 'react-icons/fa'
import './Nav.css';

const Nav = ({darkmode,setDarkmode}) => {
  return (
    <div className='nav' >
        <div className='nav-title' >
            <h2>Mithun</h2>
        </div>
        <div className='nav-items' >
            <ul>
                <li>
                    <a href='#home' >Home</a>
                </li>
                <li>
                    <a href='#about' >About</a>
                </li>
                <li>
                    <a href='#projects' >Projects</a>
                </li>
                <li>
                    <a href='#skills' >Skills</a>
                </li>
                <li>
                    <a href='#contact' >Contact</a>
                </li>
            </ul>
        </div>
        <button
            type='button'
            className='nav-theme'
            onClick={()=>setDarkmode(!darkmode)}
            aria-label={darkmode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
            {darkmode ? <FaMoon/> : <FaSun />}
        </button>
    </div>
  )
}

export default Nav