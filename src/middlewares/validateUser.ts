import { z } from 'zod';
import { NextFunction, Request, Response } from 'express';

const userSchema = z.object({
    username: z.string().min(6, { message: 'Username must be at least 6 characters long'}),
    password: z.string().min(8, { message: 'Password must be at least 8 characters long'}),
    email: z.string().email({ message: 'Invalid email address'}),
})

export const validateUser = async (req: Request, res: Response, next: NextFunction):Promise<void> => {
    try{
        userSchema.parse(req.body);
        next();
    } catch (error) {
        if (error instanceof z.ZodError) { // Verificamos si el error es un ZodError
            res.status(400).json({ message: error.errors[0].message });
            return
          }
          res.status(500).json({ message: "Internal server error" });
          return
    }
}