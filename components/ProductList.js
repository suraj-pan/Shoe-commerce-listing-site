import React, { useContext } from 'react'
import {CartContext} from '../store/Cartprovider'

const ProductList = () => {

    const {products,addProductToCart}= useContext(CartContext);

    const handleAddToCart = (product, size) => {
        const {name,price} = product;
        const Id = `${name}`
        addProductToCart({ name,Id,price, size, quantity: 1 });
      };

  return (
    <div>
      <h1>Product List:</h1>
      <ul>   
            {products.map((pro,index)=>(
               <li key={index}>
                    {pro.name}- Size:{pro.size}-Price:{pro.size}-quantity:
                    <div className='flex '>
                        <button onClick={() => handleAddToCart(pro, 'S')}>S:{pro.S}</button>
                        <button onClick={()=>handleAddToCart(pro,'M')} >M:{pro.M}</button>
                        <button onClick={()=>handleAddToCart(pro,'L')} >L:{pro.L}</button>
                    </div>
               </li>
            ))}
        
      </ul>
    </div>
  )
}

export default ProductList
