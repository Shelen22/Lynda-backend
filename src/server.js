const express = require('express');

const connect = require('./config/db');

const cors = require('cors');

const app = express();
const port = process.env.PORT || 2244;
 

app.use(express.json());
app.use(cors());


const start = async () =>{
    await connect();
    app.listen(port, ()=>{
        console.log('listening on port 2244')
    })
}

module.exports = {app, start}
