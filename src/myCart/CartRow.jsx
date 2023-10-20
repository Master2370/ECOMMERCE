import React, { useParams } from 'react';
import {ImCross} from 'react-icons/im';

function CartRow({thumbnail, title, price, myCart, id, onRemove}){
  const myValue = myCart[id] 

  function onCross(){
   onRemove(id)
  }
  
  return (
   <div className="flex items-center p-3">

  <div className="w-[15%]">
<button onClick={onCross} className="p-2 rounded-full border border-gray-400 text-gray-400 hover:border-red-500 hover:text-red-500 ">
<ImCross size={15}/>
</button>
    </div>
  <div className="w-[15%]">
<img className="w-20" src={thumbnail} alt="/"/>
     </div>
         <div className="w-[30%]">
           <h1 className="text-red-500 font-thin text-xl">{title}</h1>
         </div>
        <div className="w-[15%]">
        <h1 className="font-bold text-gray-600">$ {price}</h1>
        </div>
        <div className="w-[15%]  ">
          <input value={myValue} type="number" className="outline-none w-14 bg-transparent border border-gray-400 hover:border-gray-600 p-1"/>
        </div>
        <div className="w-[10%]">
        <h1 className=" font-bold text-gray-600">${price}</h1>
        </div>

</div>

    
  );
}

export default CartRow;