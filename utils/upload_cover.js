import multer from 'multer';
import fs from 'fs'
import path from 'path'

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const bookId = req.params.id;
    const uploadPath = path.join(__dirname, `../assets/image/${bookId}`);
    
    fs.mkdir(uploadPath, { recursive: true }, (err) => {
      if (err) {
        cb(err, null);
      } else {
        cb(null, uploadPath);
      }
    });
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

module.exports = upload;
