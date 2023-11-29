import React, { Component } from 'react'
import withRouter from '../../withRouter';
import Header from '../layout/Header';
import Sidebar from '../layout/Sidebar';
const axios = require("axios").default;
class JoiningKitUpload extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images:null,
            signature:null
        }
        this.handleUpload = this.handleUpload.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
    }
    handleFileChange = (event) => {
        
        this.setState({[event.target.name]: event.target.files[0]});
    };

    handleUpload = () => {
        alert(this.props.params.id)
        if (this.state.images && this.state.signature) {
          const formData = new FormData();

        //   formData.append("some", "other")
          
          formData.append('images', this.state.images);
          formData.append('signature', this.state.signature);
          formData.append('joiningKitId', this.props.params.id);
        
        console.log(formData.get("images"))

          axios({
            method: "post",
            url: process.env.REACT_APP_BASE_URL + "/api/joiningkit/uploaddocument",
            body: {
                'data': formData
            },
            headers: {
              AUTH_TOKEN: localStorage.getItem("AUTH_TOKEN"),
              
            }
      
          }).then(function (response) {
              //handle success
              console.log(response);
          }).catch(function (error) {
              //handle error
              console.log(error);
        
            });
        }
      };
        
    render() {
        return (
            <>
                <Header />
                <div className="container-fluid">
            <div className="row">
              <Sidebar />
              <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                  <h5>Dashboard/joinig/wizard/upload</h5>
                  
                </div>
               <form>
               <div>
                    <div className="card">
                        <div className="card-header bg-cyan">
                            <h3 className="card-title text-center">Document Upload</h3>
                        </div>
                        <div className="card-body">

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <div className="custom-file mb-4">
                                        <input type="file"
                                            className="custom-file-input"
                                            id="images"
                                            name="images"
                                            onChange={this.handleFileChange}
                                        />
                                        <label className="custom-file-label" htmlFor="validatedCustomFile">Upload Image</label>
                                    </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <div className="custom-file mb-4">
                                        <input type="file" className="custom-file-input"
                                            id="signature"
                                            name="signature"
                                            onChange={this.handleFileChange}
                                        />
                                        <label className="custom-file-label" htmlFor="validatedCustomFile">Signature upload </label>
                                    </div>
                                </div>

                            </div>

                <button type="button" onClick={this.handleUpload} className="btn btn-primary ml-2"> Upload </button>
                        </div>
                    </div>
                </div>
               </form>
               </main>
            </div>
          </div>
               
            </>
        )
    }
}
export default withRouter(JoiningKitUpload);