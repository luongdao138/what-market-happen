import React from 'react';
import { Button } from '../../shared';
import { BrandItem, IssueWrapper, Item } from './Issue.styles';

const brands = [
  {
    id: 1,
    name: 'B Brand',
    isHot: true,
    image: '/assets/issue/news-img-03.png',
  },
  {
    id: 2,
    name: 'C Brand',
    isHot: false,
    image: '/assets/issue/news-img-03.png',
  },
  {
    id: 3,
    name: 'D Brand',
    isHot: false,
    image: '/assets/issue/news-img-04.png',
  },
  {
    id: 4,
    name: 'E Brand',
    isHot: false,
    image: '/assets/issue/news-img-05.png',
  },
];

const Issue = () => {
  return (
    <IssueWrapper>
      <img
        src='/assets/issue/news-object-03.png'
        alt=''
        className='new-object-3'
      />
      <img
        src='/assets/issue/news-object-02.png'
        alt=''
        className='new-object-2'
      />
      <img
        src='/assets/issue/news-object-05.png'
        alt=''
        className='new-object-5'
      />
      <div className='top'>
        <p className='big-title'>Happened's Issue</p>
        <p className='small-title'>
          모바일에 최적화된 비디오를 단 몇 분 만에 제작해보세요. 디자이너가
          아니더라도, 모든 팀에서
          <br /> 다듬을 수 있습니다. 브랜드의 성공을 위한 첫 걸음을
          내딛어보세요. 비디오를 단 몇 분 만에 제작해보세요.
        </p>
        <Button>See more</Button>
      </div>
      <div className='main'>
        <div className='item whpn'>
          <p>
            whpn
            <br />
            issue
          </p>
          <img
            className='main-img'
            src='/assets/issue/news-img-01.png'
            alt=''
          />
          <img
            className='icon-img'
            src='/assets/issue/news-object-03-2.png'
            alt=''
          />
        </div>
        {brands.map((brand, index) => (
          <BrandItem className='item brand' key={brand.id}>
            <div className='brand-top'>
              <p className='name'>{brand.name}</p>
            </div>
            <div className='brand-bottom'>
              <img src={brand.image} alt='' />
            </div>
            {brand.isHot && (
              <img
                className='hot'
                src='/assets/issue/news-object-04.png'
                alt=''
              />
            )}
          </BrandItem>
        ))}
      </div>
    </IssueWrapper>
  );
};

export default Issue;
