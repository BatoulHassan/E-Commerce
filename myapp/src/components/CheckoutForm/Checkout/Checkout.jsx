import { Typography, Paper, Stepper, Step, StepLabel } from '@material-ui/core';
import React, { useState } from 'react';
import { AddressForm } from '../AddressForm/AddressForm';
import { PaymentForm } from '../PaymentForm';
import useStyles from './styles';

const steps = ['SignIn', 'Payment'];

export const Checkout = (props) => {
    const {cartItems} = props;
    const [activeStep, setActiveStep] = useState(0);
    const classes = useStyles();
   
    const Form = () => ( activeStep === 0 
       ? <AddressForm next={nextStep}/> 
       : <PaymentForm cartItems={cartItems} back={backStep} /> )

    const Confirmation = () => (
        <div>Confirmation</div>
    )

    const nextStep = () => setActiveStep((activeStep + 1));
    const backStep = () => setActiveStep((activeStep - 1));

  return (
    <>
    <div className={classes.toolbar}/>
    <main className={classes.layout}>
        <Paper className={classes.paper}>
            <Typography variant='h4' align='center'>Checkout</Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
                {steps.map((step) => (
                    <Step key={step}>
                        <StepLabel>{step}</StepLabel>
                    </Step>
                ))}
            </Stepper>
          {activeStep === steps.length ? <Confirmation /> : <Form />   } 
        </Paper>
    </main>
    </>
  )
}
