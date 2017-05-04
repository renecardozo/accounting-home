"use strict";

// Food is a base class
class Food {

    constructor (name) {
        this.name = name;
    }

    toString () {
        return `Name : ${this.name}`
    }

    print () {
      console.log( this.toString() );
    }
}

module.exports = Food;