import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';

const Product = ({ product, onAddToCart }) => {
    const classes = useStyles();
    const { id, image, name, price, description } = product
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image={image.url} title={name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {name}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                        ${price.formatted_with_symbol}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: description }} variant="body2" color="textSecondary" component="p" />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                <IconButton aria-label="Add to Cart" onClick={() => onAddToCart(id, 1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    );
};

export default Product;
