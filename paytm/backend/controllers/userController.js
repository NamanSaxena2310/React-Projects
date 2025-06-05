const zod = require("zod/v4");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const createToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

const signupBody = zod.object({
  username: zod.string().trim().email(),
  firstname: zod.string().trim(),
  lastname: zod.string().trim(),
  password: zod.string().min(6),
});

const signUp = async (req, res) => {
  try {
    const parsed = signupBody.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({ message: "Invalid input" });
    }

    const { username, firstname, lastname, password } = parsed.data;

    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "Email already taken",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      firstname,
      lastname,
      password: hashedPassword,
    });

    const token = createToken(user._id);

    res.status(201).json({
      success: true,
      token,
    });
  } catch (error) {
    console.error("SignUp Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

const signInBody = zod.object({
  username: zod.string().trim().email(),
  password: zod.string().trim(),
});

const signIn = async (req, res) => {
  try {
    const parsed = signInBody.safeParse(req.body);

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid inputs",
      });
    }

    const { username, password } = parsed.data;

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User does not exist",
      });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = createToken(user._id);

    res.json({
      success: true,
      token,
    });
  } catch (error) {
    console.error("SignIn Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};


const updateBody = zod.object({
  firstname: zod.string().optional(),
  lastname: zod.string().optional(),
  password: zod.string().optional(),
});

const updateUser = async (req, res, next) => {
  try {
    const parsed = updateBody.safeParse(req.body);
    const userId = req.userId;

    if (!parsed.success) {
      return res.status(400).json({
        success: false,
        message: "Invalid input. Unable to update the user.",
      });
    }

    if (parsed.data.password) {
      parsed.data.password = await bcrypt.hash(parsed.data.password, 10);
    }

    const updatedUser = await User.findOneAndUpdate(
      { _id: userId },
      parsed.data,
      { new: true }
    );

    res.json({
      success: true,
      message: "User Updated Successfully",
      data: updatedUser,
    });
  } catch (error) {
    console.error("UpdateUser Error:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = {
  signUp,
  signIn,
  updateUser,
};
