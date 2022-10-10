const express = require('express')
const dotenv = require('dotenv')
const app = express()
dotenv.config()
const port = process.env.PING_LISTEN_PORT; 
app.use(express.json())


app.get('/ping', (req, res) => {
  try{
    res.json(req.headers)}
    catch(e){
      console.log(e)
      res.status(500).send()
    }
  });

app.get("*",(req, res) => {
  res.status(404).send()
})
  
app.listen(port, () => {
    console.log(`Server listening on ${port}`)
});

