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
            <td>Operation</td>

            <td>Prod layer</td>

            <td>Call Proceducer ML Xbox1()</td>

            <td>Data science</td>

            <td>prd data scientist</td>

            <td>Mukunthan</td>

            <td>18/01/2023</td>

            <td>30/06/2023</td>

            <td>240</td>

            <td>257</td>

            <td>49055</td>

          </tr>
          <tr>
            <td>Finance</td>

            <td>Prod layer</td>

            <td>Call Proceducer ML Xbox1()</td>

            <td>Data_science</td>

            <td>prd data scientist</td>

            <td>andre mern</td>

            <td>29/06/2023</td>

            <td>20/06/2023</td>

            <td>400</td>

            <td>40</td>

            <td>56788</td>

          </tr>
          <tr>
            <td>Wall</td>

            <td>Islands</td>

            <td>Call Proceducer ML Xbox1()</td>

            <td>Data_science</td>

            <td>prd data scientist</td>

            <td>andre mern</td>

            <td>29/01/2023</td>

            <td>30/06/2023</td>

            <td>678</td>

            <td>567</td>

            <td>76488</td>

          </tr>
          <tr>
            <td>Sales </td>

            <td>Rep layer</td>

            <td>Call Proceducer ML Xbox2()</td>

            <td>batch elt</td>

            <td>loader </td>

            <td>John</td>

            <td>01/01/2023</td>

            <td>23/04/2023</td>

            <td>455</td>

            <td>60</td>

            <td>7678</td>

          </tr>

        </tbody>
      </table>
    </div>
  );
}

export default MonitorTable