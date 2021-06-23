import React from 'react'
import styled from 'styled-components'
import { isMobile } from 'react-device-detect';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: ${isMobile ? '100%' : '50%'};
    margin-top: 20px;
    margin-bottom: 30px;
`

const Title = styled.span`
    font-family: 'Fjalla One', sans-serif;    
    color: ${ props => props.theme.text };
    font-size: 2rem;
`

const StockName = styled.span`
    font-family: 'Fjalla One', sans-serif;    
    color: rgba(245,0,87,255);
`

const Row = styled.div`
    display: flex;
    flex-direction: column;
    color: ${ props => props.theme.text };
`
const Col = styled.div`
    display: flex;
    margin-right: 6px;
`

const StatisticsWrapper = styled.span`
    margin-top: 10px;
`

const Category = styled.span`
    font-family: Roboto;
    display: flex;
    flex-direction: row;
    color: ${ props => props.theme.text };
`

const Label = styled.span`
    font-family: 'Fjalla One', sans-serif;    
    font-weight: 900;
    color: ${ props => props.theme.text };
`

const Data = styled.span`
    font-family: Roboto;
    color: ${ props => props.theme.text };
    margin-left: 6px;
`

const Change = styled.span`
    font-family: Roboto;
    color: ${props => props.change ? 'green' : 'red'};
    font-size: 0.7rem;
    margin-left: 5px;
`

const BuyButton = styled.input`
    background: #ec5990;
    background: #ec5990;
    color: white;
    text-transform: uppercase;
    border: none;
    border-radius: 10px;
    margin-top: 10px;
    padding: 20px;
    font-size: 16px;
    font-weight: 100;
    letter-spacing: 10px;
    min-width: 200px;
    transition: all 0.2s;
    &:active {
        background: #bf1650;
        cursor: pointer;
    }
`


export default function MakeOrder({ stockToOrder, quantityToOrder, makeOrder }) {
    return (
        <Wrapper>
            <Row>
                <Title>Stock to Order: <StockName>{stockToOrder ? stockToOrder.name : ''}</StockName></Title>
                <Data>Close statistics:</Data>
            </Row>
            {stockToOrder ? 
            <StatisticsWrapper>
                <Category>
                    <Col>
                        <Label>low: </Label>
                        <Data>{stockToOrder.lastDay.low}$</Data>
                    </Col>
                    <Label>High: </Label>
                    <Data>{stockToOrder.lastDay.high}$</Data>
                </Category>
                <Category>
                    <Label>Closing Price: </Label>
                        <Data>{stockToOrder.lastDay.close}$</Data>
                        <Change change={stockToOrder.lastDay.change > 0}>{stockToOrder.lastDay.changePercent > 0 ? '+' : '-'}{stockToOrder.lastDay.changePercent}%</Change>
                </Category>
                <Category>
                    <Label>Quantity: </Label>
                    <Data>{quantityToOrder}</Data>
                </Category>
                <Category>
                    <Label>Order price: </Label>
                    <Data>{(stockToOrder.lastDay.close * quantityToOrder).toFixed(2)}$</Data>
                </Category>
                <BuyButton type="submit" value="buy" onClick={() => makeOrder(stockToOrder)}/>
            </StatisticsWrapper>
            : ''}
        </Wrapper>
    )
}