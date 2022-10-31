import React from 'react'
import {BannerContainer, BannerContent, Video, CloseBtn} from './VideBannerElements';
import bannerVideo from '../../Videos/video_banner.mp4';

const VideoBanner = ({toggle, isVideoBannerOpen}) => {
  return (
    <BannerContainer isVideoBannerOpen={isVideoBannerOpen}>
        <BannerContent isVideoBannerOpen={isVideoBannerOpen}>
            <CloseBtn onClick={toggle}>╳</CloseBtn>
            <Video src={bannerVideo} controls autoPlay/>
        </BannerContent>
    </BannerContainer>
  )
}

export default VideoBanner