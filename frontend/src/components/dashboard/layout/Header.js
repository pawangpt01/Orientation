import React, { Component } from 'react'
import { Navigate} from 'react-router-dom';
import Logo from '../../../img/logo.png';
const axios = require("axios").default;

export default class Header extends Component {
  constructor(props) {
    super(props);
   this.state = {
    redirect:false
   }
    
    this.logout = this.logout.bind(this);
  }

  logout(){
    axios({
      method: "post",
      url:  process.env.REACT_APP_BASE_URL + "/user/logout",
      headers: {
        AUTH_TOKEN: localStorage.getItem('AUTH_TOKEN')
      }
    }).then((response)=> {
      var data = response?.data;
      if(data.status === true && data){ 
        localStorage.removeItem('AUTH_TOKEN');
        this.setState({
          redirect:true
        })
      }
    }).catch((error)=> {
      console.log(error)
    })

  }
  render() {
    // console.log(this.state.redirect)
    if(this.state.redirect) {
     return  <Navigate to='/'/>
    }
    return (
        <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
        <a className="navbar-brand col-md-3 col-lg-2 mr-0 px-3" href="/#"> <img src={Logo} width="160px" height="auto" alt="logo"/>
        </a>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <input className="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search" />
        <ul className="navbar-nav px-3">
          <li className="nav-item text-nowrap">
            <a className="nav-link" href='/#' onClick={this.logout} style={{color:'white'}}>Sign out</a>
          </li>
        </ul>
      </nav>
    )
  }
}

