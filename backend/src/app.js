import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import index from './routes/index.js';
import loginRoute from './routes/login.routes.js';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.json({ type: 'application/vnd.api+json' }));
app.use(cookieParser());

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
};

app.use(cors(corsOptions));
app.use(index);
app.use('/login', loginRoute);

export default app;
