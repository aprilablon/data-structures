var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function(val) {
  this.storage[this.size()] = val;
};

Stack.prototype.pop = function() {
  var holder = this.storage[this.size() - 1];
  delete this.storage[this.size() - 1];
  return holder;
};

Stack.prototype.size = function() {
  return _.keys(this.storage).length;
};
