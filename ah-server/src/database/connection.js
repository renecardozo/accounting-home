import Config from '../config/config';
import { MongoClient } from 'mongodb';
let db;
class Db {
  constructor() {}
  async connect() {
    if (!db) {
      db = await MongoClient.connect(Config.db.url);
    }
    return db;
  }
}
export default Db;