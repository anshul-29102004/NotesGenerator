import jwt from "jsonwebtoken"

const isAuth = async (req,res,next) => {
    try {
        let token = req.cookies?.token
        const authHeader = req.headers.authorization
        if (!token && authHeader?.startsWith("Bearer ")) {
            token = authHeader.split(" ")[1]
        }

        if(!token){
            return res.status(401).json({message:"Token is not found"})
        }
        let verifyToken = jwt.verify(token ,process.env.JWT_SECRET )
        if(!verifyToken){
            return res.status(401).json({message:"user doesn't have valid token"})
        }
        req.userId = verifyToken.userId
        next()

    } catch (error) {
        return res.status(401).json({message:"Invalid or expired token"})
    }
}
export default isAuth