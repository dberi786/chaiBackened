require('dotenv').config()
const express = require('express')
const app = express()
//production application

const port = 4000
//call back
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send('hiteshdotcom')
})
app.get('/login',(req,res)=>{
    res.send('<h1>Please Login</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>Welcome</h2>')
})
app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})