import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-family: Roboto
`
const Title = styled.span`
    margin-top: 10px;
    color: white
`

export default function OrderHistory() {

    return (
        <Wrapper>
            <Title>Order History</Title>
        </Wrapper>
    )
}