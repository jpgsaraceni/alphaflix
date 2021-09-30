import { sign } from '../config/jwt.js';

export default function login(req, res) {
    const { username, password } = req.body;

    if (username === 'teste' && password === 'teste') {
		sign(username).then(token => res.send(token).catch(res.sendStatus(500)))
	} else res.sendStatus(401);
}
