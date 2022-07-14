import React from 'react'
import { Container, Grid, Typography, Button } from '@material-ui/core';
import CartItems from './CartItems/CartItems';
import { Link } from 'react-router-dom';
import useStyles from './styles';

export const Basket = (props) => {

    const { cartItems, onAdd, onRemove, removeCart, emptyCart } = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
    //const taxPrice = itemsPrice * 0.14;
    //const shippingPrice = itemsPrice > 2000 ? 0 : 50;
    const isEmpty = !cartItems.length;
    const classes = useStyles();

    const EmptyCart = () => (
      <>
        <Typography variant='subtitle1'>
          You have no items in your shopping cart, 
        </Typography>
        <Link to='/' className={classes.link}>start adding some!</Link>
      </>  
    );

    const FilledCart = () => (
       <>
         <Grid container spacing={3}>
          {cartItems.map((item) => (
            <Grid item xs={12} sm={4} key={item.id}>
              <CartItems item={item} onAdd={onAdd}
                                     onRemove={onRemove} 
                                     removeCart={removeCart} 
                                     emptyCart={emptyCart}/>
            
            </Grid> 
          ))}
         </Grid>

         <div className={classes.cartDetail}>
           <Typography className={classes.itemsPrice} variant='h6'>Items Price: ${itemsPrice}</Typography>
           <div className={classes.btnContainer}>
             <Button className={classes.emptyButton} size='large' type='button'
                     color='secondary' variant='contained'
                     onClick={emptyCart}>Empty Button</Button>
             <Button className={classes.checkoutButton}
                     size='large' 
                     type='button' 
                     color='primary'
                     variant='contained' 
                     component={Link} to='/checkout' 
                     >
                       Checkout Button
            </Button>
           </div>
         </div>
       </>
    );
    
  return (
     <>
       <Container className={classes.container}>
         <Typography variant='h3' className={classes.title} gutterBottom>Your Shopping Cart :</Typography>
         { isEmpty ? <EmptyCart /> : <FilledCart /> }
       </Container>
     </>
  )
  
  }


