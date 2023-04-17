import { body, validationResult } from 'express-validator';



//              MIDDLE FOR VALIDATION
export const loginValidation = [
    body("email").not().isEmpty().withMessage("Please enter Email"),
    body("password").not().isEmpty().withMessage("Please enter Password"),
]

export const Login = async (req, res) => {
    const { email, password } = req.body;

    
    const errors = validationResult(req);
    if (!errors.isEmpty())
        return res.status(400).json({ errors: errors.array() });

    try {
        // status: Dones
        return res.status(200).json({status:true})
    }
    catch (error) {
        return res.status(400).json({ errors: error.array() });
    }
}