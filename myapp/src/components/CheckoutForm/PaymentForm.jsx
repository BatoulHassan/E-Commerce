import React from 'react';
import { Divider, Typography, Button } from '@material-ui/core';
import { Review } from './Review';

export const PaymentForm = (props) => {

  const { cartItems, back } = props;
  const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);

  return (
    <>
     <Review cartItems={cartItems} />
     <Divider/>
     <Typography variant='h6' style={{ margin: '20px 0', padding: '0 30px'}} gutterBottom>Payment Method</Typography>
     <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', margin: '20px'}}>
        <Button variant='outlined' onClick={back}>Back</Button>
        <Button type='submit' variant='contained' color='primary'>
          Pay ${itemsPrice}
        </Button>
      </div>
    </>
  )
}
