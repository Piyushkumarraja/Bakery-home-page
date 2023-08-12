import React from 'react'
import Cart from './Cart';

const Footer = (props) => {
    const { cartItems, setCartItems } = props
    
    return (
        <Cart cartItems={cartItems} setCartItems={setCartItems}/>        
    )
}

export default Footer