import React from 'react';
import { HomeContainer, HomeWrap, InfoSection, InfoContentWrap, InfoH1,
InfoDescriprion, BtnWrap, FirstBtn, SecondBtn, SecondBtnImg, Elipse5,
ImgSection, TowerImg, Elipse1, Elipse2, Elipse3, GraphSection, 
Elipse4, Payment, PaymentWrap} from './HomeElements';
import market from '../../Images/market.svg';
import tower from '../../Images/tower.svg';
import payment from '../../Images/payment.svg'
import { BsFillPlayCircleFill } from "react-icons/bs";

const Home = ({toggle}) => {
  return (
    <HomeContainer>
        <HomeWrap>
            <InfoSection>
                <InfoContentWrap>
                    <InfoH1>Discover a hotel
                        that defies a new
                        dimension of luxury.</InfoH1>
                    <InfoDescriprion>Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum
                        has been the industry's standard dummy.</InfoDescriprion>
                    <BtnWrap>
                        <FirstBtn>Get Started</FirstBtn>
                        <SecondBtn onClick={toggle}>
                            <SecondBtnImg>
                                <BsFillPlayCircleFill />
                            </SecondBtnImg>
                            Watch video
                        </SecondBtn>
                    </BtnWrap>
                </InfoContentWrap>
            </InfoSection>
            <ImgSection>
                <TowerImg src={tower} alt='tower'/>
                <Elipse5>
                <Elipse1/>
                <Elipse2 />
                <Elipse3 />
                <Elipse4 />
                </Elipse5>
                <PaymentWrap>
                    <Payment src={payment} alt='payment' />
                </PaymentWrap>
                <GraphSection src={market} alt='market'/>
            </ImgSection>
        </HomeWrap>
    </HomeContainer>
  )
}

export default Home