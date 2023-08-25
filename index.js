import express from 'express';
import cors from 'cors';
import path from 'path';
import butterflies from './butterflies.js';

//create instance of express.js framework application and set my port to 5001
const app = express();
const PORT = 5001;

//The path.resolve() method resolves a sequence of paths into an absolute path
const __dirname = path.resolve();

//configuring cors middleware, this enables the express server to respond to preflight requests
app.use(cors())

//*** app.use(express.json());

//READ endpoints
app.get('/', (req, res) => {
    //res.json("root");
    res.sendFile(path.join(__dirname, 'index.html'));
  });

app.get('/butterflies', (req, res) => {
    res.json(butterflies);
    //res.sendFile(path.join(__dirname, 'index.html'));
  });

  //CREATE newButterfly
  app.post('/butterflies', (req, res) => {
    const newButterfly = {
      id: butterflies.length + 1,
      name: req.body
    };
    butterflies.push(newButterfly)
    res.send(newButterfly)
  });

  //Next step: *INPUT VALIDATION*  
  //Create 404 msg

  //UPDATE
  //app.put('/butterflies/:id', (req, res) => {
    //Look up the butterfly
    //if invalid, return 404

    //validate
    //if invalid, return 404 

    //update collection
    //return the update to the client side
  //});

  //DELETE
app.delete('/butterflies/:id', (req, res) => {
  const id = req.params.id;
  const find
}


  app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));