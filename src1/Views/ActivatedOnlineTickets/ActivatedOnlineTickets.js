import React from "react";
import Header from "../../component/Header/Header";
import "./Style.css";


function ActivatedOnlineTickets() {
    return (
        <>
            <Header />
            <div className="main-wrapper">
                <div className="dashcolum--grid">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="listCount--row card">
                                    <div className="card-body text-start">
                                        <div className="icon-list">
                                            <i class="fal fa-shopping-bag"></i>
                                        </div>
                                        <h3 className="title-txtmain">Today Orders</h3>
                                        <span className="count-items">8956</span>
                                    </div>
                                </div>     
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="listCount--row card">
                                    <div className="card-body text-start">
                                        <div className="icon-list">
                                            <i class="fal fa-eye"></i>
                                        </div>
                                        <h3 className="title-txtmain">Today Visitor</h3>
                                        <span className="count-items">1235</span>
                                    </div>
                                </div>     
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="listCount--row card">
                                    <div className="card-body text-start">
                                        <div className="icon-list">
                                            <i class="fal fa-rocket"></i>
                                        </div>
                                        <h3 className="title-txtmain">Total Expense</h3>
                                        <span className="count-items">4895</span>
                                    </div>
                                </div>     
                            </div>
                            <div className="col-12 col-md-6 col-lg-3">
                                <div className="listCount--row card">
                                    <div className="card-body text-start">
                                        <div className="icon-list">
                                            <i class="fal fa-users"></i>
                                        </div>
                                        <h3 className="title-txtmain">New Users</h3>
                                        <span className="count-items">156</span>
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

export default ActivatedOnlineTickets;