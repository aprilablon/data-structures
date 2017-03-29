var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};

  _.extend(someInstance, stackMethods);

  return someInstance;
};

var stackMethods = {};


stackMethods.push = function(val) {
  this.storage[this.size()] = val;
};

stackMethods.pop = function() {
  var holder = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return holder;
};

stackMethods.size = function() {
  return _.keys(this.storage).length;
};
