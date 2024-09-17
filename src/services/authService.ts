import { sign } from "jsonwebtoken";
import AppError from "../appError";
import { User } from "../models/userModel";
import bycrypt from 'bcryptjs'

type TLogin = {
    email: string;
    password: string;
};

export const authService = async (payload: TLogin) => {
    const user = await User.findOne({ email: payload.email });

    if (!user) throw new AppError("User not found", 404);

    if (!bycrypt.compareSync(payload.password, user.password!)) {
        throw new AppError("Password incorrect", 401);
    }

    return sign(
        { email: user.email, role: user.role },
        'wN51=4vrO4j;1wjl6pQSXh=I&9k&6Zz4YtqG9,1M=03TI,dD', 
        { subject: user.id, expiresIn: '30m' } 
    );
};
