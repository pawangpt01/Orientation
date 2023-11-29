import React, { Component } from "react";

export default class FormSeven extends Component {
  render() {
    return (
      <div>
        <section className="content">
          <div className="card mt-3">
            <div className="card-header bg-cyan">
              <h3 className="card-title text-center">
                {" "}
                SELF-DECLARATION ON INSURANCE CONTRIBUTION
              </h3>{" "}
              <br />
              <small>
                (Only the applicable choice to be filled and relevant details to
                be provided, if any.)
              </small>
            </div>
            <div className="card-body">
              <div className="mb-3 row">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
                  Full Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    value={this.props.dataFormOne.first_name+' '+this.props.dataFormOne.middle_name+' '+this.props.dataFormOne.last_name}  readOnly 
                  />
                </div>
              </div>
              <p>
                <input type="checkbox" name="" id="" /> I hereby declare that
                presently I have an active health insurance policy and I affirm
                that, I will personally manage the payment of premium for the
                same from my compensation/ consolidated emolument. I consent to
                furnish a copy of the policy as proof and undertake to impart
                relevant and regular updates, if any.
              </p>
              <p className="text-center"> or </p>

              <p>
                {" "}
                <input type="checkbox" name="" id="" /> I hereby declare that
                acknowledge that NIUA in the interest of its resources
                provides/has taken up any available health insurance that shall
                be extended to me and I willingly consent to appropriate
                deductions as premium amount as stated in the policy document. I
                recognize NIUA’s bona fide ends, therefore authorize it to make
                suitable deductions from my remuneration to contribute towards
                the cause.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
