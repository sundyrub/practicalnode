const repl = require('repl')
const net = require('net')
const options = {name: 'azat'}

const app = {a: 1}
net.createServer((socket) => {
  repl.start(`${options.name}> `, socket).context.app = app
}).listen(`/tmp/repl-app-${options.name}`)

var repl = require('repl');
var net = require('net'),
  options = { name: 'azat' };

app = {a:1};
net.createServer(function (socket) {
  repl.start(options.name + "> ", socket).context.app = app
}).listen(3000);
