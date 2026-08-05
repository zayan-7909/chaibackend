const express = require('express');
// import express from 'express'
const app = express();
require('dotenv').config()
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/twitter', (req, res) => {
  res.send('zayan.twitter.com');
});

app.get('/login', (req,res)=>{
    res.send('<h1>Please Login again</h1>')
})

app.get('/youtube', (req,res)=>{
    res.send('<h1>Welcome to my youtube channel</h1>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});