const { JoiningKit } = require('../models/JoiningKit');
const { FamilyDetail } = require('../models/FamilyDetail');
const { EmploymentDetail } = require('../models/EmploymentDetail');
const { EducationDetail } = require('../models/EducationDetail');
const { ProfessionalReference } = require('../models/ProfessionalReference');
const { SelfDeclaration } = require('../models/SelfDeclaration');
const { NomineeDetail } = require('../models/NomineeDetail');
const { db } = require('../utils/db.util');
const multer = require('multer');

// Destination folder for uploaded files
const upload = multer({ dest: 'uploads/' }); 

class JoiningKitController {

async insert(req, res, next) {

  //transaction begin
    const t = await db.transaction();
 try{  
  
      console.log(req)
       let user = await JoiningKit.create({
        first_name: req.body.formData.first_name,                       
        middle_name:req.body.formData.middle_name,
        last_name: req.body.formData.last_name,
        location: req.body.formData.location, 
        center_project: req.body.formData.center_project,
        designation: req.body.formData.designation, 
        father_husband_name: req.body.formData.father_husband_name,
        mother_name: req.body.formData.mother_name,
        contact_no: req.body.formData.contact_no, 
        emergency_contact: req.body.formData.emergency_contact, 
        relation: req.body.formData.relation, 
        gender: req.body.formData.gender, 
        email: req.body.formData.email,
        marital_status: req.body.formData.marital_status, 
        birth_date: req.body.formData.birth_date, 
        nationality: req.body.formData.nationality, 
        marriage_date: req.body.formData.marriage_date, 
        communication_address: req.body.formData.communication_address,
        permanent_address: req.body.formData.permanent_address,
        aadhar_no: req.body.formData.aadhar_no, 
        pan_no: req.body.formData.pan_no, 
        passport_no: req.body.formData.passport_no,
        passport_validity: req.body.formData.passport_validity, 
        blood_group: req.body.formData.blood_group, 
        last_ctc: req.body.formData.last_ctc, 
        offered_ctc: req.body.formData.offered_ctc, 
        bank_name: req.body.formData.bank_name, 
        account_no: req.body.formData.account_no, 
        branch_address: req.body.formData.branch_address, 
        ifsc_code: req.body.formData.ifsc_code, 
        additional_qualifications: req.body.formData.additional_qualifications, 
        professional_membership: req.body.formData.professional_membership, 
        relatives_niua: req.body.formData.relatives_niua, 
        relatives_explor: req.body.formData.relatives_explor, 
        interviewed_by_niua: req.body.formData.interviewed_by_niua,
        interviewed_explor: req.body.formData.interviewed_explor, 
        criminal_offence: req.body.formData.criminal_offence, 
        criminal_explor: req.body.formData.criminal_explor, 
        medical_problems: req.body.formData.medical_problems, 
        medical_explor: req.body.formData.medical_explor,  
        expertise_possess: req.body.formData.expertise_possess,  
        career_trajectory: req.body.formData.career_trajectory, 
        awards_accolades: req.body.formData.awards_accolades, 
        // images: req.body.formData.images, 
        // signature: req.body.formData.signature, 
        contract_period_start: req.body.formData.contract_period_start,
        contract_period_end: req.body.formData.contract_period_end,
        user_id: req.user.user_id,
        user_name: req.user.user_name
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
        }, {
          transaction: t
        })
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
        }, {
          transaction: t
        })
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
        }, {
          transaction: t
        })
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
        }, {
          transaction: t
        })
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
        }, {
          transaction: t
        })
      }
  }

  //if successfully insert all data the commint transaction
  await t.commit(); 

  // Success Message Return
      return res.status(200).json({
        "status":true,
        "message":"Data inserted successfully!",
        "joining_kit_id": user.id
      });
  // Error Message Return
    }catch(error) {
      // if not insert data successfully the rollback all table
      await t.rollback(); 
      console.log(error);
      return res.status(500).json({
        "status":false,
        "message":error.message
      })
      
    }
    
  } //close insert function tag



async upload(req, res, next) {
    let joining_kit_id=  req.body;
  console.log(req.body)
    // let joiningKit = await JoiningKit.findOne({
    //   where: {
    //       id: joining_kit_id
    //   }
    // });
    return res.status(200).json({
      message: req.body 
    })
}

}//close  Class Tag

module.exports = JoiningKitController