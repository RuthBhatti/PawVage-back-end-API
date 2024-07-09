import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import vetFormRoute from './routes/vetForm.js';
import nocFormRoute from './routes/nocForm.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use('/api/vet-form', vetFormRoute);
app.use('/api/noc-form', nocFormRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});