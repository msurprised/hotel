import React from 'react';
import {SlideContainer, SlideImg, Name, Organisation, Description, ImgWrap, InfoWrap, EmptySlide,BgImage} from './SlideElements';


const ClientSlide = (slideData, isActive, onClickFunc) => {

    if (slideData === undefined) {
      return <EmptySlide isActive={isActive}></EmptySlide>
    }else{
  return (
    <SlideContainer isActive={isActive} onClick={onClickFunc}>
      <BgImage isActive={isActive} />
        <ImgWrap>
          <SlideImg  src={slideData.img}/>
        </ImgWrap>
        <InfoWrap>
          <Name isActive={isActive}>{slideData.name}</Name>
          <Organisation isActive={isActive}>{slideData.org}</Organisation>
          <Description isActive={isActive}>{slideData.info}</Description>
        </InfoWrap>
    </SlideContainer>
  )
}}

export default ClientSlide;