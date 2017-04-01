var Tree = function(value) {
  var newTree = {};
  _.extend(newTree, treeMethods);

  newTree.value = value;


  newTree.children = [];

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
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



/*
 * Complexity: What is the time complexity of the above functions?
 */


//newTree.children should be an array? 

//adding a child should add a new tree
	//value = value
	//children = [];

//contains will be the similar to family tree recursive function
	//if value is target return
	
  //if children empty
		// return false
  //else perform search on every child
    //children.forEach(child.contains(target))? 

