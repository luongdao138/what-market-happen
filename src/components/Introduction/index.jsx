import React from 'react';
import { IntroWrapper } from './Introduction.styles';

const Introduction = () => {
  return (
    <IntroWrapper>
      <img src='/assets/bg/introduction-bg.png' alt='' className='intro-img' />
      <div className='content'>
        <p className='big-title'>What Happened!</p>
        <p className='small-title'>
          How to create mobile-optimized videos in minutes. Not a designer,
          <br />
          every team makes a lot of videos Can be trimmed. Take the first <br />{' '}
          step to your brand's success. How to create
          <br /> mobile-optimized videos in minutes.
        </p>
      </div>
    </IntroWrapper>
  );
};

export default Introduction;
