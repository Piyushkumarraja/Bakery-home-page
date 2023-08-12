import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    height: '110px',
    width: '100%',
    '&:hover': {
      transform: 'scale(1.01)',
      boxShadow:
        '0 13px 40px -5px hsla(240, 30.1%, 28%, 0.12), 0 8px 32px -8px hsla(0, 0%, 0%, 0.14), 0 -6px 32px -6px hsla(0, 0%, 0%, 0.02)',
    },
    borderRadius: '5px',
    gap: '16px',
    alignItems: 'center',
    paddingLeft:'8px'
  },
  img: {
    aspectRatio: props => props.aspectRatio || 1.2,
    // width: props => props.width || '100%',
    height: props => props.height || '100%',
  },
  info: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',

  }
});

const CategoryCard = (props) => {
  const { title, subtitle,src,...rest } = props;
  const classes = useStyles(props)
  return (
    <div className={classes.root}>
       <img
            className={classes.img}
            src={src}
            alt={title}
            {...rest}
      />
      <div className={classes.info}>
        <div style={{fontFamily:`'Pacifico', cursive`, fontSize:'32px'}}>{title}</div>
        <Typography>{subtitle}</Typography>
      </div>
    </div>
  );
};

export default CategoryCard;
