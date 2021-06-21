export const getStocksByName = (input) => {
    return fetch(`https://financialmodelingprep.com/api/v3/search-ticker?query=${input}&limit=10&exchange=NASDAQ&apikey=${process.env.REACT_APP_APIKEY}`)
        .then(
            (result) => result.json(),
            (error) => { console.log(error) }
        )
}

export const getStocksHistory = (arrayOfStocksNames) => {
    const stocks = arrayOfStocksNames.map(stock => stock.value).join(',')
    return fetch(`https://financialmodelingprep.com/api/v3/historical-price-full/${stocks}?apikey=${process.env.REACT_APP_APIKEY}`)
        .then(
            (result) => result.json(),
            (error) => { console.log(error) }
        )
}
