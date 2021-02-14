import cors from 'cors';
import express from 'express';
import uuid from 'uuid-random';
import db from './db/db';
import https from 'https';
import fs from 'fs';

const app = express()
const port = 3000
app.use(cors({
    origin: ['http://domena1.local:8080', 'http://domena2.local:8090']
  }
))
app.get('/', (req, res) => {
  res.send('Up')
})

// get all todos
app.get('/api/products', (req, res) => {
  res.header('Access-Control-Allow-Credentials','true')
  res.cookie('crossDomainToken', uuid(), {sameSite: 'none', secure: true})
  res.status(200).send({
    success: 'true',
    message: 'todos retrieved successfully',
    todos: db
  })
});

https.createServer({
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}, app)
.listen(3000, function () {
  console.log('Example app listening on port 3000! Go to https://localhost:3000/')
})

