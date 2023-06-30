import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import "./wearhousemonitor-table.css"



function WearhouseMonitorTableTwo() {
  return (
<Row  className='warehouse_table_1'>
        <Col>
        Repetitive jobs
        </Col>
        <table>
    <tr>
      <th>S.No</th>
      <th>Query Text</th>
      <th>Count</th>
      <th>Warehouse</th>
      <th>Workload</th>
    </tr>
    <tr>
      <td>01</td>
      <td>Call Proceducer ML_Xbox1()</td>
      <td>1245</td>
      <td>dev_wh</td>
      <td>Finance</td>
    </tr>
    <tr>
    <td>02</td>
      <td>Call Proceducer ML_Xbox1()</td>
      <td>1245</td>
      <td>dev_wh</td>
      <td>Finance</td>
    </tr>
    <tr>
    <td>03</td>
      <td>Call Proceducer ML_Xbox1()</td>
      <td>1245</td>
      <td>dev_wh</td>
      <td>Finance</td>
    </tr>
    <tr>
    <td>04</td>
      <td>Call Proceducer ML_Xbox1()</td>
      <td>1245</td>
      <td>dev_wh</td>
      <td>Finance</td>
    </tr>
    <tr>
    <td>05</td>
      <td>Call Proceducer ML_Xbox1()</td>
      <td>1245</td>
      <td>dev_wh</td>
      <td>Finance</td>
    </tr>
  </table>
    </Row>  
    )
}

export default WearhouseMonitorTableTwo