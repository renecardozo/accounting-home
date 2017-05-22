import Db from './connection'
const ObjectId = require('mongodb').ObjectID;
let db = new Db();
class DbManager {
	
  constructor (collectionName) {
  	this.name = collectionName;
	this.connect();
  }
  
  async connect() {
	try {
		this.db = await db.connect();
	} catch (err) {
		console.log('Unable to connect with DB');
		throw err;
	}
  }
  
  async insertOne(data) {
    try {
      const operation = await this.db.collection(this.name).insertOne(data);
      return operation.ops[0];
    } catch (err){
	  console.log('DB insertOne error');
	  throw err;
    }
  }

  async getAll() {
    try {
      const result = await this.db.collection(this.name).find({}).toArray();
      return result;
    } catch (err){
	  console.log('DB getAll error');
      throw err;
    }
  }
  
  async findOneById(id) {
    let query = {
      _id: ObjectId(id)
    }
	
	try {
		const result = await this.db.collection(this.name).findOne(query);
		return result;
	} catch (err){
		console.log('DB findOneById error');
		throw err;
	}
  }
  
  async findOneAndUpdate(id, data) {
    const query = {_id: ObjectId(id)};
    const modifier = {$set: data};
    const options = {returnOriginal: false};
	
	try {
		const operation = await this.db.collection(this.name).findOneAndUpdate(query, modifier, options);
		return operation.value;
	} catch (err){
		console.log('DB findOneAndUpdate error');
		throw err;
	}  
  }

  async removeOne(id) {
    const query = {_id: ObjectId(id)};
	
	try {
		const operation = await this.db.collection(this.name).remove(query);
		return {success: true};
	} catch (err){
		console.log('DB removeOne error');
		throw err;
	}  
  }
}

export default  DbManager;