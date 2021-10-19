import styled from 'styled-components';
import { emphasis, text, title, koreanText } from '../../shared/font-theme';

export const VideoWrapper = styled.div`
  padding: 60px 0 120px 0;
  position: relative;
  overflow: hidden;
  .side-image {
    position: absolute;
  }

  .video-05 {
    top: 0;
    left: 14%;
    width: 60px;

    @media (max-width: 960px) {
      width: 30px;
    }
  }

  .group-1 {
    position: absolute;
    top: 7%;
    z-index: 1;
    right: 12%;
    @media (max-width: 660px) {
      top: 3%;
      z-index: 1;
      right: 18%;
    }
  }

  .group-2 {
    position: absolute;
    right: 200px;
    bottom: 28%;
    @media (max-width: 960px) {
      right: 135px;
      bottom: 34%;
    }
    @media (max-width: 450px) {
      right: 38px;
      bottom: 18%;
    }
  }

  .video-08 {
    width: 241px;
    z-index: 2;
    @media (max-width: 960px) {
      width: 150px;
    }
    @media (max-width: 450px) {
      width: 60px;
    }
  }
  .video-09 {
    width: 162px;
    top: -120px;
    right: -290px;
    @media (max-width: 960px) {
      top: -85px;
      width: 180px;
    }
    @media (max-width: 450px) {
      width: 60px;
      top: -34px;
      right: -81px;
    }
  }

  .video-06 {
    width: 50px;
    z-index: 2;
    z-index: 2;
    bottom: -100px;
    left: -30px;

    @media (max-width: 960px) {
      width: 30px;
      z-index: 2;
      bottom: -59px;
      left: -16px;
    }
    @media (max-width: 450px) {
      bottom: -44px;
      left: -13px;
      width: 20px;
    }
  }
  .video-07 {
    z-index: 1;
    width: 70px;
    @media (max-width: 960px) {
      width: 40px;
    }
    @media (max-width: 450px) {
      width: 30px;
    }
  }

  .video-04 {
    width: 240px;
    z-index: 2;
    left: -135px;
    top: 15%;

    @media (max-width: 960px) {
      left: -100px;
      width: 180px;
      top: 10%;
    }
    @media (max-width: 450px) {
      left: -33px;
      width: 60px;
      top: 8%;
    }
  }

  .top {
    margin-bottom: 40px;
    text-align: center;
    position: relative;
    z-index: 100;

    .big-title {
      ${title('30px', '--text-dark')};
      margin-bottom: 15px;
      text-transform: uppercase;
      letter-spacing: 5px;
    }
    .small-title {
      ${text('14px', '--text-dark')};
      line-height: 25px;
      margin-bottom: 30px;
    }
    @media (max-width: 720px) {
      .big-title {
        ${emphasis('23px', '--text-dark')};
      }
      .small-title {
        ${text('8px', '--text-dark')};
        line-height: 20px;
      }
    }
    @media (max-width: 550px) {
      .big-title {
        ${emphasis('15px', '--text-dark')};
      }
      .small-title {
        line-height: 15px;
      }
    }
    @media (max-width: 450px) {
      .big-title {
        ${emphasis('12px', '--text-dark')};
        margin-bottom: 20px;
        letter-spacing: 3px;
      }
      .small-title {
        ${text('8px', '--text-dark')};
        line-height: 12px;
      }
    }
  }

  .bottom {
    width: 950px;
    max-width: 95%;
    margin: auto;
    .video-img {
      position: relative;
      z-index: 100;
      width: 100%;
    }
  }
`;
