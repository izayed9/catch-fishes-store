import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import React from 'react';
import MenuBar from './MenuBar';
import SearchBar from './SearchBar';

const useStyles = makeStyles({
   headStyle:{
       flexGrow: 1,
   },
   positionTricks:{
       height: 95,
   }
  });


const Header =()=>{
    const classes = useStyles()
    return(
          <Container>
            <AppBar>
                <Toolbar>
                  <Typography variant='h6' className={classes.headStyle}> Contrast</Typography>
                  <SearchBar />
                  <MenuBar />
                </Toolbar>
            </AppBar>
            <div className={classes.positionTricks}></div>
          </Container>
    )
}
export default Header;
