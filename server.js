const net = require('net');
const fs = require("fs");


const server = net.createServer();


server.listen(3030, () => {
  console.log('Server listening on port 3030!');
  
});

server.on('connection', (client) => {
  client.setEncoding("utf8");
  console.log('Client connected');
  client.write('Welcome to you library, what file would you like today?');
  client.on("data", (data) => {
    fs.readFile(data, (err, string) => {
      if (err) {
        client.write("invalid file");
        return;
      }
      client.write(string);
      client.write(`File downloaded!`);
    });
  });
});
