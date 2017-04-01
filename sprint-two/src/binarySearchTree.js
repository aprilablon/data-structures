var BinarySearchTree = function(value) {
	this.value = value;
	this.right = null;//higher
	this.left = null;//lower
};

BinarySearchTree.prototype.insert = function(val) {
  var tree = new BinarySearchTree(val);
  

  if (this.value > tree.value) {
    if (this.left === null) {
      this.left = tree;
    } else {
      this.left.insert(val);
    }
  } else if (this.value < tree.value) {
    if (this.right === null) {
      this.right = tree;
    } else {
      this.right.insert(val);
    }
  }
}

BinarySearchTree.prototype.contains = function(val) {
  var found = this.value === val;

  if (found) {
    console.log(this);
    return true;
  
  } else {
    if (val > this.value) {
      if (this.right !== null) {
        return this.right.contains(val);
      
      } else {
        return false;
      }
    
    } else if (val < this.value) {
      if (this.left !== null) {
        return this.left.contains(val);
      
      } else {
        return false;
      }
    }
  }


}
BinarySearchTree.prototype.depthFirstLog = function(func) {
  func(this.value);
  if (this.left !== null) {
    this.left.depthFirstLog(func);
  
  } else {
    if (this.right !== null) {
      this.right.depthFirstLog(func);
    }
  }

}





/*
 * Complexity: What is the time complexity of the above functions?
 insert: logarithmic, worst case linear
 contains: same as insert
 dfl: linear
 */
