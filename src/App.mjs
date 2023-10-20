import React from 'react';
import { useState } from 'react';
import ProductListPage from './ProductListPage.mjs';
import ProductDetail from './ProductDetail.mjs';
import {Routes, Route} from "react-router-dom";
import Navbar from './Navbar.mjs';
import Footer from './Footer.mjs';
import CartList from "./myCart/CartList"
import NotFound from './NotFound.mjs';
import LogInPage from './LogInPage.mjs';
import SignUpPage from './SignUpPage';

function App(){
  const myItem = localStorage.getItem("my-cart") || "{}"
  const myItemsValue = JSON.parse(myItem)
const [cart , setCart] = useState(myItemsValue);
function handleAddToCart(productId,count){
    console.log("count", count)
    const oldCount = cart[productId] || 0;
    const myTotalCount = {...cart, [productId]: oldCount + count}
    setCart(myTotalCount);
    const cartString = JSON.stringify(myTotalCount)
    localStorage.setItem("my-cart", cartString)
  }

  const totalCount = Object.keys(cart).reduce(function(previous,current){
   return previous + cart[current];
  }, 0);
  
  return(
    <div className="bg-gray-200 h-screen overflow-scroll flex flex-col">
       <Navbar productCount={totalCount} />
      <div className="grow">
      <Routes>
        <Route index element={ <ProductListPage/>}/>
        <Route path="/product/:id/" element={ <ProductDetail onAddToCart={handleAddToCart} />}/>
        <Route path="/cart" element={<CartList myCart={cart} setCart={setCart}/> } />
        <Route path="/login" element={<LogInPage/>}/> 
        <Route path="/signup" element={<SignUpPage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
   </div>
        <Footer/> 
    </div>
  );
}
export default App;