import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button, IconButton, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Modal from '@material-ui/core/Modal';
import { ToTitleCase } from '../../../services';
import { useEffect } from 'react';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#E9CCA4',
        justifyContent: 'flex-end',
    },
    paper: {
        position: 'absolute',
        width: 400,
        border: '2px solid #000',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    orderList: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    orderSummary: {
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid lightgray',
        gap: '8px',
        padding: '16px',
    }
}));

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const Cart = (props) => {
    const { cartItems, setCartItems } = props
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);

    const [modalStyle] = React.useState(getModalStyle);

    const handleOpen = () => {
        const newItems = {}
        Object.keys(cartItems)?.map((item, index) => {
            if(cartItems[item].quantity != 0){
                newItems[item] = cartItems[item];
            }
        })
        setCartItems(newItems);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    let totalPrice = 0

    return (
        <>
        <div className={classes.root}>
                <IconButton 
                    onClick={() => {
                        if (Object.keys(cartItems).length) {
                            handleOpen()
                        }
                    }
                    }><ShoppingCartIcon /></IconButton>

        </div>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            <div style={modalStyle} className={classes.paper}>
                <div className={classes.orderSummary}>
                    <Typography bold>Order Summary</Typography>
                    <div className={classes.orderList}>
                        <Typography>Items</Typography>
                        <Typography>Price/Item</Typography>
                        <Typography>Quantity</Typography>
                    </div>
                    <div style={{
                        borderTop: '1px solid lightgray',
                        borderBottom: '1px solid lightgray',

                    }}
                    >
                        {Object.keys(cartItems)?.map((item, index) => {
                            totalPrice += cartItems[item].price*cartItems[item].quantity || 0
                            if (cartItems[item])
                                return <OrderContent price={cartItems[item].price} cartItems={cartItems} key={item} item={item} idx={index + 1} />
                        })}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Typography>Total Price</Typography>
                        <Typography>{`${totalPrice}$`}</Typography>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <Button variant='contained' color={'secondary'} onClick={() => {
                            handleClose()
                            alert("Order placed successfully.")
                        }}>Place Order</Button>
                    </div>
                </div>
            </div>
        </Modal>
        </>
    )
}

const OrderContent = ({ item, cartItems, idx, price }) => {
    const classes = useStyles()
    return (
        <div className={classes.orderList}>
            <Typography>{`${idx} . ${ToTitleCase(item)}`}</Typography>
            <Typography>{`${price}$`}</Typography>
            <Typography>{`${cartItems?.[item]?.['quantity'] || ''}`}</Typography>
        </div>
    )
}


export default Cart