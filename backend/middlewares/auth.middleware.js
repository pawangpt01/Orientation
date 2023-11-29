var jwt = require('jsonwebtoken');
const LoginUserInfo = require('../models/LoginUserInfo');

exports.apiAuthMiddleware = async (req, res, next)=> {

    

    try{
        
        const token = req.headers.auth_token; 
        // console.log(`Hii ->`+token)
        if(!token) {
            throw new Error("Token is required");
        }

        const data = jwt.verify(token, 'secret');
        let user_id = data.user_id;
        
        let userSession = await LoginUserInfo.findOne({
            where: {
                token:token,
                user_id: user_id
            }
        });
        // console.log(userSession);
        if(!userSession) {
            throw new Error(" Token has expired ");
        }
        req.user = {
            user_id: userSession.user_id,
            user_name:userSession.username
            }
        console.log(req.user)
        next();
        
    }catch(e) {
        return res.status(500).json({
            status:false,
            message:e.message,
            userMessage: "Some problem occure in token process"
        })
    }
}

