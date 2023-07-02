import React from "react"
import Grid from '@material-ui/core/Grid';
import Product from "./Product/Product"
const products = [
    { id: 1, name: "Nike Shoes", desc: "Running shooes", price: "110" , image:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/c76e2119-acb7-4944-9085-d4f5ae2bda4a/go-flyease-easy-on-off-shoes-MWN8NF.png"},
    { id: 2, name: "Macbook", desc: "Apple Mac", price: "1200" , image:"https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/macbook-air-midnight-select-20220606?wid=904&hei=840&fmt=jpeg&qlt=90&.v=1653084303665"}


]
const Products = () => {
    return (
        <main>
            <Grid container justifyContent="flex-start" spacing={4}>
                {products.map(product => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>


                        <Product {...{...product}} />
                    </Grid>
                ))}
            </Grid>
        </main>
    )

}

export default Products