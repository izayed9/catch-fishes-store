import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { formatPrice } from '../helpers';

const useStyles = makeStyles({
  root: {
  },
  media: {
    height: 170,
  },
});

const Product = (props) => {
  const classes = useStyles();
  const { name, price, desc, image } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={image}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name} {formatPrice(price)}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Button variant="contained" color="secondary">
        Add to cart
      </Button>
      </CardActions>
    </Card>
  );
}

export default Product;