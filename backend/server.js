const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const fetchDataRoute=require('./fetchDataRoute')

app.use(cors()); 
app.use(bodyParser.json()); 
app.use('/api', fetchDataRoute);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
