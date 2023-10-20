import React, { useEffect, useState } from "react";

import CartRow from "./CartRow";
import CartTotal from "./CartTotal";
import EmptyCart from "./EmptyCart"
import { RiHome6Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { getProductData } from "../api.js"

function CartList({myCart,id, setCart}){
  const [cartItem, setCartItem] = useState([])
  useEffect(()=>{
   const response =  Object.keys(myCart).map((e)=> getProductData(e))
   const bigPromise = Promise.all(response)
    bigPromise.then((bigPromise)=> setCartItem(bigPromise))
  }, []) 
  
  function removeProduct (id) {
    const myLocalStorage  = JSON.parse(localStorage.getItem("my-cart"))
    const { [id]:product , ...rest } = myLocalStorage
    setCart(rest)
    localStorage.setItem("my-cart", JSON.stringify(rest))
    setCartItem(cartItem.filter((e)=> e.id != id))
    
  }
  
  
  return (
    <div className=" bg-white my-[4%] mx-[15%] p-5 ">
      <div className="px-5">
       <Link to="/" className=" flex justify-end p-5" ><RiHome6Line size={25} /></Link>
        <div className="flex items-center p-3">
       <span className="w-[30%]"></span>
        <h1 className="w-[30%]">Product</h1>
        <h1 className="w-[15%]">Price</h1>
        <h1 className="w-[15%]">Quantity</h1>
        <h1 className="w-[10%]">Subtotal</h1>
          </div>
        
        {cartItem.length < 1 ? (<EmptyCart/>):(
          cartItem.map((e) => <CartRow {...e} myCart={myCart} onRemove={removeProduct}/>))
        }

        <div className="flex justify-between p-6">
          <div >
          <input type="text" className="border border-gray-400 p-2 bg-transparent placeholder:text-gray-400 outline-none" placeholder="Coupon Code" />
              <button className="bg-red-500 text-white p-2 rounded-md ml-2">
              Apply Coupon</button>
          </div>
          <div>
              <button className="bg-red-500 text-white text-gray-500  px-10 py-2 font-bold rounded-md ml-2 opacity-60">
              Update Cart</button>
          </div>
        </div>
      </div>
      <CartTotal/>
    </div>
  )
}

export default CartList;