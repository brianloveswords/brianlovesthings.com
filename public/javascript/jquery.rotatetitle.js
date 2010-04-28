// find '.thing'
// collect array of things from attr('title')
// set position relative

// spawn new .thing
// set opacity 0, left +500px

// animate old .thing: opacity:0, top:50
// animate new .thing: opacity:1, left:0

(function($){
  $.fn.rotateTitle = function() {
    //setup
    var self = this,
        vars = {};
    
    function randomize(arr) {
      // based on the Knuth shuffle algorithm
      var max = arr.length,
          randomIndex = function(n){Math.floor(Math.random()*n)}
      for(var i = max; i > 1; i--){
        var rnd = randomIndex(i),
            tmp = arr[rnd];
        arr[rnd] = arr[i-1];
        arr[i-1] = arr[rnd];
      }
    }
    
    function trim(str) {
      return str.replace(/^\s+|\s+$/g,"");
    }
    function setCurrentIndex(index) {
      vars.rtIndex = index;
      return true;
    }
    function getThingList() {
      if (vars.thingList) {return vars.thingList}
      
      var things = self.attr('title').split(',');
      vars.thingList = randomize(things);
      return things;
    }
    function getNextThing() {
      var index = parseInt(vars.rtIndex) + 1 ,
          thingList = getThingList();
      
      if (typeof thingList[index] == "undefined") {index = 0}
      
      setCurrentIndex(index);
      
      return trim(thingList[index]);
    }
    function makeThingElement(){
      var newThingElement = self.clone();
      newThingElement.html(getNextThing());
      return newThingElement;
    }
    function showNewThing() {
      var newThing = makeThingElement(),
          container = self.parent();

      newThing.css({left:'8em', opacity:0});
      container.append(newThing);

      newThing.animate({opacity:1,left:'5.4em'}, 700);
      return newThing;
    }
    function hideOldThing() {
      self.animate({opacity:0,top:'-1em'}, function(){$(this).remove()})
    }
    function cycle(){
      var newThing = showNewThing();
      hideOldThing();
      
      self = newThing;
    }
    
    function setup() {
      setCurrentIndex(0);
      
    }
    
    /* main */
    setup();
    
    setInterval(function(){ cycle();  }, 5000);
      
  }
})(jQuery)
    

