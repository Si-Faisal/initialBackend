const multer = require('multer');
const router = require("express").Router();
const {jwtController} = require("../Controller/Auth/jwtController");
const {SignUpController} = require("../Controller/Auth/SignUpController");
const {imgUpload} = require("../Controller/imgupload/imageUploadController")
const cors = require("cors");
require('dotenv').config();
const upload = multer();

router.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  }));



// router.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });


router.post("/jwt",jwtController);
router.post("/user", SignUpController);
router.post("/uploadImg", upload.single('image') , imgUpload )

module.exports = router;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…MxMX0.zKJ-RxvLIg05ZRTGL-3-BEpiupxeCB7lcu_j4jtHt1Q

