import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import MixedLineBarChart from "../../component/MixedLineBarChart/MixedLineBarChart";
import { Table1, Table2, Table3, Table4 } from "./WearhouseMonitorTable";
import axios from "axios";
import "./wearhousemonitor.css";

const warehouseDropdown =
  "http://34.122.73.186:8000/WarehouseMonitor/warehouselist?account_name=RT";
const barChart =
  "http://34.122.73.186:8000/WarehouseMonitor/cost_WH_30D?account_name=RT&wh=";
const lineChart1 =
  "http://34.122.73.186:8000/WarehouseMonitor/cost_WH_7MA?account_name=RT&wh=";
const lineChart2 =
  "http://34.122.73.186:8000/WarehouseMonitor/cost_WH_14MA?account_name=RT&wh=";
const lineChart3 =
  "http://34.122.73.186:8000/WarehouseMonitor/cost_WH_21MA?account_name=RT&wh=";
const wareHouseMonitorConfig =
  "http://34.122.73.186:8000/WarehouseMonitor/config_WH?account_name=RT&filter=";
const topTwentyFiveJobs =
  "http://34.122.73.186:8000/WarehouseMonitor/top_twofive_jobs?account_name=RT";
const repetiveJobs =
  "http://34.122.73.186:8000/WarehouseMonitor/repetitve_jobs?account_name=RT";
const wareHouseWithoutResourceMonitor =
  "http://34.122.73.186:8000/WarehouseMonitor/WH_RM?account_name=RT";

function WearhouseMonitor() {
  const [dropdown, setDropdown] = useState([]);
  const [dropdownVal, setDropdownVal] = useState('')

  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState([]);
  const [data7, setData7] = useState([]);
  const [data8, setData8] = useState([]);

  useEffect(() => {
    axios.get(warehouseDropdown).then(response => {
      setDropdown(Object.values(response.data));
    })
    promiseExecution2();
  }, []);



  let promiseExecution2 = () => {
    Promise.all([
      fetchTableData(topTwentyFiveJobs),
      fetchTableData(repetiveJobs),
      fetchTableData(wareHouseWithoutResourceMonitor),
    ])
      .then(
        ([
          data6,
          data7,
          data8,
        ]) => {
          console.log("data from table api", data6, data7, data8);
          setData6(data6);
          setData7(data7);
          setData8(data8);
        }
      )
      .catch((error) => { });
  };

  const fetchTableData = async (url) => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error fetching data from ${url}: ${response.status}`);
    }
    return response.json();
  };




  const getCall = (dropdownVal) => {

    const generateUrl = (baseUrl) => {
      return `${baseUrl}${dropdownVal}`;
    };

    const fetchData = async (url) => {
      const response = await fetch(generateUrl(url));
      if (!response.ok) {
        throw new Error(`Error fetching data from ${url}: ${response.status}`);
      }
      return response.json();
    };

    let promiseExecution1 = () => {
      Promise.all([
        fetchData(barChart),
        fetchData(lineChart1),
        fetchData(lineChart2),
        fetchData(lineChart3),
        fetchData(wareHouseMonitorConfig),
      ])
        .then(
          ([
            data1,
            data2,
            data3,
            data4,
            data5
          ]) => {
            console.log("data from api", data1);
            setData1(data1);
            setData2(data2);
            setData3(data3);
            setData4(data4);
            setData5(data5)
          }
        )
        .catch((error) => { });
    };
    promiseExecution1()
  }


  const handleDropdownSelect = (e) => {
    console.log("event target", e.target.value);
    setDropdownVal(e.target.value)
    getCall(e.target.value)

  }
  return (
    <>
      <Row>
        <Col className="col-12 col-lg-7 col-xl-7 mb-4">
          <div className='card'>
            <div className='card-header bg-white py-3'>
              <div className="d-flex align-items-cener justify-content-between">
                <h3 className="title-wg-yth">Warehouse cost for last 23 days</h3>
                <div className="selct-option">
                  <select className="select-opt-ware-h form-control" onChange={handleDropdownSelect}>
                    {dropdown && dropdown.map((value) => <option>{value}</option>)}
                  </select>
                </div>
              </div>
            </div>
            <div className='card-body'>
              <MixedLineBarChart
                data1={data1}
                data2={data2}
                data3={data3}
                data4={data4}
              />
            </div>
          </div>
        </Col>
        <Col className="col-12 col-lg-5 col-xl-5 mb-4">
          <div className='card mb-3'>
            <div className='card-header bg-white py-3'>
              <h3 className="title-wg-yth">Top 25 Jobs</h3>
            </div>
            <div className='card-body p-0'>
              <Table1
                data6={data6}
              />
              {/* <Table4 /> */}
            </div>
          </div>
          <div className='card'>
            <div className='card-header bg-white py-3'>
              <h3 className="title-wg-yth">Repetitive jobs</h3>
            </div>
            <div className='card-body'>
              <Table2
                data7={data7}
              />
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
            <div className='card-body p-0'>
              <Table4 data5={data5} />
            </div>
          </div>
        </Col>
        <Col className="col-12 col-lg-5 col-xl-5">
          <div className='card'>
            <div className='card-header bg-white py-3'>
              <h3 className="title-wg-yth">Warehouse without Resource Monitor</h3>
            </div>
            <div className='card-body p-0'>
              <Table1 /><Table3
                data8={data8}
              />
            </div>
          </div>
        </Col>
      </Row>






      
    </>
  );
}

export default WearhouseMonitor;
