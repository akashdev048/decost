import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DashboardHeader from "./component/DashboardHeader";
import DonutChart from "../../component/DonutChart/DonutChart";
import BarChart from "../../component/BarChart/BarChart";
import "./dashboard.css"

const Dashboard = () => {
  return (
    <Container fluid>
      <div className="dashboard-wrapper">
        <Row>
          <Col className="col-12">
            <DashboardHeader />
          </Col>
        </Row>
        <Row >
          <Col className="col-12 col-lg-9">
            <Row className="mx-0">
              <Col className="col-12 col-md-6 ps-0 pe-2">
                <div className="card mb-2"><div className="card-body"><DonutChart /></div></div>
              </Col>
              <Col className="col-12 col-md-6 ps-0 pe-2">
                <div className="card mb-2"><div className="card-body"><DonutChart /></div></div>
              </Col>
              <Col className="col-12 col-md-6 ps-0 pe-2">
                <div className="card mb-2"><div className="card-body"><DonutChart /></div></div>
              </Col>
              <Col className="col-12 col-md-6 ps-0 pe-2">
                <div className="card mb-2"><div className="card-body"><DonutChart /></div></div>
              </Col>
            </Row>
          </Col>
          <Col className="col-12 col-lg-3">
            <div className="card mb-2">
              <div className="card-body">
                <div className="wg-elemnt-mt"><h3 class="small-title-wgt">Total no of Queries</h3><p style={{color:"#6200ee"}}><b>14,566</b></p></div>
              </div>
            </div>
            <div className="card mb-2" style={{maxWidth: "170px"}}>
              <div className="card-body">
                <div className="wg-elemnt-mt"><h3 class="small-title-wgt">Estimated cost</h3><p>$159566</p></div>
              </div>
            </div>
            <div className="card mb-2" style={{maxWidth: "170px"}}>
              <div className="card-body">
                <div className="wg-elemnt-mt"><h3 class="small-title-wgt">Estimated saving</h3><p>$159566</p></div>
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="wg-elemnt-mt"><h3 class="small-title-wgt">Total 10 Queries</h3></div>
                <BarChart />
              </div>
            </div>
            <div className="graph-area-bar">
              
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Dashboard;
