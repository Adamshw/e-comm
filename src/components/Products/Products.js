import React from "react"
import { Typography, Grid } from '@material-ui/core';
import Product from "./Product/Product"
import Spinner from "../Spinner/Spinner"
import useStyle from './styles'

const Products = ({ products, onAddToCart }) => {
    const classes = useStyle()
    return (
        <>
            <div className={classes.toolbar} />
            <Spinner visible={products?.length === 0} />
            {products?.length !== 0 && (
                <main className={classes.content}>
                    <Grid container justifyContent="flex-start" spacing={4}>
                        {products.map(product => (
                            <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                                <Product product={product} onAddToCart={onAddToCart} />
                            </Grid>
                        ))}
                    </Grid>
                </main>
            )}
        </>
    )
}

export default Products