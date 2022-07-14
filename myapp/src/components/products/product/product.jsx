import React from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, IconButton } from '@material-ui/core';
import { AddShoppingCart } from "@material-ui/icons";
import useStyles from "./styles";

const Product = (props) => {
   const { product, onAdd } = props;
    const classes = useStyles();
    console.log(product);
    
  return (
    <Card className={classes.root}>
        <CardMedia 
           className={classes.media}
           
           image={product.image}
           title={product.name}
        />
        <CardContent>
            <div  className={classes.cardContent}>
              <Typography variant="h6" gutterBottom>
                 {product.category}
              </Typography>
              <Typography variant="h6" gutterBottom>
                 {product.price} $
              </Typography>
            </div>
            <Typography variant="body2" color="textSecondary">
               {product.description.length > 100 ? `${product.description.substring(0, 100)}.....` : product.description}
            </Typography>
        </CardContent>
        <CardActions disableSpacing className={classes.cardActions}>
            <IconButton aria-label='Add To Cart'  onClick={() => onAdd(product)}>
               <AddShoppingCart/>
            </IconButton> 
            
        </CardActions>
    </Card>
  )
}

export default Product;
