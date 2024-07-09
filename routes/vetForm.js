import express from 'express';
import fs from 'fs';

const router = express.Router();
const VET_FORM_FILE = './data/vetForms.json';

const writeData = (data) => {
    fs.writeFileSync(VET_FORM_FILE, JSON.stringify(data, null, 2));
};

router.post('/', (req, res) => {
    const formData = req.body;
    console.log(formData)
    writeData(formData);

    res.status(200).json({ message: 'Veterinary Health Certificate submitted successfully', data: formData });
});

export default router;