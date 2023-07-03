
import React,{useEffect, useState} from 'react';
import "./wearhousemonitor-table.css";
import { CDBTable, CDBTableHeader, CDBTableBody } from 'cdbreact';

export const Table1 = ({data6}) => {


  useEffect(() => {
console.log("getting table data here", data6);
  }, [data6])
  
  return (
    <div className='warehouse-table tabel-scroll-height'>
      <CDBTable responsive className="border-0 table-listsuggest table-striped mb-0 table-head-sugest table-body-sugest">
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
          { data6 && data6.map((data,index)=>(
          <tr>
          <td className='eletab_txt_disc'>{index+1}</td>
          <td className='eletab_txt_disc break-word-point'>{data.QUERY_TEXT}</td>
          <td className='eletab_txt_disc'>{data.WAREHOUSE}</td>
          <td className='eletab_txt_disc'>{data.WORKLOAD}</td>
          <td className='eletab_txt_disc'>{data.COST}</td>
        </tr>
          ))
          }
        </CDBTableBody>
      </CDBTable>
    </div>
    
  );
};
export const Table2 = ({data7}) =>{
  useEffect(() => {
    console.log("getting table data here", data7);
      }, [data7])
      console.log("getting table data here", data7);
  return (
    <div className='warehouse-table tabel-scroll-height'>
      <CDBTable responsive className="border-0 table-listsuggest table-striped mb-0 table-head-sugest table-body-sugest">
        <CDBTableHeader>
          <tr>
            <th className='head-wgt-tt'>S.No</th>
            <th className='head-wgt-tt'>Query Text</th>
            <th className='head-wgt-tt'>Count</th>
            <th className='head-wgt-tt'>Warehouse</th>
            <th className='head-wgt-tt'>Workload</th>
          </tr>
        </CDBTableHeader>
        <CDBTableBody>
        {
            data7 && data7.map((data,index)=>
              <tr>
              <td className='eletab_txt_disc'>{index+1}</td>
              <td className='eletab_txt_disc break-word-point'>{data.QUERY_TEXT}</td>
              <td className='eletab_txt_disc'>{data.COUNT}</td>
              <td className='eletab_txt_disc'>{data.WAREHOUSE}</td>
              <td className='eletab_txt_disc'>{data.WORKLOAD}</td>
            </tr>
            
            )
         
          }
        
        </CDBTableBody>
      </CDBTable>
    </div>
    
  );
}
export const Table3 = ({data8}) => {
  useEffect(() => {
    console.log("getting table data here", data8);
      }, [data8])
      console.log("getting table data here", data8);
  return(
<div className='warehouse-table tabel-scroll-height'>
      <CDBTable responsive className="border-0 table-listsuggest table-striped mb-0 table-head-sugest table-body-sugest">
        <CDBTableHeader>
          <tr>
            <th className='head-wgt-tt'>S.No</th>
            <th className='head-wgt-tt'>Warehouse</th>
            <th className='head-wgt-tt'>Workload</th>
          </tr>
        </CDBTableHeader>
        <CDBTableBody>
          {
            data8 && data8.map((data,index)=>
              <tr>
              <td className='eletab_txt_disc'>{index+1}</td>
              <td className='eletab_txt_disc'>{data.WAREHOUSE}</td>
              <td className='eletab_txt_disc'>{data.WORKLOAD}</td>
            </tr>
            
            )
         
          }
        </CDBTableBody>
      </CDBTable>
    </div>
  )
}
export const Table4 = ({data5}) =>{

  const[data,setData]=useState([])
  useEffect(() => {
    console.log("getting table data here", data5);
    setData(data5)
      }, [data5])
      console.log("getting table data here", data5);

  return(
  <div className='warehouse-table tabel-scroll-height'>
      <CDBTable responsive className="border-0 table-listsuggest table-striped mb-0 table-head-sugest table-body-sugest">
        <CDBTableHeader>
          <tr>
            <th className='head-wgt-tt'>Warehouse</th>
            <th className='head-wgt-tt'>Workload</th>
            <th className='head-wgt-tt'>Warehouse Size</th>
            <th className='head-wgt-tt'>Min Cluster</th>
            <th className='head-wgt-tt'>Max Cluster</th>
            <th className='head-wgt-tt'>Type</th>
            <th className='head-wgt-tt'>Auto Suspend</th>
            <th className='head-wgt-tt'>Auto Respond</th>
          </tr>
        </CDBTableHeader>
        <CDBTableBody>
          { data && data.map((data1)=>
               <tr>
               <td className='eletab_txt_disc'>{data1.Warehouse}</td>
               <td className='eletab_txt_disc'>{data1.WORKLOAD}</td>
               <td className='eletab_txt_disc'>{data1.Warehouse_Size}</td>
               <td className='eletab_txt_disc'>{data1.Min_Cluster}</td>
               <td className='eletab_txt_disc'>{data1.Max_Cluster}</td>
               <td className='eletab_txt_disc'>{data1.Type}</td>
               <td className='eletab_txt_disc'>{data1.Auto_Suspend}</td>
               <td className='eletab_txt_disc'>{data1.Auto_Resume}</td>
                </tr>
          )
}
        </CDBTableBody>
      </CDBTable>
    </div>
  )
}