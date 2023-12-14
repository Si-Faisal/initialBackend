
const userModel = require("../../Models/AuthModel/User");


const SignUpController = async(req, res)=>{
   
   try {
      const { email, name, gender, phone, img } = req.body; 
      const newUser = {
        email,
        name,
        gender,
        phone,
        img,
      };
      console.log(newUser);
  
      // Create a new user document
      const createdUser = await userModel.create(newUser);
      res.send(createdUser);
    } catch (error) {
      console.error(error);
      res.status(500).send("Error creating user");
    }
}

module.exports = {SignUpController};