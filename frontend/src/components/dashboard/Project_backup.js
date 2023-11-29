import React, { Component } from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import { Link, Navigate } from "react-router-dom";
const axios = require("axios").default;

export default class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: {
        process:0,
        save:false
      },
      isError:{
        message:''
      }
    }
    this.handleChangeChk = this.handleChangeChk.bind(this);
    this.pressContinue = this.pressContinue.bind(this);
  }
  handleChangeChk(e) {
    var project = this.state.project;
    project[e.target.name] = e.target.value;
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

  render() {
    if (this.state.project.save === true) {
      return <Navigate to='/dashboard'/>;
    }
    return (
      <>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <Sidebar />
            <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
              <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h5>Dashboard/Project</h5>
                <div className="btn-toolbar mb-2 mb-md-0">
                  <div className="btn-group mr-2">
                    <button
                      type="button"
                      className="btn btn-sm btn-disabled btn-outline-secondary"
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
              {/* Main Body */}
            <div className="card">
            <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col"> S.No </th>
                    <th scope="col"> Project </th>
                    <th scope="col" className="text-center"> Project Description </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Centre Digital Governance (CDG) </td>
                    <td>
                      CDG will be home to the ambitious National Urban
                      Innovation stack – a shared digital infrastructure to
                      drive the implementation of key digital initiatives in
                      wide-ranging domains, including e-governance, capacity
                      building and leadership development, data-driven urban
                      transformation, procurement, research and innovation,
                      among others.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Climate Centre for Cities (C-Cube) </td>
                    <td>
                      C-Cube has been established at NIUA to create synergy
                      across all climate actions being undertaken in Indian
                      cities by various stakeholders. The Vision “To Build
                      Climate Action in Cities” supported by climate resilience
                      is important for not only steering the growth of the
                      country towards a 5 trillion economy but also improving
                      the quality of life of urban residents. This Centre aims
                      to achieve the same by creating a central hub for climate
                      informed urban development actions facilitated by
                      multi-stakeholder collaborations.{" "}
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Inclusive Cities Centre </td>
                    <td>
                      Under the aegis of the Ministry of Housing and Urban
                      Affairs (MoHUA), the National Institute of Urban Affairs
                      (NIUA) with strategic support from the Deutsche
                      Gesellschaft für Internationale Zusammenarbeit GmbH (GIZ)
                      have formalized a ‘Inclusive Cities Centre’ (ICC) to
                      facilitate cities in evidence-based planning and
                      investments (for inclusive development) to improve urban
                      productivity and quality of life for all with a focus on
                      the most vulnerable groups in cities including urban poor,
                      persons with disabilities, women, children, youth and the
                      elderly.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Centre for Municipal Finance & Governance </td>
                    <td>
                      NIUA promotes the strengthening of local governments by
                      focusing on municipal finance and governance reform to
                      help build urban administration structures that can
                      effectively plan and manage their affairs, and raise
                      funding based on specific requirements. The objective of
                      Centre for Municipal Finance and Governance is to become a
                      custodian of the National Urban Financial Information
                      dynamic and work towards financially empowering Urban
                      Local Bodies so that they can become inclusive,
                      integrated, resilient, sustainable and self- reliant
                      institutions adopting a multi- disciplinary and
                      multi-sectoral perspective.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Centre for Urbanization and Economic Growth </td>
                    <td>
                      The linkages of the urban areas and economic activity and
                      wide-ranging effects on spatial growth, availability of
                      employment opportunities and livability in urban
                      ecosystems are areas where NIUA is going to focus under
                      this centre.
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="card-footer">
              <div className="card">
                <div className="card-body">
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <div className="input-group-text">
                      
                        <input type="checkbox" checked={this.state.project.process} name= "process" value="1" onChange={this.handleChangeChk} required/>
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
