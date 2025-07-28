const express = require('express');
const http = require('http');
const cors = require('cors');
const { registerSocketServer } = require('./socket/socketServer')
require('dotenv').config();

/// SERVER SETUP
const app = express();
const server = http.createServer(app);
registerSocketServer(server)


// MIDDLEWARE
app.use(cors());

app.get('/',(req,res)=>{
    res.send({response:'ok'})
})

const PORT = process.env.PORT || 5004;
server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})