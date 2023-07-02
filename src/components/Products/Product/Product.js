import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ desc, price, name, image, onAddToCart }) => {
    const classes = useStyles();

    //   const handleAddToCart = () => onAddToCart(product.id, 1);

    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={image} title={name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        ${price}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: desc }} variant="body2" color="textSecondary" component="p" />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" >
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Product;
