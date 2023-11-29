import React, { Component } from 'react'

export default class FormFive extends Component {
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
      <section className="content">
        <div className="card mt-3">
          <div className="card-header bg-cyan">
            <h3 className="card-title text-center"> NOMINATION FORM </h3>
          </div>
          <div className="card-body">

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="name">Name</label>
                <input type="text" className="form-control" value={ this.props.dataFormOne.first_name+' '+ this.props.dataFormOne.middle_name+' '+this.props.dataFormOne.last_name} readOnly />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPassword4">Date of Birth:</label>
                <input type="date" className="form-control" value={this.props.dataFormOne.birth_date} readOnly />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="name"> Marital Status: </label>
                <input type="text" className="form-control" value={this.props.dataFormOne.marital_status} readOnly />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPas">Permanent Address: </label>
                <textarea name="" id="" className="form-control" rows="2" value={this.props.dataFormOne.permanent_address} readOnly ></textarea>
              </div>
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="contact_detail"> Gender  </label>
              <div className="form-group row p-1">
                <div className="form-check col-md-6">
                  <input className="form-check-input" type="radio" name="radio1"
                  checked={this.props.dataFormOne.gender === 'MALE'}
                   />
                  <label className="form-check-label">Male</label>
                </div>
                <div className="form-check col-md-6">
                  <input className="form-check-input" type="radio" checked={this.props.dataFormOne.gender === 'FEMALE'} />
                  <label className="form-check-label">Female</label>
                </div>
              </div>
            </div>
            <p className="text-center text-bold"> PART – A </p>
            <p>In the event of any unfortunate, unforeseen, and unavoidable circumstances which result in my
              death/mishap during my service tenure at NIUA, I hereby nominate the person(s) mentioned below as
              my legal representative(s) and request NIUA to hand over any and all of my personal belongings kept
              at NIUA.</p>
            <p>I further request NIUA to release and transfer any pending payment to the aforesaid representative(s) in
              the above-mentioned circumstances.</p>

            <p>Nominee’s Details: </p>
            <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th>SNo</th>
                  <th>Name</th>
                  <th>Relationship</th>
                  <th>Date of Birth</th>
                  <th>Proportion by which the amount will be shared</th>
                  <th>If the nominee is minor name and address of the guardian who may receive the amount during the minority of the nominee</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody id="tbl">
              { this.props.nominee_details.map((item, index)=> (
                <tr key={'nominee-'+index}>
                  <td> {index+1} </td>
                  <td> <input type="text" className="form-control" id="nominee_name" name="nominee_name" value={item.nominee_name} onChange={(evnt) => this.props.handleChangeMul(index, evnt, 'nomineeDetails')} /></td>
                  <td> <input type="text" id="nominee_relation" className="form-control" name="nominee_relation" value={item.nominee_relation} onChange={(evnt) => this.props.handleChangeMul(index, evnt, 'nomineeDetails')} /></td>
                  <td> <input type="date" className="form-control" id="nominee_dob" name="nominee_dob" value={item.nominee_dob} onChange={(evnt) => this.props.handleChangeMul(index, evnt, 'nomineeDetails')} /></td>
                  <td> <input type="text" id="nominee_amtShare" className="form-control" name="nominee_amtShare" value={item.nominee_amtShare} onChange={(evnt) => this.props.handleChangeMul(index, evnt, 'nomineeDetails')} /></td>
                  <td> <input type="text" id="nominee_minority" className="form-control" name="nominee_minority" value={item.nominee_minority} onChange={(evnt) => this.props.handleChangeMul(index, evnt, 'nomineeDetails')} /></td>
                  <td>
                    <button className=" btn-danger" type="button" style={{ marginRight: "1px" }} onClick={() => this.props.handleAddRow('nomineeDetails')}>+</button>
                    <button type='button' className="btn-success" onClick={() => this.props.handleRemoveSpecificRow(index, 'nomineeDetails')} > - </button>
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
            <p>Declaration by Witnesses</p>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="name"> Name: </label>
                <input type="text" className="form-control" id="declaration_name" name="declaration_name" value={this.props.dataFormOne.declaration_name}
                onChange={this.formOneHandleChange} placeholder="Name" />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="inputPas"> Address: </label>
                <textarea name="declaration_address" id="declaration_address" className="form-control" rows="2" onChange={this.formOneHandleChange}
                value={this.props.dataFormOne.declaration_address}></textarea>
              </div>
            </div>



          </div>
        </div>
      </section>
    </div>
    )
  }
}
