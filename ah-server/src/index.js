import Food from './database/db-manager';
import express from 'express';

let app = express();

app.get('/', (req, res) => {
	let food = new Food('Neko');
  res.writeHead(200, {'Content-Type': 'text/plain'});
  food.print();
  res.end('Hello World!!' + food.toString());
})

app.get('/helloWorld', (req,res) => {
	res.send('Hola Mundo :P');
})

app.listen(3000, () => {
  console.log('Accounting Home app listening on port 3000!');
})