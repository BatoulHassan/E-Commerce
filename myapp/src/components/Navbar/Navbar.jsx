import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Badge } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import logo from '../../assets/commerce.png';
import { Link, useLocation } from 'react-router-dom';


export const Navbar = ({totalItems}) => {
    const classes = useStyles();
    const location = useLocation();
    //console.log(location);
    
  return (
    <>
     <AppBar position='fixed' className={classes.appbar} color='inherit'>
         <Toolbar>
             <Typography variant='h6' className={classes.title} component={Link} to='/'>
               <img src={logo} alt="commerce.js" height='25px' className={classes.image} />
               E-Commerce.js
             </Typography>
             <div className={classes.grow} />
             {location.pathname === '/' && ( 
             <div className={classes.button}>
               <IconButton component={Link} to='/cart'>
                <Badge badgeContent={totalItems} color='secondary' overlap="rectangular">
                  <ShoppingCart />
                </Badge>
               </IconButton>
             </div> )}
         </Toolbar>
     </AppBar>
    </>
  )
}
