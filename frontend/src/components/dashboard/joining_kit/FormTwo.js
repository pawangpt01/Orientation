import React, { Component } from 'react'

export default class FormTwo extends Component {
  render() {
    return (<div>
        
        <div className="card mt-3">
        <div className="card-header bg-cyan">
          <h3 className="card-title text-center"> DECLARATION REGARDING MARITAL STATUS </h3>
        </div>
        <div className="card-body">
          
            <div className="mb-3 row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Full Name</label>
              <div className="col-sm-10">
                <input type="text"  className="form-control" id="staticEmail" value={ this.props.dataFormOne.first_name+' '+ this.props.dataFormOne.middle_name+' '+this.props.dataFormOne.last_name} readOnly />
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck" />
               <ol type="1">
                  <li> I hereby declare as under:</li>
                  <ol type="i">
                    <li> That I am unmarried/a divorcee /a widower /a widow.</li>
                    <li> That I am married and have only one spouse living.</li>
                  </ol>
                  <li>I, solemnly affirm that the above declaration is true and I understand that in the event of
                    the declaration being found to be incorrect after my appointment, I shall be liable to be
                    dismissed from service.</li>
               </ol>
                
              </div>
            </div>
           
           
        </div>
      </div>
    </div>
    )
  }
}
