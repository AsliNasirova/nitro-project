import React from 'react'
import './aboutussect.scss'
import { FaCheck } from "react-icons/fa6";

function Aboutussect() {
  return (
    <section id='aboutUs'>
    <div className='aboutUs_container'>
        <div className="title_aboutUS_text">
            <h3>About Us </h3>
        </div>
        <div className="img_text_areaAboutUs">
            <div className="leftArea_aboutUs">
                <img src="https://preview.colorlib.com/theme/nitro/images/hero_1.jpg" alt="" />
            </div>
            <div className="rightArea_aboutUs">
                <h3>For the next great business</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo tempora cumque eligendi in nostrum labore omnis quaerat.</p>
                <div className="officia">
                    <ul>
                        <li><FaCheck />
                        <p>Officia quaerat eaque neque</p>
                        </li>
                        <li><FaCheck />
                        <p>Officia quaerat eaque neque</p>
                        </li>
                        <li><FaCheck />
                        <p>Officia quaerat eaque neque</p>
                        </li>
                        <li><FaCheck />
                        <p>Officia quaerat eaque neque</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Aboutussect