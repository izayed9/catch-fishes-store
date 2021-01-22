import { Container, Grid } from '@material-ui/core';
import React from 'react';
import Product from '../components/Product';
import products from '../dummy-data/sample-fishes';

const Products = () => {
  return (
    <Container maxWidth="lg" mt={4}>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid xs={12} sm={6} md={4} item>
            <Product {...product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Products;