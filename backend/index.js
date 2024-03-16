const express = require('express');
const cors = require("cors");

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => res.send('Hello'));

app.listen(8080, () => {console.log('server started on http://localhost:8080')});