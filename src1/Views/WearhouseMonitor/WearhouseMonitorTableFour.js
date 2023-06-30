import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./wearhousemonitor-table.css"



function WearhouseMonitorTableFour() {
  return (
    <Row  className='warehouse_table_5'>
        <Col>
        Warehouse Without Resource Monitor
        </Col>
        <table>
    <tr>
      <th>S.No</th>
      <th>Warehouse</th>
      <th>Workload</th>
    </tr>
    <tr>
      <td>01</td>
      <td>Batch_elt</td>
      <td>Finance</td>
    </tr>
    <tr>
      <td>02</td>
      <td>Batch_elt</td>
      <td>Finance</td>
    </tr>
  </table>
    </Row>
  )
}

export default WearhouseMonitorTableFour