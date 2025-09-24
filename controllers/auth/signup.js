import { isEmailValid } from "../../helpers/email.js";
import { hashPassword } from "../../helpers/password.js";
import User from "../../models/user.model.js";

const signup = async (req, res) => {
  try {
    const { password, name, email } = req.body;

    if (
      [password, name, email].every((item) => !item || item.trim().length === 0)
    ) {
      return res.json({
        message: "Add all input fields",
        success: false,
      });
    }

    const validEmail = isEmailValid(email);

    if (!validEmail) {
      return res.json({
        message: "Please add a valid email address",
        success: false,
      });
    }

    if (password.length < 6) {
      return res.json({
        message: "Password length should be greater than 6",
        success: false,
      });
    }

    const hashedPassword = await hashPassword(password, 12);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(200).json({
      success: true,
      message: "User created successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
    console.log(error.message);
  }
};

export default signup;
