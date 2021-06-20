import { createContainer, VictoryTheme, VictoryZoomContainer, VictoryChart, VictoryBrushContainer, VictoryLine, VictoryAxis } from 'victory';
import React, { useState } from 'react';
import {isMobile} from 'react-device-detect';

export default function Grid ({ data, tickValues }) {

    const [zoom, setZoom] = useState(null);
    const [brush, setBrush] = useState(null);

    const whiteStyle = {
        axis: { stroke: "white" },
        axisLabel: { fontSize: 20, padding: 30, fill: "white" },
        ticks: { stroke: "white", size: 5, },
        tickLabels: { fontSize: 15, padding: 5, fill: "white" }
      }

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
                labels={({ datum }) => `${Math.round(datum.y)} $`}
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
            
            <VictoryLine
              style={{
                data: {stroke: "#f50057"}
              }}
              data={data}
            />

          </VictoryChart>

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
            style={whiteStyle}
              tickValues={tickValues}
              tickFormat={(x) => new Date(x).getFullYear()}
            />
            <VictoryLine
              style={{
                data: {stroke: "#f50057"}
              }}
              data={data}
            />
          </VictoryChart>
      </div>
      );
  }
  