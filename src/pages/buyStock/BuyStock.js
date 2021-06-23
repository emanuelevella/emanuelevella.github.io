import React, { useState } from 'react'
import styled from 'styled-components'
import Grid from '../../features/grid/Grid'
import OrderHistory from '../../features/orderHistory/OrderHistory'
import SelectStockToOrder from '../../features/selectStockToOrder/SelectStockToOrder'
import MakeOrder from '../../features/makeOrder/MakeOrder'
import { isMobile } from 'react-device-detect';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: 100vh;
`
const GridWrapper = styled.div`
    display: flex;
    flex-direction: ${isMobile ? 'column' : 'row'};
    min-height: 500px;
    height: 100%;
    background-color: rgba(47,47,66,255);
`

const OrderWrapping = styled.div`
    display: flex;
    flex-direction: ${isMobile ? 'column' : 'row'};
`


export default function BuyStock() {
    const [gridData, setGridData] = useState({ data: [], tickValues: [], legend: [] })
    const [stockToOrder, setStockToOrder] = useState({})
    
    console.log(stockToOrder)

    return (
        <Wrapper>
            <OrderWrapping>
                <SelectStockToOrder onSelect={setGridData} stockToOrder={setStockToOrder}/>
                <MakeOrder stockToOrder={stockToOrder}/>
            </OrderWrapping>
            <GridWrapper>
                <Grid dataSet={ gridData } />
                <OrderHistory/>
            </GridWrapper>
        </Wrapper>
    )
}