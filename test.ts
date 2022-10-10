const express = require('express')
const dotenv = require('dotenv')
const app = express()
dotenv.config()
const port = process.env.PING_LISTEN_PORT; 
app.use(express.json())


app.get('/ping', (req, res) => {
    res.json(req.headers)
  });
  


app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});

