var Tree = function(value) {
  var newTree = {};

  _.extend(newTree, treeMethods);

  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  child.parent = this;
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var findTarget = function(tree) {
    if (tree.value === target) {
      return true;
    } else if (tree.children.length > 0) {
      for (var i = 0; i < tree.children.length; i++) {
        if (findTarget(tree.children[i])) {
          return true;
        } 
      }
    }
    return false;
  };
  return findTarget(this);
};

treeMethods.traverse = function(cb) {
  cb(this);

  if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      this.children[i].traverse(cb);
    }
  }

};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild: constant
 contains: linear
 */