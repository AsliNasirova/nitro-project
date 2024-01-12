import React, { useEffect, useState } from 'react'
import Card from '../Card/card'

const Ourp = () => {

    const [products,setProducts]=useState([])
    async function getProducts(){
        const data=await fetch("http://localhost:3000/trees")
        const res= await data.json()
        console.log(res)
        setProducts(res);
    }
    
    useEffect(()=>{
        getProducts()
    },[])
    console.log(products);
    
  return (
    <section id='ourServices'>
        <div className="servicesArea">
            {products && products.map((item)=>(
                <div className="cardArea">
                    <Card key={item._id} id={item._id} image={item.image} title={item.title} information={item.information}></Card>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Ourp