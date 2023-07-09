import React, { useState, useEffect } from 'react';
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

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <div >
      {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
      <Navbar totalItems={cart.total_items} />
      <Cart lineItem={cart.line_items} subTotalItem={cart?.subtotal} />
      {/* <Cart cart={cart} /> */}
    </div>
  )
}

export default App