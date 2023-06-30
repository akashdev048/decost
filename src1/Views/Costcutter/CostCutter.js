import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Tab, Nav, Tabs } from "react-bootstrap";
import Heatmap from '../../component/HeatMap/Heatmap';
import costFst from "../../assets/images/cost-1.png";
import costScd from "../../assets/images/cost-2.png";


function CostCutter() {
  return (
    <Col>
      <div className="monito-section">      
        <Container fluid>
          <Row>
           
              <div className='tabpanel--wapper'>
                <Tabs >
                  <Tab eventKey="Heat map" className='webn' title="Heat map">
                    <Heatmap className="webm" />
                  </Tab>
                  <Tab eventKey="Cut Cost-1" title="Cut Cost-1">
                    <div className='card mt-3'>
                      <img src={costFst} />
                    </div>
                  </Tab>
                  <Tab eventKey="Cut Cost-" title="Cut Cost-2" >
                    <div className='mt-3'>
                      <img src={costScd} className='w-100' />
                    </div>
                  </Tab>
                </Tabs>
              </div>
            
          </Row>
        </Container>
      </div>
    </Col>
  )
}

export default CostCutter