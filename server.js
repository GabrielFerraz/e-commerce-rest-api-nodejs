var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000;

app.listen(port);

console.log('REST API for a simple e-commerce started on: ' + port);