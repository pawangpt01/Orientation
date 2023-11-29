import React, { Component } from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import { Link } from "react-router-dom";
import Icon from '../../img/pdficon.png';
import Hr_Introduction from '../../pdf/hr_introduction.pdf';
import Hr_attendence from '../../pdf/hr_facial_attendance.pdf';
import Hr_Payroll from '../../pdf/hr_payroll.pdf';
import Hr_verification from '../../pdf/hr_verification.pdf';
import "./dash.css";

export default class SpineHr extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 maindash px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom bg-cyan dash1">
                <h5>Dashboard/Spine Hr</h5>
                {/* <div className="btn-toolbar mb-2 mb-md-0 mr-3">
                  <div className="btn-group mr-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-disabled btn-outline-secondary bord text-white mr-2"
                    >
                      Share
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary bord text-white"
                    >
                      Export
                    </button>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary dropdown-toggle bord text-white mr-1"
                  >
                    <span data-feather="calendar"></span>
                    This week
                  </button>
                </div> */}
              </div>
              {/* Main Body */}
              <div className="card">
                <h3 className="text-center">Spine Hr</h3>
                <div className="card-footer container">
                  <div className="">
                    <div className="card-body row">
                      <div className="col-md-6">
                          <a href = {Hr_Introduction} target = "_blank">    <img src={Icon} alt="" style={{width:"100px"}} /> 1.Spine HR_Introduction</a>
                      </div>
                      <div className="col-md-6"> 
                          <a href = {Hr_Payroll} target = "_blank">    <img src={Icon} alt="" style={{width:"100px"}} /> 4.Spine HR_Payroll Module</a>
                      </div>
                    </div>
                    <div className="card-body row">
                    <div className="col-md-6"> 
                          <a href = {Hr_attendence} target = "_blank">    <img src={Icon} alt="" style={{width:"100px"}} /> 2.Spine HR_Facial Attendance & Swipe</a>
                      </div>
                      <div className="col-md-6">
                          <a href = {Hr_verification} target = "_blank">    <img src={Icon} alt="" style={{width:"100px"}} /> 3.Spine HR_Verification</a>
                      </div>
                    </div>

                    <div className="footer">
                      <Link to="/" className="btn btn-dark">
                        Back</Link>

                    </div>
                  </div>
                </div>
              </div>
              {/* End Main Body */}
            </main>
          </div>
        </div>
      </>
    );
}
  }

