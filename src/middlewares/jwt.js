import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "../config/env.js";

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader)
    return res
      .status(401)
      .json({ success: false, message: "No se proporcionó token" });

  const token = authHeader;
  if (!token)
    return res.status(401).json({ success: false, message: "Token inválido" });

  try {
    const decoded = jwt.verify(token, JWT_PASSWORD);
    req.user = decoded;
    next();
  } catch {
    return res
      .status(401)
      .json({ success: false, message: "Token inválido o expirado" });
  }
};

export { verifyToken };
