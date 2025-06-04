const zod = require("zod/v4");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const createToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d"
  });
};

const signupBody = zod.object({
  username: zod.string().trim().email(),
  firstname: zod.string().trim(),
  lastname: zod.string().trim(),
  password: zod.string().min(6)
});

// Signup Route
const signUp = async (req, res) => {
  const parsed = signupBody.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({ message: "Invalid input" });
  }

  const { username, firstname, lastname, password } = parsed.data;

  const existingUser = await User.findOne({ username });

  if (existingUser) {
    return res.status(409).json({
      success: false,
      message: "Email already taken"
    });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    firstname,
    lastname,
    password: hashedPassword
  });

  const token = createToken(user._id);

  res.status(201).json({
    success: true,
    token
  });
};

const signInBody = zod.object({
  username: zod.string().trim().email(),
  password: zod.string().trim()
});

const signIn = async (req, res) => {
  const parsed = signInBody.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      message: "Invalid inputs"
    });
  }

  const { username, password } = parsed.data;

  const user = await User.findOne({ username });

  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User does not exist"
    });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({
      success: false,
      message: "Invalid credentials"
    });
  }

  const token = createToken(user._id);

  res.json({
    success: true,
    token
  });
};

module.exports = {
  signUp,
  signIn
};
