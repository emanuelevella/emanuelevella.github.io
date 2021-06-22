import React, { useState } from 'react'
import styled from 'styled-components'
import Grid from '../../features/grid/Grid'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: 100vh;
    background-color: rgba(47,47,66,255);
`


export default function BuyStock() {
    const [gridData, setGridData] = useState({ data: [], tickValues: [], legend: [] })

    return (
        <Wrapper>
            <Grid dataSet={ gridData } />
        </Wrapper>
    )
}