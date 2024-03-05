const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/test', (req, res) => {
  res.send('test route');
});
app.get('/', (req, res) => {
  res.send('Hello GCP');
});

app.listen(port, () => console.log(`listening on port ${port}`));
