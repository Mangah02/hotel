import React,{useContext, useEffect, useState} from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../Context/StoreContext'
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const Placeorder = () => {

const {getTotalCartAmount,token,food_list,cartItems,url} = useContext(StoreContext)

const [data,setData] = useState({
  firstName:"",
  lastName:"",
  email:"",
  phone:"",
  country:"",
  county:"",
  subcounty:"",
  city:"",
  postalcode:""
})

const onChangeHandler = (event) =>{
  const name = event.target.name;
  const value = event.target.value;
  setData(data=>({...data,[name]:value}))
}

const placeOrder = async (event) =>{
   event.preventDefault();
   let orderItems = [];
   food_list.map((item)=>{
     if (cartItems[item._id]>0) {
      let itemInfo =item;
      itemInfo["quantity"] = cartItems[item._id];
      orderItems.push(itemInfo)
     }
   })
   let orderData = {
    address:data,
    items:orderItems,
    amount:getTotalCartAmount()+200,
   }
   let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
   if (response.data.success) {
    const {session_url} = response.data;
    window.location.replace(session_url);
   }
   else{
    alert("Stripe not working");
   }
}

const navigate = useNavigate();

useEffect(()=>{
  if (!token) {
    navigate('/cart')
  }
  else if(getTotalCartAmount()===0)
    {
      navigate('/cart')
    }
},[token])

  return (
    <form onSubmit={placeOrder} className='place-order' > 
      <div className="place-order-left">
            <p className='title' >Delivery information</p>
            <div className="multi-fields">
              <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder='First Name' />
              <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder='last Name' />
            </div>
            <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder='Email Address' />
            <input required name='phone' onChange={onChangeHandler} value={data.street} type="text" placeholder='Telphone' />
            <div className="multi-fields">
              <input required name='country' onChange={onChangeHandler} value={data.country} type="text" placeholder='Country' />
              <input required name='county' onChange={onChangeHandler} value={data.county} type="text" placeholder='County' /> 
            </div>
            <div className="multi-fields">
              <input required name='subcounty' onChange={onChangeHandler} value={data.subcounty} type="text" placeholder='Sub County' />
              <input required name='city' onChange={onChangeHandler} value={data.city} type="text" placeholder='City' />
            </div>
            <input required name='postalcode' onChange={onChangeHandler} value={data.postalcode} type="text" placeholder='Postal Code' />
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
        <div className="cart-total-details">
          <p>SubTotal</p>
          <p>Ksh {getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>Ksh {getTotalCartAmount()===0?0:200}</p>
        </div>
        <hr />
        <div className="cart-total-details">
            <b>Total</b>
            <b>Ksh  {getTotalCartAmount()===0?0:getTotalCartAmount()+200}</b>
        </div>
        </div>
      <button type='submit' >Proceed To Payment</button>
    </div>
      </div>
    </form>
  )
}

export default Placeorder
