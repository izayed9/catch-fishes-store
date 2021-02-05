import { Container, Grid } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
// import products from '../dummy-data/sample-fishes';
import PaginationRounded from '../components/PaginationRounded';
import Product from '../components/Product';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productPerPage] = useState(3)
  const endpoint = "http://localhost:3300/fishes";
  useEffect(() => {
    async function fetchFishesData(){
      const res = await fetch(`${endpoint}`);
      const fishData = await res.json();
      setProducts(fishData)
    }
    fetchFishesData();
  },[]);

  // Get Product
  const indexOfLastPost = currentPage * productPerPage;
  const indexOfFristPost = indexOfLastPost - currentPage;
  const currentProductshow = products.slice(indexOfFristPost, indexOfLastPost);

  console.log(products);
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return (
    <Container maxWidth="lg" mt={4}>
      <Grid container spacing={4}>
        {currentProductshow.map((product) => (
          <Grid xs={12} sm={6} md={4} item>
            <Product {...product} key={product.id}/>
          </Grid>
        ))}
      </Grid>
      <PaginationRounded productPerPage={productPerPage} totalProducts={products.length} paginate={paginate} />
    </Container>
  )
}

export default Products;