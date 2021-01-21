import { Avatar, Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AssignmentIcon from '@material-ui/icons/Assignment';
import React from 'react';


const useStyles = makeStyles({
   paperStyle:{
       width:300,
       padding:"20px 30px",
       margin: "20px auto" ,
   },
   green:{
    color: '#fff',
    backgroundColor: '#1bbd7e',
   },
   headerStyle:{
       margin:0,
   },
   marginTop:{
       marginTop: "20px"
   }

  });

const SignupFrom =()=>{
    const classes = useStyles();
    return (
        <Grid >
            <Paper elevation={20} className={classes.paperStyle}>
                <Grid align='center'>
                  <Avatar className={classes.green}>
                     <AssignmentIcon />
                   </Avatar>
                   <h2 className={classes.headerStyle}>Sign Up!</h2>
                   <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form>
                   <TextField fullWidth label='Name' placeholder="Enter your name" />
                   <TextField fullWidth label='Email' placeholder="Enter your email" />
                   <TextField fullWidth label='Phone Number' placeholder="Enter your phone number" />
                    <TextField fullWidth label='Password' placeholder="Enter your password"/>
                    <TextField fullWidth label='Confirm Password' placeholder="Confirm your password"/>
                    <Button variant="contained" color="secondary" type='submit' className={classes.marginTop}>Sign up!</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default SignupFrom;