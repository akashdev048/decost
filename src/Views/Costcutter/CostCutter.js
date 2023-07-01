import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Tab, Nav, Tabs } from "react-bootstrap";
import Heatmap from '../../component/HeatMap/Heatmap';
import costFst from "../../assets/images/cost-1.png";
import costScd from "../../assets/images/cost-2.png";
import Table from 'react-bootstrap/Table';
import "./style.css";
import Chart from 'react-apexcharts';


function CostCutter() {
  const chartData = {
    series: [78, 14],
    labels: ['Finance', 'Operation'],
  };

  const chartOptions = {
    chart: {
      type: 'donut',
      toolbar: {
        show: false
      }
    },
    legend: {
      show: true,
      position: 'bottom',
    },
    labels: chartData.labels,
    colors: ['#16C098', '#D38B5D',  ],
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 100,
          },
          legend: {
            show: false,
            position: 'bottom',
          },
        },
      },
    ],
  };
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
                    <div className='card-body'>
                      <div className='row'>
                        <div className='col-12 col-md-4'>
                          <div className='card card-height-wigt'>
                            <div className='card-body'>
                              <div className='wp-elemnt-fince ps-4'>
                                <h3 className='title-cost-elmnt'>Finance</h3>
                                <div className='button-dtl-web'>
                                  <button type="button" className='btn btn-dtl'>Detail</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-12 col-md-6 ps-0'>
                          <div className='card card-height-wigt'>
                            <div className='card-table p-2'>
                              <div className='table-responsive'>
                                <Table responsive className='border-0 table-list-wap'>
                                  <thead className='table-head'>
                                    <tr>
                                      <th className='t-head ps-4'>Schema</th>
                                      <th className='t-head'>peak_month </th>
                                      <th className='t-head'>peak_week</th>
                                      <th className='t-head'>peak_day</th>
                                      <th className='t-head'>peak_hour</th>
                                    </tr>
                                  </thead>
                                  <tbody className='table-body'>
                                    <tr>
                                      <td className='td-disc'><span className='txt-wgt-sch'><input type='checkbox' className='me-1' />Load Layer</span></td>
                                      <td className='td-disc'>Dec</td>
                                      <td className='td-disc'>Dec 1st week</td>
                                      <td className='td-disc'>Dec 7</td>
                                      <td className='td-disc'>Dec 7, 13:00</td>
                                    </tr>
                                    <tr>
                                      <td className='td-disc'><span className='txt-wgt-sch'><input type='checkbox' className='me-1' />Load Layer</span></td>
                                      <td className='td-disc'>Dec</td>
                                      <td className='td-disc'>Dec 1st week</td>
                                      <td className='td-disc'>Dec 7</td>
                                      <td className='td-disc'>Dec 7, 13:00</td>
                                    </tr>
                                    <tr>
                                      <td className='td-disc'><span className='txt-wgt-sch'><input type='checkbox' className='me-1' />Load Layer</span></td>
                                      <td className='td-disc'>Dec</td>
                                      <td className='td-disc'>Dec 1st week</td>
                                      <td className='td-disc'>Dec 7</td>
                                      <td className='td-disc'>Dec 7, 13:00</td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </div>
                              <div className='bottom-cut--off mt-2'>
                                <button type="button" className='btn btn-cost-wgt'>Cut cost</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-12 col-md-2 ps-0'>
                          <div className='card card-height-wigt'>
                            <div className='card-body'>
                            <Chart
                                options={chartOptions}
                                series={chartData.series}
                                type="donut"
                                width="70%"
                                height='400px'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-12 col-md-4'>
                          <div className='card card-height-wigt'>
                            <div className='card-body'>
                              <div className='wp-elemnt-fince ps-4'>
                                <h3 className='title-cost-elmnt'>Finance</h3>
                                <div className='button-dtl-web'>
                                  <button type="button" className='btn btn-dtl'>Detail</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-12 col-md-6 ps-0'>
                          <div className='card card-height-wigt'>
                            <div className='card-table p-2'>
                              <div className='table-responsive'>
                                <Table responsive className='border-0 table-list-wap'>
                                  <thead className='table-head'>
                                    <tr>
                                      <th className='t-head ps-4'>Schema</th>
                                      <th className='t-head'>peak_month </th>
                                      <th className='t-head'>peak_week</th>
                                      <th className='t-head'>peak_day</th>
                                      <th className='t-head'>peak_hour</th>
                                    </tr>
                                  </thead>
                                  <tbody className='table-body'>
                                    <tr>
                                      <td className='td-disc'><span className='txt-wgt-sch'><input type='checkbox' className='me-1' />Load Layer</span></td>
                                      <td className='td-disc'>Dec</td>
                                      <td className='td-disc'>Dec 1st week</td>
                                      <td className='td-disc'>Dec 7</td>
                                      <td className='td-disc'>Dec 7, 13:00</td>
                                    </tr>
                                    <tr>
                                      <td className='td-disc'><span className='txt-wgt-sch'><input type='checkbox' className='me-1' />Load Layer</span></td>
                                      <td className='td-disc'>Dec</td>
                                      <td className='td-disc'>Dec 1st week</td>
                                      <td className='td-disc'>Dec 7</td>
                                      <td className='td-disc'>Dec 7, 13:00</td>
                                    </tr>
                                    <tr>
                                      <td className='td-disc'><span className='txt-wgt-sch'><input type='checkbox' className='me-1' />Load Layer</span></td>
                                      <td className='td-disc'>Dec</td>
                                      <td className='td-disc'>Dec 1st week</td>
                                      <td className='td-disc'>Dec 7</td>
                                      <td className='td-disc'>Dec 7, 13:00</td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </div>
                              <div className='bottom-cut--off mt-2'>
                                <button type="button" className='btn btn-cost-wgt'>Cut cost</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-12 col-md-2 ps-0'>
                          <div className='card card-height-wigt'>
                            <div className='card-body'>
                              <Chart
                                options={chartOptions}
                                series={chartData.series}
                                type="donut"
                                width="70%"
                                height='400px'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-12 col-md-4'>
                          <div className='card card-height-wigt'>
                            <div className='card-body'>
                              <div className='wp-elemnt-fince ps-4'>
                                <h3 className='title-cost-elmnt'>Finance</h3>
                                <div className='button-dtl-web'>
                                  <button type="button" className='btn btn-dtl'>Detail</button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-12 col-md-6 ps-0'>
                          <div className='card card-height-wigt'>
                            <div className='card-table p-2'>
                              <div className='table-responsive'>
                                <Table responsive className='border-0 table-list-wap'>
                                  <thead className='table-head'>
                                    <tr>
                                      <th className='t-head ps-4'>Schema</th>
                                      <th className='t-head'>peak_month </th>
                                      <th className='t-head'>peak_week</th>
                                      <th className='t-head'>peak_day</th>
                                      <th className='t-head'>peak_hour</th>
                                    </tr>
                                  </thead>
                                  <tbody className='table-body'>
                                    <tr>
                                      <td className='td-disc'><span className='txt-wgt-sch'><input type='checkbox' className='me-1' />Load Layer</span></td>
                                      <td className='td-disc'>Dec</td>
                                      <td className='td-disc'>Dec 1st week</td>
                                      <td className='td-disc'>Dec 7</td>
                                      <td className='td-disc'>Dec 7, 13:00</td>
                                    </tr>
                                    <tr>
                                      <td className='td-disc'><span className='txt-wgt-sch'><input type='checkbox' className='me-1' />Load Layer</span></td>
                                      <td className='td-disc'>Dec</td>
                                      <td className='td-disc'>Dec 1st week</td>
                                      <td className='td-disc'>Dec 7</td>
                                      <td className='td-disc'>Dec 7, 13:00</td>
                                    </tr>
                                    <tr>
                                      <td className='td-disc'><span className='txt-wgt-sch'><input type='checkbox' className='me-1' />Load Layer</span></td>
                                      <td className='td-disc'>Dec</td>
                                      <td className='td-disc'>Dec 1st week</td>
                                      <td className='td-disc'>Dec 7</td>
                                      <td className='td-disc'>Dec 7, 13:00</td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </div>
                              <div className='bottom-cut--off mt-2'>
                                <button type="button" className='btn btn-cost-wgt'>Cut cost</button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className='col-12 col-md-2 ps-0'>
                          <div className='card card-height-wigt'>
                            <div className='card-body'>
                            <Chart
                                options={chartOptions}
                                series={chartData.series}
                                type="donut"
                                width="70%"
                                height='400px'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='row'>
                        <div className='col-12 col-md-10'>
                          <div className='card card-height-wigt'>
                            <div className='card-header bg-white py-3'>
                              <h3 className='title-suggest'>Cost cutting suggestion</h3>
                            </div>
                            <div className='card-body'>
                              <div className='suggest-card--wap'>
                                <Table responsive striped className='border-0 table-listsuggest'>
                                  <thead className='table-head-sugest'>
                                    <tr>
                                      <th className='head-wgt-tt'>Workload</th>
                                      <th className='head-wgt-tt'>Schema</th>
                                      <th className='head-wgt-tt'>Suggestions</th>
                                      <th className='head-wgt-tt'>actions</th>
                                      <th className='head-wgt-tt'></th>
                                    </tr>
                                  </thead>
                                  <tbody className='table-body-sugest'>
                                    <tr>
                                      <td className='eletab_txt_disc'>Finance</td>
                                      <td className='eletab_txt_disc'>Load_layer</td>
                                      <td className='eletab_txt_disc'>No suggestion</td>
                                      <td className='eletab_txt_disc'><button type='button' className='btn btn-act-cost'>Cut Cost</button></td>
                                      <td className='eletab_txt_disc'></td>
                                    </tr>
                                    <tr>
                                      <td className='eletab_txt_disc'>Finance</td>
                                      <td className='eletab_txt_disc'>Trans_layer</td>
                                      <td className='eletab_txt_disc'>can be hold for the period from 07/11/2022 to  26/11/2022</td>
                                      <td className='eletab_txt_disc'><button type='button' className='btn btn-act-cost'>Cut Cost</button></td>
                                      <td className='eletab_txt_disc'><b>$1100</b></td>
                                    </tr>
                                    <tr>
                                      <td className='eletab_txt_disc'>Finance</td>
                                      <td className='eletab_txt_disc'>Rep_layer</td>
                                      <td className='eletab_txt_disc'>can be hold for the period from 3/11/2022 to 21/11/2022</td>
                                      <td className='eletab_txt_disc'><button type='button' className='btn btn-act-cost'>Cut Cost</button></td>
                                      <td className='eletab_txt_disc'></td>
                                    </tr>

                                  </tbody>
                                </Table>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
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