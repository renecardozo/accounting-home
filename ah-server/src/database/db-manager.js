import Db from './connection'
const ObjectId = require('mongodb').ObjectID;
let db = new Db();
class DbManager {
	
  constructor (collectionName) {
    this.name = collectionName;
	this.connect();
  }
  
  async connect() {
    this.db = await db.connect();
  }
  
  async insertOne(data) {
	try {
		const operation = await this.db.collection(this.name).insertOne(data);
		return operation.ops[0];
	} catch (err){
		throw new Error('Db insertOne error');
	}
    /*if (operation.result.ok !== 1 || operation.ops.length !== 1) {
      throw new Error('Db insertOne error');
    }
    return operation.ops[0];*/
  }
  
  async findOneById(id) {
    let query = {
      _id: ObjectId(id)
    }
	
	try {
		const result = await this.db.collection(this.name).findOne(query);
		return result;
	} catch (err){
		throw new Error('Db findOneById error');
	}
    
  }
  
  async findOneAndUpdate(id, data) {
    const query = {_id: ObjectId(id)};
    const modifier = {$set: data};
    const options = {returnOriginal: false};
    const operation = await this.db
      .collection(this.name)
      .findOneAndUpdate(query, modifier, options);
 
    if (!operation.value) {
      throw new Error('Db findOneAndUpdate error');
    }
    return operation.value;
  }
  
  async removeOne(id) {
    const query = {_id: ObjectId(id)};
    const operation = await this.db.collection(this.name).remove(query);
    if (operation.result.n !== 1) {
      throw new Error('Db remove error');
    }
    return {success: true};
  }
}

export default  DbManager;