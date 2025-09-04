import React, { useState } from 'react'
import Navbar from './Componets/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Cart from './Pages/Cart/Cart'
import Placeorder from './Pages/PlaceOrder/PlaceOrder'
import Footer from './Componets/Footer/Footer'
import LoginPopup from './Componets/LoginPopup/LoginPopup'
import Verify from './Pages/Verify/Verify'
import MyOrders from './Pages/MyOrders/MyOrders'
import AboutUs from './Pages/AboutUs/AboutUs'
import Shipping from './Pages/Shipping/Shipping'
import Privacy from './Pages/Privacy/Privacy'
import SearchBar from './Componets/Search/SearchBar'


const App = () => {

const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin} />:<></>}
     <div className='app'>
      <Navbar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<Placeorder/>} />
        <Route path='/verify' element={<Verify/>} />
        <Route path='/myorders' element={<MyOrders/>} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/shipping' element={<Shipping/>} />
        <Route path='/privacy' element={<Privacy/>} />
        <Route path='/search' element={<SearchBar/>} />
      </Routes>
    </div>
    <Footer/>
    </>
   
  )
}

export default App
