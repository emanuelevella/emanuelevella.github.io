export const mapObjectToChartData = (value) => {
    let result = []
    let yearsForAxis = new Set()
    result = value.historical.reduce((acc, curr) => { 
        const splitYear = curr.date.split("-")
        const stockDate = new Date(splitYear[0], splitYear[1], splitYear[2])
        acc.push({ x: stockDate , y: curr.close })
        yearsForAxis.add(stockDate.getFullYear())
        return acc
    }, [])
    return { data: [result], tickValues: [...yearsForAxis], legend: [value.symbol] }
}

export const mapArrayToChartDatas = (arr) => {
    let result = []
    let yearsForAxis = new Set()
    let mappedItem = null
    let labels = []
    for(let index in arr) {
        mappedItem = mapObjectToChartData(arr[index])
        result[index] = mappedItem.data[0]
        mappedItem.tickValues.forEach(yearsForAxis.add, yearsForAxis)
        labels.push(...mappedItem.legend)
    }
    return { data: result, tickValues: [...yearsForAxis], legend: labels }
}

export const yearsToDate = (arrYears) => arrYears.map(year => new Date(year, 1, 1))


export const getColorVictoryLine = (index) => {
    switch(index) {
        case 0: 
            return '#f50057'
        case 1: 
            return '#00f5a3'
        case 2: 
            return '#8300f5'
        case 3: 
            return '#008bf5'
        case 4: 
            return '#f5bc00'
        default:
            return ''
    }
}