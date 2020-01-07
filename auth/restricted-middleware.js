const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const { authentication } = req.headers;
  if (authentication) {
    const secret = process.env.JWT_SECRET || "is it secret, is it safe?";

    jwt.verify(authentication, secret, function(err, decodedToken) {
      if (err) {
        res.status(401).json({ message: "Invalid token" });
      } else {
        req.token = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "Please login and try again" });
  }
};
