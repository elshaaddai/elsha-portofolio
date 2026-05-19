const path = require("path");

const myCV = (req, res) => {
    const filePath = path.join(__dirname, "..", "files", "CV_Elsha_Tambuwun.pdf");

    res.download(filePath, "CV_Elsha_Tambuwun.pdf", (err) => {
        if (err) {
            console.log("Error download CV:", err);
            return res.status(500).send("File tidak ditemukan");
        }
    });
};

module.exports = {
    myCV
};