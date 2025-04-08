const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/slike', (req, res) => {
  const dataPath = path.join(__dirname, 'images.json');
  const images = JSON.parse(fs.readFileSync(dataPath));
  res.render('slike', { images });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server pokrenut na http://localhost:${PORT}`);
});
