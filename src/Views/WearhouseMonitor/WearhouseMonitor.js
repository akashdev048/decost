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
          <div className='card'>
            <div className='card-header bg-white py-3'>
              <h3 className="title-wg-yth">Warehouse cost for last 23 days</h3>
            </div>
            <div className='card-body'>
              <MixedLineBarChart />
            </div>
          </div>
        </Col>
        <Col className="col-12 col-lg-5 col-xl-5 mb-4">
          <div className='card mb-3'>
            <div className='card-header bg-white py-3'>
              <h3 className="title-wg-yth">Top 25 Jobs</h3>
            </div>
            <div className='card-body'>
              <Table1 />
            </div>
          </div>
          <div className='card'>
            <div className='card-header bg-white py-3'>
              <h3 className="title-wg-yth">Repetitive jobs</h3>
            </div>
            <div className='card-body'>
              <Table1 />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="col-12 col-lg-7 col-xl-7">
          <div className='card'>
            <div className='card-header bg-white py-3'>
              <h3 className="title-wg-yth">Warehouse Configuration</h3>
            </div>
            <div className='card-body'>
              <Table1 />
            </div>
          </div>
        </Col>
        <Col className="col-12 col-lg-5 col-xl-5">
          <div className='card'>
            <div className='card-header bg-white py-3'>
              <h3 className="title-wg-yth">Warehouse without Resource Monitor</h3>
            </div>
            <div className='card-body'>
              <Table1 />
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default WearhouseMonitor