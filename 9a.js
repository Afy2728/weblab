  var express = require('express');
var app = express();
var count = 0;

app.use((req, res, next) => {
    count++;
    next();
});

app.get('/visit', (req, res) => {
    res.json({ visit: count });
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
});

function fetchVisitCount() {
    fetch('/visit')
        .then(response => response.json())

}
