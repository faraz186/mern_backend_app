import jwt from "jsonwebtoken";

export const tokenVerify = async (req, res, next) => {
  try {
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1];
      console.log(token);

      const verify = jwt.verify(token, process.env.JWT_SECRET_KEY);

      console.log(verify);

      if (!verify) {
        return res.status(402).json({
          message: "Token Unauthorized",
          status: false,
        });
      }

      next();
    } else {
      return res.status(403).json({
        message: "Token not provided!",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error,
    });
  }
};
