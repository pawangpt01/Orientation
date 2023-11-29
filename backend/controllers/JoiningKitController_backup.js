const { JoiningKit } = require('../models/JoiningKit');
const { FamilyDetail } = require('../models/FamilyDetail');
const { EmploymentDetail } = require('../models/EmploymentDetail');
const { EducationDetail } = require('../models/EducationDetail');
const { ProfessionalReference } = require('../models/ProfessionalReference');
const { SelfDeclaration } = require('../models/SelfDeclaration');
const { NomineeDetail } = require('../models/NomineeDetail');
const { db } = require('../utils/db.util');


class JoiningKitController {

async insert(req, res, next) {

  //transaction begin
    const t = await db.transaction(); 
    try{  
      
       let user = await JoiningKit.create({
        first_name: req.body.first_name,                       
        middle_name:req.body.middle_name,
        last_name: req.body.last_name,
        location: req.body.location, 
        center_project: req.body.center_project,
        designation: req.body.designation, 
        father_husband_name: req.body.father_husband_name,
        mother_name: req.body.mother_name,
        contact_no: req.body.contact_no, 
        emergency_contact: req.body.emergency_contact, 
        relation: req.body.relation, 
        gender: req.body.gender, 
        email: req.body.email,
        marital_status: req.body.marital_status, 
        birth_date: req.body.birth_date, 
        nationality: req.body.nationality, 
        marriage_date: req.body.marriage_date, 
        communication_address: req.body.communication_address,
        permanent_address: req.body.permanent_address,
        aadhar_no: req.body.aadhar_no, 
        pan_no: req.body.pan_no, 
        passport_no: req.body.passport_no,
        passport_validity: req.body.passport_validity, 
        blood_group: req.body.blood_group, 
        last_ctc: req.body.last_ctc, 
        offered_ctc: req.body.offered_ctc, 
        bank_name: req.body.bank_name, 
        account_no: req.body.account_no, 
        branch_address: req.body.branch_address, 
        ifsc_code: req.body.ifsc_code, 
        additional_qualifications: req.body.additional_qualifications, 
        professional_membership: req.body.professional_membership, 
        relatives_niua: req.body.relatives_niua, 
        relatives_explor: req.body.relatives_explor, 
        interviewed_by_niua: req.body.interviewed_by_niua,
        interviewed_explor: req.body.interviewed_explor, 
        criminal_offence: req.body.criminal_offence, 
        criminal_explor: req.body.criminal_explor, 
        medical_problems: req.body.medical_problems, 
        medical_explor: req.body.medical_explor,  
        career_trajectory: req.body.career_trajectory, 
        awards_accolades: req.body.awards_accolades, 
        images: req.body.images, 
        signature: req.body.signature, 
        contract_period_start: req.body.contract_period_start,
        contract_period_end: req.body.contract_period_end,
    }, {
      transaction: t
    });
// Family Details
    if(req.body.rows) {
        for(var i=0; i< req.body.rows.length; i++ ) {
          await FamilyDetail.create({
            "joining_id": user.id,
            "family_name": req.body.rows[i].familyName,
            "familydob": req.body.rows[i].familydob, 
            "location":req.body.rows[i].location,
            "relation":req.body.rows[i].relation
          }, {
            transaction: t
          })
        }
    }
// Employment Detail
    if(req.body.emp_details) {
      console.log('I am employment details');
      for(var i=0; i< req.body.emp_details.length; i++ ) {
        await EmploymentDetail.create({
          "joining_id": user.id,
          "emp_name": req.body.emp_details[i].emp_name,
          "emp_designation": req.body.emp_details[i].emp_designation, 
          "emp_contact_detail":req.body.emp_details[i].emp_detail,
          "emp_from":req.body.emp_details[i].emp_from,
          "emp_to":req.body.emp_details[i].emp_to,
          "emp_leaving":req.body.emp_details[i].emp_leaving
        },{transaction: t})
      }
    }

    // Education Details
    if(req.body.edu_details) {
      for(var i=0; i< req.body.edu_details.length; i++ ) {
        await EducationDetail.create({
          "joining_id": user.id,
          "edu_name": req.body.edu_details[i].edu_name,
          "edu_university": req.body.edu_details[i].edu_university, 
          "edu_year":req.body.edu_details[i].edu_year,
          "edu_percentage":req.body.edu_details[i].edu_percentage
        }, {transaction:t})
      }
    }

    //Professional Reference
    if(req.body.edu_details) {
      for(var i=0; i< req.body.professional_ref.length; i++ ) {
        console.log(req.body.professional_ref);
        await ProfessionalReference.create({
          "joining_id": user.id,
          "ref_name": req.body.professional_ref[i].ref_name,
          "ref_designation": req.body.professional_ref[i].ref_designation, 
          "ref_organization_name":req.body.professional_ref[i].ref_organization_name,
          "ref_contact_no":req.body.professional_ref[i].ref_contact_no,
          "ref_email":req.body.professional_ref[i].ref_email
        }, {transaction:t})
      }
    }

    //Nominee’s Details:
    if(req.body.nominee_details) {
      for(var i=0; i< req.body.nominee_details.length; i++ ) {
        await NomineeDetail.create({
          "joining_id": user.id,
          "nominee_name": req.body.nominee_details[i].nominee_name,
          "nominee_relation": req.body.nominee_details[i].nominee_relation, 
          "nominee_dob":req.body.nominee_details[i].nominee_dob,
          "nominee_amt_share":req.body.nominee_details[i].nominee_amtShare,
          "nominee_minority":req.body.nominee_details[i].nominee_minority
        }, {transaction:t})
      }
    }

    //Self Declaration
    if(req.body.selfDeclaration) {
      for(var i=0; i< req.body.selfDeclaration.length; i++ ) {
        await SelfDeclaration.create({
          "joining_id": user.id,
          "self_declaration_name": req.body.selfDeclaration[i].selfDeclarationName,
          "self_declaration_date":req.body.selfDeclaration[i].selfDeclarationDate,
          "self_declaration_fir": req.body.selfDeclaration[i].selfDeclarationFir, 
          "self_declaration_action":req.body.selfDeclaration[i].selfDeclarationAction,
          "self_declaration_status":req.body.selfDeclaration[i].selfDeclarationStatus
        },{transaction:t})
      }
  }
//if successfully insert all data the commint transaction
  await t.commit(); 
  // Success Message Return
      return res.status(200).json({
        "status":true,
        "message":"Data inserted successfully!",
        "data":req.body
      });
  // Error Message Return
    }catch(error) {
      // if not insert data successfully the rollback all table
      await t.rollback(); 
      return res.status(500).json({
        "status":false,
        "message":error.message,
        "data": req.body
      })
      
    }
    
  } //close insert function tag
}//close  Class Tag

module.exports = JoiningKitController