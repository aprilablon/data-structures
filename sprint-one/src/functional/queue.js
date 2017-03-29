var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var keys = _.keys(storage);
    var minKey = Math.min.apply(Math, keys);
    var holder = storage[minKey];
    delete storage[minKey];
    return holder;
  };

  someInstance.size = function() {
    return _.keys(storage).length;
  };

  return someInstance;
};
