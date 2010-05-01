String.prototype.trim = function () {
  return this.replace(/^\s+|\s+$/g,"");
};

Array.prototype.isArray = true;

Array.prototype.shuffle = function() {
  // based on the Knuth shuffle algorithm
  var max = this.length,
      randomIndex = function(n){return Math.floor(Math.random()*n)},
      arr = this.clone();
      
  for (var i = max; i > 1; i--){
    var rnd = randomIndex(i),
        tmp = arr[rnd];
        
    arr[rnd] = arr[i-1];
    arr[i-1] = tmp;
  }
  return arr;
};


Array.prototype.contains = function(obj) {
  var max = this.length;
  for (var i=0; i<max; i++) {
    if (this[i] == obj) { return true; }
  }
  return false;
};


Array.prototype.same = function(arr) {
  return (arr.join() == this.join());
};
  

Array.prototype.clone = function() {
  var max = this.length,
      newArr = new Array(max);
  
  for (var i=0; i<max; i++) {
    newArr[i] = this[i];
  }
  return newArr;
}