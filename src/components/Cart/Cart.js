import React, { useState, useEffect } from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';
import { Link } from 'react-router-dom';
import CartItem from './CartItem/CartItem';
import Spinner from '../Spinner/Spinner'
const Cart = ({ lineItem, subTotalItem, onUpdateCardQty, onRemoveFromCart, onEmptyCart }) => {

    const classes = useStyles();

    const EmptyCart = () => {
        return (
            <Typography variant='subtitle1'>You have no items in your shopping cart,
                <Link to='/' className={classes.link}> start adding some!</Link>
            </Typography>

        )

    }

    const FilledCart = () => {
        return (
            <>
                <Grid container spacing={3}>
                    {lineItem?.map((item) => (
                        <Grid item xs={12} sm={4} key={item.id}>
                            <CartItem item={item} onUpdateCardQty={onUpdateCardQty} onRemoveFromCart={onRemoveFromCart} />
                        </Grid>
                    ))}
                </Grid>
                <div className={classes.cardDetails}>
                    <Typography variant='h4'>
                        subtotal: {subTotalItem.formatted_with_symbol}
                    </Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" onClick={onEmptyCart}>Empty cart</Button>
                        <Button className={classes.checkoutButton} size="large" type="button" variant="contained" color="primary">Checkout</Button>
                    </div>

                </div>
            </>
        )
    }

    return (

        <Container>
            <div className={classes.toolbar} />
            {!lineItem ?
                <Spinner />
                :
                <>
                    <Typography className={classes.title} variant='h3' gutterBottom>Your Shopping Cart</Typography>
                    {lineItem.length ? <FilledCart /> : <EmptyCart />}
                </>
            }
        </Container >

    )
}

export default Cart