const cors = require('cors')
const express = require('express')
const multer = require('multer')

const isValidToken = (token) => {
    // token validation 
    return (token) === 'testtoken';
  };

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../src/components/imgs/uploaded');
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const fileExtension = file.mimetype.split('/')[1];
        cb(null, 'image-' + uniqueSuffix + '.' + fileExtension);
    }
})

const upload = multer({
    storage: storage
})

const app = express()

app.use(cors())

app.post('/api/images', (req, res, next) => {
    const token = req.headers.token; // Get the token from the header
  
    if (!isValidToken(token)) {
        return res.status(403).json({ message: 'Invalid token' });
    }
  
    next();
  }, upload.single('image'), (req, res) => {
    console.log('Image uploaded:', req.file);
    res.status(200).json({ message: 'Image uploaded successfully' });
});
app.get('/api/images', (req, res) => {
    // Get a list of image filenames and send them to the client
    const fs = require('fs');
    let imageNames = fs.readdirSync('../src/components/imgs/uploaded');
    imageNames = imageNames.filter(e => e !== '.DS_Store'); 
    imageNames = imageNames.sort((a,b) => a-b)

    res.send({ imageNames });
});

app.listen(4000, () => console.log('Listening on port 4000'));
