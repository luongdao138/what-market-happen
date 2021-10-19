import React from 'react';
import { BrandStoryWrapper } from './BrandStory.styles';
import { Button } from '../../shared';
const BrandStory = () => {
  return (
    <BrandStoryWrapper>
      <img
        className='brand-image object-4'
        src='/assets/brand/object-04.png'
        alt=''
      />
      <img
        className='brand-image object-5'
        src='/assets/brand/object-05.png'
        alt=''
      />
      <img
        className='brand-image object-2'
        src='/assets/brand/object-02.png'
        alt=''
      />
      <img
        className='brand-image object-3'
        src='/assets/brand/object-03.png'
        alt=''
      />
      <img
        className='brand-image object-6'
        src='/assets/brand/object-06.png'
        alt=''
      />
      <img
        className='brand-image object-7'
        src='/assets/brand/object-07.png'
        alt=''
      />
      <div className='content'>
        <img
          className='brand-image object-1'
          src='/assets/brand/object-01.png'
          alt=''
        />
        <div className='top'>
          <p className='big-title'>Brand story</p>
          <p className='small-title'>
            모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
            아니더라도, 모든 팀에서 <br />
            다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을 내딛어보세요.
            비디오를 단 몇 분 만에 제작해보세요.
          </p>
        </div>
        <div className='bottom'>
          <img className='bg' src='/assets/brand/window.png' alt='' />
          <div className='info'>
            <p className='main-title'>What Happened’s Brand story</p>
            <p className='des'>
              청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
              풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
              살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는
              이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지
              칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고 고행을
              끝에 설산에서 황금시대를 이상을 운다.
            </p>
            <Button>See more</Button>
          </div>
        </div>
        <div className='bottom-mobile'>
          <img className='bg-mobile' src='/assets/brand/img.png' alt='' />
          <div className='info-mobile'>
            <p className='main-title'>What Happened’s Brand story</p>
            <p className='des'>
              청춘이 있는 바이며, 말이다. 같지 노년에게서 어디 모래뿐일 무엇을
              풀이 옷을 봄바람이다. 새 천고에 놀이 내는 찾아 창공에 광야에서
              살았으며, 듣는다. 수 있는 긴지라 사는가 낙원을 웅대한 아니다. 내는
              이상 할지라도 피다. 피부가 불러 피고 인간의 타오르고 이성은 끝까지
              칼이다. 쓸쓸한 희망의 못할 것은 목숨을 수 그들을 아름답고 고행을
              끝에 설산에서 황금시대를 이상을 운다.
            </p>
            <Button>See more</Button>
          </div>
        </div>
      </div>
    </BrandStoryWrapper>
  );
};

export default BrandStory;
