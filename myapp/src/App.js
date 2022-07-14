import React, { useEffect, useState } from 'react'
import Products from './components/products/products';
import { Navbar } from './components/Navbar/Navbar';
import { Basket } from './components/Basket/Basket';
import { Checkout } from './components/CheckoutForm/Checkout/Checkout.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';

const url = `https://fakestoreapi.com/products?limit=6`;

const theme = createTheme();

const App = () => {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  
  const totalItems = cartItems.length;
  console.log("CartItems is :", cartItems);

  const onAdd = (product) => {
    const exist = cartItems.find(x => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.map((x) =>
       x.id === product.id ? {...exist, qty: exist.qty + 1 } : x)
       )
    } else {
      setCartItems([...cartItems, {...product, qty: 1 }]);
    }
  }

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
     setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) => 
          x.id === product.id ? {...exist, qty: exist.qty - 1} : x
        )
      )
    }
  } 

  const removeCart = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.filter((x) => x.id !== product.id))
    } else {
      setCartItems({...cartItems})
    }
  }
  const emptyCart = () => {
    if (cartItems.length !== 0 ) {
      setCartItems([]);
    }
  }

  const fetchProducts = async () => {

      const response = await fetch(url);
      const data = await response.json();
      setProducts(data);

  }

  useEffect( () => {

    fetchProducts();

  },[]);

 // console.log(products);

  return (

 <ThemeProvider theme={theme}>   
   <Router>
      <Navbar totalItems={totalItems}/>
      <Routes>
         <Route exact path='/' element={<Products onAdd={onAdd} products={products} />}></Route>
         <Route path='/cart' element={<Basket onAdd={onAdd}
                                              onRemove={onRemove} 
                                              cartItems={cartItems} 
                                              removeCart={removeCart}
                                              emptyCart={emptyCart}
                                              
                                      />}>
         </Route>
         <Route path='/checkout' element={<Checkout cartItems={cartItems} />}></Route>
      </Routes>
   </Router> 
</ThemeProvider>   

  )
}

export default App



