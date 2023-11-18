/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');

const PORT = 8080;

const app = express();

const expressStaticGzip = require('express-static-gzip');

// check if the browser supports the compression, and if compression file exists for it) then serves compressed files
app.use(
  expressStaticGzip('dist', {
    enableBrotli: true, // only if you have brotli files too
  }),
);

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('dist'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.sendFile(path.resolve(__dirname, 'dist/index.html'));
});

// listen for requests :)
const listener = app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
