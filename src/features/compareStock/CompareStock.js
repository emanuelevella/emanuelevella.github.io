import React, { useState } from 'react'
import styled from 'styled-components'
import Select from '../select/Select'
import Chart from '../chart/Chart'
import { isMobile } from 'react-device-detect';
import { getStocksByName, getStocksHistory } from '../../app/api'
import { mapObjectToChartData, mapArrayToChartDatas, yearsToDate } from '../../helpers/helpers'

const Wrapper = styled.div`
    background-color: rgba(47,47,66,255);
    display: flex;
    flex-direction: ${isMobile ? "column" : "row"};
    justify-content: center;
    padding-bottom: 80px;
`


export default function CompareStock() {
    const [chartData, setChartData] = useState({ data: [], tickValues: [], legend: [] })

    const searchByStockName = async (input) => {
        const result = await getStocksByName(input);
        return result.map(stock => { return { label: stock.symbol, value: stock.symbol }; });
    }

    const handleSearchChange = (inputValue) => {
        populateChart(inputValue)
    }

    const populateChart = async (input) => {
        if (!input.length) {
            setChartData({ data: [], tickValues: [], legend: [] })
            return
        }
        let stockHistory = await getStocksHistory(input)
        const newChartData = stockHistory.historicalStockList ? mapArrayToChartDatas(stockHistory.historicalStockList) : mapObjectToChartData(stockHistory)
        newChartData.tickValues = yearsToDate(newChartData.tickValues)
        setChartData(newChartData)
    }

    return (
        <Wrapper>
            <Select label="Compare stocks history!" subtitle="Select all the stocks you want to compare!" search={searchByStockName} onChange={handleSearchChange} isMultiSelect={true} alwaysDarkMode={true} />
            <Chart dataSet={ chartData } />
        </Wrapper>
    )

}