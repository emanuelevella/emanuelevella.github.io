import React, { useState } from 'react'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${isMobile ? '100%' : '50%'};
`

const Title = styled.h1`
    font-family: 'Fjalla One', sans-serif;    
    color: ${ props => props.theme.text };;
`

const StockName = styled.span`
    font-family: 'Fjalla One', sans-serif;    
    color: rgba(245,0,87,255);
`
export default function MakeOrder({ stockToOrder }) {

    return (
        <Wrapper>
            <Title>Stock to Order: <StockName>{stockToOrder.name}</StockName></Title>
        </Wrapper>
    )
}