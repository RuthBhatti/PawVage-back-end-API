import express from 'express';
import fs from 'fs';

const router = express.Router();
const NOC_FORM_FILE = './data/nocForms.json';

// // Function to read data from the file
// const readData = () => {
//     if (!fs.existsSync(NOC_FORM_FILE)) {
//         return [];
//     }
//     const rawData = fs.readFileSync(NOC_FORM_FILE);
//     return JSON.parse(rawData);
// };

// Function to write data to the file
const writeData = (data) => {
    fs.writeFileSync(NOC_FORM_FILE, JSON.stringify(data, null, 2));
};

router.post('/', (req, res) => {
    const formData = req.body;
    // const nocForms = readData();

    // nocForms.push(formData);
    writeData(formData);

    res.status(200).json({ message: 'Indian NOC submitted successfully', data: formData });
});

export default router;