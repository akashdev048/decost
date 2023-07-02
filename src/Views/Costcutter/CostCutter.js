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
import Chart from 'react-apexcharts'
import dataChart from "../../assets/images/data-chart.png";
import ReactApexChart from "react-apexcharts";


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


  let series = [
  {
    name: '14D MA',
    type: 'line',
    data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 20, 30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39]
  },
  {
    name: '21D MA',
    type: 'line',
    data: [25, 20, 31, 25, 40, 30, 55, 45, 50, 30, 32, 33, 25, 20, 31, 25, 40, 30, 55, 45, 50, 30, 32]
  },
  {
    name: '30D MA',
    type: 'line',
    data: [20, 40, 45, 28, 23, 55, 60, 45, 51, 30, 35, 40, 20, 40, 45, 28, 23, 55, 60, 45, 51, 30, 35]
  }
  ]


  let options = {
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
      toolbar: {
        show: false
      }
    },
    legend: {
      show: true,
      position: 'top',
    },
    stroke: {
      width: [2, 2, 2],
      curve: 'smooth'
    },
    plotOptions: {
      bar: {
        columnWidth: '50%'
      }
    },
    colors: ["#9C8F9B", "#C5C533", "#2A952A", "#DF96A3"],


    labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6',
      'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12', 'Day 13',
      'Day 14', 'Day 15', 'Day 16', 'Day 17', 'Day 18', 'Day 19', 'Day 20', 'Day 21', 'Day 22', 'Day 23'
    ],

    markers: {
      size: 0
    },
    xaxis: {
      labels: {
        rotate: -90
      },
      categories: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6',
        'Day 7', 'Day 8', 'Day 9', 'Day 10', 'Day 11', 'Day 12', 'Day 13',
        'Day 14', 'Day 15', 'Day 16', 'Day 17', 'Day 18', 'Day 19', 'Day 20', 'Day 21', 'Day 22', 'Day 23'
      ],
      tickPlacement: 'on'
    },
    yaxis: {
      title: {
        text: 'COST',
      },
      min: 0
    }
  }


  return (
    <Col>
      <div className="monito-section">
        <Container fluid>
          <Row>

            <div className='tabpanel--wapper'>
              <Tabs  className='mb-3'>
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
                                <Table responsive className='border-0 table-list-wap mb-0'>
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
                            <div className='card-body px-1 pb-1'>
                            <Chart
                                options={chartOptions}
                                series={chartData.series}
                                type="donut"
                                width="100%"
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
                                <Table responsive className='border-0 table-list-wap mb-0'>
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
                            <div className='card-body px-1 pb-1'>
                              <Chart
                                options={chartOptions}
                                series={chartData.series}
                                type="donut"
                                width="100%"
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
                                <Table responsive className='border-0 table-list-wap mb-0'>
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
                            <div className='card-body px-1 pb-1'>
                            <Chart
                                options={chartOptions}
                                series={chartData.series}
                                type="donut"
                                width="100%"
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
                  <div className='cost-wapper-web'>
                    <div className='row'>
                      <div className='col-12 col-md-8'>
                        <div className='card card-height-wigt mb-4'>
                          <div className='card-header bg-white py-3'>
                            <div className='check-multiweb d-flex justify-content-end'>
                              <span className='check-list-box'><input type='radio' className='check-input-tw' />QUERY RATIO</span>
                              <span className='check-list-box'><input type='radio' className='check-input-tw' />TIME RATIO</span>
                              <span className='check-list-box'><input type='radio' className='check-input-tw' />AVG_QUEUE_LOAD</span>
                              <span className='check-list-box'><input type='radio' className='check-input-tw' />AVG_RUNNING</span>
                            </div>
                          </div>
                          <div className='card-body'>
                          <ReactApexChart options={options} series={series} type="line" height={450} />

                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-md-4'>
                        <div className='card mb-4'>
                          <div className='card-body p-0'>
                            <img src={dataChart} alt='chart' />
                          </div>
                        </div>
                        <div className='card mb-4'>
                          <div className='card-body p-0'>
                            <Table responsive className='border-0 table-listsuggest table-striped'>
                              <thead className='table-head-sugest table-head-border'>
                                <tr>
                                  <th className='head-wgt-tt'>Bucket</th>
                                  <th className='head-wgt-tt'>No of Queries</th>
                                </tr>
                              </thead>
                              <tbody className='table-body-sugest'>
                                <tr>
                                  <td className='eletab_txt_disc'>Less than second</td>
                                  <td className='eletab_txt_disc'>359</td>
                                </tr>
                                <tr>
                                  <td className='eletab_txt_disc'>1-5 seconds</td>
                                  <td className='eletab_txt_disc'>22</td>
                                </tr>
                                <tr>
                                  <td className='eletab_txt_disc'>more than 2 minutes</td>
                                  <td className='eletab_txt_disc'>0</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                        <div className='card mb-4'>
                          <div className='card-header bg-white py-3'>
                            <h3 className='title-suggest'>Warehouse cloud services cost exceeding 10% of compute costs</h3>
                          </div>
                          <div className='card-body pt-0 p-2'>
                            <Table responsive className='border-0 table-listsuggest table-striped mb-0'>
                              <thead className='table-head-sugest'>
                                <tr>
                                  <th className='head-wgt-tt'>Warehouse</th>
                                  <th className='head-wgt-tt'>Cloud service cost</th>
                                  <th className='head-wgt-tt'>Compute cost</th>
                                </tr>
                              </thead>
                              <tbody className='table-body-sugest'>
                                <tr>
                                  <td className='eletab_txt_disc'>1 batch-elt</td>
                                  <td className='eletab_txt_disc'>430</td>
                                  <td className='eletab_txt_disc'>4000</td>
                                </tr>
                                <tr>
                                  <td className='eletab_txt_disc'>2 datascience</td>
                                  <td className='eletab_txt_disc'>570</td>
                                  <td className='eletab_txt_disc'>5500</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-12 col-md-8'>
                        <div className='card'>
                          <div className='card-header bg-white py-3'>
                            <h3 className='title-suggest'>Core Provisioning for top  10 queries</h3>
                          </div>
                          <div className='card-body p-0'>
                            <Table responsive className='border-0 table-listsuggest table-striped'>
                              <thead className='table-head-sugest'>
                                <tr>
                                  <th className='head-wgt-tt'>Query-ID</th>
                                  <th className='head-wgt-tt'>CORE_NO</th>
                                  <th className='head-wgt-tt'>Query_TEXT</th>
                                  <th className='head-wgt-tt'>WAREHOUSE</th>
                                  <th className='head-wgt-tt'>EXECUTION_TIME_SEC</th>
                                  <th className='head-wgt-tt'>PARTITIONS_SCANNED</th>
                                  <th className='head-wgt-tt'>TOTAL_PARTITIONS</th>
                                </tr>
                              </thead>
                              <tbody className='table-body-sugest'>
                                <tr>
                                  <td className='eletab_txt_disc'>01ab0d09-0b</td>
                                  <td className='eletab_txt_disc'>1024</td>
                                  <td className='eletab_txt_disc'>SELECT WMH_...</td>
                                  <td className='eletab_txt_disc'>data_science</td>
                                  <td className='eletab_txt_disc'>13,617</td>
                                  <td className='eletab_txt_disc'>3,080</td>
                                  <td className='eletab_txt_disc'>18,890,368</td>
                                </tr>
                                <tr>
                                  <td className='eletab_txt_disc'>01ab0d09-0b</td>
                                  <td className='eletab_txt_disc'>1024</td>
                                  <td className='eletab_txt_disc'>SELECT WMH_...</td>
                                  <td className='eletab_txt_disc'>data_science</td>
                                  <td className='eletab_txt_disc'>13,617</td>
                                  <td className='eletab_txt_disc'>3,080</td>
                                  <td className='eletab_txt_disc'>18,890,368</td>
                                </tr>
                                <tr>
                                  <td className='eletab_txt_disc'>01ab0d09-0b</td>
                                  <td className='eletab_txt_disc'>1024</td>
                                  <td className='eletab_txt_disc'>SELECT WMH_...</td>
                                  <td className='eletab_txt_disc'>data_science</td>
                                  <td className='eletab_txt_disc'>13,617</td>
                                  <td className='eletab_txt_disc'>3,080</td>
                                  <td className='eletab_txt_disc'>18,890,368</td>
                                </tr>
                                <tr>
                                  <td className='eletab_txt_disc'>01ab0d09-0b</td>
                                  <td className='eletab_txt_disc'>1024</td>
                                  <td className='eletab_txt_disc'>SELECT WMH_...</td>
                                  <td className='eletab_txt_disc'>data_science</td>
                                  <td className='eletab_txt_disc'>13,617</td>
                                  <td className='eletab_txt_disc'>3,080</td>
                                  <td className='eletab_txt_disc'>18,890,368</td>
                                </tr>
                              </tbody>
                            </Table>
                          </div>
                        </div>
                      </div>
                      <div className='col-12 col-md-4'>
                        <div className='card card-height-wigt'>
                          <div className='card-header bg-white py-3'>
                            <h3 className='title-suggest'>Warehouse consideration</h3>
                          </div>
                          <div className='card-body pt-0 p-2'>
                            <div className='suggest-card--wap'>
                              <Table responsive striped className='border-0 table-listsuggest mb-0'>
                                <thead className='table-head-sugest'>
                                  <tr>
                                    <th className='head-wgt-tt'>Warehouse</th>
                                    <th className='head-wgt-tt'>Workload</th>
                                    <th className='head-wgt-tt'>Suggestions</th>
                                    <th className='head-wgt-tt'>actions</th>
                                  </tr>
                                </thead>
                                <tbody className='table-body-sugest'>
                                  <tr>
                                    <td className='eletab_txt_disc'>batch-elt </td>
                                    <td className='eletab_txt_disc'>Finance</td>
                                    <td className='eletab_txt_disc'>set to immediate suspension</td>
                                    <td className='eletab_txt_disc'><button type='button' className='btn btn-act-cost'>Apply</button></td>
                                  </tr>
                                  <tr>
                                    <td className='eletab_txt_disc'>batch-elt </td>
                                    <td className='eletab_txt_disc'>Finance</td>
                                    <td className='eletab_txt_disc'>set to immediate suspension</td>
                                    <td className='eletab_txt_disc'><button type='button' className='btn btn-act-cost'>Apply</button></td>
                                  </tr>
                                  <tr>
                                    <td className='eletab_txt_disc'>batch-elt </td>
                                    <td className='eletab_txt_disc'>Finance</td>
                                    <td className='eletab_txt_disc'>set to immediate suspension</td>
                                    <td className='eletab_txt_disc'><button type='button' className='btn btn-act-cost'>Apply</button></td>
                                  </tr>
                                  <tr>
                                    <td className='eletab_txt_disc'>batch-elt </td>
                                    <td className='eletab_txt_disc'>Finance</td>
                                    <td className='eletab_txt_disc'>set to immediate suspension</td>
                                    <td className='eletab_txt_disc'><button type='button' className='btn btn-act-cost'>Apply</button></td>
                                  </tr>
                                </tbody>
                              </Table>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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