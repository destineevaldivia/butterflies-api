import express from 'express';
import cors from 'cors';
import path from 'path';
import 'dotenv/config';
import butterflies from './butterflies.js';

//create instance of express.js framework application and set my port to var in my env or 5001
const app = express();
const PORT = process.env.PORT || 5001;

//The path.resolve() method resolves a sequence of paths into an absolute path
const __dirname = path.resolve();

//configuring cors middleware, this enables the express server to respond to preflight requests
app.use(cors())

//create my routes 
app.get("/", (req, res) => {
    res.json("root");
    //res.sendFile(path.join(__dirname, 'index.html'));
  });

app.get("/butterflies", (req, res) => {
    res.json("butterflies");
    //res.sendFile(path.join(__dirname, 'index.html'));
  });

  app.get("/butterflies2", (req, res) => {
    res.json("butterflies2");
  });


  app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));