import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MixedLineBarChart from '../../component/MixedLineBarChart/MixedLineBarChart'

function WearhouseMonitor() {
  return (
  <Container fluid>
    <Row>
      <Col>
      <MixedLineBarChart />
      </Col>
      <Col>
      <div style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", height:"240px"}}>
hello
      </div>
      <div style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", height:"240px"}}>
hello
      </div>
      </Col>
    </Row>
    <Row>
      <Col style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", height:"240px"}}>
      </Col>
      <Col style={{boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", height:"240px"}}>
      </Col>
    </Row>
    </Container>
  )
}

export default WearhouseMonitor