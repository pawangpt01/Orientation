import React, { Component } from 'react'

export default class FormFour extends Component {
  formOneHandleChange2 = (e) => {
    // e.preventDefault();
    let { name, value } = e.target;
    // Beause radio button not working 
    if (value === "0" || value === "1") {
      this.props.handleChange(name, parseInt(value));
    } else {

      this.props.handleChange(name, value);
    }

  }
  render() {
    return (<div>
        <section className="content">
      <div className="card mt-3">
        <div className="card-header bg-cyan">
          <h3 className="card-title text-center"> EMAIL ID, IDENTITY CARD AND BAS REGISTRATION APPLICATION FORM </h3>
        </div>
        <div className="card-body">
          
            <p>To be filled by New Member</p>
            <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Name (as given in Aadhar Card)</label>
              <input type="text" className="form-control" value={ this.props.dataFormOne.first_name+' '+ this.props.dataFormOne.middle_name+' '+this.props.dataFormOne.last_name} readOnly/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Designation (provided by NIUA)</label>
              <input type="text" className="form-control" value={this.props.dataFormOne.designation}  readOnly placeholder="Designation" />
            </div>
          </div>
            <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Date of Birth (as per Aadhar Card)</label>
              <input type="date" className="form-control" name="birth_date" id="birth_date" value={this.props.dataFormOne.birth_date} readOnly/>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Project Name </label>
              <input type="text" className="form-control" id="project_name" name="project_name" value={this.props.dataFormOne.project_name} 
                onChange={this.formOneHandleChange2}/>
            </div>
          </div>
            <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name"> Contract Period </label>
             <div className="row">
              <div className="form-group mx-sm-3 mb-2">
                To
                <input type="date" 
                className="form-control" 
                name="contract_period_start"
                id="contract_period_start"
                value={this.props.dataFormOne.contract_period_start} 
                onChange={this.formOneHandleChange2} />
              </div>
              <div className="form-group mx-sm-3 mb-2">
                 From
                <input type="date" className="form-control" name="contract_period_end" id="contract_period_end"
                value={this.props.dataFormOne.contract_period_end} 
                onChange={this.formOneHandleChange2}
                />
              </div>
             </div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Alternate Email ID (active) </label>
              <input type="email" className="form-control" name="alternative_email" id="alternative_email" value={this.props.dataFormOne.alternative_email}  readOnly/>
            </div>
          </div>
           
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Aadhar Number</label>
              <input type="text" className="form-control" value={this.props.dataFormOne.aadhar_no}  readOnly />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Blood group </label>
              <input type="text" className="form-control" value={this.props.dataFormOne.blood_group}  readOnly  />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="name">Residential Address</label>
             <textarea name="" id=""  rows="2" className="form-control" value={this.props.dataFormOne.communication_address}readOnly></textarea>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Pin Code </label>
              <input type="number" className="form-control" value={this.props.dataFormOne.pin_code}  name="pin_code" id="pin_code" onChange={this.formOneHandleChange2} />
            </div>
          </div>

          <div className="form-row">
            {/* <div className="form-group col-md-6">
              <label htmlFor="contact_detail"> Gender (Please tick) </label>
              <div className="form-group row p-1">
                <div className="form-check col-md-6">
                  <input className="form-check-input" type="radio" name="radio1" />
                  <label className="form-check-label">Male</label>
                </div>
                <div className="form-check col-md-6">
                  <input className="form-check-input" type="radio" name="radio1" checked="" />
                  <label className="form-check-label">Female</label>
                </div>
                
              </div>
            </div> */}
            <div className="form-group col-md-6">
              <label htmlFor="contact_detail"> Mobile No </label>
              <input type="text" className="form-control"  value={this.props.dataFormOne.contact_no} readOnly />
            </div>
             <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Please mail scanned file to: </label>
              <input type="text" className="form-control"  placeholder="Designation" value=" ndangi@niua.org" readOnly />
            </div>
          </div>

          <div className="form-row">
            {/* <div className="form-group col-md-6">
              <label htmlFor="name">Upload Scanned passport size photo (jpeg format)</label>
              <input type="file" className="form-control" id="name" />
            </div> */}
            
            {/* <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Please mail scanned file to: </label>
              <input type="text" className="form-control" id="name" placeholder="Designation" value=" ndangi@niua.org" readOnly />
            </div> */}
          </div>
          <p>Project Coordinator</p>
          <div className="form-row">
           
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Name </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="name">Signature upload</label>
              <input type="file" className="form-control" id="name" />
            </div>
          </div>
          <p>  To be filled by Related Department </p>
          <div className="form-row">
           
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Identity Card Number </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="name">Employee Code</label>
              <input type="text" className="form-control" id="name" />
            </div>
          </div>
          <div className="form-row">
           
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">I-Card </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="name">Email Id</label>
              <input type="text" className="form-control" id="name" />
            </div>
          </div>
          <div className="form-row">
           
            <div className="form-group col-md-6">
              <label htmlFor="inputPassword4">Contract Reference Number </label>
              <input type="text" className="form-control" id="name" />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="name">BAS Registration</label>
              <input type="text" className="form-control" id="name" />
            </div>
          </div>
          <small>Email id will be given as per institute’s standard norms </small>
          <p><input type="checkbox" name="" id="" /> Terms and Conditions: </p>
          <ul>
            <li>	The identity card must be carried with you during working hours and on official travels.</li>
            <li>	Misuse of ID card shall invite disciplinary action. </li>
            <li>	It is your responsibility to ensure the details are up to date on the ID card.</li>
            <li>	This card must be produced on demand by security staff or any other authorized person of NIUA</li>
            <li>	Misplaced ID card FIR copy should be sent to Mr. Naveen Dangi</li>
            <li> The reissue of ID card will be against the payment of stipulated fee amount of Rs. 100 (One Hundred Only). </li>
            <li>	On leaving the job at the organization, this card must be deposited in the IT Department</li>
          </ul>
          <p> Declaration: </p>
          <p> <input type="checkbox" /> declare that the information given by me in this application is correct. I have read & accept the terms & conditions.</p>
          
           
        </div>
      </div>
    </section>
    </div>
    )
  }
}
