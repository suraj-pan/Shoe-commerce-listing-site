import React, { useContext, useState } from 'react'
import { CartContext } from '../store/Cartprovider'

const ProductForm = () => {
    const [newProduct,setNewProduct] = useState({name:'',price:0,S:0,M:0,L:0})
    const {addProduct}= useContext(CartContext);

    const handleInputChange =(e)=>{
        const {name,value} = e.target;
        setNewProduct((prev)=>({...prev,[name]:value}))
    }

    const submitHandler =(e)=>{
        e.preventDefault();
            // console.log(newProduct)
        addProduct(newProduct);
        setNewProduct({name:'',price:0,S:0,M:0,L:0});
        console.log(newProduct)


    }
  return (
    <form onSubmit={submitHandler}>
    <label>Shoe Name :
    <input type='text' name='name' value={newProduct.name} onChange={handleInputChange} required />
    </label>
    <label>Shoe Price :
    <input type='number' name='price' value={newProduct.price} onChange={handleInputChange} required />
    </label>
    <div className='flex flex-col'>Quantity :
        <label> S :
        <input type='number' name='S' className='bg-slate-200' value={newProduct.S} onChange={handleInputChange} required />
        </label>
        <label> M : 
        <input type='number' name='M'  className='bg-slate-200'  value={newProduct.M} onChange={handleInputChange} required />
        </label>
        <label> L :
        <input type='number' name='L'  className='bg-slate-200 p-2'  value={newProduct.L} onChange={handleInputChange} required />
        </label>
    </div>
      <button type='submit'>Add</button>
    </form>
  )
}

export default ProductForm
