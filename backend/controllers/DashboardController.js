const  DashboardPack  = require("../models/DashboardPack");
const LoginUserInfo = require("../models/LoginUserInfo");

class DashboardController {
    
  async pack(req, res, next) {
        let token = req.headers.auth_token;
        let loginUserInfo = await LoginUserInfo.findOne({ where: { token: `${token}` } });

        console.log(loginUserInfo);
        if(!loginUserInfo) {
            return res.status(401).json({
                status:false,
                message:'Unauthorized error'
            })
        }else {
            
            let dashboardpack = await DashboardPack.findOne({ where: { user_id: `${loginUserInfo.user_id}`}});
            return res.status(200).json({
                status:true,
                data:dashboardpack
            })
        }

      }

      // set About
     async setAbout(req, res, next) {
        
        try{
            let user_id = req.user.user_id;
            let process = req.body.process;
            
            // Check user is already exists or not 
            let user = await DashboardPack.findOne({ where: { user_id: `${user_id}` } });

            if(!user) {
                let results= await DashboardPack.create({
                    about:process,
                    user_id: user_id
                })
            } else {
                let results=   await DashboardPack.update({
                    about : process
                    }, {
                where: { user_id},
                })
            }
      // SEDN RESPONSE
            return res.status(200).json({
                status:true,
                message: "About process update successfully",
            })
        } catch(e) {
            return res.status(500).json({
                status:false,
                message:e.message,
                userMessage: "About process not update successfully"
            })
        }
        
      }

      // SET PROJECT
      
        async setProject(req, res, next) {
        
            try{
                let user_id = req.user.user_id;
                let process = req.body.process;
                
                // Check user is already exists or not 
                let user = await DashboardPack.findOne({ where: { user_id: `${user_id}` } });
    
                if(!user) {
                    let results= await DashboardPack.create({
                        projects:process,
                        user_id: user_id
                    })
                } else {
                    let results=   await DashboardPack.update({
                        projects : process
                        }, {
                    where: { user_id},
                    })
                }
          // SEDN RESPONSE
                return res.status(200).json({
                    status:true,
                    message: "Project process update successfully",
                })
            } catch(e) {
                return res.status(500).json({
                    status:false,
                    message:e.message,
                    userMessage: "Project process not update successfully"
                })
            }
            
          }

      // SET PROJECT
      async setQuestionnaire(req, res, next) {
        
            try{
                let user_id = req.user.user_id;
                let process = req.body.process;
                
                // Check user is already exists or not 
                let user = await DashboardPack.findOne({ where: { user_id: `${user_id}` } });
    
                if(!user) {
                    let results= await DashboardPack.create({
                        questionnaire:process,
                        user_id: user_id
                    })
                } else {
                    let results=   await DashboardPack.update({
                        questionnaire : process
                        }, {
                    where: { user_id},
                    })
                }
          // SEDN RESPONSE
                return res.status(200).json({
                    status:true,
                    message: "Questionnaire process update successfully",
                })
            } catch(e) {
                return res.status(500).json({
                    status:false,
                    message:e.message,
                    userMessage: "Questionnaire process not update successfully"
                })
            }
            
          }

    }
      


module.exports = DashboardController