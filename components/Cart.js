import React, { useContext } from 'react'
import { CartContext } from '../store/Cartprovider';
const Cart = ({notShow}) => {

    const {cart,emptyCart}= useContext(CartContext);

    console.log(cart)

    const calculateTotalAmount =()=>{
        return cart.reduce((total,product)=>total + product.price * product.quantity,0)
    }
    
    // console.log(calculateTotalAmount)

  return (
    <div>
     <ul>
     {cart.map((product,index)=>(
        <li key={index}>{product.name}-price:{product.price}-size:{product.size}-quantity:{product.quantity}</li>
      ))}
     </ul>
     {/* <p>Total Amount :{()=>calculateTotalAmount}</p> */}
     <div>
        <button onClick={emptyCart}>Place Order</button>
        <button onClick={notShow}>Cancel</button>
     </div>
    </div>
  )
}

export default Cart
