const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const vetFormRoute = require('./routes/vetForm');
const nocFormRoute = require('./routes/nocForm');

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