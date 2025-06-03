const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const server = http.createServer((req, res) => {
console.log('Request', req)


})

server.listen(PORT, 'localhost', (error) => {
    error 
    ? console.log(`Ошибка! ${error}`) 
    : console.log(`Listening PORT ${PORT}`)
})