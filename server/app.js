// import express from 'express';

const express = require('express');
const app = express();
const cors = require('cors');

// middleware
app.use(cors());

// routes
app.get('/hello',(req,res)=>{
    res.send('Hello World!');
});

// listen port
app.listen(4000, ()=>{
    console.log('listening on port 4000');
});

