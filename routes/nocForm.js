import express from 'express';
import fs from 'fs';

const router = express.Router();
const NOC_FORM_FILE = './data/nocForms.json';

const writeData = (data) => {
    fs.writeFileSync(NOC_FORM_FILE, JSON.stringify(data, null, 2));
};

router.post('/', (req, res) => {
    const formData = req.body;
    writeData(formData);

    res.status(200).json({ message: 'Indian NOC submitted successfully', data: formData });
});

export default router;