import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

interface AuthRequest extends Request {
    user?: string;
}

const auth = (req: AuthRequest, res: Response, next: NextFunction): void => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
        // Send response without returning it
        res.status(401).json({ message: 'Access Denied' });
        return;  // Stop further execution after sending the response
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET!);
        req.user = (decoded as { id: string }).id;  // Attach the user to the request object
        next();  // Proceed to the next middleware or route handler
    } catch (error) {
        // Send response without returning it
        res.status(400).json({ message: 'Invalid Token' });
        return;  // Stop further execution after sending the response
    }
};

export default auth;
