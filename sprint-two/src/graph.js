

// Instantiate a new graph
var Graph = function() {
  this.graph = {};
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var newNode = {'value': node, 'edges': []};
  this.graph[node] = newNode;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return node in this.graph;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var edges = this.graph[node].edges;
  delete this.graph[node];

  var test = this.graph;
  edges.forEach(function(edge) {
    var edgeList = test[edge].edges;
    var nodeIndex = edgeList.indexOf(edge);//changed from node to edge
    edgeList.splice(nodeIndex, 1);
  });
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var edges = this.graph[fromNode].edges;
  return edges.includes(toNode);
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var fromEdgeList = this.graph[fromNode].edges;
  fromEdgeList.push(toNode);
  var toEdgeList = this.graph[toNode].edges;
  toEdgeList.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var fromEdgeList = this.graph[fromNode].edges;
  fromEdgeList.splice( fromEdgeList.indexOf(toNode), 1 );

  var toEdgeList = this.graph[toNode].edges;
  toEdgeList.splice( toEdgeList.indexOf(fromNode), 1 );
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this.graph) {
    cb(this.graph[key].value);
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


