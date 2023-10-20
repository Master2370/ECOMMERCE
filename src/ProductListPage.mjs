import React, { useState, useEffect } from 'react';
import ProductList from './ProductList.mjs';
import {getProductList} from './api.js';
import NoMatching from './NoMatching.mjs';
import Loading from './Loading.mjs';



function ProductListPage() {
const [productList, setProductList] = useState([]); 
  const [loading, setLoading] = useState(true); 
  
  const [query, setQuery] = useState('');
const [sort, setSort] = useState('default'); 
  
useEffect(function(){
  const list = getProductList();

  list.then(function(products){
  setProductList(products);  
  setLoading(false);  
  });
  
},[]);

  let data = productList.filter(function (item) {
      const lowerCaseTitle = item.title.toLowerCase();
      const lowerCaseQuery = query.toLowerCase();
      
      return lowerCaseTitle.indexOf(lowerCaseQuery) != -1;
      
    });

  
 if(sort == "priceLow"){
    data.sort(function(x,y){
      return x.price - y.price;
    });
  }else if(sort == "priceHigh"){
    data.sort(function(x,y){
      return y.price - x.price;
    });
  }else if(sort == "name"){
    data.sort(function(x,y){
      return x.title < y.title ? -1:1;
    });
 }

  function handleQueryChange(event){
  setQuery(event.target.value);  
  } 

  function handleSortChange(event){
  setSort(event.target.value);  
  } 

  if(loading){
    return(
      <>
      <Loading/>
    </>);
  }
  
  return (
    <>
    
      <div className=" bg-white my-[4%] mx-[15%] p-10 ">
        <div className="flex justify-between">
          <input 
            value={query}
            placeholder="search" className="border border-gray-700 rounded-md p-1" onChange={handleQueryChange}/>
          
        <select onChange={handleSortChange} className="border px-10 py-2" value={sort}>
          <option value="default">Default Sorting</option>
          <option value="name">Sort by title</option>
          <option value="priceLow">Sort by price:low to high</option>
          <option value="priceHigh">Sort by price:high to low</option>
        </select>
          </div>
        <div>
          {data.length > 0 && <ProductList products={data}/>}
         {data.length == 0 && <NoMatching>Product Not Found!</NoMatching>}
        </div>
      </div>
    
    
    </>
  );
}

export default ProductListPage;