import express from 'express';
import books from './butterflies.js';
import cors from 'cors';
import path from 'path';

const app = express();
const PORT = 5001;

app.use(cors())

const __dirname = path.resolve();

//root route 
app.get("/", (req, res) => {
    res.json("root");
  });

app.get("/butterflies", (req, res) => {
    res.json("butterflies");
  });


  app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));