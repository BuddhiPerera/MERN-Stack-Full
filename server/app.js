// imports;
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/user');

// middleware
app.use(cors());
app.use(express.json()); // to convert data that pass through the body into json

// database connection
mongoose.connect('mongodb://localhost:27017/mern-stack-full')


// routes
// router for register
app.post('/api/register', async (req, res) => {
    console.log(req.body);
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        res.json({status: 'ok'});
    } catch (err) {
        console.log(err);
        res.json({status: 'error', error: 'Duplicated Email Address'});
    }
});

// router for login
app.post('/api/login', async (req, res) => {
        const user = await User.findOne({
            email: req.body.email,
            password: req.body.password
        });
        // if user found
        if(user){
            return res.json({status: 'ok', user: true});
        } else{
            return res.json({status: 'error', user: false});
        }
});

// listen port
app.listen(4000, () => {
    console.log('listening on port 4000');
});

