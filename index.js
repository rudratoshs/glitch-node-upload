const express = require("express");
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");

const app = express();
const upload = multer({ dest: "uploads/" }); // Use a temporary directory
const path = "uploads/";

// CORS configuration
app.use(cors()); // Allow all origins (for development purposes)

app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully");

  // Delete the uploaded file after processing
  fs.readdirSync(path).forEach((file) => {
    fs.unlink(path + file, function (err) {
      if (err) return console.log(err);
      console.log("File deleted successfully:", path + file);
    });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
