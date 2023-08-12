import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from "@material-ui/core";
import CartButton from "../../CartButton/CartButton";
import { ToTitleCase } from "../../../services";

const useStyles = makeStyles({
  root: {
    aspectRatio: props => props.aspectRatio || 1.8,
    width: props => props.width || '100%',
    height: props => props.height || '100%',
  },
  productInfo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection:'column'
  },
  card:{
        display: 'flex',
        flexDirection: 'column',
        border: '1px solid lightgray',
        gap: '16px',
        height: '250px',
        width: '200px',
    justifyContent: 'space-between',
         '&:hover': {
      transform: 'scale(1.01)',
      boxShadow:
        '0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)',
    },
    }
});


const Card = (props) => {
  const {cartItems, setCartItems, src, title, productName, price, ...rest } = props
  const [item, setItem] = useState(0)
  const classes = useStyles(props)

  return (
    <div className={classes.card}>
         <img
            className={classes.root}
            src={src}
            alt={title}
            {...rest}
      />
      <div className={classes.productInfo}>
        <Typography color={'secondary'}>{ToTitleCase(productName)}</Typography>
        <Typography>{`$ ${price}`}</Typography>
        </div>
      <div style={{margin:'0 0 -20px 0', zIndex:100}}>
        {item === 0 ?
          <Button onClick={() => {
            setItem(item + 1)
            let selectedItem = {}
            selectedItem[productName] = {
              price,
              quantity:item+1
          }
            setCartItems({
              ...cartItems,
              ...selectedItem
            })
          }}
            style={{ backgroundColor: 'white' }}
            variant={'outlined'}
            color={'secondary'}>Add to cart</Button> :
          <CartButton
            productName={productName}
            cartItems={cartItems}
            setCartItems={setCartItems}
            setItem={setItem}
            item={item}
            price={price}
          />
          }
      </div>
   </div>
  );
};

export default Card;
