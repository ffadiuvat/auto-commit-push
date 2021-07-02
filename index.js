const express = require('express')
const app = express()
const exec = require('child_process').exec;
const port = process.env.PORT || 80

app.use((req, res, next) =>{
  next();
})

app.get('/shell/create_commit', (req, res) => {
  exec('sh ./create_commit.sh');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})