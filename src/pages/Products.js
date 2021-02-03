import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Product from '../components/Product';
// import products from '../dummy-data/sample-fishes';

const Products = () => {
  const [products, setData] = useState([]);

  const endpoint = "http://localhost:3300/fishes";
  useEffect(() => {
    async function fetchFishesData(){
      const res = await fetch(`${endpoint}`);
      const fishData = await res.json();
      setData(fishData)
    }
    fetchFishesData();
  },[]);

  console.log(products);

  return (
    <Container maxWidth="lg" mt={4}>
      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid xs={12} sm={6} md={4} item>
            <Product {...product} key={product.id}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Products;