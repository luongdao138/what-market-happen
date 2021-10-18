import React from 'react';
import { BestProductsWrapper } from './BestProducts.styles';

const bestProducts = [
  {
    label: '01',
    product_image: '/assets/best-products/best-image-01.png',
    product_name: 'How to create mobile-optimized',
  },
  {
    label: '02',
    product_image: '/assets/best-products/best-image-02.png',
    product_name: 'How to create mobile-optimized',
  },
  {
    label: '03',
    product_image: '/assets/best-products/best-image-03.png',
    product_name: 'How to create mobile-optimized',
  },
];

const BestProducts = () => {
  return (
    <BestProductsWrapper
      style={{ backgroundImage: 'url("/assets/bg/bes-bg.png")' }}
    >
      <div className='content'>
        <div className='top'>
          <p className='big-title'>Best product</p>
          <p className='small-title'>
            How to create mobile-optimized videos in minutes. Not a designer
            <br />
            every team makes a lot of videos Can be trimmed. Take the first
          </p>
        </div>
        <div className='main'>
          {bestProducts.map((product, index) => (
            <div key={index} className='product-item'>
              <img src={product.product_image} alt='' />
            </div>
          ))}
        </div>
      </div>
    </BestProductsWrapper>
  );
};

export default BestProducts;
