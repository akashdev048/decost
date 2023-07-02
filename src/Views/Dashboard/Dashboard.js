import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DashboardHeader from "./component/DashboardHeader";
import {
  DonutChart1,
  DonutChart2,
  DonutChart3,
  DonutChart4,
} from "../../component/DonutChart/DonutChart";
import BarChart from "../../component/BarChart/BarChart";
import axios from "axios";
import "./dashboard.css";

const wareHouseCost = "http://34.122.73.186:8000/Dashboard/cost_E_WH?";
const wareHouseTime = "http://34.122.73.186:8000/Dashboard/time_E_WH?";
const workloadCost = "http://34.122.73.186:8000/Dashboard/cost_E_WL?";
const workloadTime = "http://34.122.73.186:8000/Dashboard/time_E_WL?";
const userCost = "http://34.122.73.186:8000/Dashboard/cost_E_U?";
const userTime = "http://34.122.73.186:8000/Dashboard/time_E_U?";
const roleCost = "http://34.122.73.186:8000/Dashboard/cost_RL_U?";
const roleTime = "http://34.122.73.186:8000/Dashboard/time_RL_U?";
const totalQuere = "http://34.122.73.186:8000/Dashboard/Queries_no?";
const topTenLongQuery =
  "http://34.122.73.186:8000/Dashboard/Top_ten_long_queries?";
const topTenHighCostQuery =
  "http://34.122.73.186:8000/Dashboard/Top_ten_high_cost_queries?";

const Dashboard = () => {
  const [startDate, setStartDate] = useState(new Date().toLocaleDateString());
  const [endDate, setEndDate] = useState(new Date().toLocaleDateString());
  const [data1, setData1] = useState([]);
  const [data2, setData2] = useState([]);
  const [data3, setData3] = useState([]);
  const [data4, setData4] = useState([]);
  const [data5, setData5] = useState([]);
  const [data6, setData6] = useState([]);
  const [data7, setData7] = useState([]);
  const [data8, setData8] = useState([]);
  const [data9, setData9] = useState(0);
  const [data10, setData10] = useState([]);
  const [data11, setData11] = useState([]);

  



  useEffect(() => {
    getCall("2023-01-01","2023-01-31")
  
  }, [])
  

  const getCall = async (startDate, endDate) => {
    const generateUrl = (baseUrl) => {
      return `${baseUrl}account_name=RT&start_date=${startDate}&end_date=${endDate}`;
    };

    const fetchData = async (url) => {
      const response = await fetch(generateUrl(url));
      if (!response.ok) {
        throw new Error(`Error fetching data from ${url}: ${response.status}`);
      }
      return response.json();
    };

    const requests = [
      // fetch(generateUrl(wareHouseTime)),
      // fetch(generateUrl(workloadCost)),
      // fetch(generateUrl(workloadTime)),
      // fetch(generateUrl(userCost)),
      // fetch(generateUrl(userTime)),
      // fetch(generateUrl(roleCost)),
      // fetch(generateUrl(roleTime)),
      // fetch(generateUrl(totalQuere)),
      // fetch(generateUrl(topTenLongQuery)),
      // fetch(generateUrl(topTenHighCostQuery)),
    ];

    let promiseExecution = () => {
      Promise.all([
        fetchData(wareHouseCost),
        fetchData(wareHouseTime),
        fetchData(workloadCost),
        fetchData(workloadTime),
        fetchData(userCost),
        fetchData(userTime),
        fetchData(roleCost),
        fetchData(roleTime),
        fetchData(totalQuere),
        fetchData(topTenLongQuery),
        fetchData(topTenHighCostQuery),
      ])
        .then(([data1,data2,data3,data4,data5,data6,data7,data8,data9,data10,data11]) => {
           setData3(data3)
           setData4(data4)
           setData1(data1)
           setData2(data2)
           setData7(data7)
           setData8(data8)
           setData5(data5)
           setData6(data6)
           setData9(Object.values(data9.TOTAL_NO_OF_QUERIES))
           setData10(data10)
           setData11(data11)

          })
        .catch((error) => {});
    };

    promiseExecution();
  };

  const fetchStartDate = (date) => {
    setStartDate(date);
  };

  const fetchEndDate = (date) => {
    setEndDate(date);
  };

  const handleApplyDate = () => {
    console.log("getting both dates", startDate, endDate);

    getCall(startDate, endDate);
  };

  const handleReset =()=>{
    getCall("2022-01-01","2023-06-30")
  }

  return (
    <Container fluid className="p-0">
      <div className="dashboard-wrapper">
        <Row>
          <Col className="col-12">
            <DashboardHeader
              startDate={fetchStartDate}
              endDate={fetchEndDate}
              applyDate={handleApplyDate}
              applyReset={handleReset}
            />
          </Col>
        </Row>
        <Row>
          <Col className="col-12 col-lg-9">
            <Row className="mx-0">
              <Col className="col-12 col-md-6 ps-0 pe-2">
                <div className="card mb-2">
                  <div className="card-body">
                    <DonutChart1
                      data3={data3}
                      data4={data4}
                    />
                  </div>
                </div>
              </Col>
              <Col className="col-12 col-md-6 ps-0 pe-2">
                <div className="card mb-2">
                  <div className="card-body">
                    <DonutChart2 
                    data1={data1}
                    data2={data2}
                    />
                  </div>
                </div>
              </Col>
              <Col className="col-12 col-md-6 ps-0 pe-2">
                <div className="card mb-2">
                  <div className="card-body">
                    <DonutChart3  
                    data7={data7}
                    data8={data8}
                    />
                  </div>
                </div>
              </Col>
              <Col className="col-12 col-md-6 ps-0 pe-2">
                <div className="card mb-2">
                  <div className="card-body">
                    <DonutChart4 
                    data5={data5}
                    data6={data6}
                    />
                  </div>
                </div>
              </Col>
            </Row>
          </Col>
          <Col className="col-12 col-lg-3">
            <div className="semi-row-div">
              <div className="card mb-2">
                <div className="card-body">
                  <div className="wg-elemnt-mt">
                    <h3 class="small-title-wgt">Total no of Queries</h3>
                    <p
                      style={{
                        color: "#6200ee",
                        fontSize: "32px",
                        fontWeight: "700",
                      }}
                    >
                      <b>{data9 && data9}</b>
                    </p>
                  </div>
                </div>
              </div>
              <div className="card mb-2" style={{ maxWidth: "200px" }}>
                <div className="card-body">
                  <div className="wg-elemnt-mt">
                    <h3 class="small-title-wgt">Estimated cost</h3>
                    <p>$159.566</p>
                  </div>
                </div>
              </div>
              {/* <div className="card mb-2" style={{ maxWidth: "170px" }}>
                <div className="card-body">
                  <div className="wg-elemnt-mt"><h3 class="small-title-wgt">Estimated saving</h3><p>$159566</p></div>
                </div>
              </div> */}
            </div>
            <div className="semi-row-div">
              <div className="card">
                <div className="card-body">
                  <div className="wg-elemnt-mt">
                    <h3 class="small-title-wgt chart-head">Total 10 Queries</h3>
                  </div>
                  <BarChart 
                  data10={data10}
                  data11={data11}

                  />
                </div>
              </div>
            </div>

            {/* <div className="graph-area-bar">
              
            </div> */}
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Dashboard;
