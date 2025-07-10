import React, { useState } from 'react'
import data from "../data"
import "../App.css";


function Card  ({id,name,info,images,price,removeTour}) {

    const[readmore,setReadMore]= useState(false)
    const description =  readmore ? info :  `${info.substring(0,200)}...`

    function readmoreHandler(){
        setReadMore(!readmore)
    }
    function notInterestedHandler(id){
        
    }
  return (
  
      <div className='card'>
        <img src={images} alt="" className='image' />
        <div className="tour-info">
            <div className='tour-details'>
                <h4 className='tour-price'> ₹ {price}</h4>
                <h4 className='tour-name'>{name}</h4>
            </div>
            <div className="description">
                {description}
                <span onClick={readmoreHandler} className='read-more cursor-pointer text-blue-700'>
                {readmore ?` Show Less` :`Read More`}
                </span>
            </div>
        </div>
       
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full ' onClick={() => removeTour(id )}>
                Not Interested
            </button>
        
      </div>
    
  )
}

export default Card
