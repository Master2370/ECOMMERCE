import React, { useEffect, useState } from 'react';
import { useParams, Link } from "react-router-dom";
import { getProductData } from './api.js';
import Loading from './Loading.mjs';
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import NotFound from './NotFound.mjs';

function ProductDetail({onAddToCart}) {
  const id = +(useParams().id);
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [count, setcount] = useState(1);
  
  useEffect(function() {
    const p = getProductData(id);

    p.then(function(product) {
      setProduct(product);
      setLoading(false);
    }).catch(function(){
      setLoading(false);
    });
  }, [id]);

  function handleCountChange(event){
    setcount(+event.target.value);
  }

  function handleButtonClick(){
    onAddToCart(id,count);
  }
  
  if(loading){
    return <Loading/>
}

  if(!product){
    return (
      <div>
      <NotFound />
      </div>
    )
  }

  

  return  (
    <>
 
        <div className="m-10 bg-white p-5 grow ">
           <Link to="/"><HiArrowLeft className="rounded-full border border-black p-1 mb-2 " size={40} /></Link>
          <div className="flex">
          <img className="max-w-xs" src={product.thumbnail} />
          <div className="p-5">
            <h3 className="text-gray-400 text-2xl font-semibold">{product.category}</h3>
            <h2 className="font-semibold text-xl">{product.title}</h2>
            <p>{product.description}</p>
            <p className="font-semibold text-xl">${product.price}</p>
            <input type="number" value={count} onChange={handleCountChange} className="w-12 border-2 border-black rounded-md" />
            <button className="bg-red-500 text-white px-6 py-1 rounded-md ml-2" onClick={handleButtonClick}>Add to Cart</button>
          </div>
        </div>
          </div>
        <div className="flex justify-between p-5">
          <div>
            {id > 1 && (
              <Link to={"/product/" + (id - 1)} className="flex items-center text-white bg-indigo-800 px-4 py-1  rounded-md"><HiArrowLeft className="mr-2" />PREVIOUS</Link>)}
          </div>
          <div>
            <Link to={"/product/" + (id + 1)} className="flex items-center text-white bg-indigo-800 px-4 py-1  rounded-md"><HiArrowRight className="mr-2" />Next</Link>
          </div>
        </div>
    </>
  );
}

export default ProductDetail;