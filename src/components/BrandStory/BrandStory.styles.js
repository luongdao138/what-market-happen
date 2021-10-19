import styled from 'styled-components';
import { emphasis, text, title, koreanText } from '../../shared/font-theme';

export const BrandStoryWrapper = styled.div`
  background-color: #0565bb;
  padding: 60px 0 80px 0;
  position: relative;
  overflow: hidden;
  .brand-image {
    position: absolute;
    @media (max-width: 660px) {
      display: none;
    }
  }

  .object-4 {
    width: 150px;
    right: -50px;
    bottom: 167px;

    @media (max-width: 960px) {
      width: 100px;
    }
  }

  .object-6 {
    width: 110px;
    bottom: 92px;
    z-index: 2;
    @media (max-width: 960px) {
      width: 70px;
    }
  }

  .object-7 {
    width: 100px;
    bottom: 92px;
    z-index: 1;
    left: 110px;
    @media (max-width: 960px) {
      width: 60px;
    }
  }

  .object-5 {
    right: -12px;
    width: 214px;
    bottom: 92px;
    z-index: 2;
    @media (max-width: 960px) {
      width: 150px;
    }
  }
  .object-2 {
    z-index: 1;
    width: 80px;
    right: 118px;
    top: 25px;
    @media (max-width: 960px) {
      width: 50px;
    }
  }
  .object-3 {
    z-index: 2;
    right: 80px;
    width: 80px;
    top: 50px;
    @media (max-width: 960px) {
      width: 50px;
    }
  }
  .object-1 {
    width: 100px;
    top: 50px;
    left: 20px;
    z-index: 1;
    @media (max-width: 960px) {
      width: 70px;
    }
  }

  .content {
    width: 1100px;
    max-width: 95%;
    margin: auto;
    position: relative;
  }

  .top {
    text-align: center;
    margin-bottom: 35px;
    position: relative;
    z-index: 100;
    .big-title {
      ${title('30px', 'var(--primary-text)')};
      margin-bottom: 15px;
      text-transform: uppercase;
      letter-spacing: 5px;
    }
    .small-title {
      ${koreanText('14px', 'var(--primary-text)')};
      line-height: 25px;
    }
    @media (max-width: 720px) {
      .big-title {
        ${emphasis('23px', 'var(--primary-text)')};
        margin-bottom: 10px;
      }
      .small-title {
        ${koreanText('8px', 'var(--primary-text)')};
        line-height: 20px;
      }
    }
    @media (max-width: 550px) {
      .big-title {
        ${emphasis('15px', 'var(--primary-text)')};
        margin-bottom: 10px;
      }
      .small-title {
        line-height: 15px;
      }
    }
    @media (max-width: 450px) {
      .big-title {
        ${emphasis('12px', 'var(--primary-text)')};
        margin-bottom: 5px;
        letter-spacing: 3px;
      }
      .small-title {
        ${koreanText('6px', 'var(--primary-text)')};
        line-height: 12px;
      }
    }
  }

  .bottom-mobile {
    display: none;
    img.bg-mobile {
      width: 100%;
    }
    .info-mobile {
      background-color: #fff;
      border: 3px solid #020001;
      padding: 25px 20px;
      .main-title {
        text-transform: uppercase;
        ${emphasis('14px')}
      }

      .des {
        ${koreanText('12px')};
        line-height: 25px;
        margin: 15px 0;
      }

      @media (max-width: 660px) {
        padding: 10px 10px;
        .des {
          ${koreanText('10px')};
          line-height: 22px;
        }
      }
    }
    @media (max-width: 660px) {
      display: block;
    }
  }

  .bottom {
    width: 880px;
    margin: auto;
    position: relative;
    z-index: 100;
    @media (max-width: 660px) {
      display: none;
    }
    img.bg {
      width: 100%;
    }

    .info {
      position: absolute;
      left: 49%;
      top: 15px;
      bottom: 0;
      right: 0;
      padding: 25px 20px;
      .main-title {
        text-transform: uppercase;
        ${emphasis('14px')}
      }

      .des {
        ${koreanText('12px')};
        line-height: 25px;
        margin: 15px 0;
      }
      @media (max-width: 960px) {
        padding: 10px 10px;
        .des {
          ${koreanText('8px')};
          line-height: 19px;
          margin: 5px 0;
        }
      }
    }
    @media (max-width: 960px) {
      width: 600px;
    }
  }

  @media (max-width: 660px) {
    padding: 40px 0;
  }
`;
