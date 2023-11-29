import React, { Component } from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import { Link, Navigate } from "react-router-dom";
import "./dash.css";
const axios = require("axios").default;

export default class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionnaire: {
        process: 0,
        save: false,
      },
    };
    this.handleChangeChk = this.handleChangeChk.bind(this);
    this.pressContinue = this.pressContinue.bind(this);
  }
  handleChangeChk(e) {
    var questionnaire = this.state.questionnaire;
    questionnaire[e.target.name] = e.target.value;
    this.setState({ questionnaire: questionnaire });
  }

  pressContinue() {
    var thizz = this;
    // Send login to update staus
    axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "/dashboard/questionnaire",
      headers: {
        AUTH_TOKEN: localStorage.getItem("AUTH_TOKEN"),
      },
      data: thizz.state.questionnaire,
    })
      .then(function (response) {
        //handle success
        var data = response?.data;
        if (data.status === true && data) {
          let questionnaire = thizz.state.questionnaire;
          questionnaire["process"] = "1";
          questionnaire["save"] = true;
          thizz.setState({ questionnaire: questionnaire });
        }
      })
      .catch(function (error) {
        //handle error
        console.log(error);
      });
  }

  render() {
    if (this.state.questionnaire.save === true) {
      return <Navigate to="/dashboard" />;
    }
    return (
      <>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 maindash px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom bg-cyan dash1">
                <h5>Dashboard/Questionnaire</h5>
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
                      className="btn btn-sm btn-outline-secondary bord text-white "
                    >
                      Export
                    </button>
                  </div>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary dropdown-toggle bord text-white "
                  >
                    <span data-feather="calendar"></span>
                    This week
                  </button>
                </div> */}
              </div>
              {/* Main Body */}
              <div className="">
                <h3 className="text-center">Questionnaire</h3>
                <div className="">
                  <div className="card">
                    <div className="card-body">
                      <div className="form-group row">
                        <label htmlFor="" className="col-sm-4 col-form-label">
                          1. When was NIUA established? Kindly state year of
                          incorporation.</label>
                        <div className="col-sm-8">
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="2"
                          ></textarea>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="" className="col-sm-4 col-form-label">2. What is NIUA’s Vision ?</label>
                        <div className="col-sm-8">
                        <div className="form-check form-check-inline mb-1">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                          <label className="form-check-label" htmlFor="inlineRadio1">a. Promoting integrated solutions for urban India</label>
                        </div>
                        <div className="form-check form-check-inline">
                          <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" />
                          <label className="form-check-label" htmlFor="inlineRadio2">b. Promoting integrated solutions for rural India </label>
                        </div>

                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="" className="col-sm-4 col-form-label">
                          3. Which center is supported by GIZ ?</label>
                        <div className="col-sm-8">
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                          <label className="form-check-label" htmlFor="exampleRadios1">
                          a. Centre Digital Governance
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                          <label className="form-check-label" htmlFor="exampleRadios1">
                          b. Inclusive Cities Centre
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                          <label className="form-check-label" for="exampleRadios1">
                          c. Climate Centre for Cities (C-Cube)
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                          <label className="form-check-label" htmlFor="exampleRadios1">
                          d. Centre for Municipal Finance &amp; Governance
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                          <label className="form-check-label" for="exampleRadios1">
                          e. Centre for Urbanization and Economic Growth
                          </label>
                        </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="" className="col-sm-4 col-form-label">
                          4. Write a brief note on NIUA? (write in about 200
                          words)</label>
                        <div className="col-sm-8">
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="2"
                          ></textarea>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="" className="col-sm-4 col-form-label">
                          {" "}
                          5. State the 5 T fundamentals approach which is
                          followed by NIUA.{" "}
                        </label>
                        <div className="col-sm-8">
                          <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="2"
                          ></textarea>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="" className="col-sm-4 col-form-label">6. Name of the current Director of NIUA and his date
                          of joining year.</label>
                        <div className="col-sm-8">
                        <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="" className="col-sm-4 col-form-label">7. Name of the first Director of NIUA.</label>
                        <div className="col-sm-8">
                        <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="" className="col-sm-4 col-form-label">8. Why you decided to join NIUA (explain in about 50
                          word)</label>
                        <div className="col-sm-8">
                        <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="" className="col-sm-4 col-form-label">9. What is the total number of International Partner ?</label>
                        <div className="col-sm-8">
                        <input type="text" className="form-control" />
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="" className="col-sm-4 col-form-label">10. Who is your team leader / project coordinator?</label>
                        <div className="col-sm-8">
                          <input type="text" className="form-control" />
                          
                        </div>
                      </div>
                      <div className="input-group mb-3">
                        <div className="input-group-prepend">
                          <div className="input-group-text">
                            <input
                              type="checkbox"
                              checked={this.state.questionnaire.process}
                              name="process"
                              value="1"
                              onChange={this.handleChangeChk}
                              required
                            />
                          </div>
                        </div>
                        <p className="form-control">
                        I have answered all the questions
                        </p>
                      </div>
                    </div>

                    <div className="card-footer">
                      <Link to="/" className="btn btn-dark">
                        {" "}
                        Back{" "}
                      </Link>

                      <input
                        type="button"
                        value="Continue"
                        className="btn btn-primary ml-2"
                        onClick={this.pressContinue}
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
