const express = require('express');
const app = express();
app.use(express.static('public'));
const port = process.env.PORT || 5000;
app.listen(port);


app.get('/:rocks', (req, res) => {
    res.end('route rocks');
})