import React, { useState } from 'react'
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
    const [gridData, setGridData] = useState({ data: [], tickValues: [], legend: [] })

    return (
        <Wrapper>
            <Title>Order History</Title>
        </Wrapper>
    )
}