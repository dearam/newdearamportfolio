const express = require('express');
const app = express();
const port = 3001;

let count = 0;
let totalCount = 0;

app.use(express.json());

app.get('/api/likes', (req, res) => {
  res.json({ count, totalCount });
});

app.post('/api/like', (req, res) => {
  count += 1;
  totalCount += 1;
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
