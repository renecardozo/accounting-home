import Db from './connection'
const ObjectId = require('mongodb').ObjectID;
let db = new Db();

class DbManager {
  constructor (collectionName) {
  	this.name = collectionName;
	this.connect();
  }
  
  /**
   * Connect to data base.
   * @return {Promise<Instance>} A promise to instance of the data base.
   */
  async connect() {
	try {
		this.db = await db.connect();
	} catch (err) {
		console.log('Unable to connect with DB');
		throw err;
	}
  }
  
  /**
   * Inserts new data into data base.
   * @param  {Object} data The data that will stored in the data base.
   * @return {Promise<Document>} A promise to the Document.
   */
  async insertOne(data) {
    try {
      const operation = await this.db.collection(this.name).insertOne(data);
      return operation.ops[0];
    } catch (err){
	  console.log('DB insertOne error');
	  throw err;
    }
  }

  /**
   * Get all document from data base.
   * @return {Promise<Document>} A promise to the Document.
   */
  async getAll() {
    try {
      const result = await this.db.collection(this.name).find({}).toArray();
      return result;
    } catch (err){
	  console.log('DB getAll error');
      throw err;
    }
  }
  
  /**
   * Get a document according the id of the document.
   * @param  {String} id The identify to search the document.
   * @return {Promise<Document>} A promise to the Document
   */
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
  
  /**
   * Find and update a document according a id.
   * @param  {String} id   The identify of document to be searched.
   * @param  {Object} data Properties to be updated.
   * @return {Promise<Document>} A promise to the Document.
   */
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

  /**
   * Removes the document given a id
   * @param  {String} id The identify of document.
   * @return {Promise<Document>} A promise to the Document.
   */
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