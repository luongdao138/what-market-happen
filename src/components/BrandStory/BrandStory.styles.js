import styled from 'styled-components';
import { emphasis, text, title, koreanText } from '../../shared/font-theme';

export const BrandStoryWrapper = styled.div`
  background-color: #0565bb;
  padding: 60px 0 80px 0;

  .content {
    width: 1100px;
    max-width: 95%;
    margin: auto;
  }

  .top {
    text-align: center;
    margin-bottom: 35px;
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
    width: 835px;
    margin: auto;
    position: relative;
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
