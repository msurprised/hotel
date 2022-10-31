import React, {useState} from 'react';
import { SliderContainer, SliderWrap, SliderNavigation, SliderBtn, ImgBtnWrap, Btn} from './SliderElements';
import {FiArrowLeft, FiArrowRight} from "react-icons/fi";

const Slider = ({dataList, slide}) => {

   const [slideIndex, setSlideIndex] = useState(1);

   const firstSlideData = dataList[slideIndex - 1];
   const secondSlideData = dataList[slideIndex];
   const thirdSlideData = dataList[slideIndex + 1];

   const goNext = () => {
      if (slideIndex === dataList.length - 1) {
        return
      }
       setSlideIndex(slideIndex + 1);
      };

   const goPrev = () => {
      if (slideIndex === 0) {
        return
      }
    setSlideIndex(slideIndex - 1);
    };

    const selectIndex = (event) => {
      const id = Number(event.target.dataset.id);
      setSlideIndex(id);
    };

  return (
    <SliderContainer>
      <SliderWrap id='sliderwrap'>
        <Btn onClick={goPrev}>
          <ImgBtnWrap>
            <FiArrowLeft/>
          </ImgBtnWrap>
        </Btn>
        {slide(firstSlideData,false,goPrev)}
        {slide(secondSlideData,true)}
        {slide(thirdSlideData,false,goNext)}
        <Btn onClick={goNext}><FiArrowRight/></Btn>
      </SliderWrap >
      <SliderNavigation>
        {dataList.map((data) => 
        <SliderBtn onClick={selectIndex} data-id={data.id} isActive={slideIndex === data.id ? true : false} key={data.id}>⃝</SliderBtn>)}
      </SliderNavigation>
    </SliderContainer>
  )
  }


  


export default Slider;