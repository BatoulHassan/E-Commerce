import React from 'react';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';
import useStyles from './styles';

const CartItems = ({ item, onAdd, onRemove, removeCart }) => {
 
  const classes = useStyles();
  console.log("Your item is: ", item);

  return (
    <Card>
      <CardMedia component="img" image={item.image} alt={item.category} className={classes.media} />
      <CardContent className={classes.cardContent}>
        <Typography className={classes.cardCategory} variant='h6'>{item.category}</Typography>
        <Typography className={classes.cardPrice} variant='h6'>${item.price}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <div className={classes.buttons}>
        <Button className={classes.cardBtn} type='button' size='small' onClick={() => onRemove(item)}>-</Button>
        <Typography variant='h6'>{item.qty}</Typography>
        <Button className={classes.cardBtn} type='button' size='small' onClick={() => onAdd(item)}>+</Button>
        </div>
        <Button className={classes.removeBtn} variant='contained' color='secondary' onClick={() => removeCart(item)}>Remove</Button>
      </CardActions>
    </Card>
  )
}

export default CartItems
