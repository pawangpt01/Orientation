import React, { Component } from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import { Link } from "react-router-dom";
import Floor1 from '../../img/floor1.jpeg';
import Floor2 from '../../img/floor2.jpeg';
import "./dash.css";

export default class FloorMap extends Component {
  render() {
    return (
        <>
          <Header />
          <div className="container-fluid">
            <div className="row">
              <Sidebar />
              <main role="main" className="col-md-9 ml-sm-auto col-lg-10 maindash px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom bg-cyan dash1">
                  <h5>Dashboard/Floor Map</h5>
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
                      className="btn btn-sm btn-outline-secondary dropdown-toggle bord text-white"
                    >
                      <span data-feather="calendar"></span>
                      This week
                    </button>
                  </div> */}
                </div>
                {/* Main Body */}
                <div className="">
                  <h3 className=" text-center">Floor Map</h3>
                  <div className="card">
                    <div className="">
                      <div className="card-body row text-center">
                        <div className="col-md-6"> <img src={Floor1} alt="floor1" /></div>
                        <div className="col-md-6"> <img src={Floor2} alt="floor2" /> </div>
                      
                      </div>
  
                      <div className="card-footer">
                        <Link to="/" className="btn btn-dark">
                          Back</Link>
  
                        <input
                          type="button"
                          value="Continue"
                          className="btn btn-primary ml-2"
                          
                        />
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
