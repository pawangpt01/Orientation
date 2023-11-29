import React, { Component } from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import { Link } from "react-router-dom";

export default class dashboard extends Component {

  render() {
    return (
      <>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Dashboard</h1>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group mr-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Share
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Export
                    </button>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary dropdown-toggle"
                  >
                    <span data-feather="calendar"></span>
                    This week
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-6">
                  <Link to="/about" className="nav-link">
                    <span data-feather="file-text"></span>
                    <div
                      className="small-box text-white"
                      style={{ backgroundColor: "#17a2b8" }}
                    >
                      <div className="inner">
                        <p> ABOUT NIUA</p>
                      </div>
                      <div className="icon">
                        <i className="ion ion-bag"></i>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="col-lg-6 col-6">
                  {/* <!-- small box --> */}
                  <div className="small-box bg-warning text-white">
                    <div className="inner">
                      <h3></h3>

                      <p> Projects </p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-person-add"></i>
                    </div>
                    <a href="#" className="small-box-footer" disabled="">
                      Block <i className="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-6">
                  {/* <!-- small box --> */}
                  <div
                    className="small-box text-white"
                    style={{ backgroundColor: "rgb(31 125 104)" }}
                  >
                    <div className="inner">
                      <h3></h3>

                      <p> Questionnaire </p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag"></i>
                    </div>
                    <a href="#" className="small-box-footer">
                      Block <i className="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>

                <div className="col-lg-6 col-6">
                  {/* <!-- small box --> */}
                  <div
                    className="small-box text-white"
                    style={{ backgroundColor: "rgb(27 63 95)" }}
                  >
                    <div className="inner">
                      <h3></h3>

                      <p> Joining Kit </p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-person-add"></i>
                    </div>
                    <a href="#" className="small-box-footer" disabled="">
                      Block <i className="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 col-6">
                  {/* <!-- small box --> */}
                  <div className="small-box bg-info text-white">
                    <div className="inner">
                      <h3></h3>

                      <p> HR Policies </p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag"></i>
                    </div>
                    <a href="#" className="small-box-footer">
                      Block <i className="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>

                <div className="col-lg-6 col-6">
                  {/* <!-- small box --> */}
                  <div className="small-box bg-warning text-white">
                    <div className="inner">
                      <h3></h3>

                      <p> SPINE HR </p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-person-add"></i>
                    </div>
                    <a href="#" className="small-box-footer" disabled="">
                      Block <i className="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-lg-6 col-6">
                  {/* <!-- small box --> */}
                  <div
                    className="small-box text-white"
                    style={{ backgroundColor: "rgb(27 63 95)" }}
                  >
                    <div className="inner">
                      <h3></h3>

                      <p> Floor Map </p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-bag"></i>
                    </div>
                    <a href="#" className="small-box-footer">
                      Block <i className="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>

                <div className="col-lg-6 col-6">
                  {/* <!-- small box --> */}
                  <div
                    className="small-box text-white"
                    style={{ backgroundColor: "rgb(31 125 104)" }}
                  >
                    <div className="inner">
                      <h3></h3>

                      <p> Others </p>
                    </div>
                    <div className="icon">
                      <i className="ion ion-person-add"></i>
                    </div>
                    <a href="#" className="small-box-footer" disabled="">
                      Block <i className="fas fa-arrow-circle-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
      </>
    );
  }
}
