const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  try {
    
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        success: false,
        message: "Authorization token missing or invalid",
      });
    }

    const token = authHeader.split(" ")[1];

   
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

   
    req.userId = decoded.id;

    next(); 
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    return res.status(403).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = {authMiddleware};



