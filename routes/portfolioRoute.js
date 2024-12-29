const express = require('express');
const { sendEmailController } = require('../controllers/controller');

// router object
const router = express.Router();

console.log("Route file loaded"); // Added console log

router.post("/sendEmail", (req, res) => {
    console.log("sendEmail route hit"); // Added console log
    sendEmailController(req, res);
});

module.exports = router;
