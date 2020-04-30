const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) =>{
  res.send('Welcom to the API')
});

app.listen(port);
