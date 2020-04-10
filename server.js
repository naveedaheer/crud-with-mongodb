const express = require('express');
const app = express();

// We normally abbreviate `request` to `req` and `response` to `res`.
app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
})

app.listen(3000, () => { console.log('server is running on 3000') });

