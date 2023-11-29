var jwt = require('jsonwebtoken');
const { User } = require("../models/User")
const bcrypt = require('bcrypt');
const { UserRole } = require("../models/UserRole");
var Sequelize = require('sequelize');
const { db } = require('../utils/db.util');
const LoginUserInfo = require('../models/LoginUserInfo');
const { get } = require('../routes/dashboard.route');
const { findOne } = require('../models/LoginUserInfo');
var moment = require('moment');

class UserController {
// NEW USER CREATE (Register)
    create = async(req, res, next) => {
        const { name, username, email, password, role } = req.body;
       try{
        let hashedPassword = await bcrypt.hash(password, 10)
        let user = await User.create({
            name: name,
            username: username,
            email: email,
            password: hashedPassword
        });

        if(req.body.role) {
         
            let userRole = await UserRole.create({
                user_id : user.id,
                role_id : role
            })
        }
        return res.status(200).json({
            status:true,
            message: "User Created Successfully",
            data: user
        })
       }catch(e) {
        return res.status(500).json({
            status: false,
            message:e.message,
            data: e
        })
       }
    }


//  USER LOGIN
 userLogin = async(req, res, next) =>{
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        throw new Error("Email & Password is required");
      }
      let findUser = await User.findOne({ where: { email: `${email}` } });

      if (findUser.length === 0) {
        throw new Error("Email not exists for this user");
      }
      
      //Matched Password
      let matched = await bcrypt.compare(password, findUser.password);
      if (!matched) {
        throw new Error("You have entered wrong Password ");
      }

      // check This user already login or not
      let loginUserInfo = await LoginUserInfo.findOne({ where: { user_id: `${findUser.id}` } });

      let date = moment().format()
      // ADD 30 Minutes More
      date = moment(date).add({minutes: 30})

//  MAKE OBJECT FOR PASS JWT TOKEN
    let payload = {
        user_id:findUser.id,
        user_mail: findUser.email,
        time: date
    }
    // CREATE TOKEN
     let token = jwt.sign( payload , 'secret', { expiresIn: '1h' });

     if(!loginUserInfo) {
          loginUserInfo = {
                username:findUser.username,
                user_id:findUser.id,
                expire_date: date,
                token: token
                } 
         
          //CREATE USER_LOGIN_INFO
        await LoginUserInfo.create(loginUserInfo)
   }else{
     await LoginUserInfo.update({
                  expire_date : date,
                  token: token
                }, {
              where: { id: loginUserInfo.id },
            })
   }
     
    // SEND RESPONSE
    
      return res.status(200).json({
        status: true,
        message: "Logged in Successfully!",
        tokenKey: token,
      
      });
    } catch (e) {
      return res.status(422).json({
        status: false,
        message: e.message,
      });
    }
  }

  // LOGOUT 
  async userLogout(req, res, next) {
    try{
        let token = req.headers.auth_token;
        let user_id = req.user.user_id;
        await LoginUserInfo.destroy({
          where: {
            token,
            user_id
          }
        })
        //SEND RESPONSE
        return res.status(200).json({
          status: true,
          message: "User logout successfully"
        })
      }catch(err) {
        return res.status(500).json({
          status:false,
          message: err.message,
          userMessage: "Error occur in logout function"
        })
      }
  }
}


module.exports = UserController