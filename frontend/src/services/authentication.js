import jwt from 'jsonwebtoken';

export const isAuthenticated = () => {
    const token = localStorage.getItem("user");
    const decoded = jwt.decode(token);

    return "id" in decoded;
}