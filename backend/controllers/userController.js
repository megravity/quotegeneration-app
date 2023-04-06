import User from "../models/UserSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const addUser = async (req, res, next) => {
    try {
        console.log(req.body);
        const hashedPassword = bcrypt.hashSync(req.body.password, 11);
        const user = await User.create({
            email: req.body.email,
            password: hashedPassword,
        });
        if (user) {
            res.status(201).json({ success: true, data: user });
        }
    } catch (err) {
        next(err);
    }
};

export const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { _id: user._id, email: user.email },
                process.env.JWT_SIGNATURE
            );
            res.header("token", token).json({ success: true, data: user });
        } else {
            res.status(401).json({
                success: false,
                message: "Password doesn't match or Email isn't registered",
            });
        }
    } catch (err) {
        next(err);
    }
};

export const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers.token;
        const tokenData = jwt.verify(token, process.env.JWT_SIGNATURE);
        if (tokenData) {
            const user = await User.findById(tokenData._id);
            res.status(201).json({ success: true, data: user });
        } else {
            res.status(401).json({
                success: false,
                message:
                    "Could not verify token. Please log out and back in again.",
            });
        }
    } catch (err) {
        next(err);
    }
};

export const getQuotes = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id).populate("quotes");
        if (user) {
            res.json({ success: true, data: user.quotes });
        }
    } catch (err) {
        next(err);
    }
};

export const removeQuote = async (req, res, next) => {
    const { id } = req.params;
};
