// App.js
import React, { useState } from 'react';
import Cartprovider from './store/Cartprovider';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App = () => {
 
  const [cartIsShown,setCartIsshown] = useState(false)

  const showIt = ()=>{
    setCartIsshown(!cartIsShown)
  }

  return (
 <div className='w-8/12 mx-auto'>
   <Cartprovider>
   <div className='flex justify-between mb-3'>
   <h1>Shopping-Product-cart</h1>
   <button onClick={showIt} >Cart</button>
   </div>
   {cartIsShown && <Cart notShow={showIt} />}
   {!cartIsShown && <div>
    <ProductForm/>
   <ProductList/>
   </div>}

  </Cartprovider>
 </div>
  );
};

export default App;
