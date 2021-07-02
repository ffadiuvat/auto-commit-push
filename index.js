const express = require('express');
const app = express();
const exec = require('child_process').exec;
const port = process.env.PORT || 80;

app.use((req, res, next) =>{
  if(req.headers.api_key !== process.env.API_KEY) {
    return res.status(403).json({
      status: 'FORBIDDEN',
      message: 'you don\'t have permission to acces the endpoints',
    })
  }
  next();
})

app.post('/shell/create_commit', async (req, res) => {
  await exec('sh ./create_commit.sh');
  res.json({
    status: 'SUCCESS',
    message: 'successfully created a commit'
  });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
