import React from 'react';
import {NumContainer, NumsWrap, NumValue, Description, Num, Line} from './NumElements';

const NumSection = () => {
  return (
    <NumContainer>
            <NumsWrap>
                <Num>
                    <NumValue>302+</NumValue>
                    <Description>Room & Suites</Description>
                </Num>
                <Line/>
                <Num>
                    <NumValue>25</NumValue>
                    <Description>Room & Suites</Description>
                </Num>
                <Line/>
                <Num>
                    <NumValue>510+</NumValue>
                    <Description>Exceptional Food</Description>
                </Num>
                <Line/>
                <Num>
                    <NumValue>65</NumValue>
                    <Description>Destination</Description>
                </Num>
            </NumsWrap>
        </NumContainer>
  )
}

export default NumSection