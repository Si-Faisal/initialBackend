
const router = require("express").Router();
const {jwtController} = require("../Controller/Auth/jwtController")

router.post("/jwt",jwtController);

module.exports = router;

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6I…MxMX0.zKJ-RxvLIg05ZRTGL-3-BEpiupxeCB7lcu_j4jtHt1Q

