import React, { Component } from "react";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";
// import env from "react-dotenv";
const axios = require("axios").default;

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      registration: {
        name: "",
        username: "",
        email: "",
        password: "",
        repassword: "",
        role:""
      },
      resStatus: {
        isError: false,
        messages: []
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitReg = this.submitReg.bind(this);
  }
  handleChange = (e) => {
    var registration = this.state.registration;
    registration[e.target.name] = e.target.value;
    this.setState({ registration: registration });
  };

  submitReg() {
    console.log(this.state.registration);
    // Send a POST request
    var thizz = this
    axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "/user/register",
      data: thizz.state.registration,
    }).then(function (res) {
      var response = res.data
      console.log("---",response.status === true);
      var resStatus = thizz.state.resStatus;

      if (response.status === true) {
        resStatus.isError = false;
        resStatus.messages = [response.message];
        thizz.setState({ resStatus: resStatus });
      }else{
        resStatus.isError = true;
        resStatus.messages = [response.message];
        thizz.setState({ resStatus: resStatus });
      }
      console.log("depak",thizz.state.resStatus)
    }).catch((error) => {
      if( error.response ){
          console.log(error.response.data); // => the response payload 
          var response = error.response.data
      var resStatus = thizz.state.resStatus;
      if (response.status === true) {
        resStatus.isError = false;
        resStatus.messages = [response.message];
        thizz.setState({ resStatus: resStatus });
      }else{
        resStatus.isError = true;
        resStatus.messages = [response.message];
        thizz.setState({ resStatus: resStatus });
      }
      }
  });
  }

  render() {
    return (
      <div className="hold-transition register-page">
        <div className="register-box">
          <div className="register-logo">
            <Link to="/" className="link-danger">
              {" "}
              <img src={Logo} alt="Logo" width="160px" />
            </Link>
          </div>

          <div className="card">
            <div className="card-body register-card-body">
              <p className="login-box-msg">Register a new User</p>
              <form>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Full name"
                    name="name"
                    value={this.state.registration.name}
                    onChange={this.handleChange}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Username"
                    name="username"
                    value={this.state.registration.username}
                    onChange={this.handleChange}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-user"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={this.state.registration.email}
                    onChange={this.handleChange}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-envelope"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                    id="password"
                    name="password"
                    value={this.state.registration.password}
                    onChange={this.handleChange}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Retype password"
                    id="repassword"
                    name="repassword"
                    value={this.state.registration.repassword}
                    onChange={this.handleChange}
                  />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                 
                 <select name="role" id="role"  className="form-control"  value={this.state.registration.role}
                    onChange={this.handleChange}>
                  <option value="">Select</option>
                  <option value="1"> ROLE_SUPER_ADMIN </option>
                  <option value="2"> ROLE_ADMIN </option>
                  <option value="3"> ROLE_STAFF </option>
                 </select>
                 <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <button
                      type="button"
                      onClick={this.submitReg}
                      className="btn btn-primary btn-block"
                    >
                      Register
                    </button>
                  </div>
                  <div className="col-6">
                    <Link to="/" className="btn btn-dark btn-block"> Back </Link>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mt-3">
                    {this.state.resStatus.messages.length > 0 ? this.state.resStatus.isError  ? (
                      <div className="alert alert-danger"> {this.state.resStatus.messages} </div>
                    ) : (
                      <div className="alert alert-success"> {this.state.resStatus.messages} </div>
                    ):''}
                    
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
