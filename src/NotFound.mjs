import React from 'react';
import { Link } from "react-router-dom"

function NotFound(){
  return (
    <div className="flex bg-gray-100 items-center justify-center h-screen">
      <div>
      <img src="../404page.png" />
        <div className="px-3 py-2 text-red-500 border border-red-500 w-[40%] text-center mx-auto"><Link to="/"> Return To Shopping</Link></div>
      </div>
    </div>
  );
  
}
export default NotFound;