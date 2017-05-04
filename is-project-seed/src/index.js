import http from 'http';
import Food from './database/db-manager';

http.createServer((req, res) => {
  let food = new Food('Neko');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  food.print();
  res.end('Hello World!!' + food.toString());
}).listen(3001, ()=>{
  console.log('Server running at http://127.0.0.1:3001');
});