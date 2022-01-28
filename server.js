const express = require('express');
const PORT = 8081;
const app = express();
app.get('/', (req, res) => {
  res.send('Hello !!');
});
app.listen(PORT);
console.log(`Running on ${PORT}`);
