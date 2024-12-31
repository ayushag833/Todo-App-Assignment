"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const auth = (req, res, next) => {
    var _a;
    const token = (_a = req.header('Authorization')) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (!token) {
        // Send response without returning it
        res.status(401).json({ message: 'Access Denied' });
        return; // Stop further execution after sending the response
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        req.user = decoded.id; // Attach the user to the request object
        next(); // Proceed to the next middleware or route handler
    }
    catch (error) {
        // Send response without returning it
        res.status(400).json({ message: 'Invalid Token' });
        return; // Stop further execution after sending the response
    }
};
exports.default = auth;
