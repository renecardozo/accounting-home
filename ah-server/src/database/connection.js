"use strict";
import Config from './config/config';
import { MongoClient } from 'mongodb';
import Q from 'q';

let _singleton = Symbol();

class Connection {

    constructor(singletonToken) {
        if (_singleton !== singletonToken)
            throw new Error('Cannot instantiate directly.');
    }

    static get instance() {
        if(!this[_singleton])
            this[_singleton] = new Singleton(_singleton);

        return this[_singleton]
    }

    connect(){
      let deferred = Q.defer();

    }
}

export default Connection;