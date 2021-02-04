import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import React from 'react';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        marginTop: theme.spacing(2),
      },
    },
  }));

const PaginationRounded = (props) => {
  const classes = useStyles();


    return (
        <div className={classes.root}>
            <Pagination count={10} variant="outlined" shape="rounded" />
        </div>
    )
}

export default PaginationRounded;
