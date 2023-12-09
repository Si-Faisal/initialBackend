const jwt = require("jsonwebtoken");

const jwtController = (req, res) => {
    const userEmail = req.body;
    const token = jwt.sign(userEmail, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
    res.send({ token });
};

module.exports = { jwtController };