const jwt = require("jsonwebtoken");
const bcrypt = require('bcryptjs');
const validator = require("validator");
const connection = require("../db.js");
const cloudinary = require("cloudinary").v2;

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET);
}

const userRegister = async (req, res) => {
    try {
        let { name, email, bio, password, skills = null, interests = null, role } = req.body;
        let image = req.file;
        if (!name || !email || !password || !role || !bio) {
            throw new Error("Invalid Credentials");
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, msg: "Please enter a valid email" });
        }
        if (password.length < 5) {
            return res.json({ success: false, msg: "Please enter a strong password" });
        }
        const existing = await connection.query('SELECT * FROM "User" WHERE email = $1', [email]);
        if (existing.rows.length > 0) {
            return res.json({ success: false, msg: "User already exists" });
        }
        let imageUrl = '';
        if (image != null) {
            const uploadedImage = await cloudinary.uploader.upload(image.path, { resource_type: 'image' });
            imageUrl = uploadedImage.secure_url;
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        const result = await connection.query(
            'INSERT INTO "User" (name,email,password,image,skills,interests,role,bio) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *',
            [name, email, hashedPassword, imageUrl, JSON.stringify(skills), JSON.stringify(interests), role, bio]
        );
        const user = result.rows[0];
        const token = createToken(user.id);
        res.send({ success: true, token });
    } catch (e) {
        res.json({ success: false, msg: e.message });
    }
}

const userLogin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            throw new Error("Invalid Credentials");
        }
        const result = await connection.query('SELECT * FROM "User" WHERE email = $1', [email]);
        const user = result.rows[0];
        if (!user) {
            throw new Error("User doesn't exist");
        }
        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) {
            throw new Error("Invalid Credentials");
        }
        const token = createToken(user.id);
        res.send({ success: true, token });
    } catch (e) {
        res.json({ success: false, msg: e.message });
    }
}

const getAllUsers = async (req, res) => {
    try {
        const result = await connection.query('SELECT * FROM "User"');
        res.send({ success: true, results: result.rows });
    } catch (e) {
        res.json({ success: false, msg: e.message });
    }
}

const getUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const result = await connection.query('SELECT * FROM "User" WHERE id = $1', [userId]);
        res.send({ success: true, result: result.rows });
    } catch (e) {
        res.json({ success: false, msg: e.message });
    }
}

const getAuthUser = async (req, res) => {
    try {
        const { userId } = req.body;
        const result = await connection.query('SELECT * FROM "User" WHERE id = $1', [userId]);
        res.send({ success: true, result: result.rows });
    } catch (e) {
        res.json({ success: false, msg: e.message });
    }
}

const updateUser = async (req, res) => {
    try {
        const { name, email, password, skills, interests, role, userId, bio } = req.body;
        const image = req.file;
        if (!name || !email || !password || !role) {
            throw new Error("Invalid Credentials");
        }
        if (!validator.isEmail(email)) {
            return res.json({ success: false, msg: "Please enter a valid email" });
        }
        if (password.length < 8) {
            return res.json({ success: false, msg: "Please enter a strong password" });
        }
        let imageUrl = '';
        if (image != null) {
            const uploadedImage = await cloudinary.uploader.upload(image.path, { resource_type: 'image' });
            imageUrl = uploadedImage.secure_url;
        } else {
            const img = await connection.query('SELECT image FROM "User" WHERE id = $1', [userId]);
            imageUrl = img.rows[0].image;
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        await connection.query(
            'UPDATE "User" SET name=$1, email=$2, password=$3, image=$4, skills=$5, interests=$6, role=$7, bio=$8 WHERE id=$9',
            [name, email, hashedPassword, imageUrl, JSON.stringify(skills), JSON.stringify(interests), role, bio, userId]
        );
        const updated = await connection.query('SELECT * FROM "User" WHERE id = $1', [userId]);
        res.send({ success: true, updatedUser: updated.rows[0] });
    } catch (e) {
        res.json({ success: false, msg: e.message });
    }
}

const updatePassword = async (req, res) => {
    try {
        const { userId, newPassword } = req.body;
        const result = await connection.query('SELECT password FROM "User" WHERE id = $1', [userId]);
        const currentHashed = result.rows[0].password;
        const isSame = await bcrypt.compare(newPassword, currentHashed);
        if (isSame) {
            throw new Error("Please enter a new password");
        }
        if (newPassword.length < 5) {
            return res.json({ success: false, msg: "Please enter a strong password" });
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(newPassword, salt);
        await connection.query('UPDATE "User" SET password = $1 WHERE id = $2', [hashedPassword, userId]);
        res.json({ success: true, msg: "Your Password is Changed" });
    } catch (e) {
        res.json({ success: false, msg: e.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const { userId } = req.body;
        const check = await connection.query('SELECT * FROM "User" WHERE id = $1', [userId]);
        if (check.rows.length === 0) {
            return res.json({ success: false, msg: "User not found" });
        }
        await connection.query('DELETE FROM "User" WHERE id = $1', [userId]);
        res.send({ success: true, msg: "User Deleted Successfully" });
    } catch (e) {
        res.json({ success: false, msg: e.message });
    }
}

module.exports = { userRegister, userLogin, getAllUsers, deleteUser, updateUser, updatePassword, getUser, getAuthUser };
