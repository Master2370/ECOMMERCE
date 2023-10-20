import React from 'react';
import {Link} from "react-router-dom";
import { FiArrowUpRight } from "react-icons/fi";

function Product({thumbnail,category,title,rating,price,id}){
  return(
    
    <div className=" max-w-xs">
     <div className="w-full aspect-square"> 
    <img className="w-full h-full object-cover" src={thumbnail} />
      </div>
      <div>
      <h2 className="text-gray-400 text-md">{category}</h2>
    <h2 className="font-bold">{title}</h2> 
    
    <p className="font-semibold">${price}</p>
    
  </div>
      <div className="flex text-indigo-800 font-semibold underline">
      <Link to={"/product/" + id}>View Detail</Link>
        <span><FiArrowUpRight/></span>
    </div></div>
    
  );
}

export default Product;