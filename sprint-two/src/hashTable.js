

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.resize = function(size, collection) {
  this._limit = size;
  console.log('resize limit ' + this._limit);
  this._storage = LimitedArray(size);
  

  collection.forEach(function(tuple) {
    console.log(tuple);
    HashTable.prototype.insert(tuple[0], tuple[1]);
  });

}

HashTable.prototype.insert = function(k, v) {
  console.log('insert limit: ' + this._limit);
  // when resizing the hash table, the limit is not correctly updated to 16
  // but is undefined
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

  this._storage.increment();
  var shouldResize = this._storage.verifySize();
  
  if (shouldResize > 4) {
    console.log('need to inc');
    console.log(shouldResize);



    // collecting everything in storage
    //need to somehow insert to new this._storage
    var collection = this._storage.collect();
    this.resize(shouldResize, collection);
  }


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

  this._storage.decrement();
  var shouldResize = this._storage.verifySize();

  if (shouldResize) {
    console.log('need to dec');
    console.log(shouldResize);


    // collecting everything in storage
    //need to somehow insert to new this._storage
    var collection = this._storage.collect();
    resize(shouldResize, collection);
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: constant
 retrieve: for the current solution, constant. However, if we were to turn the buckets into a linked list, retrieve would be linear
 remove: same answer as retrieve
 */
