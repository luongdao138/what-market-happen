import styled from 'styled-components';
import { text, emphasis, semiTitle } from '../../shared/font-theme';
export const Container = styled.div`
  .btn-wrapper {
    display: flex;
    justify-content: center;
    margin: 30px 0 50px 0;
  }
`;
export const ProductsWrapper = styled.div`
  width: 1100px;
  max-width: 95%;
  margin: auto;
  display: grid;
  padding: 60px 0 0 0;
  gap: 12px;

  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  @media (max-width: 450px) {
    padding: 60px 40px 0 40px;
  }

  .product-item {
    margin-bottom: 25px;
    & > img {
      margin-bottom: 10px;
      width: 100%;
      height: 200px;
      object-fit: cover;
    }

    .info {
      .name {
        ${semiTitle('13px')};
        margin-bottom: 10px;
      }
      .bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .price {
          ${text('12px')};
        }
        span.like_count {
          display: flex;
          align-items: center;
          img {
            margin-right: 4px;
            width: 16px;
          }
          span {
            ${text('12px', 'var(--text-semiLight)')};
          }
        }
      }
    }
  }
`;
