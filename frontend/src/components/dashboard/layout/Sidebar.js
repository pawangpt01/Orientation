import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import "./Sidebar.css";
export default class Sidebar extends Component {
  render() {
    return (
        <nav id="sidebarMenu"  className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse vh-100">



        <div className="sidebar-sticky pt-3">
        <div className='hoverable2'>
          <ul className="nav flex-column">
            <li className="nav-item px-4  sidetop tex1">
              <a className="active " href="/#">
                
              <i className="bi bi-speedometer2"></i>
                <span data-feather="home " className='ml-3'></span>
                Dashboard  <span className="sr-only ">(current)</span>
              </a>
              
            
            </li>
            
            
          </ul>
          </div>
         
          
          {/* <div className="hoverable">
          
  
          <h6 className="sidebar-heading d-flex  align-items-center px-4 mt-4 text-muted tex active">
          <i className="bi bi-save2"></i>
            <span>Saved reports</span>
           
            <a className="d-flex align-items-center text-muted " href="/#" aria-label="Add a new report">
              <span data-feather="plus-circle"></span>
            </a>
          </h6>
          
          </div> */}
          <div className="hoverable1 ">
           <ul className="nav flex-column mb-2">
           
           
            <li className="nav-item d-flex align-items-center  px-4 mt-3 tex">
            <i className="bi bi-r-circle-fill"></i>
              <Link to="/register" className=""> <span data-feather="file-text" className='ml-3 tex'></span> Register</Link>
            </li>
            </ul>
            

           
            </div>
          
        </div>
        



      </nav>
      



    )
  }
}
