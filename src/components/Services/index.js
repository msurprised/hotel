import React from 'react';
import { ServicesContainer, ServicesH2, ServicesH3, ServiceCardsWrap, ServiseCard,
CardH4, CardP, CardImg} from './ServicesElements';
import service1 from '../../Images/service1.svg';
import service2 from '../../Images/service2.svg';
import service3 from '../../Images/service3.svg';
import service4 from '../../Images/service4.svg';
import service5 from '../../Images/service5.svg';
import service6 from '../../Images/service6.svg';

const Services = () => {
  return (
    <ServicesContainer>
        <ServicesH2>OUR SERVICES</ServicesH2>
        <ServicesH3>Hotel Facilities</ServicesH3>
        <ServiceCardsWrap>
            <ServiseCard>
                <CardH4>Pick up & Drop</CardH4>
                <CardP>It is a long established fact that a reader
                     will be distracted by the readable content of a page.</CardP>
                <CardImg src={service1}/>
            </ServiseCard>
            <ServiseCard>
                <CardH4>Parking Space</CardH4>
                <CardP>Lorem Ipsum is simply dummy text of the
                     printing and typesetting industry.</CardP>
                <CardImg src={service2}/>
            </ServiseCard>
            <ServiseCard>
                <CardH4>Room Services</CardH4>
                <CardP>It is a long established fact that a reader 
                    will be distracted by the readable content of a page.</CardP>
                <CardImg src={service3}/>
            </ServiseCard>
            <ServiseCard>
                <CardH4>Swimming Pool</CardH4>
                <CardP>Lorem Ipsum is simply dummy text of the
                     printing and typesetting industry.</CardP>
                <CardImg src={service4}/>
            </ServiseCard>
            <ServiseCard>
                <CardH4>Fibre Internet</CardH4>
                <CardP>It is a long established fact that a 
                    reader will be distracted by the readable content of a page.</CardP>
                <CardImg src={service5}/>
            </ServiseCard>
            <ServiseCard>
                <CardH4>Breakfast</CardH4>
                <CardP>Lorem Ipsum is simply dummy text of the 
                    printing and typesetting industry.</CardP>
                <CardImg src={service6}/>
            </ServiseCard>
        </ServiceCardsWrap>
    </ServicesContainer>
  )
}

export default Services;