import React from 'react';
import { Button } from '../../shared';
import { VideoWrapper } from './Video.styles';

const Video = () => {
  return (
    <VideoWrapper>
      <img
        className='side-image video-05'
        src='/assets/what-happen/video-object-05.png'
        alt=''
      />
      <div className='group-1'>
        <img
          className='side-image video-06'
          src='/assets/what-happen/video-object-06.png'
          alt=''
        />
        <img
          className='side-image video-07'
          src='/assets/what-happen/video-object-07.png'
          alt=''
        />
      </div>
      <div className='group-2'>
        <img
          className='side-image video-08'
          src='/assets/what-happen/video-object-08.png'
          alt=''
        />
        <img
          className='side-image video-09'
          src='/assets/what-happen/video-object-09.png'
          alt=''
        />
      </div>
      <img
        className='side-image video-04'
        src='/assets/what-happen/video-object-04.png'
        alt=''
      />
      <div className='top'>
        <p className='big-title'>what happened</p>
        <p className='small-title'>
          How to create mobile-optimized videos in minutes. Not a designer,
          <br />
          every team makes a lot of videos Can be trimmed. Take the first
        </p>
        <Button>See more</Button>
      </div>
      <div className='bottom'>
        <img className='video-img' src='/assets/what-happen/video.png' alt='' />
      </div>
    </VideoWrapper>
  );
};

export default Video;
