const express = require('express');

const app = express();

const port = 4000;

const cors = require('cors')


var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

app.use(cors(corsOptions))

const multer = require('multer')



const storage= multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
      },
      filename: function (req, file, cb) {
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, `${Date.now()} _ ${file.originalname}`)
      }
})

const upload= multer({storage})

app.post('/upload',upload.single("file"),(req,res)=>{
    const file= req.file;

    if (file){
        res.json(file)
    }
    else{
        throw new Error('Unable to upload file!');
    }
})

app.post('/multiupload',upload.array("files"),(req,res)=>{
    const files= req.files;

    if (Array.isArray(files) && files.length>0){
        res.json(files)
    }
    else{
        throw new Error('Unable to upload files!');
    }
})



app.get('/',(req,res)=>{
    res.send('welcome to homepage buddy!')
})



app.listen(port,()=>{
  console.log('express app is running!' + port)
})