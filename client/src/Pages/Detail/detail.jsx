import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Detail = () => {
    const [detail,setDetail]=useState()
    const {id}=useParams()
    const fetchdetails=async()=>{
        const res=await fetch(`http://localhost:3000/trees/${id}`)
        const json=await res.json()
        setDetail(json)
    }
    useEffect(()=>{
        fetchdetails()
    },[])
  return (
    <>
    <div className="detail Area">
        {detail ? <>
        <div className="detailCards">
            <img src={detail.image} alt="" />
            <h1>{detail.title}</h1>
            <p>{detail.category}</p>
        </div></> :''}
      
    </div>
    </>
  )
}

export default Detail