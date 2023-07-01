
import React from 'react';
import "./wearhousemonitor-table.css";
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from 'cdbreact';

export const Table1 = () => {
  return (
    <div className='warehouse-table'>
      <CDBTable>
        <CDBTableHeader>
          <tr>
            <th>S.No</th>
            <th>Query Text</th>
            <th>Warehouse</th>
            <th>Workload</th>
            <th>Cost</th>
          </tr>
        </CDBTableHeader>
        <CDBTableBody>
          <tr>
            <td>01</td>
            <td>Call Produce</td>
            <td>data science</td>
            <td>Finance</td>
            <td>1245</td>
          </tr>
          <tr>
            <td>02</td>
            <td>Select * from sales</td>
            <td>compute wt</td>
            <td>Operation</td>
            <td>545</td>
          </tr>
          <tr>
            <td>03</td>
            <td>Insert init customer</td>
            <td>compute wt</td>
            <td>Operation</td>
            <td>189</td>
          </tr>
          <tr>
            <td>04</td>
            <td>Insert init customer</td>
            <td>compute wt</td>
            <td>Operation</td>
            <td>156</td>
          </tr>
          <tr>
            <td>05</td>
            <td>Insert init customer</td>
            <td>compute wt</td>
            <td>Operation</td>
            <td>102</td>
          </tr>
        </CDBTableBody>
      </CDBTable>
    </div>
  );
};