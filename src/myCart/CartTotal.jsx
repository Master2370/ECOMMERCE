import React from "react";

function CartTotal() {
  return (
    
    <div className="flex justify-end ">
      
      <div className="border border-gray-100 w-[40%]">
        <h1 className="P-2 border-b bg-gray-50 p-3 border-gray-100">Cart Total</h1>

        <div className="flex w-full p-2">
          <div className="w-24">
            <h1>Subtotal</h1>
          </div>
          <h1>$14</h1>
        </div>

        <div className="flex w-full p-2">
          <div className="w-24">
            <h1>Total</h1>
          </div>
          <h1>$30</h1>
        </div>
        <div className="p-4">
       <button className="bg-red-500 text-white  px-10 py-2 font-bold rounded-md w-full">
              Proceed To Checkout</button>
</div>
      </div>

      </div>
      
    
  );
}

export default CartTotal;