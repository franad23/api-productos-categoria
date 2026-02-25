import bcrypt from "bcryptjs";
import { createUser, getUserByEmail } from "../services/user.js";
import jwt from "jsonwebtoken";
import { JWT_PASSWORD } from "../config/env.js";

async function registerUser(req, res) {
  try {
    const { email, password, name, lastname } = req.body;
    const currentUser = await getUserByEmail(email);
    if (currentUser) {
      return res.status(403).json({
        success: false,
        message: "Email ya registrado, por favor loguearse",
      });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    await createUser({
      name,
      lastname,
      email,
      password: passwordHash,
    });
    res.status(201).json({
      success: true,
      message: "Usuario creado correctamente",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    const currentUser = await getUserByEmail(email);
    if (!currentUser) {
      return res.status(403).json({
        success: false,
        message: "Usuario no existe, registrarse por favor",
      });
    }
    const passwordOk = await bcrypt.compare(password, currentUser.password);
    if (!passwordOk) {
      return res.status(401).json({
        success: false,
        message: "Contraseña incorrecta",
      });
    }
    //Pasar el usuario como payload
    const token = jwt.sign("DATO PARA PAYLOAD", JWT_PASSWORD);
    res.status(200).json({
      success: true,
      message: "Usuario Logueado",
      data: token,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export { registerUser, loginUser };
