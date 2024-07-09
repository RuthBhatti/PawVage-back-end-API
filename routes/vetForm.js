import express from 'express';
import fs from 'fs';

const router = express.Router();
const VET_FORM_FILE = './data/vetForms.json';

// // Function to read data from the file
// const readData = () => {
//     if (!fs.existsSync(VET_FORM_FILE)) {
//         return [];
//     }
//     const rawData = fs.readFileSync(VET_FORM_FILE);
//     return JSON.parse(rawData);
// };

// Function to write data to the file
const writeData = (data) => {
    fs.writeFileSync(VET_FORM_FILE, JSON.stringify(data, null, 2));
};

router.post('/', (req, res) => {
    const formData = req.body;
    console.log(formData)
    // const vetForms = readData();

    // vetForms.push(formData);
    writeData(formData);

    res.status(200).json({ message: 'Veterinary Health Certificate submitted successfully', data: formData });
});

export default router;