import { Button } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import React from 'react';
import { Link } from 'react-router-dom';

const MenuBar =() => {
      return(
        <div className="button">
            <Button color='inherit' component={Link} to='/'>Home</Button>
            <Button color='inherit' component={Link} to='/cart' endIcon={<AddShoppingCartIcon>Cart</AddShoppingCartIcon>}>Cart</Button>
            <Button color='inherit' component={Link} to='/signup'>Signup</Button>
        </div>
      )
}

export default MenuBar