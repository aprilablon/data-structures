describe('DoublyLinkedList', function() {
  var doublyLinkedList;

  beforeEach(function() {
    doublyLinkedList = DoublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(doublyLinkedList).to.have.property('head');
    expect(doublyLinkedList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(doublyLinkedList.addToTail).to.be.a('function');
    expect(doublyLinkedList.removeHead).to.be.a('function');
    expect(doublyLinkedList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.tail.value).to.equal(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.value).to.equal(5);
  });


  it('should remove the head from the list when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.head.value).to.equal(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.contains(4)).to.equal(true);
    expect(doublyLinkedList.contains(5)).to.equal(true);
    expect(doublyLinkedList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.contains(4)).to.equal(false);
  });


  // add more tests here to test the functionality of doublyLinkedList
  it('should only ever have 5 properties, including function methods', function() {
    doublyLinkedList.addToTail(4);
    expect(_.keys(doublyLinkedList).length).to.equal(5);
  });

  it('should hold arrays and objects and primitives', function() {
    var arr = [];
    var obj = {};
    doublyLinkedList.addToTail(obj);
    doublyLinkedList.addToTail(arr);
    expect(doublyLinkedList.contains(arr)).to.equal(true);
    expect(doublyLinkedList.contains(obj)).to.equal(true);
  });

  it('should have the same node reference when a single item is added to the list', function() {
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.head === doublyLinkedList.tail).to.equal(true);
  });

  it('should reference next node as object not value', function() {
    doublyLinkedList.addToTail(':)');
    doublyLinkedList.addToTail(':(');
    expect(typeof doublyLinkedList.head.next).to.equal('object');
  });

  it('should reset head and tail values to null if list is emptied', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.removeHead();
    expect(doublyLinkedList.head).to.equal(null);
    expect(doublyLinkedList.tail).to.equal(null);
  });

  //doubly linked list tests
  it('should correctly point to previous node when node is added to tail', function() {
    doublyLinkedList.addToTail(4);
    doublyLinkedList.addToTail(5);
    expect(doublyLinkedList.tail.prev.value).to.equal(4);
    doublyLinkedList.addToTail(6);
    expect(doublyLinkedList.tail.prev.value).to.equal(5);
    expect(doublyLinkedList.tail.prev.prev.value).to.equal(4);
  });

  it('should set head\'s previous value to null when head is removed', function() {
    doublyLinkedList.addToTail(3);
    expect(doublyLinkedList.head.prev).to.equal(null);
    doublyLinkedList.addToTail(4);
    expect(doublyLinkedList.removeHead()).to.equal(3);
    expect(doublyLinkedList.head.prev).to.equal(null);
  });


});






