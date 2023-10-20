import React from 'react';
import { BsCart2} from "react-icons/bs";
import { Link } from "react-router-dom"

function Navbar({productCount}){
  return(
    <div className="bg-white py-4 px-[15%] flex justify-between">
    
    <img className="h-16 " src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1200px-Amazon_logo.svg.png"/>
     <div className="w-60 flex flex-row justify-between items-center">
      <Link to="/">Home</Link>
      <Link to="/login">LogIn</Link>
      <Link to="/signup">SignUp</Link>
        <Link to="/cart"> <div className="flex flex-col items-end">
      <BsCart2 className="text-4xl"/>
      <span className="-mt-10  p-1 text-xs text-white bg-red-500 rounded-full" >{productCount}</span>
        </div></Link>
       </div>
    
    </div>
    
  );
}


export default Navbar;