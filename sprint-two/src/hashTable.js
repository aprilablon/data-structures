

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var tuple = [k, v];

  var empty = this._storage.get(index) === undefined;

  var sameKeys = (!empty) ? k === this._storage.get(index)[0][0] : false;


  /////////////////////////////////////////
  if (sameKeys) { this._storage.decrement(); }
  /////////////////////////////////////////


  if (empty || sameKeys) {
    this._storage.set(index, [tuple]);
  
  } else {
    var firstItem = this._storage.get(index)[0];
    this._storage.set(index, [firstItem, tuple]);
  }

  //increment counter then check size
  this._storage.increment();
  var shouldResize = this._storage.verifySize();
  
  //check if we need to resize
  if (shouldResize > 4) {
    console.log('need to inc');
    // collect everything in storage
    // update this._limit
    console.log(shouldResize);
    // update this._storage
    // iterate over collection
      // pass into insert
    // update counter in LimitedArray
  }


  //this._storage.verifySize(); // will be part of conditional statement
  // check that the size is within bounds --> invoke verifySize
  // if it isn't
    // update this._limit (multiply by 2)
    // set this._storage = LimitedArray(this._limit);
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);

  if (bucket) {
    if (bucket[0][0] === k) {
      return bucket[0][1];
    } else {
      return bucket[1][1];
    }
  } else {
    return undefined;
  }

};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  
  this._storage.set(index, undefined);

  //resize function below
  this._storage.decrement();
  var shouldResize = this._storage.verifySize();
  if (shouldResize) {
    console.log('need to dec');
    // collect everything in storage
    // update this._limit
    console.log(shouldResize);
    // update this._storage
    // iterate over collection
      // pass into insert
    // update counter in LimitedArray
  }
  //this._storage.verifySize(); // will be part of conditional statement
  // invoke verifySize
};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: constant
 retrieve: for the current solution, constant. However, if we were to turn the buckets into a linked list, retrieve would be linear
 remove: same answer as retrieve
 */
