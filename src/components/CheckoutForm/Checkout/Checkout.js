import React, { useState, useEffect } from 'react';
import { CssBaseline, Paper, Stepper, Step, StepLabel, Typography, Divider, Button } from '@material-ui/core';
import { Link, useNavigate  } from 'react-router-dom';
import { commerce } from '../../../lib/commerce'
import AddressForm from '../AddressForm'
import PaymentForm from '../PaymentForm'
import Spinner from '../../Spinner/Spinner'
import useStyles from './styles';

const steps = ['Shipping address', 'Payment details'];
const Checkout = ({ cart, onCaptureCheckout, order, error }) => {

    const classes = useStyles();
    const navigate = useNavigate();
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState()
    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                if (token) {
                    setCheckoutToken(token);
                }

            }
            catch (e) {
                navigate('/')
                console.log(e)
            }
        }
        if (cart.line_items) {
            generateToken();

        }
    }, [cart]);

    const nextStep = () => setActiveStep((prev) => prev + 1);
    const backStep = () => setActiveStep((prev) => prev - 1);


    const next = (data) => {
        setShippingData(data);
        nextStep();
    }

    let Confirmation = () => {
        return (
            <>
                <Spinner visible={!order.customer} />
                {order.customer && (
                    <>
                        <div>
                            <Typography variant="h5">Thank you for your purchase, {order.customer.firstname} {order.customer.lastname}! </Typography>
                            <Divider className={classes.divider} />
                            <Typography variant="subtitle2">Order ref: {order.customer_reference} </Typography>
                        </div>
                        <br />
                        <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>

                    </>
                )}
            </>
        )
    }

    if (error) {
        Confirmation = () => (
            <>
                <Typography variant="h5">Error: {error}</Typography>
                <br />
                <Button component={Link} variant="outlined" type="button" to="/">Back to home</Button>
            </>
        );
    }




    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} next={next} />
        : <PaymentForm
            shippingData={shippingData}
            checkoutToken={checkoutToken}
            backStep={backStep}
            onCaptureCheckout={onCaptureCheckout}
            nextStep={nextStep} />

    return (
        <>
            <CssBaseline />
            <div className={classes.toolbar} />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <Spinner visible={!checkoutToken} />
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>
        </>
    )
}

export default Checkout