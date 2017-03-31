describe('linkedList', function() {
  var linkedList;

  beforeEach(function() {
    linkedList = LinkedList();
  });

  it('should have a head and tail', function() {
    expect(linkedList).to.have.property('head');
    expect(linkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(linkedList.addToTail).to.be.a('function');
    expect(linkedList.removeHead).to.be.a('function');
    expect(linkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    linkedList.addToTail(4);
    expect(linkedList.tail.value).to.equal(4);
    linkedList.addToTail(5);
    expect(linkedList.tail.value).to.equal(5);
  });


  it('should remove the head from the list when removeHead is called', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.head.value).to.equal(4);
    linkedList.removeHead();
    expect(linkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    linkedList.addToTail(4);
    expect(linkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    expect(linkedList.contains(4)).to.equal(true);
    expect(linkedList.contains(5)).to.equal(true);
    expect(linkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    linkedList.addToTail(4);
    linkedList.addToTail(5);
    linkedList.removeHead();
    expect(linkedList.contains(4)).to.equal(false);
  });


  // add more tests here to test the functionality of linkedList
  it('should only ever have 5 properties, including function methods', function() {
    linkedList.addToTail(4);
    expect(_.keys(linkedList).length).to.equal(5);
  });

  it('should hold arrays and objects and primitives', function() {
    var arr = [];
    var obj = {};
    linkedList.addToTail(obj);
    linkedList.addToTail(arr);
    expect(linkedList.contains(arr)).to.equal(true);
    expect(linkedList.contains(obj)).to.equal(true);
  });

  it('should have the same node reference when a single item is added to the list', function() {
    linkedList.addToTail(4);
    expect(linkedList.head === linkedList.tail).to.equal(true);
  });

  it('should reference next node as object not value', function() {
    linkedList.addToTail(':)');
    linkedList.addToTail(':(');
    expect(typeof linkedList.head.next).to.equal('object');
  });

  it('should reset head and tail values to null if list is emptied', function() {
    linkedList.addToTail(4);
    linkedList.removeHead();
    expect(linkedList.head).to.equal(null);
    expect(linkedList.tail).to.equal(null);
  });




});






