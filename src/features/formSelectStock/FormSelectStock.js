import styled from 'styled-components'
import React, { useState } from 'react'
import MultiSelect from '../multiSelect/MultiSelect'
import Grid from '../grid/Grid'
import { isMobile } from 'react-device-detect';
import { getStocksByName, getStocksHistory } from '../../app/api'
import { mapObjectToGridData, mapArrayToGridDatas, yearsToDate } from '../../helpers/helpers'

const Wrapper = styled.div`
    background-color: rgba(47,47,66,255);
    display: flex;
    flex-direction: ${isMobile ? "column" : "row"};
    justify-content: center;
    padding-bottom: 80px;
`


export default function FormSelectStock() {
    const [gridItems, setGridItems] = useState([])
    const [gridDates, setGridDates] = useState([])

    const searchByStockName = async (input) => {
        const result = await getStocksByName(input);
        return result.map(stock => { return { label: stock.symbol, value: stock.symbol }; });
    }

    const handleSearchChange = (inputValue) => {
        populateGrid(inputValue)
    }

    const populateGrid = async (input) => {
        if (!input.length) {
            setGridItems([])
            setGridDates([])
            return
        }
        let stockHistory = await getStocksHistory(input)
        const gridData = stockHistory.historicalStockList ? mapArrayToGridDatas(stockHistory.historicalStockList) : mapObjectToGridData(stockHistory)
        setGridItems(gridData.data)
        setGridDates(yearsToDate(gridData.yearsForAxis))
    }

    return (
        <Wrapper>
            <MultiSelect label="Compare stocks history!" subtitle="Select all the stocks you want to compare!" search={searchByStockName} onChange={handleSearchChange} />
            <Grid data={gridItems} tickValues={gridDates}/>
        </Wrapper>
    )

}