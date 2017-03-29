var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};

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