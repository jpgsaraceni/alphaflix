import jwt from 'jsonwebtoken';

// const secret = process.env.JWT_SECRET;
const secret = 'abc'

export const sign = (username) => {
  return new Promise((resolve, reject) => {
    jwt.sign(username, secret, (err, token) => {
      if (err) reject(err);
      if (token) resolve(token);
    });
  })
}