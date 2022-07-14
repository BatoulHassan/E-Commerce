import React, { useState } from 'react';
import { Typography, Grid, TextField, Button } from '@material-ui/core';
import useStyles from './styles';

export const AddressForm = ({ next }) => {

  const classes = useStyles();
const initialValues = { userName: "", email: "", password: ""};
const [formValues, setFormValues] = useState(initialValues);

const handleChange = (e) => {
   const {name, value} = e.target;
   setFormValues({ ...formValues, [name]: value });
}

const handleSubmit = (e) => {
  e.preventDefault();
  console.log(formValues);
  next();
}

  return (
    <div style={{margin: '20px'}}>
      <Typography variant='h6' gutterBottom>Sign in Form</Typography>
      <form onSubmit={handleSubmit}>
           <Grid container spacing={3} >
             <Grid item xs={12}>
               <TextField label='User name'
                          name="userName"
                          value={formValues.userName}
                          onChange={handleChange}
                          variant='outlined'
                          type='text'
                          required
                          className={classes.textField}
                          />
              </Grid>
              <Grid item xs={12}>            
                <TextField label='Email'
                          name='email'
                          value={formValues.email}
                          onChange={handleChange}
                          variant='outlined'
                          required
                          className={classes.textField}
                          />
              </Grid>
              <Grid item xs={12}>
                <TextField label='Password'
                          name='password'
                          value={formValues.password}
                          onChange={handleChange}
                          variant='outlined'
                          required
                          className={classes.textField}
                          />
              </Grid>  
              <Grid item xs={12}>
                <Button className={classes.submitBtn} type='submit' variant='outlined' color='primary'>Submit</Button>
              </Grid>      
           </Grid>
        </form>
      
    </div>
  )
}
