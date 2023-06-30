import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import MixedLineBarChart from '../../component/MixedLineBarChart/MixedLineBarChart'

import WearhouseMonitorTable from './WearhouseMonitorTable'

import WearhouseMonitorTableTwo from './WearhouseMonitorTableTwo'

import WearhouseMonitorTableThree from './WearhouseMonitorTableThree'

import WearhouseMonitorTableFour from './WearhouseMonitorTableFour'




function WearhouseMonitor() {

  return (

  <Container fluid>

    <Row>

      <Col>

      <MixedLineBarChart />

      </Col>

      <Col>

      <div style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", height:"330px"}}>

      <WearhouseMonitorTable/>

      </div>

      <div style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", height:"330px",marginTop:'12px'}}>

        <WearhouseMonitorTableTwo/>

      </div>

      </Col>

    </Row>

    <div style={{display:'flex',flexDirection:Row}}>

      <div style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", height:"320px"}}>

        <WearhouseMonitorTableThree/>

      </div>

      <div style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", height:"320px"}}>

        <WearhouseMonitorTableFour/>

      </div>

    </div>

    </Container>

  )

}




export default WearhouseMonitor