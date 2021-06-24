import React from 'react'
import styled from 'styled-components'
import { selectPendingOrders } from '../../pages/order/ordersSlice'
import { useSelector, useDispatch } from 'react-redux';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    font-family: Roboto;
`
const Title = styled.span`
    margin-top: 10px;
    color: white;
    font-family: 'Fjalla One', sans-serif;    
`
const HistoryWrapper = styled.span`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
`
const Stock = styled.span`
    margin-top: 10px;
    color: white;
    font-family: Roboto;    

`

export default function OrderHistory() {
    const orderHistory = Array.from(Object.values(useSelector(selectPendingOrders)))
    console.log("order: ", orderHistory)
    return (
        <Wrapper>
            <Title>Order History</Title>
            <HistoryWrapper>
                {orderHistory.map(stock => 
                    <Stock>{stock.label} - {stock.quantity} - {stock.price}</Stock>
                )}
            </HistoryWrapper>
        </Wrapper>
    )
}