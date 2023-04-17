import express from "express";
import { registeration , registerValidation} from "../controllers/auth/UserRegisteration.js";
import { Login , loginValidation } from "../controllers/auth/UserLogin.js";

const router = express.Router();



//          REDIRECT TO USERRIGESTRATION CONTROLLER

router.post("/register", registerValidation, registeration)
router.post("/login", loginValidation, Login)

export default router;

