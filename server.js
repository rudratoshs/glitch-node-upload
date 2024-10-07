const express = require('express');
const multer = require('multer');
const cors = require('cors');
const serverless = require('serverless-http');

const app = express();
const upload = multer({ dest: '/tmp/uploads/' }); // Use /tmp for serverless environments

// CORS configuration
app.use(cors()); // Allow all origins (for development purposes)

app.post('/upload', upload.single('file'), (req, res) => {
    // Handle the uploaded file
    console.log('File uploaded:', req.file);
    res.send('File uploaded successfully');
});

// Export as a Netlify Function
module.exports.handler = serverless(app);
