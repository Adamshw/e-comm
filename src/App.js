import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { commerce } from './lib/commerce'

import { Products, Navbar, Cart } from './components'

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({})

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const onAddToCart = async (productId, quantity) => {
    const res = await commerce.cart.add(productId, quantity);
    setCart(res);
  };

  const onUpdateCardQty = async (lineItemId, quantity) => {
    const res = await commerce.cart.update(lineItemId, { quantity });
    setCart(res);
  }

  const onRemoveFromCart = async (lineItemId) => {
    const res = await commerce.cart.remove(lineItemId);

    setCart(res);
  };
  const onEmptyCart = async () => {
    const res = await commerce.cart.empty();

    setCart(res);
  };


  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div >
        <Navbar totalItems={cart.total_items} />
        <Routes>
          <Route exact path="/" element={<Products products={products} onAddToCart={onAddToCart} />}></Route>
          <Route exact path="/cart" element={<Cart lineItem={cart.line_items}
           onUpdateCardQty={onUpdateCardQty}
            onRemoveFromCart={onRemoveFromCart}
            onEmptyCart={onEmptyCart}
            subTotalItem={cart?.subtotal} />}></Route>
        </Routes>
      </div>
    </Router>

  )
}

export default App