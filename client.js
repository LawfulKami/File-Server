const net = require("net");
const readline = require("readline");

const conn = net.createConnection({
  host: '192.168.0.163',
  port: 3030
});

conn.setEncoding('utf8');

conn.on('data', (data) => {
  console.log(data);
});

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt : ">"
});

rl.prompt();
rl.on("line", line => {
  conn.write(line);
});