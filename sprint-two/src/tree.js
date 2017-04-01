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

treeMethods.parentRemove = function(target) {

  var findTargetNode = function(tree) {
    if (tree.value === target) {
      return tree;
    } else if (tree.children.length > 0) {
      for (var i = 0; i < tree.children.length; i++) {
        return findTargetNode(tree.children[i]);
      }
    }
    return false;
  };

  var targetNode = findTargetNode(this);
  var targetNodeParent = targetNode.parent;
  
  targetNode.parent = null;
  targetNodeParent.children = targetNodeParent.children.filter(function(child) {
    return child !== targetNode;
  });
};



/*
 * Complexity: What is the time complexity of the above functions?
 addChild: constant
 contains: linear
 */