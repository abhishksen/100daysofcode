import { catchAsyncError } from "../middlewares/catchAsyncError.js";
import { User } from "../models/User.js";
import ErrorHandler from "../utils/errorHandler.js";
import { sendEmail } from "../utils/sendEmail.js";
import { sendToken } from "../utils/sendToken.js";

export const register = catchAsyncError(async (req, res, next) => {

    const { name, email, password } = req.body;

    // const file = req.file;

    if (!name || !email || !password) {
        return next(new ErrorHandler('Please enter all fields', 400))
    }

    let user = await User.findOne({ email });

    if (user) {
        return next(new ErrorHandler('User already exists', 409))
    }

    // upload file on cloudinary

    user = await User.create({
        name,
        email,
        password,
        avatar: {
            public_id: 'avatars/kkzqkxqkqkqkqkqkqkqk',
            url: 'dfhehkehf',
        },
    });

    sendToken(res, user, 'User registered successfully', 201);
});


export const login = catchAsyncError(async (req, res, next) => {

    const { email, password } = req.body;

    // const file = req.file;

    if (!email || !password) {
        return next(new ErrorHandler('Please enter all fields', 400))
    }

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
        return next(new ErrorHandler("Incorrect email or password", 401))
    }

    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
        return next(new ErrorHandler("Incorrect email or password", 401))
    }

    sendToken(res, user, `Welcome back, ${user.name}`, 200);
});

export const logout = catchAsyncError(async (req, res, next) => {
    res.status(200).cookie('token', null, {
        expires: new Date(Date.now()),
        httpOnly: true,
        // secure: true,
        sameSite: "none",
    }).json({
        success: true,
        message: 'Logged out successfully',
    })
});

export const getMyProfile = catchAsyncError(async (req, res, next) => {

    const user = await User.findById(req.user._id);

    res.status(200).json({
        success: true,
        message: 'User profile',
        user,
    })
});

export const changePassword = catchAsyncError(async (req, res, next) => {

    const { oldPassword, newPassword } = req.body;

    if (!oldPassword || !newPassword) {
        return next(new ErrorHandler('Please enter all fields', 400));
    }

    const user = await User.findById(req.user._id).select('+password');

    const isMatch = await user.comparePassword(oldPassword);

    if (!isMatch) {
        return next(new ErrorHandler('Incorrect old password', 400));
    }

    user.password = newPassword;

    await user.save();

    res.status(200).json({
        success: true,
        message: 'Password updated successfully',
    })
});

export const updateProfile = catchAsyncError(async (req, res, next) => {

    const { name, email } = req.body;

    const user = await User.findById(req.user._id);

    if (name) user.name = name;
    if (email) user.email = email;

    await user.save();

    res.status(200).json({
        success: true,
        message: 'Profile updated successfully',
    })
});


export const updateProfilePicture = catchAsyncError(async (req, res, next) => {

    res.status(200).json({
        success: true,
        message: 'Profile picture updated successfully',
    })
});

export const forgetPassword = catchAsyncError(async (req, res, next) => {

    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
        return next(new ErrorHandler('User not found', 400));
    }

    const resetToken = await user.getResetToken();

    const url = `${process.env.FRONTEND_URL}/resetpassword/${resetToken}}`;

    const message = `Your password reset token is as follows:\n\n${url}\n\nIf you have not requested this email, then ignore it.`;

    await sendEmail(user.email, 'TutorialHell: Password reset request', message);


    res.status(200).json({
        success: true,
        message: `Reset token has been sent to ${user.email}`,
    })
});

export const resetPassword = catchAsyncError(async (req, res, next) => {

    res.status(200).json({
        success: true,
        message: 'Profile picture updated successfully',
    })
});