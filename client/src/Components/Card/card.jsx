import React from 'react'
import './card.scss'
import { FaHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaEye } from "react-icons/fa";

const Card = ({id,image,title,information}) => {

    console.log(id);
  return (
    <>
   <div className='Card'>
    <div className="cardIcon">
    <FaHeart />
    </div>
<Link to={`/${id}`}> <FaEye /></Link>
   <div className="image">
    {/* <img src={image} alt="" /> */}
    <i className={image}></i>
   </div>
   <div className="content">
    <h1>{title}</h1>
    <p>{information}</p>
   </div>
   </div>
    </>
  )
}

export default Card