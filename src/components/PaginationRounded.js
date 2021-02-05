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

const PaginationRounded = ({productPerPage, totalProducts, paginate}) => {
  const classes = useStyles();
  const pageNumber =[]
    for(let i=0; i<= Math.ceil(totalProducts / productPerPage); i++){
        pageNumber.push(i)
    }

    return (
          <div className={classes.root}>
            {pageNumber.map(number =>(
               <Pagination key={number} count={number} variant="outlined" shape="rounded"  onClick={() => paginate(number)} />
            ))}
          </div>
    )
}

export default PaginationRounded;
