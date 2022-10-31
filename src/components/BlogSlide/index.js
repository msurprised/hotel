import React from 'react';
import {SlideContainer, SlideImg, ContentWrap, Category, EmptySlide, CategoryImg, ImgWrap, InfoWrap,
InfoH3, Descriprion, Link} from './BlogSlideElements';
import blogCategory from '../../Images/blogCategory.svg';
import blogComments from '../../Images/blogComments.svg';
import {BsArrowRight} from 'react-icons/bs';


const BlogSlide = (slideData, isActive, onClickFunc) => {

    if (slideData === undefined) {
        return <EmptySlide isActive={isActive}></EmptySlide>
      }else{
    return (
      <SlideContainer isActive={isActive} onClick={onClickFunc}>
          <ImgWrap>
            <SlideImg src={slideData.img}/>
          </ImgWrap>
          <ContentWrap>
            <InfoWrap>
                <Category>
                    <CategoryImg src={blogCategory} />
                    {slideData.type}
                </Category>
                <Category>
                    <CategoryImg src={blogComments}/>
                    {slideData.comment} comments
                </Category>
            </InfoWrap>
            <InfoH3>{slideData.title}</InfoH3>
            <Descriprion>{slideData.info}</Descriprion>
            <Link>Read More <BsArrowRight /></Link>
          </ContentWrap>
      </SlideContainer>
    )
  }
}

export default BlogSlide;