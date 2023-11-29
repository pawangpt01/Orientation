import React, { Component } from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import { Link, Navigate } from "react-router-dom";
import Ist from '../../img/c1.png';
import IInd from '../../img/c2.png';
import IIIrd from '../../img/c3.png';
import Fourth from '../../img/c4.png';
import Fivth from '../../img/c5.png';
import Sixth from '../../img/c6.png';
import "./dash.css";
const axios = require("axios").default;

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {
        process:"0",
        save:false
      },
      isError:{
        message:''
      },
      showDiv:''
    }
    this.handleChangeChk = this.handleChangeChk.bind(this);
    this.pressContinue = this.pressContinue.bind(this);
  }

  handleChangeChk(e) {
    var project = this.state.project;
    project[e.target.name] = e.target.value;
    this.setState({ project: project });
  }

  handleChangeChk(e) {
    var project = this.state.project;
    const isChecked = e.target.checked;
    project[e.target.name] = isChecked ? "1" : "0";
    this.setState({ project: project });
  }


  pressContinue() {
    var thizz = this;
     // Send login to update staus
     axios({
      method: "post",
      url:  process.env.REACT_APP_BASE_URL + "/dashboard/project",
      headers: {
        AUTH_TOKEN: localStorage.getItem('AUTH_TOKEN')
      },
      data: thizz.state.project
    }).then(function (response) {
      //handle success
      var data = response?.data
      if(data.status === true && data){
        let project = thizz.state.project;
        project["process"] = "1"
        project["save"] = true
        thizz.setState({project: project});
       
      }
    })
    .catch(function (error) {
      //handle error
      console.log(error);
      
    });
  }

  setSomeState(label) {
    this.setState(
      {showDiv :label}
  );
  console.log(this.state.showDiv)
    
  }

  render() {
    if (this.state.project.save === true) {
      return <Navigate to='/dashboard' />;
    }
    return (
      <>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 maindash px-md-4 ">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom bg-cyan dash1">
                <h5>Dashboard/Project</h5>
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

              <h3 className="text-center">Project</h3>
              <div className="card">
             
                <div className="row text-center">
                  <div className="col-md-4 col-xm-12">
                    <img src={Ist} alt="istImg" style={{ width: "60%" }} /> <br />
                    <div className="btn btn-primary btn-sm" onClick={() => this.setSomeState('municipalFinance')}> Read Me</div>
                  </div>
                  <div className="col-md-4 col-xm-12">
                    <img src={IInd} alt="secondImg" style={{ width: "60%" }} /><br />
                    <div className="btn btn-primary btn-sm" onClick={() => this.setSomeState('urbanizationGrowth')} > Read Me</div>
                  </div>
                  <div className="col-md-4 col-xm-12">
                    <img src={IIIrd} alt="thirdImg" style={{ width: "60%" }} />
                    <br />
                    <div className="btn btn-primary btn-sm" onClick={() => this.setSomeState('')}> Read Me</div>
                  </div>
                  <div className="col-md-4 col-xm-12">
                    <img src={Fourth} alt="fourthImg" style={{ width: "60%" }} />
                    <br />
                    <div className="btn btn-primary btn-sm" onClick={() => this.setSomeState('citiesCentre')}> Read Me</div>
                  </div>
                  <div className="col-md-4 col-xm-12">
                    <img src={Fivth} alt="fivthImg" style={{ width: "60%" }} />
                    <br />
                    <div className="btn btn-primary btn-sm" onClick={() => this.setSomeState('digitalGovernance')} > Read Me</div>
                  </div>
                  <div className="col-md-4 col-xm-12 mb-3">
                    <img src={Sixth} alt="sixthImg" style={{ width: "60%" }} />
                    <br />
                    <div className="btn btn-primary btn-sm" onClick={() => this.setSomeState('climateCenter')}> Read Me</div>
                  </div>
                </div>

              </div>

              {/* Centre Digital Governance */}
              <div className={"card" + (this.state.showDiv === 'digitalGovernance' ? '' : ' d-none')}>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.setSomeState('')}>
                  <span aria-hidden="true" style={{ float: "right" }} className="btn btn-danger btn-sm mb-0">&times;</span>
                </button>
                <h5 className="text-center"> Centre Digital Governance </h5>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Projects</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td> National Urban Digital Mission - National Innovation Urban Stack (NUIS) </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td> National Urban Governance Platform (NUGP)  </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td> National Urban Learning Platform (NULP)  </td>
                    </tr>
                    <tr>
                      <th scope="row"> 4 </th>
                      <td> DAMU  </td>
                    </tr>
                    <tr>
                      <th scope="row"> 5 </th>
                      <td> Internal FRACing Unit (IFU)  </td>
                    </tr>
                    <tr>
                      <th scope="row"> 6 </th>
                      <td> DASmartnetMU  </td>
                    </tr>
                    <tr>
                      <th scope="row"> 7 </th>
                      <td> Smartnet Fellowship- (NJ)  </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* End Centre Digital Governance */}

              {/* Inclusive Cities Centre */}
              <div className={"card" + (this.state.showDiv === 'citiesCentre' ? '' : ' d-none')}>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.setSomeState('')}>
                  <span aria-hidden="true" style={{ float: "right" }} className="btn btn-danger btn-sm mb-0">&times;</span>
                </button>
                <h5 className="text-center"> Inclusive Cities Centre </h5>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Projects</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td> Building Accessible, Safe, and Inclusive Indian Cities (BASIIC) </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td> Infant, Toddler and Caregiver-Friendly Neighbourhoods Capacity Building Programme (ITCN)  </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td> Shaping Youth Future  </td>
                    </tr>

                  </tbody>
                </table>
              </div>
              {/* End Inclusive Cities Centre */}

              {/* Climate Centre for Cities (C-Cube) */}
              <div className={"card" + (this.state.showDiv === 'climateCenter' ? '' : ' d-none')}>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.setSomeState('')}>
                  <span aria-hidden="true" style={{ float: "right" }} className="btn btn-danger btn-sm mb-0">&times;</span>
                </button>
                <h5 className="text-center"> Climate Centre for Cities (C-Cube) </h5>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Projects</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td> CSCAF-3.0(Under UOF) </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td> Climate Smart Cities  </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td> CITIIS  </td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td> NMCG  </td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td> Urban Resilience Unit  </td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td> Shallow Aquifier Management  </td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td> Development of urban river management plan (URMP)( Bareily, Aurangabad, Ayodhya, Pragraj)  </td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td> URVERS  </td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td> River City Allience  </td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td> Climate Centre for Cities  </td>
                    </tr>
                    <tr>
                      <th scope="row">11</th>
                      <td> Sanitation Capacity Building Platform -Mahreen mam  </td>
                    </tr>
                    <tr>
                      <th scope="row">12</th>
                      <td> Sustainable Cities Integrated Approach Pilot in India (SCIAP)-paramita ji  </td>
                    </tr>
                    <tr>
                      <th scope="row">13</th>
                      <td> Capacity Building Project on Low Carbon and Climate Resilience City Development in India (CapaCITIES2.0)-Mukesh ji  </td>
                    </tr>
                    <tr>
                      <th scope="row">14</th>
                      <td> WRI Sustainable Cities and Transport- PARIWAR  </td>
                    </tr>
                    <tr>
                      <th scope="row">15</th>
                      <td> Building Low Carbon and Climate Resilient Cities in India  </td>
                    </tr>
                    <tr>
                      <th scope="row">16</th>
                      <td> Developing Comprehensive Water Management Plans for Indian Cities-victor sir  </td>
                    </tr>

                  </tbody>
                </table>
              </div>
              {/* End Climate Centre for Cities (C-Cube) */}

              {/* Centre for Municipal Finance & Governance */}
              <div className={"card" + (this.state.showDiv === 'municipalFinance' ? '' : ' d-none')}>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.setSomeState('')}>
                  <span aria-hidden="true" style={{ float: "right" }} className="btn btn-danger btn-sm mb-0">&times;</span>
                </button>
                <h5 className="text-center"> Centre for Municipal Finance & Governance </h5>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Projects</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td> National Urban Livelihood Mission </td>
                    </tr>


                  </tbody>
                </table>
              </div>
              {/* End Centre for Municipal Finance & Governance */}

              {/* Centre for Urbanization and Economic Growth */}
              <div className={"card" + (this.state.showDiv === 'urbanizationGrowth' ? '' : ' d-none')}>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => this.setSomeState('')}>
                  <span aria-hidden="true" style={{ float: "right" }} className="btn btn-danger btn-sm mb-0">&times;</span>
                </button>
                <h5 className="text-center"> Centre for Urbanization and Economic Growth </h5>
                <table class="table">
                  <thead>
                    <tr>
                      <th scope="col">S.No</th>
                      <th scope="col">Projects</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td> Morgenstadt Global Smart Cities Initiative: Global Approach - Local Solutions </td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td> India Smart Cities Fellowship Program 2021 </td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td> Data and Strategy Unit (DSU) </td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td> Urban Outcomes Framework (UOF) </td>
                    </tr>


                  </tbody>
                </table>
              </div>
              {/* End Centre for Urbanization and Economic Growth */}
             
              <div className="card">
                <div className="card-body">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                      
                        <input type="checkbox" checked={this.state.project.process === "1"} name= "process" value={this.state.project.process} onChange={this.handleChangeChk} />
                        </div>
                    </div>
                   <p className="form-control"> I have understand about the project </p>
                    </div>
                </div>
                
                <div className="card-footer">
                <Link to="/" className="btn btn-dark"> Back </Link>

                <input type="button" value="Continue" className="btn btn-primary ml-2" onClick={this.pressContinue}/>
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
