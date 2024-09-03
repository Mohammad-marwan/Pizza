import React, { useEffect, useState } from 'react'
import style from './Product.module.css'


export default function Products() {
  const [product,setproduct] =useState([]);
   const getProducts = async ()=>{
        const response = await fetch("https://forkify-api.herokuapp.com/api/search?q=pizza");
        const data = await response.json();
        const result = data.recipes;
       
        setproduct(result);
    }
    useEffect(()=>{
      getProducts(); 
    },[]);

    
  
  return (
    
    <div className="container">
      <div className="row g-3">    
    {
      product.map(product=>
        <div className="col-lg-3">
          <div className="card">
        <h2 className={`${style.fontSize}`}>{product.title.split(' ').slice(0,3).join('')}</h2>
        <img  src={product.image_url} className={`${style.img}`} />
        </div>
</div>
      )
    }
    </div>
    </div>
    
      
    
  )
}
