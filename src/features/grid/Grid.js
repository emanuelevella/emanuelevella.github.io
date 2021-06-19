import { VictoryZoomContainer, VictoryChart, VictoryBrushContainer, VictoryLine, VictoryAxis } from 'victory';
import React, { useState } from 'react';
import {isMobile} from 'react-device-detect';

export default function Grid () {

    const [zoom, setZoom] = useState(null);
    const [brush, setBrush] = useState(null);

      return (
        <div>
          <VictoryChart
            width={isMobile ? 350 : 1000}
            height={300}
            scale={{x: "time"}}
            containerComponent={
              <VictoryZoomContainer responsive={true}
                zoomDimension="x"
                zoomDomain={zoom}
                onZoomDomainChange={setBrush}
              />
            }
          >
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
            width={isMobile ? 350 : 1000}
            height={90}
            scale={{x: "time"}}
            padding={{top: 0, left: 50, right: 50, bottom: 30}}
            containerComponent={
              <VictoryBrushContainer responsive={true}
                brushDimension="x"
                brushDomain={brush}
                onBrushDomainChange={setZoom}
              />
            }
          >
            <VictoryAxis
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
  