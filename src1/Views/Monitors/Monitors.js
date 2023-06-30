import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Tab, Nav, Tabs } from "react-bootstrap";
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



    <div className="monito-section">
      <Container fluid>
        <Row>
          <Col>
            <Tabs
            >
              <Tab eventKey="job-monitor" title="job-monitor">
                <div className="heading-bar-top mt-3"><h2 className="title-main-wgt">Overall Cost summary </h2></div>
                <Row>
                  <Col className="col-12 col-lg-3 col-xl-2">
                    <div className="card mb-2">
                      <div className="card-body">
                        <div className="wg-elemnt-mt"><h3 class="small-title-wgt">Average Montly Cost</h3><p><b>14,566</b></p></div>
                      </div>
                    </div>
                  </Col>
                  <Col className="col-12 col-lg-3 col-xl-2">
                    <div className="card mb-2">
                      <div className="card-body">
                        <div className="wg-elemnt-mt"><h3 class="small-title-wgt">Minimum Montly Cost</h3><p><b>14,566</b></p></div>
                      </div>
                    </div>
                  </Col>
                  <Col className="col-12 col-lg-3 col-xl-2">
                    <div className="card mb-2">
                      <div className="card-body">
                        <div className="wg-elemnt-mt"><h3 class="small-title-wgt">Maximum Montly Cost</h3><p><b>14,566</b></p></div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="card mb-2">
                  <div className="card-body">
                    <div className="wg-elemnt-mt"><StackChart /></div>
                  </div>
                </div>                
                <Row className="table-container ww">
                  <Col>
                    <MonitorTable />
                  </Col>
                </Row>
              </Tab>
              <Tab eventKey="Warehouse Monitor" title="Warehouse Monitor">
                <WearhouseMonitor />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    </div>




  )
}

export default Monitors;