import styled from 'styled-components';
import { emphasis, text, title, koreanText } from '../../shared/font-theme';

export const IssueWrapper = styled.div`
  background-color: var(--primary-main);
  padding: 60px 0;
  position: relative;

  .new-object-3 {
    position: absolute;
    width: 60px;
    top: 20px;
    right: 40px;
    @media (max-width: 660px) {
      width: 30px;
    }
    @media (max-width: 450px) {
      display: none;
    }
  }
  .new-object-2 {
    position: absolute;
    width: 70px;
    top: 100px;
    right: 40px;
    @media (max-width: 660px) {
      width: 35px;
      top: 60px;
    }
    @media (max-width: 450px) {
      display: none;
    }
  }
  .new-object-5 {
    z-index: 2;
    position: absolute;
    width: 70px;
    bottom: 30px;
    right: 230px;

    @media (max-width: 960px) {
      display: none;
    }
  }

  .main {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
    .item {
      height: 310px;
      position: relative;
    }

    .item.whpn {
      background-color: var(--secondary-main);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
        ${emphasis('30px', '#110e03')};
        margin-bottom: 40px;
        text-transform: uppercase;
        line-height: 30px;
        text-align: center;
      }
      img.main-img {
        width: 80px;
      }

      img.icon-img {
        position: absolute;
        right: 0;
        width: 80px;
        bottom: -40px;
        z-index: 2;

        @media (max-width: 450px) {
          width: 60px;
          bottom: -30px;
        }
      }
    }

    .item.brand {
      cursor: pointer;
      :hover .brand-top {
        background-color: var(--secondary-main);
      }
      .hot {
        position: absolute;
        width: 60px;
        top: -18px;
      }
      .brand-top {
        transition: all 0.25s ease-in-out;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        ${emphasis('18px', 'var(--text-contrastText)')};
        text-transform: uppercase;
        background-color: var(--bg-secondary);
        border: 2px solid var(--bg-secondary);
        border-bottom: none;
      }
      .brand-bottom {
        img {
          width: 100%;
          height: 270px;
        }
      }
    }

    @media (max-width: 480px) {
      width: 95%;
      margin: auto;
      .item {
        margin-bottom: 30px;
        :last-child {
          margin-bottom: 0;
        }
      }
    }
  }

  .top {
    text-align: center;
    margin-bottom: 60px;
    position: relative;
    z-index: 100;

    .big-title {
      ${title('30px', '#110e03')};
      margin-bottom: 15px;
      text-transform: uppercase;
      letter-spacing: 5px;
    }
    .small-title {
      ${koreanText('14px', '#110e03')};
      line-height: 25px;
      margin-bottom: 30px;
    }
    @media (max-width: 720px) {
      .big-title {
        ${emphasis('23px', '#110e03')};
        margin-bottom: 10px;
      }
      .small-title {
        ${koreanText('8px', '#110e03')};
        line-height: 20px;
      }
    }
    @media (max-width: 550px) {
      .big-title {
        ${emphasis('15px', '#110e03')};
        margin-bottom: 10px;
      }
      .small-title {
        line-height: 15px;
      }
    }
    @media (max-width: 450px) {
      .big-title {
        ${emphasis('12px', '#110e03')};
        margin-bottom: 5px;
        letter-spacing: 3px;
      }
      .small-title {
        ${koreanText('6px', '#110e03')};
        line-height: 12px;
      }
    }
  }
`;

export const BrandItem = styled.div``;
