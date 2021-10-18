import styled from 'styled-components';
import { emphasis, text } from '../../shared/font-theme';

export const IntroWrapper = styled.div`
  margin-top: -10px;
  position: relative;
  .intro-img {
    width: 100%;
    object-fit: contain;
  }

  .content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 1100px;
    max-width: 95%;
    .big-title {
      ${emphasis('33px', 'var(--text-contrastText)')};
      margin-bottom: 20px;
      text-transform: uppercase;
      letter-spacing: 5px;
    }
    .small-title {
      ${text('14px', 'var(--text-contrastText)')};
      line-height: 25px;
    }

    @media (max-width: 720px) {
      .big-title {
        ${emphasis('23px', 'var(--text-contrastText)')};
        margin-bottom: 10px;
      }
      .small-title {
        line-height: 20px;
      }
    }
    @media (max-width: 550px) {
      .big-title {
        ${emphasis('15px', 'var(--text-contrastText)')};
        margin-bottom: 10px;
      }
      .small-title {
        ${text('10px', 'var(--text-contrastText)')};
        line-height: 15px;
      }
    }
    @media (max-width: 350px) {
      .big-title {
        ${emphasis('12px', 'var(--text-contrastText)')};
        margin-bottom: 5px;
        letter-spacing: 3px;
      }
      .small-title {
        ${text('6px', 'var(--text-contrastText)')};
        line-height: 12px;
      }
    }
  }
`;
