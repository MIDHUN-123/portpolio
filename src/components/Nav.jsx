import React from 'react'
import { NavLink } from 'react-router-dom'
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
        <div className='nav-theme' onClick={()=>setDarkmode(!darkmode)} >
            {darkmode ? <FaMoon/> : <FaSun />}
        </div>
    </div>
  )
}

export default Nav