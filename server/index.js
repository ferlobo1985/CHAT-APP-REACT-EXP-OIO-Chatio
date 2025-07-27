const express = require('express');
const http = require('http');
require('dotenv').config();

/// SERVER SETUP
const app = express();
const server = http.createServer(app);



const PORT = process.env.PORT || 5004;
server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})