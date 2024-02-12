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
   }
    let cartData;
    const addProductToCart =async(product)=>{
      
        try {
        

          const cartResponse = await fetch('https://crudcrud.com/api/22af8d6841104716aa1e909331fe17b4/cart');
           cartData = await cartResponse.json();
          console.log(cartData)


            const existingProduct = cartData.find((pro)=>pro.id === product.id && pro.size === product.size);


        if(existingProduct){
         
           const updatedData = cartData.map((pro)=>pro.id === existingProduct.id && pro.size === existingProduct.size ?
           {...pro,quantity:pro.quantity+1}:pro);

           await fetch('https://crudcrud.com/api/22af8d6841104716aa1e909331fe17b4/cart',{
            method:"PUT",
            headers:{
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(updatedData)
           })

           console.log("udated existing data", existingProduct)
        }else{
          const newProduct ={...product,quantity:1};

          await fetch('https://crudcrud.com/api/99c21b3ee1eb45f6836ca2595a2a4e9e/cart', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify([...cartData, newProduct]),
          });
    
          console.log('New product added to the cart:', newProduct);
        }
          // setcart(cartData)
        } catch (error) {
          console.error("error in fetching datat")
        }
     
    }


  return (
    <CartContext.Provider value={{products,cart,addProduct,addProductToCart,emptyCart}} >
      {children}
    </CartContext.Provider>
  )
}

export default Cartprovider
