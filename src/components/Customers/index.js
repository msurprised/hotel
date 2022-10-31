import React from 'react';
import {CustomersContainer, ContentWrap, CustH2, CustP} from './CustomersElements';
import Slider from '../Slider';
import { dataList } from '../../Data/ClientsSliderData';
import ClientSlide from '../ClienSlide';

const Customers = () => {
  return (
    <CustomersContainer>
        <ContentWrap>
            <CustH2>Our Happy Customers</CustH2>
            <CustP>Know about our clients, we are a woldwide corporate brand</CustP>
            <Slider dataList={dataList} slide={ClientSlide}/>
        </ContentWrap>
    </CustomersContainer>
  )
}

export default Customers;