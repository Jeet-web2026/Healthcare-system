import User from "../models/userModel.js";

export const userRegister = async (req, res) => {
  try {
    if (!req.body)
      return res.status(401).json({ message: "All details required!" });

    const { email, password, confirm_password } = req.body;

    if (!email) return res.status(401).json({ message: "Email is required!" });

    if (!password)
      return res.status(401).json({ message: "Password is required!" });

    if (!confirm_password)
      return res
        .status(401)
        .json({ message: "Please re-enter your password!" });

    if (password !== confirm_password)
      return res.status(401).json({ message: "Password does not match!" });

    const user = await User.findOne({ email });
    if (user)
      return res.status(401).json({ message: "User already registered!" });

    const newUser = new User(req.body);
    await newUser.save();
    return res.status(201).json({ message: "User registered successfully!" });
  } catch (error) {
    console.error("Registration error:" + error);
    return res.status(500).json({ message: "Internal server error!" });
  }
};
