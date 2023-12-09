const express = require('express')
const cors = require("cors");
require('dotenv').config();
const jwt = require('jsonwebtoken');


const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const app = express()
const port = 3000;
const routes = require("./Routes")

app.use(cors());
app.use(express.json());
app.use(routes);

app.use("/routes", routes);




const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASS}@cluster0.kaq6cez.mongodb.net/?retryWrites=true&w=majority`;

async function main() {
    await mongoose.connect(uri);
  }

  main().catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('mangoose server running........ ')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})