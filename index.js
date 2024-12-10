const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const clientIp = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    res.send(`Client IP: ${clientIp}`);
});

app.listen(3000);
