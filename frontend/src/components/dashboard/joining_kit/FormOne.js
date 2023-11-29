import React, { Component } from 'react'
import "../dash.css";

export default class FormOne extends Component {

  

  formOneHandleChange = (e) => {
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
      <div className="card">
        <div className="card-header bg-cyan">
          <h3 className="card-title text-center">APPLICATION FOR CONTRACTUAL ENGAGEMENT</h3>
        </div>
        <div className="card-body">

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="first_name">First Name(as given in Aadhar Card)</label>
              <input
                type="text"
                className="form-control"
                id="first_name"
                name="first_name"
                value={this.props.dataFormOne.first_name}
                onChange={this.formOneHandleChange}
                placeholder="First Name" required
              />
              <div className='text-danger text-sm ml-1'>
                 {this.props.validator.message('first name', this.props.dataFormOne.first_name, 'required|min:3|max:20')}
              </div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="middle_name">Middle Name</label>
              <input
                type="text"
                className="form-control"
                id="middle_name"
                name="middle_name"
                value={this.props.dataFormOne.middle_name}
                onChange={this.formOneHandleChange}
                placeholder="Middle Name"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="last_name">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="last_name"
                name="last_name"
                value={this.props.dataFormOne.last_name}
                onChange={this.formOneHandleChange}
                placeholder="Last Name"
              />
               <div className='text-danger text-sm ml-1'>
                 {this.props.validator.message('last name', this.props.dataFormOne.last_name, 'required|min:3|max:25')}
              </div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="location">Location</label>
              <input
                type="text"
                className="form-control"
                id="location"
                name="location"
                value={this.props.dataFormOne.location}
                placeholder="Location"
                onChange={this.formOneHandleChange}
              />
              <div className='text-danger text-sm ml-1'>
                 {this.props.validator.message('location', this.props.dataFormOne.location, 'required|min:3|max:30')}
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="center_project">
                Centre / Project Name
              </label>
              <input
                type="text"
                className="form-control"
                id="center_project"
                name="center_project"
                value={this.props.dataFormOne.center_project}
                onChange={this.formOneHandleChange}
                placeholder="Centre vs Project Name"
              />
              <div className='text-danger text-sm ml-1'>
                 {this.props.validator.message('center vs project name', this.props.dataFormOne.center_project, 'required|min:3|max:50')}
              </div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="designation">Designation</label>
              <input
                type="text"
                className="form-control"
                id="designation"
                name="designation"
                value={this.props.dataFormOne.designation}
                onChange={this.formOneHandleChange}
                placeholder="Your Designation"
              />
              <div className='text-danger text-sm ml-1'>
                 {this.props.validator.message('designation', this.props.dataFormOne.designation, 'required|min:3|max:30')}
              </div>
            </div>
          </div>
          <p> Personal Information</p>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="father_name">Father / Husband Name</label>
              <input
                type="text"
                className="form-control"
                id="father_husband_name"
                name="father_husband_name"
                value={this.props.dataFormOne.father_husband_name}
                onChange={this.formOneHandleChange}
                placeholder="Father vs Husband Name"
              />
               <div className='text-danger text-sm ml-1'>
                 {this.props.validator.message('father vs husband name', this.props.dataFormOne.father_husband_name, 'required|min:3|max:30')}
              </div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="mother_name">Mother Name</label>
              <input
                type="text"
                className="form-control"
                id="mother_name"
                name="mother_name"
                value={this.props.dataFormOne.mother_name}
                onChange={this.formOneHandleChange}
                placeholder="Mother Name"
              />
               <div className='text-danger text-sm ml-1'>
                 {this.props.validator.message('mother name', this.props.dataFormOne.mother_name, 'required|min:3|max:30')}
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="contact_no">Contact Detail</label>
              <input
                type="number"
                className="form-control"
                id="contact_no"
                name="contact_no"
                value={this.props.dataFormOne.contact_no}
                onChange={this.formOneHandleChange}
                placeholder="+91"
              />
               <div className='text-danger text-sm ml-1'>
                 {this.props.validator.message('contact no', this.props.dataFormOne.contact_no, 'required|min:3|max:10|numeric')}
              </div>
            </div>
            
            <div className="form-group col-md-4">
              <label htmlFor="emergency_contact">Emergency Contact Detail</label>
              <input
                type="number"
                className="form-control"
                id="emergency_contact"
                name="emergency_contact"
                value={this.props.dataFormOne.emergency_contact}
                onChange={this.formOneHandleChange}
                placeholder="+91"
              />
               <div className='text-danger text-sm ml-1'>
                 {this.props.validator.message('emergency contact no', this.props.dataFormOne.emergency_contact, 'required|min:3|max:10|numeric')}
              </div>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="relation">Relation</label>
              <input
                type="text"
                className="form-control"
                id="relation"
                name="relation"
                value={this.props.dataFormOne.relation}
                onChange={this.formOneHandleChange}
                placeholder="example:- Father,Spouse etc.."
              />
              <div className='text-danger text-sm ml-1'>
                 {this.props.validator.message('relation', this.props.dataFormOne.relation, 'required|min:3|max:40')}
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="">Gender</label>
              <div className="form-group row p-1">
                <div className="form-check col-md-6">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="MALE"
                    checked={this.props.dataFormOne.gender === "MALE"}
                    onChange={this.formOneHandleChange}
                  />
                  <label className="form-check-label">Male</label>
                </div>
                <div className="form-check col-md-6">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="gender"
                    value="FEMALE"
                    checked={this.props.dataFormOne.gender === "FEMALE"}
                    onChange={this.formOneHandleChange}
                  />
                  <label className="form-check-label">Female</label>
                </div>
              </div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="email">Email Address</label>
              <input
                type="text"
                className="form-control"
                id="email"
                name="email"
                value={this.props.dataFormOne.email}
                onChange={this.formOneHandleChange}
                placeholder="abc@gmail.com"
              />
               <div className='text-danger text-sm ml-1'>
                 {this.props.validator.message('email', this.props.dataFormOne.email, 'required|email')}
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="">Marital Status</label>
              <div className="form-group row p-1">
                <div className="form-check col-md-6">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="marital_status"
                    value="MARRIED"
                    checked={this.props.dataFormOne.marital_status === "MARRIED"}
                    onChange={this.formOneHandleChange}
                  />
                  <label className="form-check-label">Married</label>
                </div>
                <div className="form-check col-md-6">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="marital_status"
                    value="UNMARRIED"
                    checked={this.props.dataFormOne.marital_status === "UNMARRIED"}
                    onChange={this.formOneHandleChange}
                  />
                  <label className="form-check-label">
                    Unmarried
                  </label>
                </div>
              </div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="birth_date">Date of Birth</label>
              <input type="date" className="form-control" id="birth_date" name="birth_date" value={this.props.dataFormOne.birth_date} 
              onChange={this.formOneHandleChange}
              />
               <div className='text-danger text-sm ml-1'>
                 {this.props.validator.message('birth date', this.props.dataFormOne.birth_date, 'required')}
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="nationality">Nationality</label>
              <input
                type="text"
                className="form-control"
                id="nationality"
                name="nationality"
                placeholder="Indian"
                value={this.props.dataFormOne.nationality}
                onChange={this.formOneHandleChange}
              />
              <div className='text-danger text-sm ml-1'>
                 {this.props.validator.message('nationality date', this.props.dataFormOne.nationality, 'required')}
              </div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="marriage_date">Date of Marriage</label>
              <input
                type="date"
                className="form-control"
                id="marriage_date"
                name="marriage_date"
                value={this.props.dataFormOne.marriage_date}
                onChange={this.formOneHandleChange}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="communication_address">
                Communication Address
              </label>
              <textarea
                className="form-control"
                id="communication_address"
                name="communication_address"
                placeholder='...'
                rows="3"
                onChange={this.formOneHandleChange}
                value={this.props.dataFormOne.communication_address}
              > </textarea>
               <div className='text-danger text-sm ml-1'>
                 {this.props.validator.message('communication address', this.props.dataFormOne.communication_address, 'required|min:3|max:80|alpha_num')}
              </div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="permanent_address">Permanent Address</label>
              <textarea
                className="form-control"
                id="permanent_address"
                name="permanent_address"
                placeholder='...'
                rows="3"
                value={this.props.dataFormOne.permanent_address}
                onChange={this.formOneHandleChange}
              ></textarea>
              <div className='text-danger text-sm ml-1'>
                 {this.props.validator.message('permanent address', this.props.dataFormOne.permanent_address, 'required|min:3|max:80|alpha_num')}
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="aadhar_no">Aadhar No.</label>
              <input
                type="text"
                className="form-control"
                id="aadhar_no"
                name="aadhar_no"

                value={this.props.dataFormOne.aadhar_no}
                onChange={this.formOneHandleChange}
              />
              <div className='text-danger text-sm ml-1'>
                 {this.props.validator.message('aadhar no', this.props.dataFormOne.aadhar_no, 'required|min:12|max:12|alpha_num')}
              </div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="pan_no">PAN No.</label>
              <input
                type="text"
                className="form-control"
                id="pan_no"
                name="pan_no"

                value={this.props.dataFormOne.pan_no}
                onChange={this.formOneHandleChange}
              />
              <div className='text-danger text-sm ml-1'>
                 {this.props.validator.message('pan no', this.props.dataFormOne.pan_no, 'required|min:10|max:10|alpha_num')}
              </div>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="passport_no"> Passport No. </label>
              <input
                type="text"
                className="form-control"
                id="passport_no"
                name="passport_no"
                value={this.props.dataFormOne.passport_no}
                onChange={this.formOneHandleChange}
                placeholder="Passport No"
              />
               
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="passport_validity">Passport Validity</label>
              <input
                type="date"
                className="form-control"
                id="passport_validity"
                name="passport_validity"
                value={this.props.dataFormOne.passport_validity}
                onChange={this.formOneHandleChange}
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4">
              <label htmlFor="blood_group">Blood Group</label>
              <input
                type="text"
                className="form-control"
                id="blood_group"
                name="blood_group"
                value={this.props.dataFormOne.blood_group}
                onChange={this.formOneHandleChange}
                placeholder="B++"
              />
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="last_ctc">Last CTC(LPA)</label>
              <input
                type="number"
                className="form-control"
                id="last_ctc"
                name="last_ctc"
                value={this.props.dataFormOne.last_ctc}
                placeholder="example:- 10.00"
                onChange={this.formOneHandleChange}
              />
               <div className='text-danger text-sm ml-1'>
                 {this.props.validator.message('last ctc', this.props.dataFormOne.last_ctc, 'required|numeric|max:5')}
              </div>
            </div>
            <div className="form-group col-md-4">
              <label htmlFor="offered_ctc">Offered CTC(LPA)</label>
              <input
                type="text"
                className="form-control"
                id="offered_ctc"
                name="offered_ctc"
                value={this.props.dataFormOne.offered_ctc}
                placeholder="example:- 12.00"
                onChange={this.formOneHandleChange}
              />
               <div className='text-danger text-sm ml-1'>
                 {this.props.validator.message('offered ctc', this.props.dataFormOne.offered_ctc, 'required|numeric|max:5')}
              </div>
            </div>
          </div>
          <p> Bank Details</p>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="bank_name"> Bank Name </label>
              <input
                type="text"
                className="form-control"
                id="bank_name"
                name="bank_name"
                value={this.props.dataFormOne.bank_name}
                onChange={this.formOneHandleChange}
                placeholder="Bank Name"
              />
               <div className='text-danger text-sm ml-1'>
                 {this.props.validator.message('bank name', this.props.dataFormOne.bank_name, 'required|alpha|min:3|max:30')}
              </div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="account_no"> Account No </label>
              <input
                type="text"
                className="form-control"
                id="account_no"
                name="account_no"
                value={this.props.dataFormOne.account_no}
                onChange={this.formOneHandleChange}
                placeholder="Account Number"
              />
               <div className='text-danger text-sm ml-1'>
                 {this.props.validator.message('account no', this.props.dataFormOne.account_no, 'required|integer|min:3|max:20')}
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="branch_address"> Branch Address. </label>
              <textarea
                className="form-control"
                id="branch_address"
                name='branch_address'
                rows="1"
                value={this.props.dataFormOne.branch_address}
                onChange={this.formOneHandleChange}
              >  </textarea>
              <div className='text-danger text-sm ml-1'>
                 {this.props.validator.message('branch address', this.props.dataFormOne.branch_address, 'required|alpha_num|min:3|max:50')}
              </div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="ifsc_code"> IFSC Code </label>
              <input
                type="text"
                className="form-control"
                id="ifsc_code"
                name="ifsc_code"
                value={this.props.dataFormOne.ifsc_code}
                onChange={this.formOneHandleChange}
                placeholder="IFSC Code"
              />
               <div className='text-danger text-sm ml-1'>
                 {this.props.validator.message('ifsc code', this.props.dataFormOne.ifsc_code, 'required|alpha_num|min:3|max:11')}
              </div>
            </div>
          </div>
          <p> Family Details </p>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>SNo</th>
                <th>Name of the Family Member</th>
                <th>Date of Birth</th>
                <th>Relation</th>
                <th>Location</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="tbl">
              {this.props.rows.map((item, idx) => (

                <tr key={'fd-' + idx}>
                  <td> {idx + 1} </td>
                  <td>
                    <input type="text" className="form-control" id="familyName" placeholder="Family Member Details" name="familyName" value={item.familyName} onChange={(evnt) => this.props.handleChangeMul(idx, evnt, 'familyDetails')} />
                  </td>
                  <td>
                    <input type="date" className="form-control" id="familydob" placeholder="Family Member Details" name="familydob" value={item.familydob} onChange={(evnt) => this.props.handleChangeMul(idx, evnt, 'familyDetails')} />
                  </td>
                  <td>
                    <input type="text" className="form-control" id="relation" placeholder="Family Member Details" name="relation" value={item.relation} onChange={(evnt) => this.props.handleChangeMul(idx, evnt, 'familyDetails')} />
                  </td>
                  <td>
                    <input type="text" className="form-control" id="location" placeholder="Family Member Details" name="location" value={item.location} onChange={(evnt) => this.props.handleChangeMul(idx, evnt, 'familyDetails')} />
                  </td>
                  <td>
                  <button className=" btn-danger" type="button" onClick={() => this.props.handleAddRow('empDetails')} style={{ marginRight: "1px" }}>+</button>
                    <button type='button' className="btn-success" onClick={() => this.props.handleRemoveSpecificRow(idx, 'familyDetails')} > - </button>
                    {/* <button className="btn btn-danger btn-sm m-1" type="button" onClick={() => this.props.handleAddRow('familyDetails')} style={{marginRight:'1px'}}>+</button>
                    <button type='button' className="btn btn-success btn-sm" onClick={() => this.props.handleRemoveSpecificRow(idx, 'familyDetails')} > - </button> */}

                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p> Information for the Employment Detail </p>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>Name & Address</th>
                <th>Designation</th>
                <th>Contact Detail  </th>
                <th>From</th>
                <th>To</th>
                <th>Reason of Leaving & Role</th>
                <th>Action</th>

              </tr>
            </thead>
            <tbody id="tbl2">
              {this.props.emp_details.map((emp, index) => (
                <tr key={'ed-' + index}>
                  <td> <input type="text" className="form-control" id="emp_name" name="emp_name" value={emp.emp_name} onChange={(evnt) => this.props.handleChangeMul(index, evnt, 'empDetails')} /></td>
                  <td> <input type="text" className="form-control" id="emp_designation" name="emp_designation" value={emp.emp_designation} onChange={(evnt) => this.props.handleChangeMul(index, evnt, 'empDetails')} /></td>
                  <td><input type="text" className="form-control" id="emp_detail" name="emp_detail" value={emp.emp_detail} onChange={(evnt) => this.props.handleChangeMul(index, evnt, 'empDetails')} /></td>
                  <td><input type="date" className="form-control" id="emp_from" name="emp_from" placeholder="" value={emp.emp_from} onChange={(evnt) => this.props.handleChangeMul(index, evnt, 'empDetails')} /></td>
                  <td><input type="date" className="form-control" id="emp_to" name="emp_to" value={emp.emp_to} onChange={(evnt) => this.props.handleChangeMul(index, evnt, 'empDetails')} /></td>
                  <td>  <textarea className="form-control" id="emp_leaving" name="emp_leaving" rows="2" cols="30" placeholder="ex: salary, Web Developer" value={emp.emp_leaving} onChange={(evnt) => this.props.handleChangeMul(index, evnt, 'empDetails')}>  </textarea> </td>
                  <td>
                    <button className=" btn-danger" type="button" onClick={() => this.props.handleAddRow('empDetails')} style={{ marginRight: "1px" }}>+</button>
                    <button type='button' className="btn-success" onClick={() => this.props.handleRemoveSpecificRow(index, 'empDetails')} > - </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p> Education Details </p>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th>SNo</th>
                <th>College / School Name</th>
                <th>University Name / Board</th>
                <th>Year of Completion  </th>
                <th>Grade / Percentage</th>

                <th>Action</th>

              </tr>
            </thead>
            <tbody id="tbl3">
              {this.props.edu_details.map((education, indx) => (
                <tr key={'edu-' + indx}>
                  <td> {indx + 1} </td>
                  <td> <input type="text" className="form-control" id="edu_name" name="edu_name" value={education.edu_name} onChange={(evnt) => this.props.handleChangeMul(indx, evnt, 'educationDetails')} /></td>
                  <td> <input type="text" className="form-control" id="edu_university" name="edu_university" value={education.edu_university} onChange={(evnt) => this.props.handleChangeMul(indx, evnt, 'educationDetails')} /></td>
                  <td><input type="date" className="form-control" id="edu_year" name="edu_year" placeholder="" value={education.edu_year} onChange={(evnt) => this.props.handleChangeMul(indx, evnt, 'educationDetails')} /></td>
                  <td><input type="text" className="form-control" id="edu_percentage" name="edu_percentage" value={education.edu_percentage} onChange={(evnt) => this.props.handleChangeMul(indx, evnt, 'educationDetails')} /></td>
                  <td>
                  <button className=" btn-danger" type="button" onClick={() => this.props.handleAddRow('empDetails')} style={{ marginRight: "1px" }}>+</button>
                    <button type='button' className="btn-success" onClick={() => this.props.handleRemoveSpecificRow(indx, 'educationDetails')} > - </button>


                    {/* <button className="btn btn-danger btn-sm m-1" type="button" onClick={() => this.props.handleAddRow('educationDetails')}>+</button>
                    <button type='button' className="btn btn-success btn-sm" onClick={() => this.props.handleRemoveSpecificRow(indx, 'educationDetails')} > - </button> */}

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>Additional Qualifications</p>
          <div className="form-group row">
            <label htmlFor="additional_qualifications" className="col-sm-6 col-form-label">a)	Are you currently pursuing any certification/diploma programs? Please specify the duration/ format/ requirement of the programme.</label>
            <div className="col-sm-6">
              <textarea className="form-control" id="additional_qualifications" name='additional_qualifications' rows="3" value={this.props.dataFormOne.additional_qualifications} onChange={this.formOneHandleChange} placeholder='...'> </textarea>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="professional_membership" className="col-sm-6 col-form-label">b)	Membership of professional bodies, share details. </label>
            <div className="col-sm-6">
              <textarea className="form-control" id="professional_membership" name="professional_membership" rows="3" value={this.props.dataFormOne.professional_membership} onChange={this.formOneHandleChange} placeholder='...'>  </textarea>
            </div>
          </div>
          <p> Professional Reference (at least three reference from last three organizations </p>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th> S.no </th>
                <th> Reference Name </th>
                <th> Reference Designation </th>
                <th> Organization Name  </th>
                <th> Contact No.</th>
                <th>Email ID</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody id="tbl5">
              {this.props.professional_ref.map((item, index) => (
                <tr key={'professional-' + index}>
                  <td className='sno'> {index + 1} </td>
                  <td> <input type="text" className="form-control" id="ref_name" name="ref_name" value={item.ref_name} onChange={(evnt) => this.props.handleChangeMul(index, evnt, 'professionalRefrence')} /></td>
                  <td> <input type="text" className="form-control" id="ref_designation" name="ref_designation" value={item.ref_designation} onChange={(evnt) => this.props.handleChangeMul(index, evnt, 'professionalRefrence')} /></td>

                  <td><input type="text" className="form-control" id="ref_organizationName" name="ref_organizationName" value={item.ref_organizationName} onChange={(evnt) => this.props.handleChangeMul(index, evnt, 'professionalRefrence')} /></td>
                  <td><input type="text" className="form-control" id="ref_contactNo" name="ref_contactNo" value={item.ref_contactNo} onChange={(evnt) => this.props.handleChangeMul(index, evnt, 'professionalRefrence')} /></td>
                  <td><input type="text" className="form-control" id="ref_email" name="ref_email" value={item.ref_email} onChange={(evnt) => this.props.handleChangeMul(index, evnt, 'professionalRefrence')} /></td>

                  <td>
                    <button className=" btn-danger" type="button" style={{ marginRight: "1px" }} onClick={() => this.props.handleAddRow('professionalRefrence')}>+</button>
                    <button type='button' className="btn-success" onClick={() => this.props.handleRemoveSpecificRow(index, 'professionalRefrence')} > - </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p> Others </p>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="">Do you have any relatives currently employed with NIUA or before?</label>

              <div className="form-group row p-1">
                <div className="form-check col-md-6">
                  <input className="form-check-input"
                   type="radio"
                   name="relatives_niua"
                   value="1" 
                   checked={this.props.dataFormOne.relatives_niua === 1}
                   onChange={this.formOneHandleChange}
                 />
                  <label className="form-check-label">Yes</label>
                </div>
                <div className="form-check col-md-6">
                  <input className="form-check-input" 
                  type="radio" 
                  name="relatives_niua" 
                  value="0" 
                  checked={this.props.dataFormOne.relatives_niua === 0}
                   onChange={this.formOneHandleChange}
                   />
                  <label className="form-check-label">No</label>
                </div>

                <div className="form-chek-input col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    id="relatives_explor"
                    name="relatives_explor"
                    value={this.props.dataFormOne.relatives_explor}
                    onChange={this.formOneHandleChange}
                    placeholder="..."
                    style={{ display: this.props.dataFormOne.relatives_niua ? '' : 'none' }}
                  />
                </div>

              </div>
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="">Have you been interviewed by NIUA before?</label>
              <div className="form-group row p-1">
                <div className="form-check col-md-6">
                  <input className="form-check-input"
                   type="radio" 
                   name="interviewed_by_niua" 
                   value="1" 
                   checked={this.props.dataFormOne.interviewed_by_niua === 1}
                   onChange={this.formOneHandleChange} 
                   />
                  <label className="form-check-label">Yes</label>
                </div>
                <div className="form-check col-md-6">
                  <input className="form-check-input" 
                  type="radio" 
                  name="interviewed_by_niua" 
                  value="0" 
                  onChange={this.formOneHandleChange} 
                  defaultChecked={this.props.dataFormOne.interviewed_by_niua === 0} 
                  />
                  <label className="form-check-label">No</label>
                </div>
                <div className="form-chek-input col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    id="interviewed_explor"
                    name="interviewed_explor"
                    value={this.props.dataFormOne.interviewed_explor}
                    onChange={this.formOneHandleChange}
                    placeholder="..."
                    style={{ display: this.props.dataFormOne.interviewed_by_niua ? '' : 'none' }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor=""> Have you been convicted by any legal authority for any civil or criminal offence? </label>
              <div className="form-group row p-1">
                <div className="form-check col-md-6">
                  <input className="form-check-input" 
                  type="radio" 
                  name="criminal_offence" 
                  value="1" 
                  onChange={this.formOneHandleChange} 
                  defaultChecked={this.props.dataFormOne.criminal_offence === 1}
                  />
                  <label className="form-check-label">Yes</label>
                </div>
                <div className="form-check col-md-6">
                  <input className="form-check-input" type="radio" name="criminal_offence" value="0" 
                  onChange={this.formOneHandleChange} 
                  defaultChecked={this.props.dataFormOne.criminal_offence === 0} 
                  />
                  <label className="form-check-label">No</label>
                </div>
                <div className="form-chek-input col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    id="criminal_explor"
                    name="criminal_explor"
                    value={this.props.dataFormOne.criminal_explor}
                    onChange={this.formOneHandleChange}
                    placeholder="..."
                    style={{ display: this.props.dataFormOne.criminal_offence ? '' : 'none' }}
                  />
                </div>
              </div>
            </div>
            <div className="form-group col-md-6">
              <label htmlFor=""> Do you have any medical problems or illnesses? </label>
              <div className="form-group row p-1">
                <div className="form-check col-md-6 mt-4">
                  <input className="form-check-input" 
                  type="radio" 
                  name="medical_problems" 
                  id="medical_problems" 
                  value="1" 
                  onChange={this.formOneHandleChange} 
                  defaultChecked={this.props.dataFormOne.medical_problems === 1} 
                  />
                  <label className="form-check-label">Yes</label>
                </div>
                <div className="form-check col-md-6 mt-4">
                  <input className="form-check-input" 
                  type="radio" 
                  name="medical_problems" 
                  value="0" 
                  onChange={this.formOneHandleChange} 
                  defaultChecked={this.props.dataFormOne.medical_problems === 0} 
                  />
                  <label className="form-check-label">No</label>
                </div>

                <div className="form-chek-input col-md-12">
                  <input
                    type="text"
                    className="form-control"
                    id="medicalProblemsDetails"
                    name="medicalProblemsDetails"
                    value={this.props.dataFormOne.medical_explor}
                    onChange={this.formOneHandleChange}
                    placeholder="..."
                    style={{ display: this.props.dataFormOne.medical_problems ? '' : 'none' }}
                  />
                </div>
              </div>
            </div>

          </div>

          <div className="form-group row">
            <label htmlFor="expertise_possess" className="col-sm-6 col-form-label">In support of your candidature please share “why you think you are suitable for the role” focusing on the skills and expertise you possess..</label>
            <div className="col-sm-6">
              <textarea className="form-control" id="expertise_possess" name="expertise_possess" rows="3" value={this.props.dataFormOne.expertise_possess} onChange={this.formOneHandleChange} placeholder='...'> </textarea>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="career_trajectory" className="col-sm-6 col-form-label">Please specify if there has been a break in your career trajectory and state the reasons for the same. </label>
            <div className="col-sm-6">
              <textarea className="form-control" id="career_trajectory" name="career_trajectory" rows="3" value={this.props.dataFormOne.career_trajectory} onChange={this.formOneHandleChange} placeholder='...'>  </textarea>
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-6 col-form-label">Other Interests: Awards and Accolades </label>
            <div className="col-sm-6">
              <textarea className="form-control" id="awards_accolades" name="awards_accolades" rows="3" value={this.props.dataFormOne.awards_accolades} onChange={this.formOneHandleChange} placeholder='...'> </textarea>
            </div>
          </div>

          {/* <div className="form-row">
            <div className="form-group col-md-6">
              <div className="custom-file mb-4">
                <input type="file"
                 className="custom-file-input" 
                 id="images"
                 name="images"
                 value={this.props.dataFormOne.images}
                 onChange={this.formOneHandleChange}
                 required 
                />
                <label className="custom-file-label" htmlFor="validatedCustomFile">Upload Image</label>
              </div>
            </div>
            <div className="form-group col-md-6">
              <div className="custom-file mb-4">
                <input type="file" className="custom-file-input"
                 id="signature" 
                name="signature"
                value={this.props.dataFormOne.signature}
                onChange={this.formOneHandleChange}
                required />
                <label className="custom-file-label" htmlFor="validatedCustomFile">Signature upload </label>
              </div>
            </div>

          </div> */}


          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <div className="input-group-text">
                
                <input type="checkbox" checked={this.props.dataFormOne.process === true}    onChange={(evnt) => this.props.checkButton(evnt)}  />
              </div>
              <p className="ml-2"> I hereby declare that the information provided in this document is true and accurate to the best of my knowledge. I further understand that any incorrect information furnished above may result in denial of contractual engagement or dismissal from contract.</p>
            </div>


            <p>I understand that all the details provided in this application are subject to verification: Personnel’s past employment background checks, criminal background checks, health/drug checks and any other background information that may be required by NIUA.</p>

            <p>I hereby authorize NIUA and its representative(s) (including reference check agencies/third party vendors) to verify information provided in my application for contractual engagement and to conduct enquiries as deemed necessary by NIUA.

              I understand that if any information provided by me with respect to my application for engagement is found to be untrue, inaccurate or misleading, NIUA may withdraw any offer of engagement made to me or terminate my contract (If I have already joined NIUA) without notice and deny any chance of employment at NIUA in future.
            </p>
          </div>

        </div>
      </div>
    </div>
    )
  }
}
