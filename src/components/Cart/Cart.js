import React, { useState, useEffect } from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';
import useStyles from './styles';
const Cart = ({ lineItem, subTotalItem }) => {
    
    const classes = useStyles();

    const EmptyCart = () => {
        return (
            <Typography variant='subtitle1'>You have no items in your shopping cart</Typography>

        )

    }

    const FilledCart = () => {
        return (
            <>
                <Grid container spacing={3}>
                    {lineItem?.map((item) => (
                        <Grid item xs={12} sm={4} key={item.id}>
                            <div>{item.name}</div>
                        </Grid>
                    ))}
                </Grid>
                <div className={classes.cardDetails}>
                    <Typography variant='h4'>
                        subtotal: {subTotalItem.formatted_with_symbol}
                    </Typography>
                    <div>
                        <Button className={classes.emptyButton} size="large" type="button" variant="contained" color="secondary" >Empty cart</Button>
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
                <Typography variant='h4'>
                    Laoding ...
                </Typography>
                :
                <>
                    <Typography className={classes.title} variant='h3'>Your Shopping Cart</Typography>
                    {lineItem.length ? <FilledCart /> : <EmptyCart />}
                </>
            }
        </Container >

    )
}

export default Cart