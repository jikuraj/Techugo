const http = require('http');
const mongoose = require('mongoose');
const studentSchema = require('./StdSchema.js')

const server = http.createServer((req, res) => {
  console.log(req.url);
  let data = '';
  req.on('data', chunk => {
    data += chunk;
    console.log(data);
    if (req.url === '/') {
      studentSchema.create(JSON.stringify(data), (err, dbdata) => {
        console.log(err, dbdata);
        res.write(JSON.stringify(dbdata));
        res.end();
      });
    }
  })
  req.on('end', () => {
    res.end();
  })

});
server.on('clientError', (err, socket) => {
  socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
let mongodb_url = 'mongodb://127.0.0.1:27017/StdDetails'

mongoose
  .connect(mongodb_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    if (process.env.NODE_ENV !== 'test') {
      console.log('connected to %s', mongodb_url);
    }
  })
  .catch((err) => {
    console.log("App is starting error ", err.message);
    process.exit(1);
  })

let db = mongoose.connection;


server.listen(4000, () => {
  console.log('server is running on port 4000');
})