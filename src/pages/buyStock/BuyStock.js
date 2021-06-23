import React, { useState } from 'react'
import styled from 'styled-components'
import Grid from '../../features/grid/Grid'
import SelectStockToBuy from '../../features/selectStockToBuy/SelectStockToBuy'
import OrderHistory from '../../features/orderHistory/OrderHistory'
import { getStocksByName, getStockHistory } from '../../app/api'
import { mapObjectToGridData, yearsToDate } from '../../helpers/helpers'
import Select from '../../features/select/Select'

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    height: 100vh;
`
const GridWrapper = styled.div`
    display: flex;
    flex-direction: row;
    min-height: 500px;
    height: 100%;
    background-color: rgba(47,47,66,255);
`

export default function BuyStock() {
    const [gridData, setGridData] = useState({ data: [], tickValues: [], legend: [] })
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(1)

    const searchByStockName = async (input) => {
        const result = await getStocksByName(input);
        return result.map(stock => { return { label: stock.symbol, value: stock.symbol }; });
    }

    const handleSearchChange = (inputValue) => {
        populateGrid(inputValue)
    }

    const populateGrid = async (input) => {
        console.log("populate grid: ", input)
        if (!input) {
            setGridData({ data: [], tickValues: [], legend: [] })
            return
        }
        let stockHistory = await getStockHistory(input.value)
        const newGridData = mapObjectToGridData(stockHistory)
        console.log("stockHistory: ", stockHistory)
        newGridData.tickValues = yearsToDate(newGridData.tickValues)
        setGridData(newGridData)
    }

    return (
        <Wrapper>
            <SelectStockToBuy quantity={quantity} onChangeQuantity={setQuantity} price={price}>
                <Select label="Stock to buy" subtitle="Buy with the last close price" search={searchByStockName} onChange={handleSearchChange} isMultiSelect={false} alwaysDarkMode={false} />
            </SelectStockToBuy> 
            <GridWrapper>
                <Grid dataSet={ gridData } />
                <OrderHistory/>
            </GridWrapper>
        </Wrapper>
    )
}