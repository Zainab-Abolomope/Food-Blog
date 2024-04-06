// import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Cart from './pages/cart'
import Login from './pages/login'
import Favorite from './pages/favorite'




import './App.css'
import SingleCart from './pages/singleCart'



function App() {
 

  return (
    <main>
      <BrowserRouter>
      

          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="single/:id" element={<SingleCart />}/>
            {/* <Route path='/:id' element={<SingleCart/>} /> */}
            <Route path='favourite' element={<Favorite />} />
            
          </Routes>
      
      </BrowserRouter>
    </main>
   
  )
}

export default App
