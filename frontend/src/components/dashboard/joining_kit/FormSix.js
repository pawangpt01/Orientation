import React, { Component } from 'react'

export default class FormSix extends Component {
  render() {
    return (<div>
    <section className="content">
      <div className="card mt-3">
        <div className="card-header bg-cyan">
          <h3 className="card-title text-center"> SELF DECLARATION OF LEGAL PROCEEDINGS </h3> <br/>
          <small>(Only the applicable choice to be marked/filled and relevant details to be provided, if any.)</small>
        </div>
        <div className="card-body">
             <input type="checkbox" name="" id="" /> I hereby declare that no suit, investigation or
              proceeding, whether judicial, administrative or otherwise, of any nature is currently pending against
              me before any court of law.
              <p className="text-center"> or </p>

              <p> <input type="checkbox" name="" id="" /> I hereby declare that I am/have been involved in civil
                and/or criminal litigation as a petitioner/defendant which is pending/has been dismissed. The details
                of which is furnished below:</p>

                <p>Nominee’s Details: </p>
                <table className="table">
                  <thead className="thead-dark">
                    <tr>                     
                      <th>SNo</th>
                      <th>Name and nature of dispute/offence</th>
                      <th>Date</th>
                      <th>Case No./FIR No.</th>
                      <th>Action taken</th>
                      <th>Present Status</th>
                      <th>Action</th>                     
                    </tr>
                  </thead>
                  <tbody id="tbl14">
                    { this.props.selfDeclaration.map((item, index)=> (
                    <tr key={'selfD-'+index}>                     
                      <td> {index+1} </td>
                      <td> <input type="text" className="form-control" id ="selfDeclarationName" name="selfDeclarationName"  onChange={(evnt) => this.props.handleChangeMul(index, evnt, 'selfDeclaration')}/></td>
                      <td><input type="date" className="form-control" id ="selfDeclarationDate" name="selfDeclarationDate" onChange={(evnt) => this.props.handleChangeMul(index, evnt, 'selfDeclaration')} /></td>
                      <td><input type="text"  id ="selfDeclarationFir"  className="form-control" name="selfDeclarationFir" onChange={(evnt) => this.props.handleChangeMul(index, evnt, 'selfDeclaration')} /></td>
                      <td><input type="text"  id ="selfDeclarationAction" className="form-control" name="selfDeclarationAction" onChange={(evnt) => this.props.handleChangeMul(index, evnt, 'selfDeclaration')}/></td>
                      <td><input type="text"  id ="selfDeclarationStatus"  className="form-control" name="selfDeclarationStatus" onChange={(evnt) => this.props.handleChangeMul(index, evnt, 'selfDeclaration')}/></td>
                      <td>
                        <button className=" btn-danger" type="button" style={{ marginRight: "1px" }} onClick={() => this.props.handleAddRow('selfDeclaration')}>+</button>
                        <button type='button' className="btn-success" onClick={() => this.props.handleRemoveSpecificRow(index, 'selfDeclaration')} > - </button>
                      </td>
                    </tr>
                    ))}
                  </tbody>
                </table>
                <p>Declaration by Witnesses</p>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <label htmlFor="name"> Name: </label>
                    <input type="text" className="form-control" id="name" placeholder="Name" />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputPas"> Address: </label>
                    <textarea name="" id="" className="form-control" rows="2"></textarea>
                  </div>
                </div>
                 <p> <input type="checkbox" name="" id=""/> I hereby declare that I am/have been involved in civil
                  and/or criminal litigation as a petitioner/defendant which is pending/has been dismissed. The details
                  of which is furnished below:</p>
          
           
        </div>
      </div>
    </section>
           </div>
    )
  }
}
