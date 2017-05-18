import express from 'express';
import bodyParser from 'body-parser';
import Config from './config/config'
import Db from './database/db-manager';
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var routes = require('./routes/accouting-home.route');
routes(app);

app.listen(Config.port, () => {
  console.log('Accounting Home app listening on port 3000!');
})