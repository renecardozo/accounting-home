import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Config from './config/config'
import Db from './database/db-manager';
import routes from './routes/rubro.route';

/**
 * Instance of app created from expressjs
 * @type {Object}
 */
const app = express();

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

/**
 * Setting properties to run the server.
 * @param  { Number } Config.port The number of port where is running the server.
 * @param  {Callback} ArrawFunction it is the callback called when de server is running.
 */
app.listen(Config.port, () => {
  console.log('Accounting Home app listening on port 3000!');
})