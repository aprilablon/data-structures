var Queue = function() {
  this.storage = {};
  this.count = 0;
};


Queue.prototype.enqueue = function(val) {
  this.storage[this.count] = val;
  this.count ++;
};

Queue.prototype.dequeue = function() {
  var keys = _.keys(this.storage);
  var min = Math.min.apply(Math, keys);
  var holder = this.storage[min];
  delete this.storage[min];

  return holder;
};

Queue.prototype.size = function() {
  return _.keys(this.storage).length;
};