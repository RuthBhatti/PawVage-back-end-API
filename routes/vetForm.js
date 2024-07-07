const express = require('express');
const axios = require('axios');
const router = express.Router();

router.post('/', (req, res) => {
    const formData = req.body;
    res.status(200).json({ message: 'Veterinary Health Certificate submitted successfully', data: formData });
});

module.exports = router;