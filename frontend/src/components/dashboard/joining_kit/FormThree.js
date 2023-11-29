import React, { Component } from 'react'

export default class FormThree extends Component {
  render() {
    return (<div>
       <section className="content">
      <div className="card mt-3">
        <div className="card-header bg-cyan">
          <h3 className="card-title "> Child Protection Policy and Procedures:</h3> <br/>
         <h3>Declaration Form</h3>
         <p>August 2022</p>
         <p>Annexure 8.2</p>
        </div>
        <div className="card-body">
          
            <div className="mb-3 row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Full Name</label>
              <div className="col-sm-10">
                <input type="text"  className="form-control" id="staticEmail" value={ this.props.dataFormOne.first_name+' '+ this.props.dataFormOne.middle_name+' '+this.props.dataFormOne.last_name}  readOnly/>
              </div>
            </div>
            <div className="mb-3 row">
              <label htmlFor="staticEmail" className="col-sm-2 col-form-label"> Designation project</label>
              <div className="col-sm-10">
                <input type="text"  className="form-control" id="staticEmail" value={this.props.dataFormOne.designation}  readOnly/>
                <small>at National Institute of Urban Affairs, hereby declare that:</small>
              </div>
            </div>
           

            <ul style={{listStyle: "none"}}>
              <li> <input type="checkbox"  className="" id="" /> I will always respect all children, regardless of age, disability, gender, racial heritage, religious
                belief, sexual orientation or identity;</li>
              <li> <input type="checkbox"  className="" id="" /> I will support the right of children to equal protection from all types of harm or abuse;</li>
              <li><input type="checkbox"  className="" id="" /> I will not employ any child as defined under Child Labour (Prohibition and Regulation)
                Amendment Act, 2016;</li>
              <li>  <input type="checkbox"  className="" id="" /> I will not harm or abuse any child physically, emotionally or sexually and I will always report any
                case of child abuse, exploitation and neglect which comes to my knowledge to appropriate
                authority.</li>
              
            </ul>
           
        </div>
      </div>
    </section>
    </div>
    )
  }
}
