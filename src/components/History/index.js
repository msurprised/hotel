import React, {useState} from 'react';
import { BsFillPlayCircleFill } from "react-icons/bs";
import { BtnWrap, FirstBtn, SecondBtn, SecondBtnImg } from '../../components/HomeSection/HomeElements';
import {HistoryContainer, HistoryWrap, ContentSection, ContentWrap, HistoryH2, HistoryP,
VideoSection, BgImg, VideoBtnWrap, VideoBtn, BgImgWrap,VideoHistory, Video, CloseBtn} from './HistoryElements';
import bgImg from '../../Images/video_bg.png';
import videoBtn from '../../Images/video_btn.svg';
import video from '../..//Videos/video_banner.mp4'

const History = () => {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    const changeVideoDisplay = () => {
        setIsVideoOpen(!isVideoOpen);
    }

  return (
    <HistoryContainer>
        <HistoryWrap isVideoOpen={isVideoOpen}>
            <VideoHistory isVideoOpen={isVideoOpen}>
            <CloseBtn onClick={changeVideoDisplay}>╳</CloseBtn>
                <Video src={video} autoPlay loop controls/>
            </VideoHistory>
            <ContentSection isVideoOpen={isVideoOpen}>
                <ContentWrap>
                    <HistoryH2>Discover Our History</HistoryH2>
                    <HistoryP>Lorem Ipsum is simply dummy text of the printing and
                         typesetting industry. Lorem Ipsum has been the
                          industry's standard dummy.</HistoryP>
                    <HistoryP>There are many variations of passages of Lorem Ipsum
                         available, but the majority have suffered alteration in 
                         some form, by injected humour, or randomised words which
                          don't look even slightly believable.</HistoryP>
                    <BtnWrap>
                        <FirstBtn>Explore More</FirstBtn>
                        <SecondBtn onClick={changeVideoDisplay}>
                            <SecondBtnImg>
                                <BsFillPlayCircleFill />
                            </SecondBtnImg>
                            Watch video
                            </SecondBtn>
                    </BtnWrap>
                </ContentWrap>
            </ContentSection>
            <VideoSection isVideoOpen={isVideoOpen}>
                <BgImgWrap>
                    <BgImg src={bgImg} alt='hotel'/>
                </BgImgWrap>
                <VideoBtnWrap onClick={changeVideoDisplay}>
                    <VideoBtn src={videoBtn} alt='video_btn'/>
                </VideoBtnWrap>
            </VideoSection>
        </HistoryWrap>
    </HistoryContainer>
  )
}

export default History;