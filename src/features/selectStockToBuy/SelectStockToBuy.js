import React, { useState } from 'react'
import styled from 'styled-components'
import Slider from 'react-smooth-range-input';
import { isMobile } from 'react-device-detect';

const Wrapper = styled.div`
    display: flex;
    flex-direction: ${isMobile ? 'column' : 'row'};;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 30px;
`
const StockWrapper = styled.div`
    display: flex;
    flex-direction: ${isMobile ? 'column' : 'column'};
`

const Label = styled.span`
    font-family: Roboto;
    color: ${props => props.theme.text};
    margin-top: 5px;
    margin-bottom: 5px;
`

export default function SelectStockToBuy({children, quantity, setQuantity, price }) {

    console.log(quantity)
    return (
        <Wrapper>
            <StockWrapper>
                {children}
                <Slider min={1} max={100} value={quantity} onChange={setQuantity} />
                <Label>Number of stocks</Label>
            </StockWrapper>
        </Wrapper>
    )

}