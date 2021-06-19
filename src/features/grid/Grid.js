import { createContainer, VictoryTheme, VictoryZoomContainer, VictoryChart, VictoryBrushContainer, VictoryLine, VictoryAxis } from 'victory';
import React, { useState } from 'react';
import {isMobile} from 'react-device-detect';

export default function Grid () {

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
                data: {stroke: "tomato"}
              }}
              data={[
                {x: new Date(1982, 1, 1), y: 125},
                {x: new Date(1987, 1, 1), y: 257},
                {x: new Date(1993, 1, 1), y: 345},
                {x: new Date(1997, 1, 1), y: 515},
                {x: new Date(2001, 1, 1), y: 132},
                {x: new Date(2005, 1, 1), y: 305},
                {x: new Date(2011, 1, 1), y: 270},
                {x: new Date(2015, 1, 1), y: 470}
              ]}
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
              tickValues={[
                new Date(1985, 1, 1),
                new Date(1990, 1, 1),
                new Date(1995, 1, 1),
                new Date(2000, 1, 1),
                new Date(2005, 1, 1),
                new Date(2010, 1, 1),
                new Date(2015, 1, 1)
              ]}
              tickFormat={(x) => new Date(x).getFullYear()}
            />
            <VictoryLine
              style={{
                data: {stroke: "tomato"}
              }}
              data={[
                {x: new Date(1982, 1, 1), y: 125},
                {x: new Date(1987, 1, 1), y: 257},
                {x: new Date(1993, 1, 1), y: 345},
                {x: new Date(1997, 1, 1), y: 515},
                {x: new Date(2001, 1, 1), y: 132},
                {x: new Date(2005, 1, 1), y: 305},
                {x: new Date(2011, 1, 1), y: 270},
                {x: new Date(2015, 1, 1), y: 470}
              ]}
            />
          </VictoryChart>
      </div>
      );
  }
  