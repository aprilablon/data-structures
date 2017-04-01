

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);

  var tuple = [k, v];

  var empty = this._storage.get(index) === undefined;

  var sameKeys = (!empty) ? k === this._storage.get(index)[0][0] : false;

  if (empty || sameKeys) {
    this._storage.set(index, [tuple]);
  
  } else {
    var firstItem = this._storage.get(index)[0];
    this._storage.set(index, [firstItem, tuple]);
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


};



/*
 * Complexity: What is the time complexity of the above functions?
 insert: constant
 retrieve: for the current solution, constant. However, if we were to turn the buckets into a linked list, retrieve would be linear
 remove: same answer as retrieve
 */
