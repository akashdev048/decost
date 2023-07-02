import React from 'react';

import "./wearhousemonitor-table.css";

import { CDBTable, CDBTableHeader, CDBTableBody } from 'cdbreact';




export const Table1 = () => {

  return (

    <div className='warehouse-table'>

      <CDBTable className="border-0 table-listsuggest table-striped mb-0 table-head-sugest table-body-sugest">

        <CDBTableHeader>

          <tr>

            <th className='head-wgt-tt'>S.No</th>

            <th className='head-wgt-tt'>Query Text</th>

            <th className='head-wgt-tt'>Warehouse</th>

            <th className='head-wgt-tt'>Workload</th>

            <th className='head-wgt-tt'>Cost</th>

          </tr>

        </CDBTableHeader>

        <CDBTableBody>

          <tr>

            <td className='eletab_txt_disc'>01</td>

            <td className='eletab_txt_disc'>Call Produce</td>

            <td className='eletab_txt_disc'>data science</td>

            <td className='eletab_txt_disc'>Finance</td>

            <td className='eletab_txt_disc'>1245</td>

          </tr>

          <tr>

            <td className='eletab_txt_disc'>02</td>

            <td className='eletab_txt_disc'>Select * from sales</td>

            <td className='eletab_txt_disc'>compute wt</td>

            <td className='eletab_txt_disc'>Operation</td>

            <td className='eletab_txt_disc'>545</td>

          </tr>

          <tr>

            <td className='eletab_txt_disc'>03</td>

            <td className='eletab_txt_disc'>Insert init customer</td>

            <td className='eletab_txt_disc'>compute wt</td>

            <td className='eletab_txt_disc'>Operation</td>

            <td className='eletab_txt_disc'>189</td>

          </tr>

          <tr>

            <td className='eletab_txt_disc'>04</td>

            <td className='eletab_txt_disc'>Insert init customer</td>

            <td className='eletab_txt_disc'>compute wt</td>

            <td className='eletab_txt_disc'>Operation</td>

            <td className='eletab_txt_disc'>156</td>

          </tr>

          <tr>

            <td className='eletab_txt_disc'>05</td>

            <td className='eletab_txt_disc'>Insert init customer</td>

            <td className='eletab_txt_disc'>compute wt</td>

            <td className='eletab_txt_disc'>Operation</td>

            <td className='eletab_txt_disc'>102</td>

          </tr>

        </CDBTableBody>

      </CDBTable>

    </div>

  );

};

has context menu