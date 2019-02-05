const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const path = require('path');

app.use('*', (req, res, next) => {
	let timestamp = new Date(Date.now());
	console.log(timestamp.toString());
	console.log(req.baseUrl||"/");
	next();
});
app.use('/browse', require('./server/routes/browseRouter'));
app.use('/item', require('./server/routes/itemRouter'));

// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static('./build'));
// }

// app.get('*', function (req, res) {
//   res.sendFile("index.html", { root: path.join(__dirname, 'build') })
// });


app.get('/', (req, res) => {
  res.send("Hello World");
});

app.listen(port, function () {
    console.log('Example app listening at localhost:%s', port);
});
