// imports;
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

// middleware
app.use(cors());
app.use(express.json()); // to convert data that pass through the body into json

// database connection

// routes
app.post('/api/register',(req,res)=>{
    console.log(req.body);
    res.json({status: 'ok'});
});

// listen port
app.listen(4000, ()=>{
    console.log('listening on port 4000');
});

