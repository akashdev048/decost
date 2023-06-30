import React, { useState, useEffect } from "react";
import { DropdownButton, Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import Header from "../../component/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import "./Style.css";
import { ticketListAction } from "../../redux/actions/ticketAction";


function AlignedTickets() {
    const[token, setToken]= useState();
    const [selectedTicket, setSelectedTicket] = useState('Aligned Tickets')
    const dispatch = useDispatch();
    const getSellerTicket = useSelector((state)=>state?.auth?.user)

    const TicketList = useSelector((state)=>state?.ticket?.sellerTicket)

    useEffect(() => {
        dispatch(ticketListAction({token: getSellerTicket.token}));
    }, [getSellerTicket]);
    



    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
            {props}
        </Tooltip>
    );
    console.log(TicketList, 'TicketList')
    return (
        <>
            <Header />
            <div className="main-wrapper">
                <div className="ticket-rowwraper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="fullmain--tablelist">
                                    <div className="">
                                        <div className="table-serach-fill d-flex justify-content-between">
                                            <ul class="tabmenu-panel mb-4 border-0 nav nav-tabs">
                                                <DropdownButton id="dropdown-basic-button" title={selectedTicket}>
                                                    <Dropdown.Item onClick={() => setSelectedTicket('Aligned Tickets')}>Aligned Tickets</Dropdown.Item>
                                                    <Dropdown.Item onClick={() => setSelectedTicket('Activated Tickets')}>Activated Tickets</Dropdown.Item>
                                                </DropdownButton>
                                            </ul>
                                           {selectedTicket === 'Activated Tickets' && <ul class="tabmenu-panel mb-4 border-0 nav nav-tabs">
                                                <li class="nav-item">
                                                    <button type="button" class="nav-link active btn-pink">Sold Tickets</button>
                                                </li>
                                                <li class="nav-item">
                                                    <button type="button" class="nav-link">Unsold Tickets</button>
                                                </li>
                                            </ul>}
                                        </div>
                                        <div className="mainrow--tablegrid">
                                            <div className="filterfill-table row mb-3">
                                                <div className="col-8">
                                                    <div className="select-item-num">
                                                        <select className="form-control controlselect-table">
                                                            <option>1</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="searchfill col-4">
                                                    <div className="input-group">
                                                        <input type="text" placeholder="" className="form-control control-search" />
                                                        <button type="button" className="btn btn-search-btn"><i class="far fa-search"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="table-responsive1">
                                                <table class="table tablemax--row">
                                                    <thead>
                                                        <tr className="tableheading">
                                                           <th className="">Contest</th>
                                                            <th className="">Card</th>
                                                            <th className="text-center">Price</th>
                                                            <th className="text-center">Score</th>
                                                            <th className="text-center">Rank</th>
                                                            <th className="text-center">Status </th>
                                                            <th className="text-center">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {
                                                            TicketList.map((val) =>{
                                                                const { status, rank, prize, card_id } = val;
                                                                console.log(val, 'VALUE')
                                                                return (
                                                                  <tr className="tabletxt-items">
                                                                    <td className="col-2 serial-txt-td">
                                                                      Week 1
                                                                    </td>
                                                                    <td className="col-2 serial-txt-td">
                                                                      {card_id}
                                                                    </td>
                                                                    <td className="col-4 other-txt-td">
                                                                        {prize}
                                                                    </td>
                                                                    <td className="col-4 other-txt-td">
                                                                      100
                                                                    </td>
                                                                    <td className="col-4 other-txt-td">
                                                                      {rank}
                                                                    </td>
                                                                    <td className="col-4 other-txt-td">
                                                                      {status}
                                                                    </td>
                                                                    <td className="col-2 text-center iconsOut">
                                                                      <OverlayTrigger
                                                                        placement="right"
                                                                        delay={{
                                                                          show: 250,
                                                                          hide: 400,
                                                                        }}
                                                                        overlay={renderTooltip(
                                                                          "View"
                                                                        )}
                                                                      >
                                                                        <i
                                                                          class="fa fa-eye"
                                                                          aria-hidden="true"
                                                                        ></i>
                                                                      </OverlayTrigger>
                                                                      {/* <OverlayTrigger
                                                                        placement="right"
                                                                        delay={{ show: 250, hide: 400 }}
                                                                        overlay={renderTooltip('Activate')}
                                                                    >

                                                                        <i class="fa fa-rocket" aria-hidden="true"></i>
                                                                    </OverlayTrigger> */}
                                                                    </td>
                                                                  </tr>
                                                                );
                                                            } )
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="pagination-bar">
                                                <ul class="pagination pagination-item--row justify-content-end">
                                                    <li class="pageitem--link"><a class="page-link-txt active" href="#">1</a></li>
                                                    <li class="pageitem--link"><a class="page-link-txt" href="#">2</a></li>
                                                    <li class="pageitem--link"><a class="page-link-txt" href="#">3</a></li>
                                                    <li class="pageitem--link">
                                                        <a class="page-link-txt" href="#" aria-label="Next">
                                                            <span aria-hidden="true"><i class="far fa-chevron-right"></i></span>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AlignedTickets;