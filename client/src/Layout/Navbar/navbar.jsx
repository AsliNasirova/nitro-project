import React from 'react'
import { NavLink } from 'react-router-dom'
import './navbar.scss'
import Welcome from '../../Components/Welcome/welcome'

function Navbar() {
  return (
    <section id='navbar'>
      <div className="navbar">
        <div className="text_left_nav">
          <h4>Nitro</h4>
          <h4 style={{ color: 'blue' }}>.</h4>
        </div>
        <div className='switch'>
          <ul className='switchs'>
            <li><NavLink to={"/"}>Home</NavLink></li>
            <li><NavLink to={"/aboutus"}>Aboutus</NavLink></li>
            <li><NavLink to={"/blog"}>Blog</NavLink></li>
            <li><NavLink to={"/contact"}>Contact</NavLink></li>
            <li><NavLink to={"/services"}>Services</NavLink></li>
            <li><NavLink to={"/portfolio"}>Portfolio</NavLink></li>
            <li><NavLink to={"/testmonials"}>Testimonials</NavLink></li>
            <li><NavLink to={"/addp"}>Add Page</NavLink></li>
          </ul>
        </div>
      </div>
      <Welcome/>

    </section>
  )
}

export default Navbar