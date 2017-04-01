describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree();
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });

  //new tests
  it('should handle non-numeric values', function() {
    var obj = {};
    var arr = [];
    tree.addChild(arr);
    tree.addChild(obj);
    tree.addChild('hello');
    expect(tree.contains(arr)).to.equal(true);
    expect(tree.contains(obj)).to.equal(true);
    expect(tree.contains('hello')).to.equal(true);
  });
  //tests for advanced features
  it('should properly assign parent values to added nodes', function() {
  	expect(tree.parent).to.equal(null);
  	tree.addChild(5);
  	expect(tree.children[0].parent.value).to.equal(undefined);
  	expect(typeof tree.children[0].parent).to.equal('object');
  	tree.children[0].addChild(4);
  	expect(tree.children[0].children[0].parent.value).to.equal(5);
  });

  it('should execute a callback on every value in a tree using', function() {
    var array = [];
    var func = function(value) { array.push(value.value); };
    tree.addChild(2);
    tree.addChild(3);
    tree.children[0].addChild(7);
    tree.children[1].addChild(9);
    tree.children[0].addChild(8);
    tree.traverse(func);
    expect(array).to.eql([undefined, 2, 7, 8, 3, 9]);
  });


});




