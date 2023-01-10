const mysql = require('mysql2');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3030;

app.use(express.json()); //this is the build in express body-parser 
app.use(                //this mean we don't need to use body-parser anymore
  express.urlencoded({
    extended: true,
  })
); 
app.use(cors()); // hopefully allows us to bypass cors policies

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_KEY,
  database: 'memory_game'
});

db.connect((err) => {
  if(err) throw err;
  console.log('Connected!');
});

app.get('/api', (req, res) => {
  const query = 'SELECT * FROM leaderboard ORDER BY turns, total_time LIMIT 10;';
  db.query(query, (err, result) => {
    if (err) throw err;
    res.json(result);
  });
});

app.post('/api/addscore', (req, res) => {
  const score = req.body;
  console.log(req.body)
  const query = 'INSERT INTO leaderboard SET ?';
  db.query(query, score, (err, result) => {
    if (err) throw err;
    res.send(result);
  })
});

app.listen(port, () => {
  console.log('Server listening on port ' + port);
});