import Config from '../config/config';
import { MongoClient } from 'mongodb';
let db;
class Db {
  constructor() {}
  async connect() {
    if (!db) {
		try {
			db = await MongoClient.connect(Config.db.url);
		} catch (err){
			throw new Error('Cannot connect with db');
		}
    }
    return db;
  }
}
export default Db;