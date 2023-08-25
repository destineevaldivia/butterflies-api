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
      "id": butterflies.length + 1,
      "name": req.body,
    };
    butterflies.push(newButterfly)
    res.send(newButterfly)
  });


  //UPDATE
  //update butterfly collection
  //return the update to the client side
  app.put('/butterflies/:id', (req, res) => {
    //Look up the butterfly
    const id = req.params.id;
    const findB = butterflies.find(findB => findB.id === id);
    
    if (findB) {
      findB['common name'] = newButterfly['common name'];
      findB['scientific name'] = newButterfly['scientific name'];
      findB['description'] = newButterfly['description'];
      findB['habitat'] = newButterfly['habitat'];
      findB['distribution'] = newButterfly['distribution'];
      findB['common name'] = newButterfly['common name'];
      findB['lifecycle stages'] = newButterfly['lifecycle stages'];
      findB['conservation status'] = newButterfly['conservation status'];

      res.send("Great job, updating!")
    }
    else {
      res.status(404).send('404 error: not found');
    }
  });

  //DELETE
app.delete('/butterflies/:id', (req, res) => {
  
}


  app.listen(PORT, () => console.log(`Hola! Server running on Port http://localhost:${PORT}`));