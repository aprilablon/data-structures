var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
  	var node = Node(value);
  	if (list.head === null) {
  	  list.head = node;
  	  list.tail = node;
  	  list[node.value] = node.next;

  	} else {
  	  var holder = list.tail.value;
  	  list.tail = node;
      list[holder] = node.value;
      list[node.value] = node.next;
  	}
  };

  list.removeHead = function() {
  	var holder = list.head.value;

  	if (list[holder] === null) {
  	  list.head = null;
  	  list.tail = null;
  	  delete list[holder];
  	
  	} else {
      var newHead = list[holder];
      list.head = Node(newHead);
      delete list[holder];
  	}
  	return holder;
  };

  list.contains = function(target) {
  	return list[target] === undefined ? false : true;
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
