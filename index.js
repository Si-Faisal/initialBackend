const express = require('express')
const cors = require("cors");
require('dotenv').config();
const jwt = require('jsonwebtoken');


const { MongoClient, ServerApiVersion } = require('mongodb');
const mongoose = require('mongoose');
const app = express()
const port = 3000;
const routes = require("./Routes")



// const corsOptions = {
//   origin: 'http://localhost:3000',
//   methods: ['DELETE', 'PUT', 'GET', 'POST'],
//   allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept'],
// };

app.use(cors());



app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

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

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})