"use strict";

class Config {
    constructor () {}
    toString () {
        return {
          'db': 'mydb',
          'port': '27017',
          'host': '127.0.0.1'
        }
    }
}

module.exports = Config;