import React from 'react';
import { Button } from '../../shared';
import { mockProducts } from './mockProducts';
import { Container, ProductsWrapper } from './Products.styles';
const Products = () => {
  return (
    <Container>
      <ProductsWrapper>
        {mockProducts.map((product) => (
          <div key={product.id} className='product-item'>
            <img src={product.product_image} alt='' />
            <div className='info'>
              <p className='name'>{product.product_name}</p>
              <div className='bottom'>
                <span className='price'>{product.price} won</span>
                <span className='like_count'>
                  <img src='/assets/products/hearticon.png' alt='' />
                  <span>{product.like_count}</span>
                </span>
              </div>
            </div>
          </div>
        ))}
      </ProductsWrapper>
      <div className='btn-wrapper'>
        <Button>See more</Button>
      </div>
    </Container>
  );
};

export default Products;
