const multer = require("multer");
const crypto = require('crypto');
//const { resolve, extname } = require("path");
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, "..", "..", "uploads"),
        filename: (req, file, cb) => {

            cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
            
            /*

            // Outra forma de passar o filename, mas criptografando ele

            crypto.randomBytes(16, (err, res) => {
                if (err) return cb(err);

                return cb(null, res.toString('hex') + extname(file.originalname));
            });
            */
        },
    }),
}
