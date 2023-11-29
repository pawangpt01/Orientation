import React, { Component } from "react";
import Logo from "../../img/logo.png";
// import IndependenceDay from "../../img/independence-day.png";
import { Navigate } from "react-router-dom";
import Diwali from '../../img/Diwali.jpg';
import "./Login.css";
const axios = require("axios").default;

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Login: {
        email: "parvesh@niua.org",
        password: "admin",
      },
      resStatus: {
        isError: false,
        messages: [],
      },
      redirect: false,
      modalState: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.loginBtn = this.loginBtn.bind(this);
    this.handleShow = this.handleShow.bind(this);
  }

  handleChange = (e) => {
    var login = this.state.Login;
    login[e.target.name] = e.target.value;
    this.setState({ Login: login });
  };

  //Login User
  loginBtn() {
    var thizz = this;

    // Send login request
    axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "/user/login",
      data: thizz.state.Login,
    })
      .then(function (response) {
        //handle success
        console.log(response);
        var data = response?.data;
        if (data.status === true && data.tokenKey) {
          thizz.setState({ redirect: true });
          localStorage.setItem("AUTH_TOKEN", data.tokenKey);
          console.log(data.tokenKey);
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
  handleShow() {
    this.setState({ modalState: !this.state.modalState });
  }

  render() {
    console.log(this.state.modalState);
    if (localStorage.getItem("AUTH_TOKEN")) {
      return <Navigate to="/dashboard" />;
    }
    return (
      <>
      <div className={"modal fade " + (this.state.modalState ? " show d-block" : " d-none")} tabIndex="-1" role="dialog">
                    <div className=" modal-lgmodal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title">Welcome to NIUA family</h5>
                                <button type="button" className="close sm-btn" onClick={this.handleShow}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body"> <img src={Diwali} alt="" className="img-fluid" /></div>
                            {/* <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={this.handleShow}>Close</button>
                                <button type="button" className="btn btn-primary">Save changes</button>
                            </div> */}
                        </div>
                    </div>
                </div>
                <section className="vh-100 b-color">
          <div className="container h-custom">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-9 col-lg-6 col-xl-5" style={{ display: "block" }}>
                <img src={Logo} style={{ width: "200px", height: "auto", }} alt="logo"/>
                <h2 style={{ fontsize: "30px", fontWeight: "bold", marginTop: "10px" }}>WELCOME TO NIUA!</h2>
                <p style={{ color: "black" }}>Enter Your Details Start Journey With Us</p>

              </div>
              <div className="card p-2 col-md-8 col-lg-6 col-xl-4 offset-xl-1" style={{ borderRadius: "15px", boxShadow: " 0 0 10px rgb(0 0 0 / 23%), 0 10px 10px rgb(0 0 0 / 30%);" }}>
                <form>
                  <div className="d-flex align-items-center mb-3 pb-2">
                    <span className="h1 fw-bold mb-0">

                    </span>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="email"
                      className="form-control form-control-lg"
                      placeholder="Enter a valid email address"
                      name="email"
                      value={this.state.Login.email}
                      onChange={this.handleChange}
                    />
                    <label className="form-label">Email address</label>
                  </div>

                  <input type="hidden" id="base_url" />

                  <div className="form-outline mb-3">
                    <input
                      type="password"
                      id="password"
                      name="password"
                      className="form-control form-control-lg"
                      placeholder="Enter password"
                      value={this.state.Login.password}
                      onChange={this.handleChange}
                    />
                    <label className="form-label">Password</label>
                  </div>

                  <div className="text-center text-lg-start mt-4 pt-2">
                    <button
                      type="button"
                      id="loginBtn"
                      className="btn btn-primary "
                      style={{ paddingLeft: " 2.5rem", paddingRight: "2.5rem", width: "340px", height: "40px" }}
                      onClick={this.loginBtn}
                    >
                      Login
                    </button>

                    <p className="small fw-bold mt-2 pt-1 mb-0">

                      {/* <Link to="/register"  className="link-danger">Register</Link> */}
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-md-12 mt-3">
                      {this.state.resStatus.isError ? (
                        <div className="alert alert-danger">
                          {" "}
                          {this.state.resStatus.messages}{" "}
                        </div>
                      ) : (
                        ""
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </section>
      </>
    );
  }
}
