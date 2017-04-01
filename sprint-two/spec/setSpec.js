describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  it('should not contain a value that hasn\'t been added to the set', function() {
    set.add(1);
    expect(set.contains(2)).to.equal(false);
    expect(set.contains('hi')).to.equal(false);
  });

  //added tests
  it('should add arrays or objects to set', function() {
    var arr = [];
    var obj = {};
    set.add(arr);
    set.add(obj);
    expect(set.contains(obj)).to.equal(true);
    expect(set.contains(arr)).to.equal(true);
  });


});
