
import React, { useState, useEffect, useContext } from 'react'
import './AppDownload.css'
import {StoreContext} from '../../Context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'


/* 
const FavouriteDisplay = ({category}) => {

const {food_list} = useContext(StoreContext)

  return (
    <div className='favourite-display' id='favourite-display'>
      <h2>Top favourite dishes for you.</h2>
      <div className="favourite-display-list">
        {food_list.map((item,index)=>{
          if (category==="All" || category===item.category) {
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          }      
        })}
      </div>
    </div>
  )
}

export default FavouriteDisplay

*/
const FavouriteDisplay = () => {

  const { favourite} = useContext(StoreContext)

  
  
  
  useEffect(()=>{
     fetch('http://localhost:4000/api/food/favourite')
     .then((response)=>response.json())
     .then((data)=>setFavourite(data));
  },[])
  
    return (
      <div className='favourite-display' id='favourite-display'>
        <h1>TOP FAVORITE</h1>
        <hr />
        <div className="favourite-display-list">
           {favourite.map((item, i)=>{
              return <FoodItem key={item} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
           })}
          </div>   
      </div>
    )
  }
  
  export default FavouriteDisplay