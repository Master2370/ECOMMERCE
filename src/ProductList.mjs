import React from 'react';
import Product from './Product.mjs'

function ProductList({products}){
  return(
  <div className="md:grid grid-cols-3 gap-8 space-y-2 md:space-y-0 py-8">
    {products.map(function(item){
    return (
      <Product
        key={item.title}
        {...item}
        />
        );
  })}              
                 
  </div>
  );
}

export default ProductList;