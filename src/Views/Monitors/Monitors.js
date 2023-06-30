import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Tab, Nav,Tabs } from "react-bootstrap";
import StackChart from "../../component/StackedChart/StackChart";

import "./monitors.css";
import MonitorTable from "./MonitorTable";
import WearhouseMonitor from "../WearhouseMonitor/WearhouseMonitor";

const Monitors = () => {
  return (
    // <Container fluid>
    //   <Row>
    //     <Col>
    //       <div>
    //         <Tab.Container id="monitor-tabs" defaultActiveKey="job-monitor">
    //           <Nav variant="tabs">
    //             <Nav.Item>
    //               <Nav.Link eventKey="job-monitor">Job Monitor</Nav.Link>
    //             </Nav.Item>
    //             <Nav.Item>
    //               <Nav.Link eventKey="warehouse-monitor">
    //                 Warehouse Monitor
    //               </Nav.Link>
    //             </Nav.Item>
    //           </Nav>
    //           <Tab.Content>
    //             <Tab.Pane eventKey="job-monitor">
    //               <h2 style={{marginLeft:'-1296px'}}>Overall Cost summary </h2>
    //               <Row>
    //     <Col>
    //     <div className="monitor-col-1">
    //     <div className="monitor-col-2">Average Montly Cost</div>
    //     <div className="monitor-col-3">Minimum Montly Cost</div>
    //     <div className="monitor-col-4">Maximum Montly Cost</div>
    //     </div>

    //     </Col>
    //    </Row>
    //               <Row>
    //                 <Col>
    //                   <StackChart />
    //                 </Col>
    //               </Row>
    //               <Row className="table-container">
    //               <Col>
    //               <MonitorTable/>
    //               </Col>
    //               </Row>
    //               {/* Add job monitor content here */}
    //             </Tab.Pane>
    //             <Tab.Pane eventKey="wearhouse-monitor">
    //               <div>
    //                 <WearhouseMonitor/>
    //               </div>
    //             </Tab.Pane>
    //           </Tab.Content>
    //           {/* <Tab.Content>
    //             <Tab.Pane eventKey="wearhouse-monitor">
    //               <div>
    //                 <WearhouseMonitor/>
    //               </div>
    //             </Tab.Pane>
    //           </Tab.Content> */}

    //         </Tab.Container>
    //       </div>
    //     </Col>
    //   </Row>
    // </Container>

<Container fluid>
  <Row>
    <Tabs
    >
      <Tab eventKey="job-monitor" title="job-monitor">
      <h2 style={{marginLeft:'-1296px'}}>Overall Cost summary </h2>
                   <Row>
        <Col>
        <div className="monitor-col-1">
        <div className="monitor-col-2">Average Montly Cost</div>
         <div className="monitor-col-3">Minimum Montly Cost</div>
         <div className="monitor-col-4">Maximum Montly Cost</div>
        </div>

       </Col>
       </Row>
       <Row>
                   <Col>
                      <StackChart />
                    </Col>
                  </Row>
                  <Row className="table-container">
                 <Col>
                  <MonitorTable/>
                   </Col>
                  </Row>
      </Tab>
      <Tab eventKey="Warehouse Monitor" title="Warehouse Monitor">
        <WearhouseMonitor/>
      </Tab>
    </Tabs>
    </Row>
    </Container>


  )}

export default Monitors;
