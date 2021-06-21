import React, { useState } from 'react';
import styled from 'styled-components'
import { createContainer, VictoryTheme, VictoryChart, VictoryBrushContainer, VictoryLine, VictoryAxis } from 'victory';
import { whiteStyleGrid } from '../../helpers/themes'
import { getColorVictoryLine } from '../../helpers/helpers'
import {isMobile} from 'react-device-detect';


const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    height: 30px;
`

const Label = styled.div`
    margin-right: 10px;
    border-top: 2px solid ${props => props.colorIndex};
    color: white;
    font-family: Roboto;
`

export default function Grid ({ data, tickValues, legend }) {
    const [zoom, setZoom] = useState(null);
    const [brush, setBrush] = useState(null);
    const VictoryZoomVoronoiContainer = createContainer("zoom", "voronoi");

    return (
        <div>
            <VictoryChart
                theme={VictoryTheme.material}
                width={isMobile ? 350 : 700}
                height={300}
                scale={{x: "time"}}
                containerComponent={
                    <VictoryZoomVoronoiContainer responsive={false}
                    labels={({ datum }) => `${datum.y.toFixed(2)}$`}
                    zoomDimension="x"
                    zoomDomain={zoom}
                    onZoomDomainChange={setBrush}
                    />
                }
                >
                <VictoryAxis dependentAxis  style={{
                    axis: { stroke: "white" },
                    grid: { stroke: "gray" },
                    axisLabel: { fontSize: 20, padding: 30, fill: "white" },
                    ticks: { stroke: "white", size: 5, },
                    tickLabels: { fontSize: 15, padding: 5, fill: "white" }            }}
                />

                <VictoryAxis style={{
                    axis: { stroke: "white" },
                    grid: { stroke: "transparent" },
                    axisLabel: { fontSize: 20, padding: 30, fill: "white" },
                    ticks: { stroke: "white", size: 5, },
                    tickLabels: { fontSize: 15, padding: 5, fill: "white" }
                }}
                />
                {data.map((dataset, index) => {
                    return (
                        <VictoryLine
                            style={{
                                data: {stroke: getColorVictoryLine(index)}
                            }}
                            key={Math.random()+index}
                            data={dataset}
                        />)
                    })
                }

            </VictoryChart>
            <Wrapper>
                {
                    legend.map((label, index) => {
                        return(
                            <Label key={label + index} colorIndex={getColorVictoryLine(index)}>
                                {label}
                            </Label>
                        )
                    })
                }
            </Wrapper>
            <VictoryChart
                width={isMobile ? 350 : 700}
                height={90}
                scale={{x: "time"}}
                padding={{top: 0, left: 50, right: 50, bottom: 30}}
                containerComponent={
                    <VictoryBrushContainer responsive={false}
                    brushDimension="x"
                    brushDomain={brush}
                    onBrushDomainChange={setZoom}
                    />
                }
            >
                <VictoryAxis
                    style={whiteStyleGrid}
                    tickValues={tickValues.length ? tickValues : [2019, 2021]}
                    tickFormat={(x) => new Date(x).getFullYear()}
                />
                {data.map((dataset, index) => {
                    return (
                        <VictoryLine
                            style={{
                            data: {stroke: getColorVictoryLine(index)}
                            }}
                            key={Math.random()}
                            data={dataset}
                        />)
                    })
                }
            </VictoryChart>
        </div>
      );
  }
  