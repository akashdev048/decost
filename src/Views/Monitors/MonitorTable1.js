import React from 'react'
import "./monitor-table.css";

function MonitorTable() {
  return (
    <div >
      <table >
        <thead>
          <th>Workload</th>
          <th>Workload Schema</th>
          <th>Query text</th>
          <th>Warehouse</th>
          <th>Role</th>
          <th>User</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Execution Time</th>
          <th>Cost</th>
          <th>Query ID</th>
        </thead>
        <tbody>
          <tr>
            <td>Finance</td>

            <td>Prod layer</td>

            <td>Call Proceducer ML Xbox1()</td>

            <td>Data science</td>

            <td>prd data scientist</td>

            <td>Mukunthan</td>

            <td>18/01/2023</td>

            <td>30/06/2023</td>

            <td>637</td>

            <td>6437</td>

            <td>6373</td>

          </tr>
          <tr>
            <td>Finance</td>

            <td>Rep Layer </td>

            <td>Call Proceducer ML Xbox2()</td>

            <td>Data science</td>

            <td>prd data scientist</td>

            <td>John</td>

            <td>29/06/2023</td>

            <td>20/06/2023</td>

            <td>367</td>

            <td>466</td>

            <td>6457</td>

          </tr>
          <tr>
            <td>View Layer</td>

            <td>Islands</td>

            <td>merge table customer23()</td>

            <td>Batch elt</td>

            <td>Loader</td>

            <td>andre mern</td>

            <td>29/01/2023</td>

            <td>30/06/2023</td>

            <td>647</td>

            <td>67</td>

            <td>7638</td>

          </tr>
    

        </tbody>
      </table>
    </div>
  );
}

export default MonitorTable