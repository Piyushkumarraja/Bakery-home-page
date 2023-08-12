import { Button } from "@material-ui/core"
import React from "react"


const CartButton = (props) => {
    const {price,productName, cartItems, setCartItems, width,height,item, setItem} = props
    return (
        <div style={{display:'flex', justifyContent:'center', height:height,width:width}}>
            <Button
                style={{ backgroundColor: 'white' }}
                onClick={() => {
                    setItem(item - 1)
                    let selectedItem = {}
             selectedItem[productName] = {
              price,
              quantity:item-1
          }
            setCartItems({
              ...cartItems,
              ...selectedItem
            })
                }}
                disabled={item === 0}
                variant={'outlined'}
                color={"secondary"}>-</Button>
            <div style={{display:'flex', justifyContent:'center',alignItems:'center',width:'20px',backgroundColor:'white'}}>{item}</div>
            <Button style={{ backgroundColor: 'white' }}
                onClick={() => {
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
                variant={'outlined'}
                color={'secondary'}>+</Button>
        </div>
    )
}

export default CartButton