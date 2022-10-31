import React from 'react';
import Slider from '../Slider';
import {BlogContainer, BlogWrap, BlogH2, BlogP} from './BlogElements';
import {dataList} from '../../Data/NewsSlliderData';
import BlogSlide from '../BlogSlide';

const Blog = () => {
  return (
    <BlogContainer>
      <BlogWrap>
        <BlogH2>HOTEL BLOG</BlogH2>
        <BlogP>Our News</BlogP>
        <Slider dataList={dataList} slide={BlogSlide}/>
      </BlogWrap>
    </BlogContainer>
  )
}

export default Blog;