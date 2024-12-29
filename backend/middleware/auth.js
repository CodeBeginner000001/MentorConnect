const jwt = require("jsonwebtoken");
//middleware for login authorization
const auth = async (req,res,next) => {
    try{
        let {token} = req.headers;
        if(!token){
            return res.json({success:false,msg:"Not Authorized Login Again"});
        }
        const decoded_token = jwt.verify(token,process.env.JWT_SECRET);
        req.body.userId = decoded_token.id;
        next();
    }catch(e){
        console.log("invalid");
       return res.json({success:false,msg:e.message});
    }
}
module.exports = auth;