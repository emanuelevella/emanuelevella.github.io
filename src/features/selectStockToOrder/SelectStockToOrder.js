import React, { useState } from 'react'
import styled from 'styled-components'
import Slider from 'react-smooth-range-input';
import { isMobile } from 'react-device-detect';
import Select from '../select/Select'
import { getStocksByName, getStockHistory } from '../../app/api'
import { mapObjectToGridData, yearsToDate } from '../../helpers/helpers'

const Wrapper = styled.div`
    display: flex;
    flex-direction: ${isMobile ? 'column' : 'row'};;
    justify-content: space-around;
    align-items: center;
    padding-bottom: 30px;
    width: ${isMobile ? '100%' : '50%'};
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

export default function SelectStockToOrder({ onSelect, stockToOrder, quantity, setQuantityToOrder }) {

    const searchByStockName = async (input) => {
        const result = await getStocksByName(input);
        return result.map(stock => { return { label: stock.symbol, value: stock.symbol }; });
    }

    const handleSearchChange = (inputValue) => {
        populateGrid(inputValue)
    }

    const populateGrid = async (input) => {
        if (!input) {
            onSelect({ data: [], tickValues: [], legend: [] })
            return
        }
        const stockHistory = await getStockHistory(input.value)
        const newGridData = mapObjectToGridData(stockHistory)
        newGridData.tickValues = yearsToDate(newGridData.tickValues)
        onSelect(newGridData)
        setStockToOrder(stockHistory)
    }

    const setStockToOrder = (stock) => {
        stockToOrder({ name: stock.symbol, lastDay: stock.historical[0], quantity: quantity })
    }

    return (
        <Wrapper>
            <StockWrapper>
                <Select label="Stock to buy" subtitle="Buy with the last close price" search={searchByStockName} onChange={handleSearchChange} isMultiSelect={false} alwaysDarkMode={false} />
                <Slider min={1} max={101} value={quantity} onChange={setQuantityToOrder} />
                <Label>Number of stocks</Label>
            </StockWrapper>
        </Wrapper>
    )

}