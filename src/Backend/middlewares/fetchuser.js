const jwt = require('jsonwebtoken');
const JWT_SIGN = "thisIsMySignature";

const fetchuser = (req,res,next) => {

    const token = req.headers['auth-token']
    if(!token){
        res.status(401).send({error:"please authenticate using a valid token"})
    }
    try {
        const data = jwt.verify(token , JWT_SIGN);
        console.log(data)
        req.user = data.user;
        next();
        
    } catch (error) {
        res.status(401).send({error:"please authenticate using a valid token"})
    }

   
}


module.exports = fetchuser;