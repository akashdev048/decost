import React from 'react'
import { Tab, Nav,Tabs } from "react-bootstrap";
import Heatmap from '../../component/HeatMap/Heatmap';


function CostCutter() {
  return (
    <div>
          <Tabs >
      <Tab eventKey="Heat map" title="Heat map">
        <Heatmap/>
      </Tab>
      <Tab eventKey="Cut Cost-1" title="Cut Cost-1">
      </Tab>
      <Tab eventKey="Cut Cost-" title="Cut Cost-2" >
      </Tab>
    </Tabs>
    </div>
  )
}

export default CostCutter