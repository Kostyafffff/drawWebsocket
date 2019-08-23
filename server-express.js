const express = require('express');
const fs = require('fs');
const app = express();

const wsServer = require('express-ws')(app);
const clients = [];


app.ws('/ws', ws => {
    ws.on('message', msg => {
        console.log('hi');
        sendAll(msg);
    });

    ws.on('close', () => {
        const index = clients.indexOf(ws);

        if (index > -1) {
            clients.splice(index, 1);
        }

        console.log('closed');
    });
});

wsServer.getWss().on('connection', ws => {
    clients.push(ws);
});

const sendAll = (msg) => {
    clients.forEach(client => client.send(msg));
};

app.use(express.static('public/Paint'));

app.listen(3000);

