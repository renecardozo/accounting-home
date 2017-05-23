import Config from '../config/config';
import { MongoClient } from 'mongodb';
let db;
class Db {
  /**
   * Function constructor for data base
   * @return {[type]}
   */
  constructor() {}

  /**
   * Connect to data base.
   * @return {Promise<Instance>} A promise to instance of the data base.
   */
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