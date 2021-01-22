import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import MenuBar from './MenuBar';
import SearchBar from './SearchBar';

const useStyles = makeStyles({
   headStyle:{
       flexGrow: 1,
   }
  });


const Header =()=>{
    const classes = useStyles()
    return(
            <AppBar>
                <Toolbar>
                  <Typography variant='h6' className={classes.headStyle}> Contrast</Typography>
                  <SearchBar />
                  <MenuBar />
                </Toolbar>
            </AppBar>
    )
}
export default Header;
