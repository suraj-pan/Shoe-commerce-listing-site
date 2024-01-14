import React,{createContext, useState} from 'react'

export const CartContext = createContext()

const Cartprovider = ({children}) => {

    const [products,setProducts] = useState([]);
    const [cart,setcart] = useState([]);

    const addProduct = (newProduct)=>{
        setProducts([...products,newProduct])
        // console.log(products)
    }

    const emptyCart =()=>{
        setcart([])
    }
    const addProductToCart = (product)=>{

    console.log(product.Id,product.size)
     const existingProduct = cart.find(p=>p.Id === product.Id && p.size === product.size)
     if(existingProduct){
            setcart((cart)=>
            cart.map((p)=>p.id === existingProduct.id && p.size === existingProduct.size ? {...p,quantity:p.quantity+1}:p))
     }else{
        setcart([...cart,{...product,...product.size,quantity:1}])
     }
     console.log(cart)
    }


  return (
    <CartContext.Provider value={{products,cart,addProduct,addProductToCart,emptyCart}} >
      {children}
    </CartContext.Provider>
  )
}

export default Cartprovider
