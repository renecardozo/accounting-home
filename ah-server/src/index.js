import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Config from './config/config'
import Db from './database/db-manager';
import routes from './routes/rubro.route';

const app = express();
app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routes(app);

app.listen(Config.port, () => {
  console.log('Accounting Home app listening on port 3000!');
})