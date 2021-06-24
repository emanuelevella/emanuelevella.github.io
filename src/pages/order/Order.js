import React, { useState } from 'react'
import styled from 'styled-components'
import Chart from '../../features/chart/Chart'
import OrderHistory from '../../features/orderHistory/OrderHistory'
import SelectStockToOrder from '../../features/selectStockToOrder/SelectStockToOrder'
import MakeOrder from '../../features/makeOrder/MakeOrder'
import { isMobile } from 'react-device-detect';
import Toast, {orderSuccess, orderQuantityFail, orderPriceFail} from '../../features/toast/Toast'
import { useSelector, useDispatch } from 'react-redux';
import { add, remove, edit } from './ordersSlice'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: 100vh;
`
const ChartWrapper = styled.div`
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
    const [stockToOrder, setStockToOrder] = useState(null)
    const [chartData, setChartData] = useState({ data: [], tickValues: [], legend: [] })
    const [quantityToOrder, setQuantityToOrder] = useState(1)
    const dispatch = useDispatch()
    console.log(stockToOrder)

    const orderStockCallback = (stock) => {
        if(!stock) return
        const price = (quantityToOrder * stock.lastDay.close).toFixed(2)
        if(price > 1000000) {
            orderPriceFail()
            return 
        }
        if(quantityToOrder < 1 || quantityToOrder > 100) {
            orderQuantityFail() 
            return
        }
        const stockToOrder = {label: stock.label, quantity: quantityToOrder, price: price}
        dispatch(add(stockToOrder))
        orderSuccess()
    }

    return (
        <Wrapper>
            <Toast/>
            <OrderWrapping>
                <SelectStockToOrder onSelect={setChartData} stockToOrder={setStockToOrder} quantity={quantityToOrder} setQuantityToOrder={setQuantityToOrder}/>
                <MakeOrder stockToOrder={stockToOrder} quantityToOrder={quantityToOrder} makeOrder={orderStockCallback}/>
            </OrderWrapping>
            <ChartWrapper>
                <Chart dataSet={chartData} />
                <OrderHistory/>
            </ChartWrapper>
        </Wrapper>
    )
}