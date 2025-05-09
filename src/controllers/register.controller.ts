import { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcryptjs';
import {
  createUser,
  getUserByEmail,
  getUserByUsername,
} from '../models/userModel';
import { throwError } from '../middlewares/errors';

export const registerUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { username, password, email } = req.body;
  try {
    const userByEmail = await getUserByEmail(email);
    if (userByEmail) {
      throwError(400, "Email already exists");
    }

    const userByUsername = await getUserByUsername(username);
    if (userByUsername) {
      throwError(400, "Username already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
      username,
      password: hashedPassword,
      email,
    };

    const result = await createUser(newUser);
    res.status(201).json({ message: "User created successfully", user: result });
    return;
  } catch (error) {
    console.error("🔴 Error in registerUser:", error);
    throwError(500, "Internal server error");
  }
}
