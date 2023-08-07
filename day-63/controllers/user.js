import { User } from "../models/user.js";

export const getAllUsers = async (req, res) => {
    const users = await User.find({});
    // console.log(req.query.cat);
    res.json({
        success: true,
        message: "All users",
        users
    })
}

export const registerNewUser = async (req, res) => {
    const { name, email, password } = req.body;
    // console.log(req.body);
    await User.create({
        name, email, password
    })
    res.status(201).cookie("tempi", "lol").json({
        success: true,
        message: "Registered successfuly",
    })
}

export const specialUser = async (req, res) => {
    res.json({
        success: true,
        message: "just joking",
    });
}

export const getUserWithID = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    // console.log(user);
    res.json({
        success: true,
        user,
    });
}


export const updateUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    // console.log(user);
    res.json({
        success: true,
        message: "updated",
    });
}


export const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    // await user.remove();
    // console.log(user);
    res.json({
        success: true,
        message: "Deleted",
    });
}