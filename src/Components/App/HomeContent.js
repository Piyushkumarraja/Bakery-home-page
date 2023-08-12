import React, { useState } from "react";
import { Flexbox } from "../../styled-component";
import Card from "./Cards/Card";
import CategoryCard from "./Cards/CategoryCard";
import { makeStyles } from '@material-ui/core/styles';
import { PASTRY, burger } from "../../images/images";
import Footer from "./Footer/Footer";
import Grid from '@material-ui/core/Grid';
import { BakeryItems } from "../../Data/ItemData";

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    gap: '36px',
    height: 'calc(100vh - 270px)',
  },
  product: {
    display: 'flex',
    gap: '16px',
    alignItems: 'center',
    justifyContent: 'center',
    height: '200px',
    border: '1px solid lightgray',
    margin: '-100px 10% 0 10%',
    zIndex: 100,
    backgroundColor: 'white',
    padding: '16px',
    boxShadow: '2px 2px 8px rgba(0,0,0,0.4)',
    overflow:'auto'
  },
  cards: {
    display: 'flex',
    gap: '10px',
    justifyContent:'center',
  },
  newProduct: {
    display:'flex',
    border: '1px solid rgba(0,0,0,0.06)',
    width: '180px',
    height: '100px',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto',
    fontFamily: `Tilt Prism`,
    fontSize: `18px`,
    fontWeight:'bold'
  },
  footer: {
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    height: '50px',
    borderTop:'1px solid lightgray'
  }
});

const HomeContent = () => {
  const classes = useStyles()
  const [cartItems, setCartItems] = useState({})

  return (
    <div className={classes.root}>
      <div className={classes.product}>
        <CategoryCard src={burger} height={'90px'} title={"Product"}  subtitle={"Description"}/>
        <CategoryCard src={burger} height={'90px'} title={"Cakes"} subtitle={"Description"}/>
        <CategoryCard src={burger} height={'90px'} title={"Recipes"} subtitle={"Description"}/>
      </div>
      <div className={classes.newProduct}>
        NEW PRODUCTS
      </div>
      <div style={{height:'calc(100vh - 50%)', overflow:'auto', width:'70%', margin:'0 auto'}}>
        <Grid style={{padding:'0 40px'}} container spacing={4}>
          {BakeryItems.map(item => (
            <Grid key={item} item md={4} lg={3} sm={6} xms={12}>
              <Card
                cartItems={cartItems}
                setCartItems={setCartItems}
                src={item.image}
                productName={item.item}
                price={item.price}
                height={'150px'} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className={classes.footer}>
        <Footer cartItems={cartItems||{}} setCartItems={setCartItems} />
      </div>
    </div>
  );
};

export default HomeContent;
