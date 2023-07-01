import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import MixedLineBarChart from '../../component/MixedLineBarChart/MixedLineBarChart'
import { Table1 } from './WearhouseMonitorTable'
import "./wearhousemonitor.css";

function WearhouseMonitor() {
  return (
    <>
      <Row>
        <Col className="col-12 col-lg-7 col-xl-7 mb-4">
          <div className='col-div-wrapper' style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", height: "100%" }}>
            <MixedLineBarChart />
          </div>
        </Col>
        <Col className="col-12 col-lg-5 col-xl-5 mb-4">
          <div className='col-div-wrapper mb-4' style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", height: "45%", minHeight: "240px" }}>
            <Table1 />
          </div>
          <div className='col-div-wrapper' style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", height: "45%", minHeight: "240px" }}>
            <Table1 />
          </div>
        </Col>
      </Row>
      <Row>
        <Col style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", minHeight: "240px" }} className='mb-4'>
          <div className='col-div-wrapper' style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", height: "50%", minHeight: "240px" }}>
            <Table1 />
          </div>
        </Col>
        <Col className="col-12 col-lg-5 col-xl-5 mb-4" style={{ minHeight: "240px" }}>
          <div className='col-div-wrapper' style={{ boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px", height: "50%", minHeight: "240px" }}>
            <Table1 />
          </div>
        </Col>
      </Row>
    </>
  )
}

export default WearhouseMonitor