var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;

  _.extend(someInstance, queueMethods);

  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(val) {
  this.storage[this.count] = val;
  this.count++;
}

queueMethods.dequeue = function() {
  var keys = _.keys(this.storage);
  var min = Math.min.apply(Math, keys);
  var holder = this.storage[min];
  delete this.storage[min];
  return holder;
}

queueMethods.size = function() {
  return _.keys(this.storage).length;
}