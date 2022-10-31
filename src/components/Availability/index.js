import React, {useState, useEffect} from 'react';
import {AvailContainer, AvailTitle, AvailH1, AvailP, ContentWrap, ImgSection,
Img, FormWrap, FormElement, LabelIcon, LabelInfo, InputWrap, Icon,
FormBtn, Input, CalendarWrap, RoomLi, RoomUl} from './AvailabalityElements';
import img from '../../Images/towers.svg';
import calendar from '../../Images/input_cal.svg';
import arrow from '../../Images/input_arrow.svg';
// import dayjs from 'dayjs';
import Calendar from './Calendar';


const Availability = () => {

    const [dateStart, setDateStart] = useState();
    const [dateEnd, setDateEnd] = useState();
    const [roomAmount, setRoomAmount] = useState('1 room');
    const [isStartInputActive, setIsStartInputActive] = useState(false);
    const [isEndInputActive, setIsEndInputActive] = useState(false);
    const [isRoomInputActive, setIsRoomInputActive] =useState(false);

    const changeStartCalendarState = () => {
        setIsEndInputActive(false);
        setIsRoomInputActive(false);
        setIsStartInputActive(!isStartInputActive);
    };

    const changeEndCalendarState = () => {
        setIsStartInputActive(false);
        setIsRoomInputActive(false);
        setIsEndInputActive(!isEndInputActive);
    };

    const changeRoomListState = () => {
        setIsEndInputActive(false);
        setIsStartInputActive(false);
        setIsRoomInputActive(!isRoomInputActive);
    }

    const checkRoomInputValue = (event) => {
        setRoomAmount(event.target.textContent);
        changeRoomListState();
    }

    
    useEffect(() => {
        const startInput = document.getElementById('dateStart');

        if (dateStart !== undefined){
            startInput.value = dateStart.format('ddd, D MMM, YYYY');
        };

    },[dateStart]);

    useEffect(() => {
        const startInput = document.getElementById('dateEnd');

        if (dateEnd !== undefined){
            startInput.value = dateEnd.format('ddd, D MMM, YYYY');
        };

    },[dateEnd]);

    useEffect(() => {
        const roomInput = document.getElementById('guests');
        roomInput.value = roomAmount;
    }, [roomAmount]);

  return (
    <AvailContainer>
            <AvailTitle>
                <AvailH1>Check Availability</AvailH1>
                <AvailP>It is a long established fact that a reader will be distracted<br/> by the readable content of a page.</AvailP>
            </AvailTitle>
            <ContentWrap>
                <ImgSection>
                    <Img src={img} alt='towers'/>
                </ImgSection>
                    <FormWrap>
                        <FormElement>
                            <LabelInfo for='dateStart'>CHECK-IN</LabelInfo>
                            <InputWrap>
                                <LabelIcon for='dateStart'>
                                    <Icon src={calendar}/>
                                </LabelIcon>
                                <Input 
                                id='dateStart'
                                readOnly
                                placeholder='Enter Arrival Date'
                                onFocus={changeStartCalendarState}/>
                                    <CalendarWrap isInputActive={isStartInputActive}>
                                        <Calendar 
                                        dateChanger={setDateStart}
                                        isInputActive={setIsStartInputActive}/>
                                    </CalendarWrap>
                            </InputWrap>
                        </FormElement>
                        <FormElement>
                            <LabelInfo for='dateEnd'>CHECK-OUT</LabelInfo>
                            <InputWrap>
                                <LabelIcon for='dateEnd'>
                                    <Icon src={calendar}/>
                                </LabelIcon>
                                <Input
                                id='dateEnd'
                                readOnly
                                placeholder='Enter Departure Date'
                                onFocus={changeEndCalendarState}/>
                                    <CalendarWrap isInputActive={isEndInputActive}>
                                        <Calendar 
                                        dateChanger={setDateEnd}
                                        isInputActive={setIsEndInputActive}
                                        />
                                    </CalendarWrap>
                            </InputWrap>
                        </FormElement>
                        <FormElement>
                            <LabelInfo for='guests'>GUESTS:</LabelInfo>
                            <InputWrap id='room'>
                                <LabelIcon for='guests'>
                                    <Icon src={arrow}/>
                                </LabelIcon>
                                <Input
                                id='guests'
                                readOnly
                                placeholder='Enter amount of rooms'
                                onFocus={changeRoomListState}/>
                                <RoomUl
                                id='roomUl' 
                                isInputActive={isRoomInputActive}>
                                <RoomLi onClick={checkRoomInputValue}>1 room</RoomLi>
                                <RoomLi onClick={checkRoomInputValue}>2 rooms</RoomLi>
                                <RoomLi onClick={checkRoomInputValue}>3 rooms</RoomLi>
                            </RoomUl>
                            </InputWrap>
                        </FormElement>
                        <FormBtn>CHECK AVAILABILITY</FormBtn>
                    </FormWrap>
                    
            </ContentWrap>
    </AvailContainer>
  )
}

export default Availability;