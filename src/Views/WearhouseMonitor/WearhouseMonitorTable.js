
import React,{useEffect, useState} from 'react';
import "./wearhousemonitor-table.css";
import { CDBTable, CDBTableHeader, CDBTableBody } from 'cdbreact';

export const Table1 = ({data6}) => {


  useEffect(() => {
console.log("getting table data here", data6);
  }, [data6])
  
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
          { data6 && data6.map((data,index)=>(
          <tr>
          <td>{index+1}</td>
          <td style={{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap' ,width:'50px !important'}}>{data.QUERY_TEXT}</td>
          <td>{data.WAREHOUSE}</td>
          <td>{data.WORKLOAD}</td>
          <td>{data.COST}</td>
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
    <div className='warehouse-table'>
      <CDBTable>
        <CDBTableHeader>
          <tr>
            <th>S.No</th>
            <th>Query Text</th>
            <th>Count</th>
            <th>Warehouse</th>
            <th>Workload</th>
          </tr>
        </CDBTableHeader>
        <CDBTableBody>
        {
            data7 && data7.map((data,index)=>
              <tr>
              <td>{index+1}</td>
              <td style={{overflow:'hidden',textOverflow:'ellipsis',whiteSpace:'nowrap'}}>{data.QUERY_TEXT}</td>
              <td>{data.COUNT}</td>
              <td>{data.WAREHOUSE}</td>
              <td>{data.WORKLOAD}</td>
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
<div className='warehouse-table'>
      <CDBTable>
        <CDBTableHeader>
          <tr>
            <th>S.No</th>
            <th>Warehouse</th>
            <th>Workload</th>
          </tr>
        </CDBTableHeader>
        <CDBTableBody>
          {
            data8 && data8.map((data,index)=>
              <tr>
              <td>{index+1}</td>
              <td>{data.WAREHOUSE}</td>
              <td>{data.WORKLOAD}</td>
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
  <div className='warehouse-table'>
      <CDBTable>
        <CDBTableHeader>
          <tr>
            <th>Warehouse</th>
            <th>Workload</th>
            <th>Warehouse Size</th>
            <th>Min Cluster</th>
            <th>Max Cluster</th>
            <th>Type</th>
            <th>Auto Suspend</th>
            <th>Auto Respond</th>
          </tr>
        </CDBTableHeader>
        <CDBTableBody>
          { data && data.map((data1)=>
               <tr>
               <td>{data1.Warehouse}</td>
               <td>{data1.WORKLOAD}</td>
               <td>{data1.Warehouse_Size}</td>
               <td>{data1.Min_Cluster}</td>
               <td>{data1.Max_Cluster}</td>
               <td>{data1.Type}</td>
               <td>{data1.Auto_Suspend}</td>
               <td>{data1.Auto_Resume}</td>
                </tr>
          )
}
        </CDBTableBody>
      </CDBTable>
    </div>
  )
}