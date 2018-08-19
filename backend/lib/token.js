import jwt from "jsonwebtoken";
require("dotenv").config();
const SECRET_KEY = process.env.JWT_SECRET_KEY;

function generateToken(payload) {
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      SECRET_KEY,
      {
        expiresIn: "7d"
      },
      (error, token) => {
        if (error) reject(error);
        resolve(token);
      }
    );
  });
}

function verifyToken(token) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_KEY, (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });
}

export { generateToken, verifyToken };
