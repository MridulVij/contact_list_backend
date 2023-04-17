import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import User from "../../models/User.js";

//              MIDDLE FOR VALIDATION
export const registerValidation = [
  body("email").isEmail().withMessage("Invalid Email"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("Password must contain atleast 8 alphabets")
];

                                      //              POST REGISTRATION ROUTE CONTROLLER
export const registeration = async (req, res) => {
  const {email, password } = req.body;


                                      //          CHECK HERE IS , IT CRENDTIOL IS PROPER VALIDATE OR NOT ?
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(400).json({ errors: errors.array() });

  try {
                                          //  FIND USER IS IT EXIST
              const response = User.create({email,password})
              if(response)
    // msg:"Done"
    res.status(200).json({status: true})
  } catch (error) {
    res.status(400).json({ errors: error });
}
};