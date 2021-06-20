import styled from 'styled-components'
import MultiSelect from '../multiSelect/MultiSelect'
import Grid from '../grid/Grid'
import {isMobile} from 'react-device-detect';
import React, { useState } from 'react'

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

    const searchByStockName = (name) => {
        return fetch(`https://financialmodelingprep.com/api/v3/search-ticker?query=${name}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_APIKEY}`)
            .then(res => res.json())
            .then(
                (result) => result.map(stock => { return {label: stock.symbol, value: stock.symbol}}),
                (error) => { console.log(error) }
        )
    }

    const handleSearchChange = (val) => {
        populateGrid(val)
    }

    const populateGrid = (arr) => {
        const values = arr.map(stock => stock.value).join(',')
        fetch(`https://financialmodelingprep.com/api/v3/historical-price-full/${values}?apikey=${process.env.REACT_APP_APIKEY}`)
            .then(res => res.json())
            .then(
                (result) => {
                    const gridData = result.historical.reduce((acc, curr) => { 
                        const splitYear = curr.date.split("-")
                        acc.data.push({ x: new Date(splitYear[0], splitYear[1], splitYear[2]), y: curr.close })
                        acc.dates.add(new Date(splitYear[0], 1, 1))
                        return acc
                    }, {data: [], dates: new Set()})
                    setGridItems(gridData.data)
                    setGridDates([...gridData.dates])
                },
                (error) => { console.log(error) }
        )
    }

    return (
        <Wrapper>
            <MultiSelect label="Compare stocks history!" subtitle="Select all the stocks you want to compare!" search={searchByStockName} onChange={handleSearchChange} />
            <Grid data={gridItems} tickValues={gridDates}/>
        </Wrapper>
    )

}