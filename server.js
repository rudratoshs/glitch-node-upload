const express = require('express');
const multer = require('multer');
const cors = require('cors');

const app = express();
const upload = multer({ dest: 'uploads/' }); // Use a temporary directory

// CORS configuration
app.use(cors()); // Allow all origins (for development purposes)

app.post('/upload', upload.single('file'), (req, res) => {
    // Handle the uploaded file
    console.log('File uploaded:', req.file);
    res.send('File uploaded successfully');
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});