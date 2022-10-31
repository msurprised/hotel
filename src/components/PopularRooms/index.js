import React from 'react';
import {RoomsContainer, RoomCard, RoomH3, RoomImg, RoomInfo, RoomPrice, RoomsH2,
RoomsP, RoomsWrap, InfoData, InfoImg, RoomImgWrap, InfoSection, RoomData, Price, PriceText} from './PopularRoomsElements';
import room1 from '../../Images/room1.jpg';
import room2 from '../../Images/room2.jpg';
import room3 from '../../Images/room3.jpg';
import sqm_icon from '../../Images/sqm_icon.svg';
import bed_icon from '../../Images/bed_icon.svg';
import bath_icon from '../../Images/bath_icon.svg';


const PopularRooms = () => {
  return (
    <RoomsContainer>
        <RoomsH2>Our Most Popular Rooms</RoomsH2>
        <RoomsP>It is a long established fact that a reader will 
        be distracted<br/>  by the readable content of a page.</RoomsP>
        <RoomsWrap>
            <RoomCard>
                <RoomImgWrap>
                    <RoomImg src={room1}/>
                </RoomImgWrap>
                <RoomData>
                    <RoomH3>Deluxe Contrast Room</RoomH3>
                    <RoomInfo>
                        <InfoSection>
                            <InfoImg src={sqm_icon}/>
                            <InfoData>52 sqm</InfoData>
                        </InfoSection>
                        <InfoSection>
                            <InfoImg src={bed_icon}/>
                            <InfoData>2 Beds</InfoData>
                        </InfoSection>
                        <InfoSection>
                            <InfoImg src={bath_icon}/>
                            <InfoData>1 Bathroom</InfoData>
                        </InfoSection>
                    </RoomInfo>
                    <RoomPrice>
                        <Price>200$</Price>
                        <PriceText>/ Night</PriceText>
                    </RoomPrice>
                </RoomData>
            </RoomCard>
            <RoomCard>
            <RoomImgWrap>
                    <RoomImg src={room2}/>
                </RoomImgWrap>
                <RoomData>
                    <RoomH3>Luxery Twin Room</RoomH3>
                    <RoomInfo>
                        <InfoSection>
                            <InfoImg src={sqm_icon}/>
                            <InfoData>62 sqm</InfoData>
                        </InfoSection>
                        <InfoSection>
                            <InfoImg src={bed_icon}/>
                            <InfoData>3 Beds</InfoData>
                        </InfoSection>
                        <InfoSection>
                            <InfoImg src={bath_icon}/>
                            <InfoData>2 Bathrooms</InfoData>
                        </InfoSection>
                    </RoomInfo>
                    <RoomPrice>
                        <Price>250$</Price>
                        <PriceText>/ Night</PriceText>
                    </RoomPrice>
                </RoomData>
            </RoomCard>
            <RoomCard>
            <RoomImgWrap>
                    <RoomImg src={room3}/>
                </RoomImgWrap>
                <RoomData>
                    <RoomH3>Single Contrast Room</RoomH3>
                    <RoomInfo>
                        <InfoSection>
                            <InfoImg src={sqm_icon}/>
                            <InfoData>80 sqm</InfoData>
                        </InfoSection>
                        <InfoSection>
                            <InfoImg src={bed_icon}/>
                            <InfoData>4 Beds</InfoData>
                        </InfoSection>
                        <InfoSection>
                            <InfoImg src={bath_icon}/>
                            <InfoData>3 Bathrooms</InfoData>
                        </InfoSection>
                    </RoomInfo>
                    <RoomPrice>
                        <Price>280$</Price>
                        <PriceText>/ Night</PriceText>
                    </RoomPrice>
                </RoomData>
            </RoomCard>
        </RoomsWrap>
    </RoomsContainer>
  )
}

export default PopularRooms;