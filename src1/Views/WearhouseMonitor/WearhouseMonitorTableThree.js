import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./wearhousemonitor-table.css"



function WearhouseMonitorTableThree() {
  return (
<Row  className='warehouse_table_4'>
        <Col>
        Warehouse Configuration
        </Col>
        <table>
    <tr>
      <th>Warehouse</th>
      <th>Workload</th>
      <th>Warehouse Size</th>
      <th>Min Cluster</th>
      <th>Max Cluster</th>
      <th>Type</th>
      <th>Auto Suspend</th>
      <th>Auto Resume</th>

    </tr>
    <tr>
      <td>Batch_elt</td>
      <td>Finance</td>
      <td>XL</td>
      <td>1</td>
      <td>4</td>
      <td>Standard</td>
      <td>on</td>
      <td>off</td>
    </tr>
    <tr>
    <td>Batch_elt</td>
      <td>Finance</td>
      <td>XL</td>
      <td>1</td>
      <td>4</td>
      <td>Standard</td>
      <td>on</td>
      <td>off</td>
    </tr>
    <tr>
    <td>Batch_elt</td>
      <td>Finance</td>
      <td>XL</td>
      <td>1</td>
      <td>4</td>
      <td>Standard</td>
      <td>on</td>
      <td>off</td>
    </tr>
    <tr>
    <td>Batch_elt</td>
      <td>Finance</td>
      <td>XL</td>
      <td>1</td>
      <td>4</td>
      <td>Standard</td>
      <td>on</td>
      <td>off</td>
    </tr>
    <tr>
    <td>Batch_elt</td>
      <td>Finance</td>
      <td>XL</td>
      <td>1</td>
      <td>4</td>
      <td>Standard</td>
      <td>on</td>
      <td>off</td>
    </tr>
  </table>
    </Row>  )
}

export default WearhouseMonitorTableThree