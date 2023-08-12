import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '200px',
    backgroundColor: '#E9CCA4',
    margin:'-15px'
  },
});

const AppBar = () => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      
   </div>
  );
};

export default AppBar;
