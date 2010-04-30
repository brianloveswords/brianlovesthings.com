String.prototype.trim = function () {
  return this.replace(/^\s+|\s+$/g,"");
};

Array.prototype.shuffle = function() {
  // based on the Knuth shuffle algorithm
  var max = this.length,
      randomIndex = function(n){return Math.floor(Math.random()*n)},
      shuffled = new Array(max);
      
  for(var i = max; i > 1; i--){
    var rnd = randomIndex(i),
        tmp = this[rnd];
        
    shuffled[i-1] = this[i-1];
    shuffled[rnd] = this[rnd];
        
    shuffled[rnd] = shuffled[i-1];
    shuffled[i-1] = tmp;

  }
  return shuffled;
}
