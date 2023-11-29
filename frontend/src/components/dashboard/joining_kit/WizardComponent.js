import React, { Component } from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import FormOne from "./FormOne";
import FormTwo from "./FormTwo";
import FormThree from "./FormThree";
import FormFour from "./FormFour";
import FormFive from "./FormFive";
import FormSix from "./FormSix";
import FormSeven from "./FormSeven";
import SimpleReactValidator from 'simple-react-validator';
import Swal from 'sweetalert2'
const axios = require("axios").default;

export default class WizardComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        currentStep:1,
        lastStep:7,
        dataFormOne: {
          first_name: "",
          middle_name: "Kumar",
          last_name: "Mishra",
          location: "Faridabad",
          center_project: "Center Goverment",
          designation: "Developer",
          father_husband_name: "MyFather",
          mother_name: "MyMother",
          contact_no: "9810981009",
          emergency_contact: "981121231",
          relation: "aaaaaaaa",
          gender: "FEMALE",
          email: "abc@outlook.com",
          alternative_email: "alternative@outlook.com",
          project_name: "CITIIS",
          pin_code:"121111",
          declaration_name:"declaration_address name",
          declaration_address:"declaration_address",
          marital_status: "UNMARRIED",
          birth_date: "1989-03-01",
          nationality: "Indian",
          marriage_date: "2020-02-01",
          communication_address: "Faridabad", 
          permanent_address: "Delhi", 
          aadhar_no: "234567867811", 
          pan_no: "BEIP232311", 
          passport_no: "34567", 
          passport_validity: "2020-09-01", 
          blood_group: "A++", 
          last_ctc: "5", 
          offered_ctc: "8", 
          bank_name: "Axis", 
          account_no: "657483828374", 
          branch_address: "Delhi", 
          ifsc_code: "AXIS0001", 
          additional_qualifications: "MCA", 
          professional_membership: "M-Tech", 
          relatives_niua: 1, 
          relatives_explor: "relatives_explor", 
          interviewed_by_niua: "1", 
          interviewed_explor: "aaaaaa", 
          criminal_offence: 1, 
          criminal_explor: "bbbbb", 
          medical_problems: "1", 
          medical_explor: "ccc", 
          expertise_possess: "ggg", 
          career_trajectory: "kkk", 
          awards_accolades: "ddd", 
          images: "", 
          signature: "", 
          contract_period_start: "2020-04-01",
          contract_period_end:"2020-06-01",
          process:false
        },
      rows: [{
        familyName:'test1',
        familydob:'2020-01-01',
        relation:'demo',
        location:'demolocation'
      }],
      emp_details: [{
          emp_name: 'demo1',
          emp_designation : 'demo12',
          emp_detail: 'demo13',
          emp_from: '2020-09-01',
          emp_to: '2020-09-11',
          emp_leaving: 'dmeo'
      }],
      edu_details: [{
        edu_name: "School name",
        edu_university: "univertity",
        edu_year: "2020-05-01",
        edu_percentage: "50"
      }],
      professional_ref: [{
        ref_name: "satish",
        ref_designation: "account",
        ref_organizationName: "MDU",
        ref_contactNo: "76767676",
        ref_email: "abc@gm.com"
      }],
      nominee_details: [{
        nominee_name: "aa",
        nominee_relation: "bb",
        nominee_dob: "2020-09-11",
        nominee_amtShare: "500",
        nominee_minority: "22"
      }],
      selfDeclaration: [{
        selfDeclarationName: "aa",
        selfDeclarationDate: "2020-09-01",
        selfDeclarationFir: "ww",
        selfDeclarationAction: "eee",
        selfDeclarationStatus: "eeeee"
      }]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeMul = this.handleChangeMul.bind(this);
    this.handleRemoveSpecificRow = this.handleRemoveSpecificRow.bind(this);
    this.handleAddRow = this.handleAddRow.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.formValidation = this.formValidation.bind(this);
    this.handleChangeChk = this.handleChangeChk.bind(this);
    this.validator = new SimpleReactValidator({autoForceUpdate: this,element: false});
  } 
  // SET MULTIPLE ROW
  handleChangeMul (idx, e, type) {

   if(type === 'familyDetails') {
    const { name, value } = e.target;
    const rows = this.state.rows;
    console.log(rows);
    rows[idx][name] = value
    this.setState({
      rows: rows
    });
    
   }else if(type === 'empDetails') {
    const { name, value } = e.target;
    const emp_details = this.state.emp_details;
    emp_details[idx][name] = value
    this.setState({
      emp_details: emp_details
    });

   }else if(type === 'educationDetails') {
    const { name, value } = e.target;
    const edu_details = this.state.edu_details;
    edu_details[idx][name] = value
    this.setState({
      edu_details: edu_details
    });

   }else if(type === 'professionalRefrence') {
    const { name, value } = e.target;
    const professional_ref = this.state.professional_ref;
    professional_ref[idx][name] = value
    this.setState({
      professional_ref: professional_ref
    });

   }else if(type === 'nomineeDetails') {
    const { name, value } = e.target;
    const nominee_details = this.state.nominee_details;
    nominee_details[idx][name] = value
    this.setState({
      nominee_details: nominee_details
    });

   }else if(type === 'selfDeclaration') {
    const { name, value } = e.target;
    const selfDeclaration = this.state.selfDeclaration;
    selfDeclaration[idx][name] = value
    this.setState({
      selfDeclaration: selfDeclaration
    });
   }

  };

  handleAddRow (type) {
    // console.log('type of value '+type);
    if(type === 'familyDetails') {
      const item = {
        familyName: "",
        familydob: "",
        relation:"",
        location:"",
      };
      this.setState({
        rows: [...this.state.rows, item]
      });

    } else if(type === 'empDetails') {
      const item = {
        emp_name: "",
        emp_designation : "",
        emp_detail: "",
        emp_from: "",
        emp_to: "",
        emp_leaving: ""
      };
      this.setState({
        emp_details: [...this.state.emp_details, item]
      });

      } else if(type === 'educationDetails') {
        const item = {
          edu_name: "",
          edu_university: "",
          edu_year: "",
          edu_percentage: ""
        };
        this.setState({
          edu_details: [...this.state.edu_details, item]
        });

      }else if(type === 'professionalRefrence') {
        const item = {
          ref_name: "",
          ref_designation: "",
          ref_organizationName: "",
          ref_contactNo: "",
          ref_email: ""
        };
        this.setState({
          professional_ref: [...this.state.professional_ref, item]
        });

      }else if(type === 'nomineeDetails') {
          const item = {
            nominee_name: "",
            nominee_relation: "",
            nominee_dob: "",
            nominee_amtShare: "",
            nominee_minority: ""
          };
          this.setState({
            nominee_details: [...this.state.nominee_details, item]
          });

      }else if(type === 'selfDeclaration') {
            const item = {
              selfDeclarationName: "",
              selfDeclarationDate: "",
              selfDeclarationFir: "",
              selfDeclarationAction: "",
              selfDeclarationStatus: ""
            };
            this.setState({
              selfDeclaration: [...this.state.selfDeclaration, item]
            });
      }
   
  };


  handleRemoveSpecificRow(idx, type) {
    
    if(this.state.rows.length > 1 && type === 'familyDetails') {
    
        const rows = this.state.rows;
        rows.splice(idx, 1)
        this.setState({ rows: rows })

      }else if(this.state.emp_details.length > 1 && type === 'empDetails') {
        const emp_details = this.state.emp_details;
        emp_details.splice(idx, 1)
        this.setState({ 
          emp_details: emp_details
        })

     }else if(this.state.edu_details.length > 1 && type === 'educationDetails') {
        const edu_details = this.state.edu_details;
        edu_details.splice(idx, 1)
        this.setState({ 
          edu_details: edu_details
        }) 
      
    }else if(this.state.professional_ref.length > 1 && type === 'professionalRefrence') {
        const professional_ref = this.state.professional_ref;
        professional_ref.splice(idx, 1)
        this.setState({ 
          professional_ref: professional_ref
        }) 
   
    }else if(this.state.nominee_details.length > 1 && type === 'nomineeDetails') {
        const nominee_details = this.state.nominee_details;
        nominee_details.splice(idx, 1)
        this.setState({ 
          nominee_details: nominee_details
        }) 

    }else if(this.state.selfDeclaration.length > 1 &&type === 'selfDeclaration') {
      const selfDeclaration = this.state.selfDeclaration;
      selfDeclaration.splice(idx, 1)
      this.setState({ 
        selfDeclaration: selfDeclaration
      }) 
    }
    
    
  }
 // END SET MULTIPLE ROW

 // For simple fields
  handleChange = (name, value) => {
    var changeFormOne = this.state.dataFormOne;
    changeFormOne[name] = value;
    this.setState({ dateFormOne: changeFormOne });
  };

  handleChangeChk(e) {
    
    var dataFormOne = this.state.dataFormOne;
    dataFormOne.process = e.target.checked
    
    this.setState({ dataFormOne: dataFormOne });
  }
  //Submit Form
  submitForm() {
    var thizz = this;
    var myObj = {formData: thizz.state.dataFormOne, rows: thizz.state.rows, emp_details: thizz.state.emp_details, edu_details:thizz.state.edu_details, professional_ref:thizz.state.professional_ref, nominee_details:thizz.state.nominee_details, selfDeclaration:thizz.state.selfDeclaration};
    // Send login request
    axios({
      method: "post",
      url: process.env.REACT_APP_BASE_URL + "/api/wizard",
      data: myObj,
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

  formValidation() {
    if(!this.state.dataFormOne.process) {
      alert("Please select checkbox")
      return false
    }
    if (this.validator.allValid()) {
      this.setState({
        ...this.state,
        currentStep: this.state.currentStep +1
    })
    } else {
      this.validator.showMessages();
      this.forceUpdate();
      Swal.fire({
        position: 'top-end',
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        showConfirmButton: false,
        backgroundColor:'green',
        timer: 1500
      })
      
    }
  }
  render() {
    return (
        <>
          <Header />
          <div className="container-fluid">
            <div className="row">
              <Sidebar />
              <main role="main" className="col-md-9 ml-sm-auto col-lg-10 maindash px-md-4">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom bg-cyan dash1">
                  <h5>Dashboard/joinig/wizard</h5>
                  <div className="btn-toolbar mb-2 mb-md-0 mr-3">
                    <div className="btn-group mr-2 text-white">
                      {this.state.currentStep} to {this.state.lastStep}
                    </div>
                  </div>
                </div>
               <form>
               {
                    this.state.currentStep === 1 && <FormOne dataFormOne={ this.state.dataFormOne } rows={ this.state.rows } emp_details={this.state.emp_details} edu_details={this.state.edu_details} professional_ref={this.state.professional_ref} handleChange={this.handleChange } handleChangeMul={this.handleChangeMul } handleAddRow={this.handleAddRow} handleRemoveSpecificRow={this.handleRemoveSpecificRow} validator={this.validator} checkButton ={this.handleChangeChk}/>
               }
               {
                    this.state.currentStep === 2 && <FormTwo dataFormOne={ this.state.dataFormOne }/>
               }
               {
                    this.state.currentStep === 3 && <FormThree dataFormOne={ this.state.dataFormOne }/>
               }
               {
                    this.state.currentStep === 4 && <FormFour dataFormOne={ this.state.dataFormOne } handleChange={this.handleChange }/>
               }
              {
                    this.state.currentStep === 5 && <FormFive dataFormOne={ this.state.dataFormOne } nominee_details={this.state.nominee_details} handleChange={this.handleChange } handleChangeMul={this.handleChangeMul } handleAddRow={this.handleAddRow} handleRemoveSpecificRow={this.handleRemoveSpecificRow} />
               }
              {
                    this.state.currentStep === 6 && <FormSix dataFormOne={ this.state.dataFormOne} selfDeclaration={this.state.selfDeclaration} handleChange={this.handleChange } handleChangeMul={this.handleChangeMul } handleAddRow={this.handleAddRow} handleRemoveSpecificRow={this.handleRemoveSpecificRow}/>
               }
              {
                    this.state.currentStep === 7 && <FormSeven dataFormOne={ this.state.dataFormOne }/>
               }
               
                <div className="card">
                        <div className="card-footer">  
                            <button type="button" className="btn bg-dark" style={{ display: this.state.currentStep > 1 ? "" :"none" }} onClick={()=> {
                                this.setState({
                                    ...this.state,
                                    currentStep: this.state.currentStep -1
                                })
                            }}> Back </button>

                            <button type="button" className="btn bg-cyan ml-2" onClick={()=> {
                              this.formValidation();
                                
                            }} style={{ display: this.state.currentStep < this.state.lastStep ? "" :"none" }}> Next </button>

                          <button type="button" style={{ display: this.state.currentStep < this.state.lastStep && "none"  }} onClick={this.submitForm} className="btn btn-primary ml-2"> Submit </button>
                        </div>
                </div>
               </form> 
               
              </main>
            </div>
          </div>
        </>
      );
  }
}
