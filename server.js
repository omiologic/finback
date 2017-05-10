'use strict';
const express = require('express');
const app = express();

// console.log(__dirname)
app.use(express.static(__dirname + '/public'));
app.get('/', (req, res) => {
	res.sendFile('index.html');
});
app.listen(1337);
