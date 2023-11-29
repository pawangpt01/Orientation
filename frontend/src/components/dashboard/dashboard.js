import React, { Component } from "react";
import "./dash.css"
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import { Link } from "react-router-dom";
const axios = require("axios").default;

export default class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      about: {
        value: "0",
        disabled: "",
      },
      projects: {
        value: "0",
        disabled: "disabled",
      },
      questionnaire: {
        value: "0",
        disabled: "disabled",
      },
      joining_kit: {
        value: "0",
        disabled: "disabled",
      },
      hr_policies: {
        value: "0",
        disabled: "disabled",
      },
      spine_hr: {
        value: "0",
        disabled: "disabled",
      },
      floot_map: {
        value: "0",
        disabled: "disabled",
      },
      other: {
        value: "0",
        disabled: "disabled",
      },
    };
  }
  componentDidMount() {
    var thizz = this;
    // Send login request
    axios({
      method: "get",
      url: process.env.REACT_APP_BASE_URL + "/dashboard/pack",
      headers: {
        AUTH_TOKEN: localStorage.getItem("AUTH_TOKEN"),
      },
    })
      .then(function (response) {
        //handle success
        var data = response?.data;
        console.log(data.data);
        if (data.status === true && data) {
          let about = thizz.state.about;
          about.value = data.data.about;
          thizz.setState({ about: about });

          let projects = thizz.state.projects;
          projects.value = data.data.projects;
          thizz.setState({ projects: projects });

          let questionnaire = thizz.state.questionnaire;
          questionnaire.value = data.data.questionnaire;
          thizz.setState({ questionnaire: questionnaire });

          let joining_kit = thizz.state.joining_kit;
          joining_kit.value = data.data.joining_kit;
          thizz.setState({ joining_kit: joining_kit });
        }
      })
      .catch(function (error) {
        //handle error
        console.log(error.response.data.status);
        if (error.response.data.status === false) {
          var response = error.response.data;
          var resStatus = thizz.state.resStatus;
          resStatus.isError = true;
          resStatus.messages = [response.message];
          thizz.setState({ resStatus: resStatus });
        }
      });
  }

  // go(type){

  // }

  render() {
    return (
      <>
        <Header />
       
       
          <div className="row">
            <Sidebar />
            
            
            {/* <main role="main" className="col-md-9 ml-sm-auto col-lg-10 maindash">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom dash1">
                <h5 className="dash">Dashboard</h5>
              </div>  
              
              <div className="row dash-setting">
                <div className="col-md-4">
                  <div className="card cardclass">
                    <div className="card-header1 text-center text-bold text-gray">ABOUT NIUA</div>
                    <div className="card-body1 from-green-200 to-green-100">
                    
                    <i className="bi bi-file-earmark-person rounded-full"></i>
                    
                      <Link
                        to="/dashboard/about"
                        className={"btn1 btn-primary "}
                      >
                        Go
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card cardclass">
                    <div className="card-header2 text-center text-bold text-gray"> PROJECTS</div>
                    <div className="card-body2">
                    <i className="bi bi-kanban-fill"></i>
                      <Link
                        to={this.state.about.value === "1" ? "/dashboard/project" : "#"}
                        className={
                          "btn1  " +
                          (this.state.about.value === "1"
                            ? "btn-primary"
                            : "btn-dark")
                        }
                      >
                        Go
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card cardclass">
                    <div className="card-header3 text-center text-bold text-gray">QUESTIONNAIRE </div>
                    <div className="card-body3">
                    <i className="bi bi-question-circle"></i>

                      <Link
                        to={this.state.projects.value ==="1" ? "/dashboard/questionnaire/" : "#"}
                        className={
                          "btn1 " +
                          (this.state.projects.value === "1"
                            ? "btn-primary"
                            : "btn-dark" )
                        }
                      >
                        Go
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dash-setting">
                
                <div className="col-md-4">
                  <div className="card cardclass">
                    <div className="card-header4 text-center text-bold text-gray">JOINING KIT </div>
                    <div className="card-body4">
                    <i className="bi bi-browser-chrome"></i>


                      <Link
                        to={this.state.questionnaire.value === "1" ? "/dashboard/joining/wizard" : "#"}
                        className={
                          "btn1 " +
                          (this.state.questionnaire.value === "1"
                            ? "btn-primary"
                            : "btn-dark")
                        }
                      >
                        Go
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card cardclass">
                    <div className="card-header5 text-center text-bold text-gray">SPINE HR</div>
                    <div className="card-body5">
                    <i className="bi bi-layout-three-columns"></i>
                    <Link
                        to={this.state.joining_kit.value === "1" ? "/dashboard/spine_hr" : "#"}
                        className={
                          "btn1 " +
                          (this.state.joining_kit.value === "1"
                            ? "btn-primary"
                            : "btn-dark")
                        }
                      >
                        Go
                      </Link>
                     
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card cardclass">
                    <div className="card-header6 text-center text-bold text-gray">FLOOR MAP </div>
                    <div className="card-body6">
                    <i className="bi bi-globe-asia-australia"></i>


                      <Link
                        to={this.state.joining_kit.value === "1" ? "/dashboard/floor_map" : "#"}
                        className={
                          "btn1  " +
                          (this.state.joining_kit.value === "1"
                            ? "btn-primary"
                            : "btn-dark")
                        }
                      >
                        Go
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              
            </main> */}

<main role="main" className="col-md-9 ml-sm-auto col-lg-10 maindash">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom bg-cyan dash1
              
              ">
                
                <h5 className="dash">Dashboard</h5>
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
                    className="btn btn-sm btn-outline-secondary dropdown-toggle bord text-white mr-3"
                  >
                    <span data-feather="calendar"></span>
                    This week
                  </button>
                </div>  */}
              </div>  
              <div className="row dash-setting">
                <div className="col-md-4">
                  <div className="card cardclass">
                    <div className="card-header1 text-center">ABOUT NIUA</div>
                    <div className="card-body1">
                    <div className="icon-butt ml-3npm start
                     ">

                    <i class="bi bi-file-earmark-person  icon-butti"></i>
                    
                  
                      {/* <h5 className="card-title"> About NIUA</h5> */}
                      {/* <p className="card-text">click to see .</p> */}
                      {/* <a href="#" className="btn btn-primary" onClick={() => this.go('about')}>Go</a> */}

                     
                      </div>
                      <Link
                        to="/dashboard/about"
                        className={"btn1  text-center ptbtn ml-3"}
                      >
                        Go
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card cardclass">
                    <div className="card-header2 text-center"> PROJECTS</div>
                    <div className="card-body2">
                    <div className="icon-butt-1">
                    <i class="bi bi-kanban-fill icon-butti1"></i>
                      {/* <h5 className="card-title">Projects</h5> */}
                      {/* <p className="card-text">click to see our projects.</p> */}

                      
                      </div>
                      <Link
                        to="/dashboard/project"
                        className={
                          "btn2  ml-4 text-center " +
                          (this.state.about.value == 1
                            ? ""
                            : this.state.projects.disabled)
                            
                            
                        }
                      >
                        Go
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card cardclass">
                    <div className="card-header3 text-center">QUESTIONNAIRE </div>
                    <div className="card-body3">
                    <div className="icon-butt-2 ">
                    <i class="bi bi-question-circle  icon-butti"></i>
                      {/* <h5 className="card-title">Questionnaire</h5>
                      <p className="card-text">click to see Questionnaire.</p> */}

                      
                      </div>
                      <Link
                        to="/dashboard/questionnaire"
                        className={
                          "btn3  ml-4 text-center " +
                          (this.state.projects.value == 1
                            ? ""
                            : this.state.questionnaire.disabled)
                        }
                      >
                        Go
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row dash-setting">
                
                <div className="col-md-4">
                  <div className="card cardclass">
                    <div className="card-header4 text-center">JOINING KIT </div>
                    <div className="card-body4">
                    <div className="icon-butt-3">
                    <i class="bi bi-browser-chrome icon-butti"></i>

                      {/* <h5 className="card-title">Joining Kit</h5>
                      <p className="card-text">click to see Joining Kit </p> */}

                     
                      </div>
                      <Link
                        to="/dashboard/joining/wizard"
                        className={
                          "btn4  ml-4 text-center " +
                          (this.state.questionnaire.value == 1
                            ? ""
                            : this.state.joining_kit.disabled)
                        }
                      >
                        Go
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card cardclass">
                    <div className="card-header5 text-center">SPINE HR</div>
                    <div className="card-body5">
                    <div className="icon-butt-4">
                    <i class="bi bi-layout-three-columns icon-butti2"></i>

                      {/* <h5 className="card-title">SPINE HR</h5>
                      <p className="card-text"> click to see SPINE HR</p> */}
                      
                      </div>
                      <a
                        href="/dashboard/spine_hr"
                        className={
                          "btn5  ml-4 text-center " +
                          (this.state.hr_policies.value == 1
                            ? ""
                            : this.state.spine_hr.disabled)
                        }
                      >
                        Go{" "}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card cardclass">
                    <div className="card-header6 text-center">FLOOR MAP </div>
                    <div className="card-body6">
                    <div className="icon-butt-5">
                    <i class="bi bi-globe-asia-australia icon-butti"></i>

                      {/* <h5 className="card-title">Floor Map</h5>
                      <p className="card-text">click to see Floor Map.</p> */}

                     
                      </div>
                      <Link
                        to="/dashboard/floor_map"
                        className={
                          "btn6  ml-4 text-center" +
                          (this.state.joining_kit.value == 0
                            ? ""
                            : this.state.floot_map.disabled)
                        }
                      >
                        Go
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                {/* <div className="col-md-6"><div className="card">
                <div className="card-header">
                HR Policies
                </div>
                <div className="card-body">
                  <h5 className="card-title">HR Policies</h5>
                  <p className="card-text">click to see HR Policies.</p>
                  <a href="#"  className={"btn btn-primary " + (this.state.joining_kit.value == 1 ? '' : this.state.hr_policies.disabled)}>Go </a>
                </div>
              </div></div> */}
               
                
              </div>
              <div className="row">
                {/* <div className="col-md-6"><div className="card">
                <div className="card-header">
                Other
                </div>
                <div className="card-body">
                  <h5 className="card-title">Others</h5>
                  <p className="card-text"> click to see Others</p>
                  <a href="#" className={"btn btn-primary " + (this.state.floot_map.value == 1 ? '' : this.state.other.disabled)} > Go </a>
                </div>
              </div></div> */}
              </div>
            </main>
          </div>
      
      </>
    );
  }
}
