var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);

    if (list.tail === null) {
      list.tail = node;
      list.head = node;
    } else {
      list.tail.next = node; // list.tail.value = 4
      list.tail = node; // list.tail = {value: 5, next: null}
    }
  };

  list.removeHead = function() {

    if (list.head.next === null) {
      var holder = list.head.value;
      list.head = null;
      list.tail = null;
      return holder;

    } else {
      var holder = list.head.value;
      list.head = list.head.next;
      return holder;
    }
  };

  list.contains = function(target) {

    var findTarget = function(list) {
      if (list.value === target) {
        return true;
      }
      if (list.next === null) {
        return false;
      } else {
        return findTarget(list.next);
      }
    };

    return findTarget(list.head);
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};