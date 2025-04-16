import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
const JWT_SECRET = process.env.JWT_SECRET!;

export function hashPassword(password: string) { return bcrypt.hashSync(password, 10); }
export function comparePassword(password: string, hash: string) { return bcrypt.compareSync(password, hash); }
export function signToken(user: { id: string, role: string }) { return jwt.sign(user, JWT_SECRET, { expiresIn: '1d' }); }
export function verifyToken(token: string) { return jwt.verify(token, JWT_SECRET); }