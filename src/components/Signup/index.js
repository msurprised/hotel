import React from 'react';
import {SignupContainer, SignupWrap, TitleContainer, SignupH2,
SignupP, Form, InputWrap, Input, InputBtn, BgArrowsImg1, BgArrowsImg2}
from './SignupComponents';
import arrows from '../../Images/bg_arrows_for_signup.svg';

const Signup = () => {
  return (
    <SignupContainer>
        <SignupWrap>
            <BgArrowsImg1 src={arrows}/>
            <BgArrowsImg2 src={arrows}/>
            <TitleContainer>
                <SignupH2>Stay in Touch</SignupH2>
                <SignupP>Signup to receive news and updates from our hotel.</SignupP>
            </TitleContainer>
            <Form>
                <InputWrap>
                    <Input type='email' placeholder='Enter Your Email Address'/>
                </InputWrap>
                <InputBtn >subscribe</InputBtn>
            </Form>
        </SignupWrap>
    </SignupContainer>

    )
}

export default Signup;