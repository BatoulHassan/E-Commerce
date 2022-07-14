import React from 'react';
import { Typography, List, ListItem, ListItemText } from '@material-ui/core';

export const Review = (props) => {
    const {cartItems} = props;
    const itemsPrice = cartItems.reduce((a,c) => a + c.price * c.qty, 0);
    
  return (
    <>
    <Typography style={{ padding: '0 30px' }} variant='h6' gutterBottom>Order Summery</Typography>
    <List style={{ padding: '0 30px' }}>
        {cartItems.map((item) => (
            <ListItem style={{ padding: '10px 0' }} key={item.id}>
                <ListItemText primary={item.category} secondary={`Quantity: ${item.qty}`}/>
                <Typography variant='body2'>${item.price}</Typography>
            </ListItem>
        ))}
            <ListItem style={{ padding: '10px 0' }}>
              <ListItemText primary="Total"/>
              <Typography variant="subtitle1" style={{ fontWeight:700 }}>{itemsPrice}</Typography>
            </ListItem>
    </List>
    
    </>
  )
}
